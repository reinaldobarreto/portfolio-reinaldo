from datetime import datetime, timezone

from fastapi import Depends, FastAPI, Response

from .db import get_conn, init_db
from .schemas import LoginIn, Task, TaskCreateIn, TaskPatchIn, TokenOut
from .security import DEMO_TOKEN, require_bearer

app = FastAPI(
    title="FastAPI CRUD Demo",
    version="1.0.0",
    description="Demo Python-first: CRUD REST para Tasks (GET, POST, PATCH, DELETE), JWT (demo), Swagger e Redoc.",
)


@app.on_event("startup")
def _startup() -> None:
    init_db()


@app.get("/health", tags=["health"])
def health() -> dict:
    return {"status": "ok", "service": "apis-fastapi-demo", "timestamp": datetime.now(timezone.utc).isoformat()}


@app.post("/auth/login", tags=["auth"], response_model=TokenOut)
def login(_: LoginIn) -> TokenOut:
    return TokenOut(access_token=DEMO_TOKEN)


@app.get("/tasks", tags=["tasks"], response_model=list[Task], dependencies=[Depends(require_bearer)])
def list_tasks() -> list[Task]:
    conn = get_conn()
    try:
        rows = conn.execute("SELECT id, title, done FROM tasks ORDER BY id").fetchall()
        return [Task(id=int(r["id"]), title=str(r["title"]), done=bool(r["done"])) for r in rows]
    finally:
        conn.close()


@app.get("/tasks/{task_id}", tags=["tasks"], response_model=Task, dependencies=[Depends(require_bearer)])
def get_task(task_id: int) -> Task:
    conn = get_conn()
    try:
        row = conn.execute("SELECT id, title, done FROM tasks WHERE id = ?", (task_id,)).fetchone()
        if not row:
            return Response(status_code=404)
        return Task(id=int(row["id"]), title=str(row["title"]), done=bool(row["done"]))
    finally:
        conn.close()


@app.post("/tasks", tags=["tasks"], response_model=Task, status_code=201, dependencies=[Depends(require_bearer)])
def create_task(payload: TaskCreateIn) -> Task:
    conn = get_conn()
    try:
        cur = conn.execute("INSERT INTO tasks (title, done) VALUES (?, ?)", (payload.title, 0))
        conn.commit()
        task_id = int(cur.lastrowid)
        return Task(id=task_id, title=payload.title, done=False)
    finally:
        conn.close()


@app.patch("/tasks/{task_id}", tags=["tasks"], response_model=Task, dependencies=[Depends(require_bearer)])
def patch_task(task_id: int, payload: TaskPatchIn) -> Task:
    conn = get_conn()
    try:
        row = conn.execute("SELECT id, title, done FROM tasks WHERE id = ?", (task_id,)).fetchone()
        if not row:
            return Response(status_code=404)
        title = payload.title if payload.title is not None else str(row["title"])
        done = int(payload.done) if payload.done is not None else int(row["done"])
        conn.execute("UPDATE tasks SET title = ?, done = ? WHERE id = ?", (title, done, task_id))
        conn.commit()
        return Task(id=task_id, title=title, done=bool(done))
    finally:
        conn.close()


@app.delete("/tasks/{task_id}", tags=["tasks"], status_code=204, dependencies=[Depends(require_bearer)])
def delete_task(task_id: int) -> Response:
    conn = get_conn()
    try:
        cur = conn.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
        conn.commit()
        if cur.rowcount == 0:
            return Response(status_code=404)
        return Response(status_code=204)
    finally:
        conn.close()


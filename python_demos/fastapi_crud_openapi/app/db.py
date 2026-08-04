import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent.parent / "app.db"


def get_conn() -> sqlite3.Connection:
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    conn = get_conn()
    try:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS tasks (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              title TEXT NOT NULL,
              done INTEGER NOT NULL DEFAULT 0
            )
            """.strip()
        )

        row = conn.execute("SELECT COUNT(*) AS c FROM tasks").fetchone()
        if row and int(row["c"]) == 0:
            conn.execute("INSERT INTO tasks (title, done) VALUES (?, ?)", ("Build REST API", 1))
            conn.execute("INSERT INTO tasks (title, done) VALUES (?, ?)", ("Add validation (Pydantic)", 0))
            conn.execute("INSERT INTO tasks (title, done) VALUES (?, ?)", ("Ship to production", 0))
        conn.commit()
    finally:
        conn.close()


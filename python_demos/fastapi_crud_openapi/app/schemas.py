from pydantic import BaseModel, Field


class LoginIn(BaseModel):
    email: str
    password: str


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "Bearer"
    expires_in: int = 3600


class Task(BaseModel):
    id: int
    title: str
    done: bool


class TaskCreateIn(BaseModel):
    title: str = Field(min_length=1, max_length=200)


class TaskPatchIn(BaseModel):
    title: str | None = Field(default=None, min_length=1, max_length=200)
    done: bool | None = None


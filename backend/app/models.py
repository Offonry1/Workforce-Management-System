from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
import datetime

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True)
    name: str
    hashed_password: str
    role: str = "staff"
    shifts: List["Shift"] = Relationship(back_populates="user")

class Shift(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    start_time: datetime.datetime
    end_time: datetime.datetime
    title: str
    user: Optional[User] = Relationship(back_populates="shifts")

from pydantic import BaseModel, EmailStr
import datetime

class UserCreate(BaseModel):
    email: EmailStr
    name: str
    password: str

class UserRead(BaseModel):
    id: int
    email: EmailStr
    name: str
    role: str
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class ShiftCreate(BaseModel):
    user_id: int
    start_time: datetime.datetime
    end_time: datetime.datetime
    title: str

class ShiftRead(BaseModel):
    id: int
    user_id: int
    start_time: datetime.datetime
    end_time: datetime.datetime
    title: str
    class Config:
        orm_mode = True

from sqlmodel import create_engine, Session, SQLModel
import os

DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///./dev.db')
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(DATABASE_URL, echo=False, connect_args=connect_args)

def get_session():
    with Session(engine) as session:
        yield session

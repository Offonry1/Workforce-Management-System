from sqlmodel import select
from . import models, schemas
from passlib.context import CryptContext
from sqlmodel import Session

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_user_by_email(session: Session, email: str):
    stmt = select(models.User).where(models.User.email == email)
    return session.exec(stmt).first()

def create_user(session: Session, user: schemas.UserCreate, role: str = 'staff'):
    hashed = pwd_context.hash(user.password)
    db_user = models.User(email=user.email, name=user.name, hashed_password=hashed, role=role)
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def authenticate_user(session: Session, email: str, password: str):
    user = get_user_by_email(session, email)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user

def create_shift(session: Session, shift: schemas.ShiftCreate):
    db_shift = models.Shift(user_id=shift.user_id, start_time=shift.start_time, end_time=shift.end_time, title=shift.title)
    session.add(db_shift)
    session.commit()
    session.refresh(db_shift)
    return db_shift

def list_shifts(session: Session, limit: int = 100):
    stmt = select(models.Shift).limit(limit)
    return session.exec(stmt).all()

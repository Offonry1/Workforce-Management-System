from fastapi import APIRouter, Depends
from sqlmodel import Session
from ..deps import get_db, get_current_user
from .. import schemas, models

router = APIRouter()

@router.get('/me', response_model=schemas.UserRead)
def read_me(current_user: models.User = Depends(get_current_user)):
    return current_user

@router.get('/', response_model=list[schemas.UserRead])
def list_users(db: Session = Depends(get_db)):
    users = db.exec(models.User.select()).all()
    return users

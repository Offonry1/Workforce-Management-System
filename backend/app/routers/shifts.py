from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session
from ..deps import get_db, get_current_user
from .. import schemas, crud, models

router = APIRouter()

@router.post('/', response_model=schemas.ShiftRead)
def create_shift(shift: schemas.ShiftCreate, db: Session = Depends(get_db), user: models.User = Depends(get_current_user)):
    # Only admins can create on behalf of others; staff can only create shifts for themselves
    if user.role != 'admin' and user.id != shift.user_id:
        raise HTTPException(status_code=403, detail='Forbidden')
    return crud.create_shift(db, shift)

@router.get('/', response_model=list[schemas.ShiftRead])
def list_shifts(db: Session = Depends(get_db)):
    return crud.list_shifts(db)

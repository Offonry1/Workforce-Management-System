from fastapi import FastAPI
from .database import engine
from . import models
from .routers import auth, users, shifts

models.SQLModel.metadata.create_all(bind=engine)

app = FastAPI(title='Workforce Management API')

app.include_router(auth.router, prefix='/auth', tags=['auth'])
app.include_router(users.router, prefix='/users', tags=['users'])
app.include_router(shifts.router, prefix='/shifts', tags=['shifts'])

@app.get('/')
def root():
    return {'status': 'ok'}

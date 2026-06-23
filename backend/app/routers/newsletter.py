from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app import crud, schemas, database

router = APIRouter(prefix="/newsletter", tags=["Newsletter"])

@router.post("/subscribe", response_model=schemas.NewsletterOut, status_code=status.HTTP_201_CREATED)
def subscribe_newsletter(subscriber: schemas.NewsletterCreate, db: Session = Depends(database.get_db)):
    try:
        return crud.create_newsletter_subscriber(db=db, subscriber=subscriber)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred during subscription: {str(e)}"
        )

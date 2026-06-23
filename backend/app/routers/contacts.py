from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app import crud, schemas, database

router = APIRouter(prefix="/contacts", tags=["Contacts"])

@router.post("", response_model=schemas.ContactOut, status_code=status.HTTP_201_CREATED)
def submit_contact(contact: schemas.ContactCreate, db: Session = Depends(database.get_db)):
    try:
        return crud.create_contact(db=db, contact=contact)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while saving contact info: {str(e)}"
        )

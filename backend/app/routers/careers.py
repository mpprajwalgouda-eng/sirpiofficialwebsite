import os
import uuid
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from app import crud, schemas, database

router = APIRouter(prefix="/careers", tags=["Careers"])

# Ensure uploads directory exists
UPLOAD_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "uploads")
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/apply", response_model=schemas.CareerOut, status_code=status.HTTP_201_CREATED)
def apply_for_job(application: schemas.CareerCreate, db: Session = Depends(database.get_db)):
    try:
        return crud.create_career_application(db=db, application=application)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"An error occurred while saving application: {str(e)}"
        )\

router.post("/upload", status_code=status.HTTP_201_CREATED)
async def upload_resume(file: UploadFile = File(...)):
    # Restrict extensions to PDFs and Docs
    allowed_extensions = {".pdf", ".doc", ".docx"}
    _, ext = os.path.splitext(file.filename)
    if ext.lower() not in allowed_extensions:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF and Word documents (.doc, .docx) are allowed."
        )

    # Generate unique filename to avoid overwrites
    unique_filename = f"{uuid.uuid4()}{ext}"
    file_path = os.path.join(UPLOAD_DIR, unique_filename)

    try:
        with open(file_path, "wb") as f:
            content = await file.read()
            f.write(content)
        
        # Return static path that can be served by fastapi
        return {"resume_url": f"/uploads/{unique_filename}"}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to save uploaded file: {str(e)}"
        )

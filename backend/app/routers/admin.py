import csv
import io
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import StreamingResponse
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import List, Optional
from app import crud, schemas, database, auth, models
from app.config import settings

router = APIRouter(prefix="/admin", tags=["Admin Dashboard"])

@router.post("/login", response_model=schemas.Token)
def admin_login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(database.get_db)
):
    # Authenticate against settings
    if form_data.username != settings.ADMIN_USERNAME or form_data.password != settings.ADMIN_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = auth.create_access_token(data={"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/metrics", response_model=schemas.DashboardMetrics)
def get_metrics(
    db: Session = Depends(database.get_db),
    current_admin: str = Depends(auth.get_current_admin)
):
    try:
        return crud.get_dashboard_metrics(db=db)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to fetch metrics: {str(e)}"
        )

@router.get("/contacts", response_model=List[schemas.ContactOut])
def list_contacts(
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(database.get_db),
    current_admin: str = Depends(auth.get_current_admin)
):
    return crud.get_contacts(db=db, search=search, skip=skip, limit=limit)

@router.get("/careers", response_model=List[schemas.CareerOut])
def list_careers(
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(database.get_db),
    current_admin: str = Depends(auth.get_current_admin)
):
    return crud.get_careers(db=db, search=search, skip=skip, limit=limit)

@router.get("/newsletter", response_model=List[schemas.NewsletterOut])
def list_newsletter(
    search: Optional[str] = None,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(database.get_db),
    current_admin: str = Depends(auth.get_current_admin)
):
    return crud.get_newsletter_subscribers(db=db, search=search, skip=skip, limit=limit)

@router.get("/export/{module}")
def export_csv(
    module: str,
    db: Session = Depends(database.get_db),
    current_admin: str = Depends(auth.get_current_admin)
):
    output = io.StringIO()
    writer = csv.writer(output)
    
    if module == "contacts":
        writer.writerow(["ID", "Name", "Email", "Company", "Phone", "Message", "Created At"])
        contacts = db.query(models.Contact).order_by(models.Contact.created_at.desc()).all()
        for c in contacts:
            writer.writerow([c.id, c.name, c.email, c.company or "", c.phone or "", c.message, c.created_at])
        filename = "contacts_export.csv"
        
    elif module == "careers":
        writer.writerow(["ID", "Name", "Email", "Position", "Resume URL", "Created At"])
        careers = db.query(models.CareerApplication).order_by(models.CareerApplication.created_at.desc()).all()
        for c in careers:
            writer.writerow([c.id, c.name, c.email, c.position, c.resume_url, c.created_at])
        filename = "careers_export.csv"
        
    elif module == "newsletter":
        writer.writerow(["ID", "Email", "Subscribed At"])
        newsletter = db.query(models.Newsletter).order_by(models.Newsletter.subscribed_at.desc()).all()
        for n in newsletter:
            writer.writerow([n.id, n.email, n.subscribed_at])
        filename = "newsletter_export.csv"
        
    else:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid module name. Allowed: contacts, careers, newsletter"
        )
        
    output.seek(0)
    
    return StreamingResponse(
        io.BytesIO(output.getvalue().encode("utf-8")),
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )

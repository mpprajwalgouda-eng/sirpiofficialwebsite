from sqlalchemy.orm import Session
from sqlalchemy import or_
from app import models, schemas

# Contacts CRUD
def create_contact(db: Session, contact: schemas.ContactCreate):
    db_contact = models.Contact(
        name=contact.name,
        email=contact.email,
        company=contact.company,
        phone=contact.phone,
        message=contact.message
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

def get_contacts(db: Session, search: str = None, skip: int = 0, limit: int = 100):
    query = db.query(models.Contact)
    if search:
        search_filter = f"%{search}%"
        query = query.filter(
            or_(
                models.Contact.name.ilike(search_filter),
                models.Contact.email.ilike(search_filter),
                models.Contact.company.ilike(search_filter),
                models.Contact.phone.ilike(search_filter),
                models.Contact.message.ilike(search_filter)
            )
        )
    return query.order_by(models.Contact.created_at.desc()).offset(skip).limit(limit).all()

# Careers CRUD
def create_career_application(db: Session, application: schemas.CareerCreate):
    db_app = models.CareerApplication(
        name=application.name,
        email=application.email,
        position=application.position,
        resume_url=application.resume_url
    )
    db.add(db_app)
    db.commit()
    db.refresh(db_app)
    return db_app

def get_careers(db: Session, search: str = None, skip: int = 0, limit: int = 100):
    query = db.query(models.CareerApplication)
    if search:
        search_filter = f"%{search}%"
        query = query.filter(
            or_(
                models.CareerApplication.name.ilike(search_filter),
                models.CareerApplication.email.ilike(search_filter),
                models.CareerApplication.position.ilike(search_filter)
            )
        )
    return query.order_by(models.CareerApplication.created_at.desc()).offset(skip).limit(limit).all()

# Newsletter CRUD
def create_newsletter_subscriber(db: Session, subscriber: schemas.NewsletterCreate):
    # Check if already exists
    existing = db.query(models.Newsletter).filter(models.Newsletter.email == subscriber.email).first()
    if existing:
        return existing
        
    db_sub = models.Newsletter(email=subscriber.email)
    db.add(db_sub)
    db.commit()
    db.refresh(db_sub)
    return db_sub

def get_newsletter_subscribers(db: Session, search: str = None, skip: int = 0, limit: int = 100):
    query = db.query(models.Newsletter)
    if search:
        search_filter = f"%{search}%"
        query = query.filter(models.Newsletter.email.ilike(search_filter))
    return query.order_by(models.Newsletter.subscribed_at.desc()).offset(skip).limit(limit).all()

# Metrics helper
def get_dashboard_metrics(db: Session) -> dict:
    total_contacts = db.query(models.Contact).count()
    total_applications = db.query(models.CareerApplication).count()
    total_subscribers = db.query(models.Newsletter).count()
    return {
        "total_contacts": total_contacts,
        "total_applications": total_applications,
        "total_subscribers": total_subscribers
    }

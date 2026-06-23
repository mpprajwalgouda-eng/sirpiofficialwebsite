from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

# Contact schemas
class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    company: Optional[str] = None
    phone: Optional[str] = None
    message: str

class ContactOut(BaseModel):
    id: int
    name: str
    email: str
    company: Optional[str]
    phone: Optional[str]
    message: str
    created_at: datetime

    class Config:
        from_attributes = True

# Careers Application schemas
class CareerCreate(BaseModel):
    name: str
    email: EmailStr
    position: str
    resume_url: str  # Can be a Google Drive link, S3 url, or local path

class CareerOut(BaseModel):
    id: int
    name: str
    email: str
    position: str
    resume_url: str
    created_at: datetime

    class Config:
        from_attributes = True

# Newsletter schemas
class NewsletterCreate(BaseModel):
    email: EmailStr

class NewsletterOut(BaseModel):
    id: int
    email: str
    subscribed_at: datetime

    class Config:
        from_attributes = True

# Admin Auth Schemas
class AdminLogin(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class DashboardMetrics(BaseModel):
    total_contacts: int
    total_applications: int
    total_subscribers: int

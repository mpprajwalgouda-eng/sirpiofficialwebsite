from datetime import datetime, timedelta
from app.database import SessionLocal, Base, engine
from app import models

def seed_db():
    # Recreate tables (or ensure they exist)
    Base.metadata.create_all(bind=engine)
    
    db = SessionLocal()
    
    # Check if we already have data
    if db.query(models.Contact).first() is not None:
        print("Database already contains data, skipping seed.")
        db.close()
        return
        
    print("Seeding database...")
    
    # 1. Contacts
    contacts_data = [
        models.Contact(
            name="Sarah Jenkins",
            email="sarah.j@windcorp.com",
            company="WindCorp Global",
            phone="+1 (555) 234-5678",
            message="We are interested in integrating WindVista for our wind farm predictive maintenance analysis in northern Europe. Can we schedule a meeting next week?",
            created_at=datetime.utcnow() - timedelta(days=5)
        ),
        models.Contact(
            name="Rohan Sharma",
            email="rsharma@telco-solutions.in",
            company="Telecom India Group",
            phone="+91 98765 43210",
            message="Looking to automate network optimization workflows using geospatial machine learning. Please let us know details of your telecom automation services.",
            created_at=datetime.utcnow() - timedelta(days=3)
        ),
        models.Contact(
            name="Elena Rostova",
            email="elena.r@automationlabs.io",
            company="Automation Labs LLC",
            phone="+44 20 7946 0958",
            message="I am interested in your AI Upskilling Academy program for our engineering team of 45 developers. Can you provide custom curricula?",
            created_at=datetime.utcnow() - timedelta(hours=14)
        ),
        models.Contact(
            name="David Chen",
            email="d.chen@smartinfra.gov",
            company="Urban Development Authority",
            phone="+65 6789 0123",
            message="Requesting a demo of the Flood Impact System. Our region is experiencing increased rainfall patterns, and we need dynamic flood prediction models.",
            created_at=datetime.utcnow() - timedelta(hours=2)
        )
    ]
    
    # 2. Careers applications
    careers_data = [
        models.CareerApplication(
            name="Alex Mercer",
            email="alex.mercer@gmail.com",
            position="Senior Machine Learning Engineer",
            resume_url="/uploads/mock_resume_alex.pdf",
            created_at=datetime.utcnow() - timedelta(days=12)
        ),
        models.CareerApplication(
            name="Priya Patel",
            email="priya.p@outlook.com",
            position="Geospatial Software Engineer",
            resume_url="/uploads/mock_resume_priya.pdf",
            created_at=datetime.utcnow() - timedelta(days=8)
        ),
        models.CareerApplication(
            name="Michael Chang",
            email="mchang@mit.edu",
            position="AI Research Intern",
            resume_url="/uploads/mock_resume_michael.pdf",
            created_at=datetime.utcnow() - timedelta(days=2)
        )
    ]
    
    # 3. Newsletter subscriptions
    newsletter_data = [
        models.Newsletter(email="john.doe@techtrends.com", subscribed_at=datetime.utcnow() - timedelta(days=15)),
        models.Newsletter(email="finance.analyst@wallstreet.net", subscribed_at=datetime.utcnow() - timedelta(days=10)),
        models.Newsletter(email="researcher22@university.edu", subscribed_at=datetime.utcnow() - timedelta(days=6)),
        models.Newsletter(email="dev_ops_guy@cloudtech.org", subscribed_at=datetime.utcnow() - timedelta(days=4)),
        models.Newsletter(email="contact@sirpi.io", subscribed_at=datetime.utcnow() - timedelta(hours=8))
    ]
    
    db.add_all(contacts_data)
    db.add_all(careers_data)
    db.add_all(newsletter_data)
    db.commit()
    
    print("Database seeding completed successfully.")
    db.close()

if __name__ == "__main__":
    seed_db()

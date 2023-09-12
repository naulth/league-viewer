from app import app

from models import db, Champion, User

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")

        #User.query.delete()
        
        

        

        db.session.add_all(champions)
        db.session.commit()
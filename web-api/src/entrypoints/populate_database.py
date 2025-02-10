import os

from faker import Faker
from sqlalchemy import insert
import random
import schedule
import time

from infra.database.entity.contact_entity import ContactEntity
from infra.database.entity.lead_entity import LeadEntity
from infra.database.entity.lead_view_entity import LeadViewEntity
from infra.database.orm import SessionLocal

fake = Faker()
session = SessionLocal()


def generate_random_contact():
    first_name = fake.first_name()
    phone_number = fake.phone_number()
    email = fake.email()
    query = insert(ContactEntity).values(first_name=first_name, phone_number=phone_number, email=email)
    result = session.execute(query)
    session.commit()
    return result.inserted_primary_key[0]


def generate_random_lead():
    contact_id = generate_random_contact()
    suburb = fake.address()
    category = fake.job()
    description = fake.catch_phrase() + ".\n" + fake.catch_phrase() + ".\n" + fake.catch_phrase() + ".\n" + fake.catch_phrase() + ".\n" + fake.catch_phrase()
    price = random.randrange(1, 5000)
    status = None
    query = insert(LeadEntity).values(
        contact_id=contact_id,
        suburb=suburb,
        category=category,
        description=description,
        price=price,
        status=status
    ).returning(LeadEntity)
    result = session.scalar(query)
    query = insert(LeadViewEntity).values(
        id=result.id,
        contact_id=contact_id,
        created_date=result.created_date,
        suburb=suburb,
        category=category,
        description=description,
        price=price,
        status=status
    )
    session.execute(query)
    session.commit()


if __name__ == '__main__':
    frequency = int(os.environ.get("GENERATOR_FREQUENCY", 10))
    schedule.every(frequency).seconds.do(generate_random_lead)

    while True:
        schedule.run_pending()
        time.sleep(1)

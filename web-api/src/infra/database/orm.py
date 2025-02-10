from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import pyodbc

import config

if config.CREATE_TABLE:
    database_master_uri = config.get_sql_server_pyodbc_uri()
    pyodbc_connection = pyodbc.connect(database_master_uri,autocommit=True)
    cursor = pyodbc_connection.cursor()
    sql_command = f"""
    IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = '{config.DATABASE_NAME}')
    BEGIN
    CREATE DATABASE [{config.DATABASE_NAME}]
    END
    """
    cursor.execute(sql_command)
    cursor.commit()
    pyodbc_connection.commit()
    pyodbc_connection.close()

database_uri = config.get_sql_server_uri()
engine = create_engine(database_uri)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

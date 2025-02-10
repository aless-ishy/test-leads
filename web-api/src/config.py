import os
from urllib.parse import quote

from dotenv import load_dotenv

load_dotenv()

API_PORT = int(os.environ.get("API_PORT", 5005))
API_HOST = os.environ.get("API_HOST", "localhost")
DATABASE_NAME = os.environ.get("DATABASE_NAME", "DATABASE_TEST")
CREATE_TABLE = False if os.environ.get("CREATE_TABLE", 'False') == 'False' else True


def get_sql_server_uri():
    database_host = os.environ.get("DATABASE_HOST", "localhost")
    database_port = int(os.environ.get("DATABASE_PORT", 1433))
    database_username = os.environ.get("DATABASE_USERNAME", "sa")
    database_password = quote(os.environ.get("DATABASE_PASSWORD", ""))
    database_name = DATABASE_NAME
    return f"mssql+pyodbc://{database_username}:{database_password}@{database_host}:{database_port}/{database_name}?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes"


def get_sql_server_pyodbc_uri():
    database_host = os.environ.get("DATABASE_HOST", "localhost")
    database_port = int(os.environ.get("DATABASE_PORT", 1433))
    database_username = os.environ.get("DATABASE_USERNAME", "sa")
    database_password = os.environ.get("DATABASE_PASSWORD", "")
    database_name = "master"
    return f'DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={database_host}, {database_port};DATABASE={database_name};UID={database_username};PWD={database_password}; TrustServerCertificate=yes;'


def get_api_url():
    api_port = int(os.environ.get("API_PORT", 5005))
    api_host = os.environ.get("API_HOST", "localhost")
    return f"http://{api_host}:{api_port}"


def get_redis_host_and_port():
    redis_host = os.environ.get("REDIS_HOST", "localhost")
    redis_port = int(os.environ.get("REDIS_PORT", 63791))
    return dict(host=redis_host, port=redis_port)

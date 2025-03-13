from ...Database.Sqlite3.sqlite_service import SqliteService
from fastapi import FastAPI

db_service = SqliteService("fast_api")
server = FastAPI()

db_service.create_table("items", ["name", "price"])

@server.get("/{path}")
def read_path(path: str):
    return db_service.select(path, ["name", "price"])


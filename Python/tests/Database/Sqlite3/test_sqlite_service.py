import pytest
import os
from Database.Sqlite3.sqlite_service import SqliteService

@pytest.fixture
def sqlite_service(mocker):
    current_dir = os.path.dirname(os.path.realpath(__file__))
    mocker.patch("os.path.dirname", return_value=current_dir)
    db_name = "test_db"
    service = SqliteService(db_name)
    yield service
    os.remove(f"{db_name}.db")

def test_create_table(sqlite_service):
    sqlite_service.create_table("test_table", ['id INTEGER PRIMARY KEY', 'name TEXT'])
    result = sqlite_service.select('sqlite_master', ['name'])
    assert ('test_table',) in result
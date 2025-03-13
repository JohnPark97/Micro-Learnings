import sqlite3
import os 

class SqliteService:
    def __init__(self, db_name):
        self.db_name = db_name

        db_dir_path = os.path.dirname(os.path.realpath(__file__)) + "/Db files"
        db_path = db_dir_path + f"/{db_name}.db"

        self.conn = sqlite3.connect(db_path)
        self.cursor = self.conn.cursor()

    def create_table(self, table_name, columns):
        columns_str = ", ".join(columns)
        query = f"CREATE TABLE IF NOT EXISTS {table_name} ({columns_str})"
        self.cursor.execute(query)
        self.conn.commit()

    def insert(self, table_name, column, value):
        query = f"INSERT INTO {table_name} ({column}) VALUES ({value})"
        self.cursor.execute(query)
        self.conn.commit()

    def select(self, table_name, columns):
        columns_str = ", ".join(columns)
        query = f"SELECT {columns_str} FROM {table_name}"
        self.cursor.execute(query)
        return self.cursor.fetchall()

    def update(self, table_name, columns, values, condition):
        set_str = ", ".join([f"{column} = '{value}'" for column, value in zip(columns, values)])
        query = f"UPDATE {table_name} SET {set_str} WHERE {condition}"
        self.cursor.execute(query)
        self.conn.commit()
        
    def delete(self, table_name, condition):
        condition_str = ", ".join([f"{column} = '{value}'" for column, value in condition])
        query = f"DELETE FROM {table_name} WHERE {condition_str}"
        self.cursor.execute(query)
        self.conn.commit()
        
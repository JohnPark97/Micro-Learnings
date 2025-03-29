from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]

flow = InstalledAppFlow.from_client_secrets_file(
    "credentials.json", SCOPES
)

creds = flow.run_local_server(port=0)


# Function to create a Google Sheet
def create(title):
    try:
        service = build("sheets", "v4", credentials=creds)
        spreadsheet = {"properties": {"title": title}}
        spreadsheet = (
            service.spreadsheets()
            .create(body=spreadsheet, fields="spreadsheetId")
            .execute()
        )
        print(f"Spreadsheet ID: {spreadsheet.get('spreadsheetId')}")
        return spreadsheet.get("spreadsheetId")
    except HttpError as error:
        print(f"An error occurred: {error}")
        return error


# Function to populate the sheet with initial structure and data
def populate(sheet_id):
    service = build("sheets", "v4", credentials=creds)
    
    # Define the sheet structure
    data = [
        {
            'range': 'Sheet1!A1:E1',
            'values': [['Date', 'Category', 'Description', 'Amount', 'Paid By']]
        },
        {
            'range': 'Sheet1!A2:E6',
            'values': [
                ['2025-03-01', 'Groceries', 'Supermarket', 120, 'Spouse 1'],
                ['2025-03-02', 'Rent', 'Monthly Rent', 1500, 'Spouse 2'],
                ['2025-03-03', 'Utilities', 'Electricity Bill', 80, 'Spouse 1'],
                ['2025-03-05', 'Dining', 'Dinner Out', 60, 'Spouse 2'],
                ['2025-03-07', 'Entertainment', 'Movie Tickets', 30, 'Spouse 1']
            ]
        },
        {
            'range': 'Sheet1!G1',
            'values': [['=SUM(D2:D6)']]
        }
    ]

    # Batch update the sheet with data
    body = {'valueInputOption': 'USER_ENTERED', 'data': data}

    try:
        service.spreadsheets().values().batchUpdate(
            spreadsheetId=sheet_id, body=body
        ).execute()
        print("Sheet populated successfully.")
    except HttpError as error:
        print(f"An error occurred: {error}")


if __name__ == "__main__":
    sheet_id = create("Budget Tracker")
    if sheet_id:
        populate(sheet_id)

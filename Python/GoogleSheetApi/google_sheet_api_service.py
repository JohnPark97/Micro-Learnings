from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from google_auth_oauthlib.flow import InstalledAppFlow

SCOPES = "https://www.googleapis.com/auth/spreadsheets"

def create(title):
  creds = None
  
  flow = InstalledAppFlow.from_client_secrets_file(
      "credentials.json", SCOPES
  )
  
  creds = flow.run_local_server(port=0)
  
  try:
    service = build("sheets", "v4", credentials=creds)
    spreadsheet = {"properties": {"title": title}}
    spreadsheet = (
        service.spreadsheets()
        .create(body=spreadsheet, fields="spreadsheetId")
        .execute()
    )
    print(f"Spreadsheet ID: {(spreadsheet.get('spreadsheetId'))}")
    return spreadsheet.get("spreadsheetId")
  except HttpError as error:
    print(f"An error occurred: {error}")
    return error


if __name__ == "__main__":
  create("mysheet1")
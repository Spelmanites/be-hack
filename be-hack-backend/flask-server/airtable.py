import requests

# Airtable API endpoint and headers
BASE_ID = 'appplhjpBmnwr2xfS'
TABLE_NAME = 'AAspelmanites'
API_KEY = 'patZhtkAiYByQuN1t.4c253edf6e08d98255e6ec6140b4daf7de28d9365ac407b2dafb0295b0d66303'
API_URL = f'https://api.airtable.com/v0/{BASE_ID}/{TABLE_NAME}'
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
}
#created a try/catch method to 
def airtableData():
    try:
        response = requests.get(API_URL, headers=HEADERS)
        #validated if status code is successful
        if response.status_code == 200:
            data = response.json()
            return data
        else:# formatted error code 
            print(f'Error: {response.status_code}')
            return None
    #error handeling for the airtable request
    except Exception as e:
        #printed error message 
        print(f'An error occurred: {e}')
        return None

if __name__ == '__main__':
    airtable_data = airtableData()
    #printing initial data from the airtable
    if airtable_data:
        print('Data from Airtable:')
        print(airtable_data)
    #created an empty dictionary to append values to
    flightDetails ={}
    #iterate through the table and retrieved the airtable values 
    for record in airtable_data['records']:
        firstName = record['fields']['passenergFName']
        lastName = record['fields']['passenergLName']
        status = record['fields']['status']
        seat = record['fields']['seat']
        flight = record['fields']['flight']
        airline = record['fields']['airline']
        #flightStatus = record['fields']['flightStatus']
        gate = record['fields']['gate']
        reservationNum = record['fields']['reservationNum']
        #created a nested dictionary with the reservation # as the key and a dictionary of values as the kelue
        flightDetails[reservationNum] = {"firstName":firstName,
                                         "lastName":lastName,
                                         "status":status,
                                         "seat":seat,
                                         "flight":flight,
                                         "airline":airline,
                                         #"flightStatus":flightStatus,
                                         "gate":gate
                                         }
    print("Flight Details: ") 
    print(flightDetails)
        
        
        
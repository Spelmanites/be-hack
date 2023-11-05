import requests
import json
"""
Reading in from the flight API:
- Start of dictionary is 

"""
def getFlightData():
    flightDat = requests.get("http://localhost:4000/flights?date=2003-11-14&origin=ATL&destination=ORD")
    return flightDat.json()

def printFlightData():
    flightData = getFlightData()
    print(flightData)

def jsonConversion():
    flightData = getFlightData()

    for flight in flightData:
        flightNumber = flight['flightNumber']
        origin_city = flight['origin']['city']
        destination_city = flight['destination']['city']
   
    print(f"Flight {flightNumber} from {origin_city} to {destination_city}")
    return flightData[0]

# def handleFlightData():
#     flightData = getFlightData()
#     print(flightData)

jsonConversion()

"""
{
    "flightNumber": "8124",
    "origin": {
      "code": "DFW",
      "city": "Dallas-Fort Worth",
      "timezone": "America/Chicago",
      "location": {
        "latitude": 32.8998,
        "longitude": 97.0403
      }
    },
    "destination": {
      "code": "GSO",
      "city": "Greensboro",
      "timezone": "America/New_York",
      "location": {
        "latitude": 36.0726,
        "longitude": -79.792
      }
    },
    "distance": 7675,
    "duration": {
      "locale": "21h 46m",
      "hours": 21,
      "minutes": 46
    },
    "departureTime": "2021-08-29T05:10:00.000-05:00",
    "arrivalTime": "2021-08-30T03:56:00.000-04:00",
    "aircraft": {
      "model": "757",
      "passengerCapacity": {
        "total": 176,
        "main": 160,
        "first": 16
      },
      "speed": 380
    }
"""
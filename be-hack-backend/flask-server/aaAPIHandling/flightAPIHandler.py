import requests
import json
from flight import Flight

"""
File Purpose:
To receive, parse, and organize data from the American Airlines 
Flight Data API and prepare it for further use in the backend 

"""


def getFlightData():
    # This function will fetch data from the American Airlines Flight Data API
    flightDat = requests.get(
        "http://localhost:4000/flights?date=2003-11-14&origin=ATL&destination=ORD"
    )
    return flightDat.json()


def printFlightData():
    # This function displays the flight data extracted from the API
    flightData = getFlightData()
    print(flightData)


def jsonConversion():
    # This function converts flight data from a JSON object to a Python dictionary
    # This function also prints out the flight data in a readable format
    # The purpose of this is to make the data easier to use in the future

    flightHolder = []
    flightDict = dict()

    #For each flight given, this will populate the data it into a dictionary  
    for flight in getFlightData():
      flightDict = {
        'flightNumber': flight["flightNumber"],
        'origin_city': flight["origin"]["city"],
        # Departure and arrival times are iso 1860 format
        # For the purposes of calculations, this time will be assumed to be local
        'destination_city': flight["destination"]["city"],
        'departureTime': flight["departureTime"],
        'arrivalTime': flight["arrivalTime"],
        'aircraft': flight["aircraft"]["model"],
        'passengerCapacity': flight["aircraft"]["passengerCapacity"]["total"]
      }
      flightHolder.append(flightDict)


    return flightHolder[0]

jsonConversion()


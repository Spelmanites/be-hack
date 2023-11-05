import requests

def getFlightData():
    flightDat = requests.get("http://localhost:4000/flights?date=2003-11-14&origin=ATL&destination=ORD")
    return flightDat.json()


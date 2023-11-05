
from datetime import datetime

#Adding the path to the aaAPIHandling folder to access the jsonConversion function
import sys
sys.path.append('/Users/nia/Desktop/Code/Projects/BeSmart/be-hack/be-hack-backend/flask-server/aaAPIHandling')
from flightAPIHandler import jsonConversion

# """
# File Purpose:
# This file will generate one metric that will be used to check a passenger's time 
# until departure in order to determine if they can reserve overhead bin space 

# Format Notes:
# ISO 8601 Format: YYYY-MM-DD Hour:Minutes:Seconds.Milliseconds
# """


def extractTime(keyVal):
    """
    This function will extract the hour, minutes, and second values from the departure time
    """
    departureTime = jsonConversion()["departureTime"]
    #String slicing! Python is so good for this feature 
    year = departureTime[0:3]
    month = departureTime[5:6]
    day = departureTime[8:9]
    hour = departureTime[11:12]
    minutes = departureTime[14:15]
    seconds = departureTime[17:18]

    key = ""
    #Return value based on key
    if (key == "hour"):
        return hour
    elif (key == "min"):
        return minutes
    elif (key == "sec"):
        return seconds
    elif (key == "day"):
        return day
    elif (key == "month"):
        return month
    elif (key == "year"):
        return year
    else:
        print("Invalid key value")
    
    #Test Statements
    print(hour, " ", minutes, " " , seconds, " " ,departureTime)
    return hour

def calcTime():
    """
    This function will calculate the time until departure using 
    the hours value from the current time and departure time
    """    

    departureTime = jsonConversion()["departureTime"]
    #String slicing! Python is so good for this feature 
    year = departureTime[0:3]
    month = departureTime[5:6]
    day = departureTime[8:9]
    hour = departureTime[11:12]
    minutes = departureTime[14:15]
    seconds = departureTime[17:18]

    #Get Current Time
    currYear = datetime.now().year
    currMonth = datetime.now().month
    currDays = datetime.now().day
    currHour = datetime.now().hour
    currMin = datetime.now().minute
    currSec = datetime.now().second

    currTime = datetime.utcnow()

    #Calculate time until departure
    departureTime = datetime(
    int(year),
    int(month),
    int(day),
    int(hour),
    int(minutes),
    int(seconds)
)
    timeUntilFlight = departureTime - currTime

    #test statements
    print(timeUntilFlight)

    return timeUntilFlight

calcTime()
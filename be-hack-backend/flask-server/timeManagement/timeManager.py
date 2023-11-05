
# import datetime, timedelta
# #Adding the path to the aaAPIHandling folder to access the jsonConversion function
# import sys
# sys.path.append('/Users/nia/Desktop/Code/Projects/BeSmart/be-hack/be-hack-backend/flask-server/aaAPIHandling')
# from flightAPIHandler import jsonConversion

# """
# File Purpose:
# This file will generate one metric that will be used to check a passenger's time 
# until departure in order to determine if they can reserve overhead bin space 

# Format Notes:
# ISO 8601 Format: YYYY-MM-DD Hour:Minutes:Seconds.Milliseconds
# """


# def extractHour():
#     """
#     This function will extract the hour value from the departure time
#     """
#     departureTime = jsonConversion()["departureTime"]
#     hour = departureTime[11:16]

#     print(hour, " ", departureTime)
#     return hour

# def calcTime():
#     """
#     This function will calculate the time until departure using 
#     the hours value from the current time and departure time
#     """
#     departureHour = extractHour()
#     currHour = datetime.datetime.now().hour
#     print(currHour, " ", depHour)
#     timeUntilDeparture = depHour - currHour
#     print(timeUntilDeparture)

#     days = time_until_flight.days
#     hours, seconds = divmod(time_until_flight.seconds, 3600)
#     minutes, seconds = divmod(seconds, 60)

# extractHour()
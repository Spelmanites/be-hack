class Flight:
    def __init__(self, flightNumber, origin, destination, departureTime, arrivalTime, aircraft, passengerCapacity):
        self.flightNumber = flightNumber
        self.origin = origin
        self.destination = destination
        self.departureTime = departureTime
        self.arrivalTime = arrivalTime
        self.aircraft = aircraft
        self.passengerCapacity = passengerCapacity
    
    #def __str__(self):
        #return f"Flight {self.flightNumber} from {self.origin} to {self.destination} departs at {self.departureTime} and arrives at {self.arrivalTime} on a {self.aircraft} with a passenger capacity of {self.passengerCapacity} "

    
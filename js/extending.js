var Vehicle = function(){};

var SeaVessel = function(){};
var LandVehicle = function(){};
var Aircraft = function(){};

var Boat = function(){};

var Train = function(){};
var Car = function(){};

var Plane = function(){};


SeaVessel.prototype = Object.create(Vehicle.prototype);
LandVehicle.prototype = Object.create(Vehicle.prototype);
Aircraft.prototype = Object.create(Vehicle.prototype);

Boat.prototype = Object.create(SeaVessel.prototype);

Train.prototype = Object.create(LandVehicle.prototype);
Car.prototype = Object.create(LandVehicle.prototype);

Plane.prototype = Object.create(Aircraft.prototype);


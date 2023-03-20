const returnFirstTwoDrivers = function(drivers_array) {
    return drivers_array.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers_array) {
    return drivers_array.slice(-2); // or return drivers_array.slice(drivers_array.length -2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return integer * fare;
    };
};

const fareDoubler = function(createFareMultiplier) {
  return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier) {
  return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, returnFunction) {
  return returnFunction(drivers)
}


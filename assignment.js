
// Assingment 1 : Kilometer To Meter
function kilometerToMeter(kilometer) {
    var meter = 1000;
    return kilometer * meter;
}

// Assignment 2 : Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var total = (50 * watch) + (100 * phone) + (500 * laptop);
    return total;
}

// Assingment 3 : Hotel Cost
function hotelCost(days) {
    if (days != 0) {
        if (days <= 10) {
            var totalCost = 100 * days;
        }
        if (days > 10 && days <= 20) {
            var totalCost = 1000 + ((days - 10) * 80);
        }
        if (days > 20) {
            var totalCost = 1000 + (80 * 10) + ((days - 20) * 50);
        }
    }
    return totalCost;
}
console.log(hotelCost(23));

// Assignment 4 : Mega Friend
function megaFriend(names) {
    biggestNameLength = names[0].length;
    biggestName = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i].length;
        var elementName = names[i];
        if (element > biggestNameLength) {
            biggestName = elementName;
        }
    }
    return biggestName;
}
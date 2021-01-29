//typing functions
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
//optional parameter
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob");
//default parameter
function buildName1(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result2 = buildName1("Bob");
var result3 = buildName1("Bob", undefined);
console.log(result2);
//rest parameter
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(getTotal(10, 20, 30));

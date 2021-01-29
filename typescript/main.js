"use strict";
exports.__esModule = true;
var inheritance_1 = require("./inheritance");
var num = [78, 11];
//enum
var cardType;
(function (cardType) {
    cardType[cardType["debit"] = 0] = "debit";
    cardType[cardType["credit"] = 1] = "credit";
})(cardType || (cardType = {}));
;
var n = cardType.credit;
console.log(n);
//tuple
var user;
user = [1, "Steve", true, 20, "Admin"];
//let name:string="swathi";
var value = true;
var me = {
    name: "swathi",
    age: 23,
    language: function (english) {
        console.log(english);
    }
};
console.log(me);
//class
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = "gj";
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var ford = new Car("engine 1");
ford.disp();
var cat = new inheritance_1.Animal("bella");

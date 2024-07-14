"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var point1 = new Point("Big", 100, 200);
var point2 = new Point("Small", 50, 100);
console.log(point1);
console.log(point2);
// find the max value in an Array
var findMax = function (arr) {
    var max = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (item > max) {
            max = item;
        }
        ;
    }
    return max;
};
var arr = [56, 77, 88, 97, 55];
arr.push(55);
console.log(arr);
console.log(findMax(arr));
// find the min value in an Array
var findMin = function (arr) {
    var min = Infinity;
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        if (item < min) {
            min = item;
        }
    }
    return min;
};
console.log(findMin(arr));
// Find the avrage of an Array of numbers
var findAvrage = function (arr) {
    var sum = 0;
    var avr = 0;
    for (var _i = 0, arr_3 = arr; _i < arr_3.length; _i++) {
        var item = arr_3[_i];
        sum += item;
    }
    console.log(sum);
    console.log(arr.length);
    return avr = (sum / arr.length);
};
console.log(findAvrage(arr));
var me = {
    name: "Ming",
    age: 22,
    speak: function (text) {
        console.log("text");
    },
    spend: function (amount) {
        console.log("I spent", amount);
        return amount;
    }
};
console.log(me);
var user = /** @class */ (function () {
    function user(accountName, accountNumber, password, balance) {
        this.accountName = accountName;
        this.accountNumber = accountNumber;
        this.password = password;
        this.balance = balance;
    }
    user.prototype.getAccountBalance = function () {
        return console.log("Your account balance is " + "$ " + this.balance);
    };
    user.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            console.log("Sorry you have insufficient balance " + "$" + this.balance);
        }
        else {
            this.balance -= amount;
            this.getAccountBalance();
        }
    };
    user.prototype.deposit = function (amount) {
    };
    return user;
}());
var user1 = new user("Ming", 1001, "p123456", 100);
user1.getAccountBalance();
user1.withdraw(100);
var char = "mario";
var age = 22;
var isBlackBelt = true;
var StringOrNum = 100;
//function signature
var calc;
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(500, 400, "a"));

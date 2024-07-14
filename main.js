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
var arr = [56, 77, 88, 97, 55, 44, 2999, 4444, 4444, 39393];
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

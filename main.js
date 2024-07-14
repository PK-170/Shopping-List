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
console.log(point1);
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

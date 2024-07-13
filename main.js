{
    var x = 100;
    var y = 566600;
    var c = x + y;
    console.log(c);
}
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

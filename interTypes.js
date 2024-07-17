//Generics function
function convertToArray(input) {
    return [input];
}
console.log(convertToArray("Test"));
//generic function
function getIndexOfAnArrayItem(arr, arrayItem) {
    return arr.findIndex(function (item) { return item === arrayItem; });
}
var a = [22, 66, 77, 99];
console.log(getIndexOfAnArrayItem(a, 77));
//function takes two different types and return arrray of both items
function arrayPair(itemOne, itmeTwo) {
    return [itemOne, itmeTwo];
}
console.log(arrayPair("Test", 50000));
//console error function
function consoleError(errMsg) {
    console.log(errMsg);
}
consoleError("This is Error");
// function to handle error
function handleError(msg) {
    throw new Error(msg);
}
function createUser(user) {
    return { name: "", email: "", isAtive: true };
}
createUser({ name: "Ming", email: "m.com", isAtive: true });
var myUser = {
    _id: "1001",
    name: "Young",
    email: "m.com",
    isAtive: true,
};
myUser.email = "y.com";
var increment = function (x) { return x + 1; };
console.log(increment(5));
var tostring = function (x) { return "\"".concat(x, "\""); };
console.log(tostring(2));

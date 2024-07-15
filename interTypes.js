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

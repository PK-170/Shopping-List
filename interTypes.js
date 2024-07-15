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

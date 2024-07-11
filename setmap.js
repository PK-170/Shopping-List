const arr = ["Hello", "This", "is", "is", "Array"];

//const set = new Set(arr);
const set = new Set(["a", "b", "d", "k"]);

set.add("a");
set.add("b");
set.add("c");
set.add("d");

//console.log( set);

for(item of set){
    console.log(item);
}
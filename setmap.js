//Array
const arr = new Array("Hello", "This", "is", "is", "Array");


for(item of arr){
    console.log(item);
}
console.log(arr[3]);

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

//map

const map = new Map([
    ["name", "Ming"],
    ["last", "Young"],
    ["profesion", "Student"]
]
);

map.set("age", 22);
console.log(map);

console.log(map.get("name"));

for(item of map){
    console.log(item);
}

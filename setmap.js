//Array
const arr = new Array("Hello", "This", "is", "is", "Array");

for(item of arr){
    console.log(item);
}
console.log(arr[3]);


// set
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


// Map constructor
const map1 = new Map();

map1.set("Name", "Ming Young")

console.log(map1);

// percentage function with rest parameters

const calcPencentage = (...args)=>{
     let total = 0;
     for(item of args){
        total += item;
     }
     return total/args.length;
}

const result = calcPencentage(56, 77, 88, 97);
console.log(result);
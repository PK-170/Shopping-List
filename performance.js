// sumup program - sumup the given n value

function sumup(n){
    return (n / 2) * (n + 1);
}

function sumupFor(n){
    let total = 0;
    for (let i=1; i<=n; i++){
        total += i;
    }
    return total;
}

// function find max value in an array
const array = [44, 88, 33, 67, 188, 10101, 23456, 888, 999, 44444444, 55555, 0, -1, -100]

function findmax(arr){
    let max = 0;
    for(item of arr){
       if (item>max){max = item;}   
    }
    return max;
}

let maxvalue = findmax(array);
console.log(maxvalue);


// find the min vlaue in an array

function findmin(arr){
    let min =Infinity;
    for(item of arr){
        if (item < min){min = item}
    }return min;
}

let minValue = findmin(array);
console.log(minValue);

// expersion function time
let start = performance.now();
let result = sumup(400);
let end = performance.now();
console.log(end - start);
//console.log(result);

//for loop time
let startfor = performance.now();
let result1 = sumupFor(400);
let endfor = performance.now();
console.log(endfor - startfor);
//console.log(result1);
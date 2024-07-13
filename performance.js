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
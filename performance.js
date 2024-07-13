// sumup program - sumup the given n value

function sumup(n){
    return (n / 2) * (n + 1);
}

let start = performance.now();
console.log(sumup(500));
let end = performance.now();
console.log(end - start);
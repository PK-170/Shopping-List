// An integer is a palindrome when it reads the same forward and backward.

const isPalindrome = (x) =>{
    return x<0 ? false : x === +x.toString().split("").reverse().join("");
}

let res = isPalindrome(1881);
console.log(res);

//Question - 2 - Fibonacci Number
//

const fib = (n) => {

    const arr = [0,1];

    for (let i = 2; i <=n; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];
}

let a = fib(15);
console.log(a);

// Recursion concept 

function fibRecur(n) {
    return (n<=1) ? n : fibRecur(n-1) + fibRecur(n-2); 
 }
 
 let b = fibRecur(15);
 console.log(b);

 //Factorial

function fact(n) {
    return (n<1) ? 1  : n * fact(n-1); 
}

const f = fact(101);
console.log(f);

// Factorial with loop

function factLoop(n) {
    let count = 1;
     while(n>1){
         count *=n;
         n--; 
     } 
     return count;   
}

const l = factLoop(101);
console.log(l);

//Factorial with for

const factEach = (n) =>{
    let count = 1;
   for (let index = n; index >1; index--) {
         count *=index;
   }
   return count;
}
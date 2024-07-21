//Generics function
function convertToArray<T>(input: T): T[]{
   return [input];
}

console.log(convertToArray("Test"));

//generic function

function getIndexOfAnArrayItem<T>(arr: T[], arrayItem: T){
    return arr.findIndex((item)=> item === arrayItem);
}

let a = [22, 66, 77, 99];
console.log(getIndexOfAnArrayItem(a, 77));

//function takes two different types and return arrray of both items

function arrayPair<T, K>(itemOne: T, itmeTwo: K): [T,K]{
    return [itemOne, itmeTwo];
}

console.log(arrayPair("Test", 50000));

//console error function

function consoleError(errMsg: string):void{
    console.log(errMsg);
}

consoleError("This is Error")  

// function to handle error

function handleError(msg: string):never{
     throw new Error(msg);
}

//type 
type User = {
    name: string;
    email: string;
    isAtive: boolean;
}

function createUser(user: User): User{
   return {name:"", email:"", isAtive: true}
}

createUser({name:"Ming", email:"m.com", isAtive:true})


//type 
type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isAtive: boolean;
    creditCardDetails?: number
}

let myUser: User1 = {
    _id: "1001",
    name: "Young",
    email: "m.com",
    isAtive: true,
}

myUser.email = "y.com";
//myUser._id = "1002";  //  can't change readonly 


// Functional style function

type Increment = (x: number) => number;
const increment: Increment = x => x + 1;

console.log(increment(5));

//return tostring

type Tostring = (x: number) => string;

const tostring: Tostring = x => `"${x}"`;

console.log(tostring(2));

//increment then string

type IncrementThenToString = (x: number) => string;


// as const
const user = {
    name: "Ming",
    age: 22,
    id: 1001
} as const

//JS to check type

function add1(n1, n2){
    if(typeof n1 !== 'number' && typeof n2 !== "number"){
        throw new Error('Something went wrong');
    }
    return n1+n2;
}

//Enum
enum Status {
    NotStarted,
    InProgress,
    Done
}

console.log(Status.Done);

//greet function
function greet(person: string, date: Date): void{
    console.log(`Hello ${person} today is ${date.toDateString()}`);
    
}

greet("Ming", new Date());


//generics

function anotherGene<T, U>(valOne: T, valTwo: U): object{
  return {valOne, valTwo};
}

//generic class

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}
 class sellable<T>{
    public cart: T[] = [];

    addToCart(Product: T){
        this.cart.push(Product);
    }
 }

 //detect type

 function detectType(value: number|string){
    if(typeof value === "string"){
        return value.toLowerCase();
    }return value + 3;
 }

 //id

 function provideId(id: number|null){
     if(!id){console.log("please provide an Id"); return;
     } else {return id};
 }

 // Tuples

 let tuple: [string, number, boolean];

 tuple = ["Ming", 1001, true];

 console.log(tuple);

 tuple[0] = "Young";
 console.log(tuple);

 //coordinates tuples
 type threeCoordinates = [x: number, y: number, z:number]

 // function

 function toFahrenhiet(degreeCelcius: number): number{
      return (1.8 * degreeCelcius +32);
 }

 // log value of array

 const logNums = (arr: number[]): void => {
    for(let i=0; i<=arr.length; i++){
        console.log(arr[i]);
        
    }
 }
const arr1: number[]=  [12, 33, 66, 78, 33, 66, 99];
 logNums(arr1);
 
// contain duplicate

const containsDuplicate = (arr2: number[]): boolean =>{
    const set = new Set<number>(arr2);
    return set.size < arr2.length;
}

 
containsDuplicate(arr1);


// type

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate:string;
}
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
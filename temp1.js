
class Employee{

   setEmployee(id, name, email, phone){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
   }

   get Name(){
    return this.name;
   }

   get Id(){
    return this.id;
   }

   get Email(){
    return this.email;
   }

   get Phone(){
    return this.phone;
   }

   set Phone(phone){
      return this.phone = phone;
   }

}

let emp = new Employee();

emp.setEmployee(1002, "John", "John@gmail.com", 46688885);
console.log(emp.Name);
console.log(emp.Email);
console.log(emp.Phone);
console.log(emp.Id);
console.log(emp.Phone =1289456);



//Data Structure
const array = new Array();
const str = new String();
const obja = new Object();
const set = new Set();
const map = new Map();


// buble sort algo

function bubbleSort(arr1){
  
   for(let i=arr1.length; i>0; i--){
      console.log(i);
      let isSwapped;
      for(let j=0; j<i-1; j++){
         if(arr1[j] > arr1[j+1]){
            [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]]
            isSwapped = true;
         }
      }
      if(!isSwapped){break;}
   }
   return arr1;
}

let ar = [3,1,9,3,6,7,88,44,3,11,9,44,33]
let arrr = [9,1,2,3,4,5,6,7,8];
let a = bubbleSort(arrr)
console.log(a);

// selection sort algo

function selectionSort(array){
   for(let i=0; i<array.length; i++){
      let min=i;
      for(let j=i+1; j<array.length; j++){
         if(array[j] < array[min]){
            min = j;
         }
      }
      if(i !== min){
         let temp = array[i]
         array[i] = array[min];
         array[min]= temp;
      }
   }
   return array;
}

let b = selectionSort(ar)
console.log(b);

function add(a, b){
   return a+b;
}

console.log(add(5,999));

function multy(...args){
   return console.log(args);
}

multy(55, 77, 99, 66);

// greet function
function greet(name){
     console.log("your name is "+ " " + name);
}

greet("Ming Young");

// user function
const user = (name)=>{
   console.log("User name is ", name);
}

user("Kristen");

// selection algo

function selecAlgo(array){
   
   for(let i=0; i<array.length; i++){
      let min=i;
      for(let j=i+1; j<array.length; j++){
         if(array[j] < array[min]){
            min = j;
         }
      }
       if(i !== min){
         let temp = array[i];
         array[i] = array[min];
         array[min] = temp;
       }
   }
   return array;
}

let h = selecAlgo(ar);
console.log(h);

// async func

async function asyc(){
   return 5;
}

asyc().then((x)=>{
  // alert(x);
})

//try & catch

try{
   throw new ReferenceError("invalid value");
}catch(error){
   console.log(error.stack);
   
}

// 
try{
   let = 5;
   console.log(program);
}catch(error){
   console.log("Invalid answer");
}finally{
   console.log("this is final");
}

//

let s = new Array();
s.push(9999);
console.log(s);

let m = new Set(s);
console.log(m);

//
let k = new Object();
k = {name: "ming"};
console.log(k);
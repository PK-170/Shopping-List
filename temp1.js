
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
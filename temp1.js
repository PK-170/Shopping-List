
class Employee{

   setEmployee(id, name, email, phone){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
   }

   getName(){
    return this.name;
   }

   getId(){
    return this.id;
   }

   getEmail(){
    return this.email;
   }

   getPhone(){
    return this.phone;
   }

}

let emp = new Employee();

emp.setEmployee(1002, "John", "John@gmail.com", 46688885);
console.log(emp.getName());
console.log(emp.getEmail());
console.log(emp.getPhone());
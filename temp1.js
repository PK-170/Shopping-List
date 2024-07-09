
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


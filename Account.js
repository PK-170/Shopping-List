
class User{

 constructor(accountNumber, accountName, accountBalance){
      this.accountNumber = accountNumber;
      this.accountName = accountName;
      this.accountBalance = accountBalance;
 }



 checkBalance(){
    return this.accountBalance;
 }

 deposit(amount){
   return console.log("Your account balance is  " + (this.accountBalance += amount));
 }

 
}

const user1 = new User(1001, "John", 100);
console.log(user1);
console.log(user1.checkBalance());
user1.deposit(6600);




class User{

 constructor(accountNumber, accountName, accountBalance){
      this.accountNumber = accountNumber;
      this.accountName = accountName;
      this.accountBalance = accountBalance;
 }



 displayBalance(){
    return this.accountBalance;
 }

 deposit(amount){
   return console.log("Your account balance is  " + (this.accountBalance += amount));
 }

 
}

const user1 = new User(1001, "John", 100);
console.log(user1);
user1.deposit(6600);
console.log(user1.displayBalance());



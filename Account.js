
class User{

 constructor(accountNumber, accountName, accountBalance){
      this.accountNumber = accountNumber;
      this.accountName = accountName;
      this.accountBalance = accountBalance;
 }



 displayBalance(){
    return console.log("Your account balance is  " + (this.accountBalance));
 }

 deposit(amount){
   return console.log("Your account balance is  " + (this.accountBalance += amount));
 }

 withdraw(amount){
  console.log("withdraw start here");
  if(this.accountBalance >= amount){this.accountBalance -= amount}
  else{console.log("Sorry you have insufficient funds")}
 }

 
}

const user1 = new User(1001, "John", 100);
//console.log(user1);
user1.deposit(6600);
user1.withdraw(6600);
user1.displayBalance();




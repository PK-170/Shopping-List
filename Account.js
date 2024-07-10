
class User{

 constructor(accountNumber, accountName, accountBalance){
      this.accountNumber = accountNumber;
      this.accountName = accountName;
      this.accountBalance = accountBalance;
 }



 displayBalance(){
    return console.log("Your account balance is  $" + (this.accountBalance));
 }

 deposit(amount){
   if (amount > 0)(this.accountBalance += amount);
   this.displayBalance();
 }

 withdraw(amount){
  console.log("withdraw start here");
  if(this.accountBalance >= amount){this.accountBalance -= amount}
  else{console.log(" You have requested $" + amount + ", Sorry you have insufficient funds")}
  this.displayBalance();
 }


}

const user1 = new User(1001, "John", 100);
//console.log(user1);
user1.deposit(6600);
user1.withdraw(6900);





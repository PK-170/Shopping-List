
class User{

 constructor(accountNumber, accountName, accountBalance){
      this.accountNumber = accountNumber;
      this.accountName = accountName;
      this.accountBalance = accountBalance;
 }


 checkBalance(){
    return this.accountBalance;
 }

 
}

const user1 = new User(1001, "John", 100);
console.log(user1);
console.log(user1.checkBalance());

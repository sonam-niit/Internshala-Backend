const rl= require('readline-sync');

class Account {
    //calls when you create object of your class
    constructor(accNo, accHolderName, balance, type) {
        this.accNo = accNo;
        this.accHolderName = accHolderName;
        this.balance = balance;
        this.type = type;
    }
    //In class we can write functions witout function keyword
    display() {
        console.log('------------------------Details----------------------------');
        console.log(`Account No: ${this.accNo}`);
        console.log(`Account Holder's Name: ${this.accHolderName}`);
        console.log(`Available Balance: ${this.balance}`);
        console.log(`Account Type: ${this.type}`);
    }
    diposit(amount) {
        this.balance += amount;
        console.log(`${amount} credited to your account, available balance ${this.balance}`);
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log(`Insufficient Balance to your account`);
        }else{
            this.balance-=amount;
            console.log(`${amount} debited to your account, available balance ${this.balance}`);
        }
    }
}

const accounts=[];
while(true){
    const accNo= rl.question('Enter Your account No');
    const accHolderName= rl.question('Enter Your Name');
    const balance= rl.question('Enter Your balance');
    const type= rl.question('Enter Your account type');
    accounts.push(new Account(accNo,accHolderName,balance,type));

    const input= rl.question('enter y to continue');
    if(input=='y' || input=='Y')
        continue;
    else
        break;
}

for(let acc of accounts){
    acc.display();
    acc.withdraw(5000);//from both accounts 5000 deducted
}

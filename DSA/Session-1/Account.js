class Account{
    //States of class (properties)
    //with help of constructor we can initialize a object
    constructor(accNo,accHolderName,balance){
        this.accNo=accNo;
        this.accHolderName=accHolderName;
        this.balance=balance;
    }
    //behaviors (function)
    diposit(amount){
        this.balance+=amount;
        console.log(`${amount} Amount Diposited, Available Balance: ${this.balance}`);
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("No sufficient balance available");
        }else{
            this.balance-=amount;
            console.log(`${amount} Amount Withdraw successfully,
             Available Balance: ${this.balance}`);
        }
    }
    showAccData(){
        console.log("------------------------------");
        console.log("Account No: "+this.accNo);
        console.log("Account Holder Name: "+this.accHolderName);
        console.log("Available Balance : "+this.balance);
    }

}

//Let's cretae Objects
const sonam= new Account("SBI000001","Sonam Soni",5000);
const aditya= new Account("SBI000002","Aditya Punj",10000);
const shivam= new Account("SBI000006","Shivam Pathak",78000);

const accs=[sonam,aditya,shivam];
for(let obj of accs){
    obj.showAccData();
}

sonam.diposit(15000);
shivam.withdraw(80000);
aditya.withdraw(5000);
console.log("Sonam's Balance: "+sonam.balance);


class CurrentAccount extends Account{

    constructor(accNo,accHolderName,balance,transactionLimit){
        super(accNo,accHolderName,balance);
        this.transactionLimit= transactionLimit;
    }

}

const parth= new CurrentAccount("ICICI0001","Partha Malik",100000,300000);
parth.showAccData();
parth.diposit(80000);
parth.withdraw(5000);
console.log("Transaction Limit: "+parth.transactionLimit);
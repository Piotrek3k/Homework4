const bankAccount = {
    balance: 1000,

    get formattedBalance() {        // getting balance in a formatted way
        return "$" + this.balance   
    },

    set NewBalance(value) {         // setting new balance
        this.balance = value
    }
}

bankAccount.transfer = function (account, amount) {
    // function to transfer a chosen amount from one account to another
    if(amount > this.balance) { // cheking if the amount chosen to transfer is bigger than the balance of the account
        throw new Error ("The amount to transfer is bigger than the current balance")
    }
    this.NewBalance = this.balance - amount // changing the balance in the first account
    account.NewBalance = account.balance + amount   // changing the balance in the second account
}

// console.log(bankAccount.formattedBalance)
// bankAccount.NewBalance = 1500
// console.log(bankAccount.formattedBalance)

// const account1 = Object.create(bankAccount);
// const account2 = Object.create(bankAccount);
// account1.transfer(account2, 2000)
// console.log(account1.formattedBalance)
// console.log(account2.formattedBalance)
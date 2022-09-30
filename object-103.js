// object references
let myAccount = {
    name:"jeffrey Way",
    expenses:0,
    income:0,
};

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount;
};
addExpense(myAccount, 500);
console.log(myAccount);

let addIncome = function (account, amount){
    account.income = account.income +amount
};
addIncome(myAccount,1500);
console.log(myAccount);


let getAccountBalance = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} 
    in income. $${account.expenses} in expenses`;
};

    console.log(getAccountBalance(myAccount));

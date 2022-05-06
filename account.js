/* Input */
const accounts = [
    {
        'name': 'Arun',
        'accountNo': '001',
    },
    {
        'name': 'Babu',
        'accountNo': '002',
    },
    {
        'name': 'Chandra',
        'accountNo': '003',
    },
];

const balances = {
    // Account No: balance //
    '001': 5000,
    '002': 2000,
    '003': 0,
};

const transactions = [
    {
        'accountNo': '001',
        'type': 'withdrawal',
        'amount': 1000,
    },
    {
        'accountNo': '001',
        'type': 'deposit',
        'amount': 500,
    },
    {
        'accountNo': '001',
        'type': 'withdrawal',
        'amount': 1000,
    },
    {
        'accountNo': '002',
        'type': 'deposit',
        'amount': 300,
    },
    {
        'accountNo': '002',
        'type': 'withdrawal',
        'amount': 200,
    },
    {
        'accountNo': '003',
        'type': 'deposit',
        'amount': 200,
    },
];

/* Process */
const processTransaction = (transaction) => {
    let type = transaction['type'];
    let amount = transaction['amount'];
    let accountNo = transaction['accountNo'];
    let balance = balances[accountNo];
    balances[accountNo] = (type==="withdrawal") ? balance-amount : balance+amount;
};
const updateBalancesWithTransactions = () => {
    // Implement transaction code here.
    transactions.map(processTransaction)
};

const displayAccountBalance = (account) => {
    let name = account['name'];
    let accountNo = account['accountNo'];
    let balance = balances[accountNo];

    let arrayBalance=[];
    arrayBalance = [name,accountNo,balance]
    return arrayBalance;
};

const displayBalances = () => {
    // Implement display code here.
    let balanceUpdate = accounts.map(displayAccountBalance)
    console.table(balanceUpdate);
};

/* Main Function */
const main = () => {
    console.log('Balances before transactions');
    displayBalances();

    updateBalancesWithTransactions();

    console.log('Balances after transactions');
    displayBalances();
};

main(); 
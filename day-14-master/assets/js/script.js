var displayBudget = document.getElementById('my-budget-display');
var displayLimit = document.getElementById('my-limit-display');
var displayExpenseLimit = document.getElementById('my-expense-display');

var listaSpese = document.getElementById('display-espenses');

var btnInput = document.getElementById('submit-btn');
var btnExpenses = document.getElementById('expense-btn');

//-----------------------------------------------

btnInput.addEventListener('click', function () {

    let budget = document.getElementById('budget').value;
    let limit = document.getElementById('limit').value;
    let expenseLimit = document.getElementById('expense-limit').value;

    displayBudget.innerHTML = `€ ${budget}`;
    displayLimit.innerHTML = `€ ${limit}`;
    displayExpenseLimit.innerHTML = `€ ${expenseLimit}`;

    for (let i = Number(budget); i > Number(limit); i -= numero) {
        var numero = Math.floor(Math.random() * expenseLimit);
        if (i === Number(limit)) {
            break;
        }
        listaSpese.innerHTML += 'Il tuo budget totale rimanente: ' + [i -= numero] + ' e hai speso ' + numero + '<br>';
    }
});

//-----------------------------------------------

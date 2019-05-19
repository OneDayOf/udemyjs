let money, time;

function start(){ 
    money = +prompt("Ваш бюджет на месяц?", "30000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-16");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "30000");
    }
}

start();


let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    }


function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let q = prompt("Введите обязательную статью расходов в этом месяце", "Котлетки с пюрешкой"),
            a = +prompt("Во сколько обойдется?", "150");
        if ((typeof (q)) === 'string' && (typeof (q)) != null && (typeof (a)) != null && q != '' && a != '' && q.length < 50) {
            console.log("done");
            appData.expenses[q] = a;
        } else {
            console.log("Неверные данные")
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}

detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 200) {
        console.log("Твой бюджет на день " + appData.moneyPerDay + " Низкий уровень достатка");
    } else if (appData.moneyPerDay < 1000) {
        console.log("Твой бюджет на день " + appData.moneyPerDay + " Приемлемый уровень достатка");
    } else if (appData.moneyPerDay < 2000) {
        console.log("Твой бюджет на день " + appData.moneyPerDay + " Хороший уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Твой бюджет на день " + appData.moneyPerDay + " Отличный уровень достатка");
    } else {
        console.log("Неверные данные");
    }
}

detectLevel();


function checkSavings(){ 
    if(appData.savings == true){
        let save = +prompt("Какова  сумма накоплений?", "");
            percent = +prompt("Под какой процент?", "");

        appData.monthIncome = save/100/12*percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses(){
    for (let i = 1; i < 4; i++) {
        let q = prompt("Статья необязательных расходов?", "Котлетки с пюрешкой");
        if ((typeof (q)) === 'string' && (typeof (q)) != null  && q != ''  && q.length < 50) {
            console.log("done");
            appData.optionalExpenses[i] = q;
        } else {
            console.log("Неверные данные")
            i--;
        }
    }
}

chooseOptExpenses();

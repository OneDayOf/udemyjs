let startBtn = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optExpValue = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthSavings = document.querySelector('.monthsavings-value'),
    yearSavings = document.querySelector('.yearsavings-value'),
    expensesInput = document.getElementsByClassName('expenses-item'),
    btnAssert1 = document.getElementsByTagName('button')[0],
    btnAssert2 = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2],
    optExpIn = document.querySelectorAll('.optionalexpenses-item'),
    incomeIn = document.querySelector('.choose-income'),
    checkSav = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;


    startBtn.addEventListener('click', function(){
        time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-26");
        money = +prompt("Ваш бюджет на месяц?", "35000");
    
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "30000");
        }

        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });
    
    let sum = 0;
    btnAssert1.addEventListener('click', function(){
        if(appData.budget != undefined){
            for (let i = 0; i < expensesInput.length; i++) {
                let q = expensesInput[i].value;
                    a = expensesInput[++i].value;
            
                if ((typeof (q)) === 'string' && (typeof (q)) != null && (typeof (a)) != null && q != '' && a != '' && q.length < 50) {
                    console.log("done");
                    appData.expenses[q] = a;
                    sum += +a;
                } else {
                    console.log("Неверные данные")
                    i--;
                }
            }
            expensesValue.textContent = sum;
        }else{
            alert('Вы не еще запустили программу');
        }
    });

    btnAssert2.addEventListener('click', function(){
        if(appData.budget != undefined){
            for (let i = 0; i < optExpIn.length; i++) {
                let q = optExpIn[i].value;
                    appData.optionalExpenses[i] = q;
                    optExpValue.textContent += appData.optionalExpenses[i] + ', ';
            }
        }else{
            alert('Вы не еще запустили программу');
        }
    });
    
    btnCalc.addEventListener('click', function(){
        if(appData.budget != undefined){

            appData.moneyPerDay = ((appData.budget - sum)  / 30).toFixed();
            console.log(appData.moneyPerDay);
            dayBudgetValue.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 400) {
                levelValue.textContent = "Низкий уровень достатка";
            } else if (appData.moneyPerDay > 400 && appData.moneyPerDay < 1000) {
                levelValue.textContent = "Приемлемый уровень достатка";
            } else if (appData.moneyPerDay > 1000 &&  appData.moneyPerDay < 2000) {
                levelValue.textContent = "Хороший уровень достатка";
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = "Отличный уровень достатка";
            } else {
                console.log("Неверные данные");
            }
        }else{
            dayBudgetValue.textContent = "Произошла ошибка";
        }
    });

    incomeIn.addEventListener('input', function() {
        let items = incomeIn.value;
            appData.income = items.split(", ");

            income.textContent = appData.income;
    });

    checkSav.addEventListener('click', function(){
        if(appData.savings == true){
            appData.savings = false;
        }else{
            appData.savings = true;
        }
    });

    chooseSum.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

                appData.monthIncome = sum / 100 / 12 * percent;
                appData.yearIncome = sum / 100  * percent;

                console.log(appData.monthIncome + ' ' + appData.yearIncome);

                monthSavings.textContent = appData.monthIncome.toFixed(1);
                yearSavings.textContent = appData.yearIncome.toFixed(1);
            
        }

    });

    choosePercent.addEventListener('input', function() {
        if(appData.savings == true) {
            let sum = +chooseSum.value,
                percent = +choosePercent.value;

                appData.monthIncome = sum / 100 / 12 * percent;
                appData.yearIncome = sum / 100  * percent;

                console.log(appData.monthIncome + ' ' + appData.yearIncome);

                monthSavings.textContent = appData.monthIncome.toFixed(1);
                yearSavings.textContent = appData.yearIncome.toFixed(1);
        }
    });

    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    }
    

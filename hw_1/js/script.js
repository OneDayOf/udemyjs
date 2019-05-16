let money = prompt("Ваш бюджет на месяц?", "30000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-16"),
    appData = {
        budget: money,
        timeData: time,
        expenses:{},
        optionalExpenses: {},
        income: [],
        savings: false
    }

    q1 = prompt("Введите обязательную статью расходов в этом месяце", "Котлетки с пюрешкой"),
    a1 = +prompt("Во сколько обойдется?", "150"),
    q2 = prompt("Введите обязательную статью расходов в этом месяце", "Аренда квартиры"),
    a2 = +prompt("Во сколько обойдется?", "15000");
    
    appData.expenses[q1] = a1;
    appData.expenses[q2] = a2;
    alert("Дневной бюджет: " + (addData.budget / 30));

    
    
    
    
let money = +prompt("Ваш бюджет на месяц?", "30000"),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-05-16"),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    }


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

// let i = 0;
// while (i < 2) {
//     let q = prompt("Введите обязательную статью расходов в этом месяце", "Котлетки с пюрешкой"),
//         a = +prompt("Во сколько обойдется?", "150");
//     if ((typeof (q)) === 'string' && (typeof (q)) != null && (typeof (a)) != null && q != '' && a != '' && q.length < 50) {
//         console.log("done");
//         appData.expenses[q] = a;
//     } else {
//         console.log("Неверные данные")
//         i--;
//     }

// }

// do {
//     let q = prompt("Введите обязательную статью расходов в этом месяце", "Котлетки с пюрешкой"),
//         a = +prompt("Во сколько обойдется?", "150");
//     if ((typeof (q)) === 'string' && (typeof (q)) != null && (typeof (a)) != null && q != '' && a != '' && q.length < 50) {
//         console.log("done");
//         appData.expenses[q] = a;
//     } else {
//         console.log("Неверные данные")
//         i--;
//     }

// } while (i < 2);

console.log(typeof(appData.budget));

 appData.moneyPerDay = appData.budget / 30;

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
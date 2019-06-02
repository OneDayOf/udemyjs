let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    item = document.createElement('li'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    promo = document.querySelector('.prompt');

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
adv.remove();
title.textContent = 'Мы продаем только подллиную технику Apple';

item.classList.add('menu-item');
menu.appendChild(item);
item.textContent = 'Пятый пункт';

menu.insertBefore(menuItem[2], menuItem[1]);

promo.textContent = prompt('Как вы относитесь к техинике эпл?', 'Положительно');
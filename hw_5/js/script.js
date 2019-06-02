let box = document.querySelector('.box'),
    button = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.heart'),
    black = document.querySelector('.black'),
    div = document.createElement('div'),
    wrapper = document.querySelector('.wrapper');

    box.style.backgroundColor = 'green';

    button[1].style.borderRadius = '50%';

    circle[0].style.backgroundColor = 'red';
    circle[1].style.backgroundColor = 'yellow';
    circle[2].style.backgroundColor = 'green';

    heart[1].style.backgroundColor = '#ccc';

    div.classList.add('black');

    // document.body.appendChild(div);

    // wrapper.appendChild(div);
    document.body.insertBefore(div, circle[0]);
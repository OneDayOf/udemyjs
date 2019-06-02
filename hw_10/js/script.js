window.addEventListener('DOMContentLoaded', function() {
    let tab = document.querySelectorAll('.info-header-tab'),
        tabsBlock = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a){
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    tabsBlock.addEventListener('click', function(e){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i < tab.length; i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //timer

    let deadLine = '2019-06-03';

    function getTimeRemaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60) % 24) - 3);
            days = Math.floor(t/(1000*60*60*24));

            return {
                'total' : t,
                'days' : days,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            }
    }

    function setClock(id, endtime){
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateClock, 1000);

            function updateClock(){
            let t = getTimeRemaining(endtime);
            if(t.days >= 0 && t.hours >= 0 && t.minutes >= 0 && t.seconds >= 0){
                days.textContent = ('0' + t.days).slice(-2);
                hours.textContent = ('0' + t.hours).slice(-2);
                minutes.textContent = ('0' + t.minutes).slice(-2);
                seconds.textContent = ('0' + t.seconds).slice(-2);
            }else{
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);
});
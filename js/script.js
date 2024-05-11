// Находим нужные нам элементы
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const dseconds = document.querySelector('#days');

document.addEventListener('DOMContentLoaded', function() {
    //конечная дата 
    const deedline = new Date(2024, 6, 24); //месяц считается с нуля поэтому 7-1
    //id таймера
    let timerId = null;

    function countdownTimer() {
        const diff = deedline - new Date();

        if (diff <= 0) {
            //останавливаем таймер когда истечет время
            clearInterval(timerId);
        }
        //Находим дни
        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24); // diff / сколько секунд / получаем минуты / получаем часы / дни

        // Часов всего, остаток от деления на 24 и получаем часов без учета дней
        const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
        const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
        const secondsLeft = Math.floor(diff / 1000) % 60;
        //console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);
        // Добавляем текст на страницу с добавлением нолика если число < 10
        days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    }

    countdownTimer();
    //запускаем таймер 
    timerId = setInterval(countdownTimer, 1000);
});

//рабочие кнопки в папапе открытие и закрытие попапа

const buttonMail = document.querySelector('.popup-link')
const buttonsClose = document.querySelectorAll('.popup__close');
const popup = document.querySelector('#popup')

buttonMail.addEventListener('click', function() {
    if (popup.style.display = "none") {
        popup.style.display = "block";
        buttonsClose.forEach(btn => {
            btn.addEventListener('click', function() {
                popup.style.display = "none";
            });
        });

    } else {
        popup.style.display = "none";
    }

});
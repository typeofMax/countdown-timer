function countDownTimer(blockClassName, deadLine) {
    function getTimeRemaining(endTime) {
        const total = Date.parse(endTime) - Date.parse(new Date()), // получаем оставшееся время в ms
            days = Math.floor(total / (1000 * 60 * 60 * 24)),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((total / 1000 / 60) % 60),
            seconds = Math.floor((total / 1000) % 60);

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            getTimerId = setInterval(updateTimer, 1000);

        updateTimer(); /* Вызываем функцию, для того, что бы таймер включился сразу
                        Иначе он включится, через время установленное в setInterval */

        function updateTimer() {
            const t = getTimeRemaining(endTime);
            if (t.total <= 0) {
                days.innerHTML = getZero(0);
                hours.innerHTML = getZero(0);
                minutes.innerHTML = getZero(0);
                seconds.innerHTML = getZero(0);
                clearInterval(getTimerId);
            } else {
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
            }
        }
    }
    setClock(blockClassName, deadLine);
}

countDownTimer('.timer', '2022-01-30');

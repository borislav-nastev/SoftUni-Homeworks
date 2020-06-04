function stopwatch() {

    const timer = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const resetBtn = document.getElementById('stopBtn');

    let counter = 0;
    let interval;
    let [min, sec] = timer.textContent.split(':');

    startBtn.addEventListener('click', function () {

        loadTime(counter);
        
        interval = setInterval(function () {
            counter++;
            loadTime(counter);
        }, 1000);

        startBtn.disabled = true;
        resetBtn.disabled = false;
    });

    resetBtn.addEventListener('click', function () {

        clearInterval(interval);
        counter = 0;

        startBtn.disabled = false;
        resetBtn.disabled = true;
    });

    function loadTime(counter) {

        min = Math.floor(counter / 60);
        sec = counter % 60;

        if (min < 10) {
            min = '0' + min;
        }

        if (sec < 10) {
            sec = '0' + sec;
        }

        timer.textContent = `${min}:${sec}`;
    }
}
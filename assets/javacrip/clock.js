const screenClock = document.getElementById('screen-clock');
        const startBtn = document.getElementById('start');
        const stopBtn = document.getElementById('stop');
        const resetBtn = document.getElementById('reset');
    
        let intervalId;
        let minute = 0;
        let second = 0;
        let milisecond = 0;
    
        function startClock() {
            intervalId = setInterval(() => {
                milisecond++;
                if (milisecond == 100) {
                    milisecond = 0;
                    second++;
                }
                if (second == 60) {
                    second = 0;
                    minute++;
                }
                screenClock.textContent = `${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')},${milisecond.toString().padStart(2, '0')}`;
            }, 10);
            startBtn.disabled = true;
            stopBtn.disabled = false;
            resetBtn.disabled = true;
        }
    
        function stopClock() {
            clearInterval(intervalId);
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = false;
        }
    
        function resetClock() {
            clearInterval(intervalId);
            minute = 0;
            second = 0;
            milisecond = 0;
            screenClock.textContent = '00:00,00';
            startBtn.disabled = false;
            stopBtn.disabled = true;
            resetBtn.disabled = true;
        }
    
        startBtn.addEventListener('click', startClock);
        stopBtn.addEventListener('click', stopClock);
        resetBtn.addEventListener('click', resetClock);
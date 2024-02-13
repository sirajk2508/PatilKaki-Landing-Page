document.addEventListener('DOMContentLoaded', function() {

    // Logic for Form Container
    let formContainer = document.querySelector("#formContainer");
    formContainer.classList.add("hidden");
    setTimeout(() => {
        formContainer.classList.remove("hidden");
    }, 15000);
    let closeSpan = formContainer.querySelector("h3 span");

    closeSpan.addEventListener("click", () => {
        formContainer.classList.add("hidden");
    });


    // Logic for Timer Container
    const timerDisplay = document.getElementById('timer');
    let secondsLeft = 600;

    const countdown = () => {
        if (secondsLeft <= 60) {
            timerDisplay.classList.add('alarm');
        } else {
            timerDisplay.classList.remove('alarm');
        }
        const minutes = Math.floor(secondsLeft / 60);
        let seconds = secondsLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = `${minutes}:${seconds}`;
        
        if (secondsLeft === 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = 'Time is up!';
        } else if (secondsLeft < 60) {
            timerDisplay.style.color = 'red';
            timerDisplay.style.backgroundColor = 'white'
        }
        secondsLeft--;
    }

    countdown();

    const countdownInterval = setInterval(countdown, 1000);
});


  
function createBalloons() {
    const colors = ['#ff5252', '#ff4081', '#e040fb', '#7c4dff', '#536dfe', '#448aff', '#40c4ff', '#18ffff'];
    const balloonCount = 20;

    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDelay = `${Math.random() * 10}s`;
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(balloon);
    }
}

function typeWriter(text, element, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

window.addEventListener('load', () => {
    createBalloons();
    const birthdayMessage = "Wishing you a day filled with happiness and a year filled with joy. May all your dreams come true!";
    const messageElement = document.getElementById('birthdayMessage');
    setTimeout(() => {
        typeWriter(birthdayMessage, messageElement);
    }, 1500);
});

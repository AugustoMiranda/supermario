
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    var audio = new Audio("./sound/MarioBros-Jump-Sound.mp3 ");

    audio.oncanplaythrough = function () {
        audio.play();
    }

    setTimeout(() => {
        mario.classList.remove('jump');
     
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './img/mariogame-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        $(document).ready(function () {
            $('#imageoption').attr('src', './img/game-over.png');
        });

        var audio = new Audio("./sound/gameOver.mp3");

        audio.oncanplaythrough = function () {
            audio.play();
        }

        clearInterval(loop);

    }


}, 10);

document.addEventListener('keydown', jump);

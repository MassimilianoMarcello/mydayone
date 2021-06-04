const coin  = document.querySelector("#coin")
const button  = document.querySelector("#flip")
const front  = document.querySelector("#front")
const back  = document.querySelector("#back")


function flipCoin() {
    coin.setAttribute('class', '')
    const random = Math.random();
    const result = random < 0.5 ? 'front' : 'back';
    setTimeout(function() {
        coin.setAttribute('class', 'animate-' + result);
    }, 100);
}

button.addEventListener('click', flipCoin);
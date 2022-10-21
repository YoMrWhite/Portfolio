let messageArray = ["Hi, I am Namgel Lama."];
let textPosition = 0;
let speed = 100;

function typewriter() {
    document.querySelector("#message").innerHTML =
        messageArray[0].substring(0, textPosition) +
        "<span id='blinker'>|</span>";

    if (textPosition++ != messageArray[0].length) {
        setTimeout(typewriter, speed);
    }
}

window.addEventListener("load", typewriter);

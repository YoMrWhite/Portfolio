// Typewriter effect
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

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    });
});

// Responsive navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});

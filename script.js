// ===============================
// Birthday Website - Script
// ===============================

// Typewriter Effect
const message =
"Someone who has been a part of my life for 7 wonderful years is celebrating her birthday today... ❤️";

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

window.onload = function () {
    typeWriter();
};

// Open Surprise Button
function startJourney() {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "password.html";
    }, 1000);

}
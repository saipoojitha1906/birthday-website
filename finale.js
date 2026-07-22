// Blow the candles
function blowCandles() {

    // Remove candles
    document.querySelector(".candles").style.display = "none";

    // Hide button
    document.getElementById("blowBtn").style.display = "none";

    // Cake animation
    document.getElementById("cake").style.transform = "scale(1.1)";

    // Show gift after 2 seconds
    setTimeout(function () {

        document.getElementById("giftSection").style.display = "block";

    }, 2000);

}

// Open Gift
function openGift() {

    // Change gift emoji
    document.getElementById("giftBox").innerHTML = "💖";

    // Small animation
    document.getElementById("giftBox").style.transform = "scale(1.3)";

    // Hide gift after 2 seconds
    setTimeout(function () {

        document.getElementById("giftSection").style.display = "none";

        document.getElementById("dressSection").style.display = "block";

    }, 2000);

    // Dress reveal
    setTimeout(function () {

        document.getElementById("dressSection").style.display = "none";

        document.getElementById("countSection").style.display = "block";

        startCountdown();

    }, 6000);

}

// Countdown

function startCountdown() {

    let number = 7;

    let count = document.getElementById("countdown");

    count.innerHTML = number;

    let timer = setInterval(function () {

        number--;

        if (number > 0) {

            count.innerHTML = number;

        }

        else {

            clearInterval(timer);

            document.getElementById("countSection").style.display = "none";

            document.getElementById("finalMessage").style.display = "block";

            createHeartBurst();

        }

    }, 1000);

}

// Heart Burst Animation

function createHeartBurst() {

    for (let i = 0; i < 80; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.top = window.innerHeight + "px";

        heart.style.fontSize = (20 + Math.random() * 25) + "px";

        heart.style.pointerEvents = "none";

        heart.style.transition = "all 4s ease-out";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.style.top = "-100px";

            heart.style.opacity = "0";

            heart.style.transform =
                "translateX(" +
                ((Math.random() * 400) - 200) +
                "px) rotate(720deg)";

        }, 100);

        setTimeout(function () {

            heart.remove();

        }, 4500);

    }

}

// Optional: Background sparkle every few seconds

setInterval(function () {

    let sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.fontSize = "25px";

    sparkle.style.opacity = "0";

    sparkle.style.transition = "2s";

    sparkle.style.pointerEvents = "none";

    document.body.appendChild(sparkle);

    setTimeout(function () {

        sparkle.style.opacity = "1";

    }, 100);

    setTimeout(function () {

        sparkle.style.opacity = "0";

    }, 1500);

    setTimeout(function () {

        sparkle.remove();

    }, 2500);

}, 1200);
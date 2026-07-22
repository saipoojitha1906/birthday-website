// ==========================
// Password Checker
// ==========================

function checkPassword() {

    const correctPassword = "2215";
    const passwordInput = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
    const success = document.getElementById("success");
    const card = document.querySelector(".card");

    // Clear previous error
    error.innerHTML = "";

    if (passwordInput === "") {
        error.innerHTML = "⚠️ Please enter the password.";
        return;
    }

    if (passwordInput === correctPassword) {

        // Disable input and button
        document.getElementById("password").disabled = true;
        document.querySelector("button").disabled = true;

        // Hide input and button
        document.getElementById("password").style.display = "none";
        document.querySelector("button").style.display = "none";

        // Show success section
        success.classList.remove("hidden");

        // Confetti effect
        createConfetti();

        // Redirect after 4 seconds
        setTimeout(function () {
            window.location.href = "home.html";
        }, 4000);

    } else {

        error.innerHTML = "❌ Wrong Password";

        // Shake animation
        card.classList.add("shake");

        setTimeout(function () {
            card.classList.remove("shake");
        }, 500);

    }

}

// ==========================
// Enter Key Support
// ==========================

document.getElementById("password").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        checkPassword();
    }

});

// ==========================
// Simple Confetti
// ==========================

function createConfetti() {

    const colors = [
        "#ff4d94",
        "#ff66b2",
        "#ff99cc",
        "#ffd6e8",
        "#ffffff"
    ];

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px";
        confetti.style.borderRadius = "50%";
        confetti.style.pointerEvents = "none";
        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        let fall = Math.random() * 4000 + 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 100}px) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: fall,
                easing: "linear"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, fall);

    }

}
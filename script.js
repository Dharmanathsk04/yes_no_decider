function decide() {
    const answers = ["✅ Yes", "❌ No"];
    const randomIndex = Math.floor(Math.random() * answers.length);
    const result = answers[randomIndex];

    const display = document.getElementById("answer");
    display.textContent = result;

    display.style.opacity = 0;

    setTimeout(() => {
        display.style.opacity = 1; // Fade back in
    }, 100);
}

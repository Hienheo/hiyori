const progress = document.querySelector(".progress");
const percent = document.querySelector(".percent");
const textBox = document.querySelector(".textBox");
const button = document.querySelector(".button");
const textBtn = document.querySelector(".textBtn");

let count = 0;
let interval = setInterval(updateProgress, 100);

button.addEventListener("click", () => {
    button.style.transform = "scale(0.8)";
    setTimeout(() => {
        window.location.href = "./love/love.html";
    }, 200);
});

function updateProgress() {
    if (count >= 100) {
        clearInterval(interval);
        percent.textContent = "Completed!";
        showButton();
    } else {
        count++;
        progress.style.width = count + "%";
        percent.textContent = count + "%";
    }
}

function showButton() {
    setTimeout(() => {
        button.style.transform = "scale(1)";
        textBtn.textContent = "Click me!";
    }, 500);
}

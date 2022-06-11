// Your code here
const dodger = document.getElementById("dodger");

dodger.style.background = "red";

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left, 10)

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
});

function moveDodgerRight() {
    const left = parseInt(dodger.style.left);

    if (left < 360) {
        dodger.style.left = `${left + 5}px`;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})
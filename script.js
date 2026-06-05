let menuBtn = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav-links");

menuBtn.onclick = () => {
    nav.classList.toggle("active");
}

const text = [
    "Full Stack Developer",
    "Data Science Enthusiast",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;

        setTimeout(type, 1000);

    } else {
        setTimeout(type, 100);
    }

})();
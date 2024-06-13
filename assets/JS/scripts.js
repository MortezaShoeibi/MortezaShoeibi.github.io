const sentences = [
    "A Persian Artist.",
    "Poet and Author of Persian and English literature.",
    "Programmer and Network engineer.",
    "Teacher and Mentor.",
    "Musician."
];

let currentSentence = 0;
let currentChar = 0;
let textElement = document.getElementById('ttext');
let typingSpeed = 100;
let deletingSpeed = 50;

function type() {
    if (currentChar < sentences[currentSentence].length) {
        textElement.innerHTML += sentences[currentSentence].charAt(currentChar);
        currentChar++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (currentChar > 0) {
        textElement.innerHTML = sentences[currentSentence].substring(0, currentChar - 1);
        currentChar--;
        setTimeout(erase, deletingSpeed);
    } else {
        currentSentence++;
        if (currentSentence >= sentences.length) currentSentence = 0;
        setTimeout(type, typingSpeed + 1000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, 1000);
});

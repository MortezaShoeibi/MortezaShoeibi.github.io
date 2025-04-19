// Typing Animation
const sentencesEn = [
    "A Persian Artist.",
    "Poet and Author of Persian and English literature.",
    "Programmer and Network engineer.",
    "Teacher and Mentor.",
    "Musician.",
];
const sentencesFa = [
    "هنرمند ایرانی.",
    "نویسنده و چکامه سرای فرهنگ پارسی و انگلیسی.",
    "برنامه‌نویس و هندازگر رایاتار.",
    "آموزگار.",
    "خنیاگر."
];

let currentSentence = 0;
let currentChar = 0;
const typingElEn = document.getElementById('typing-en');
const typingElFa = document.getElementById('typing-fa');
let typingSpeed = 150;
let deletingSpeed = 50;

if (document.getElementById("fa").style.display == 'none') {
    function type() {
        if (currentChar < sentencesEn[currentSentence].length) {
            typingElEn.innerHTML += sentencesEn[currentSentence].charAt(currentChar);
            currentChar++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (currentChar > 0) {
            typingElEn.innerHTML = sentencesEn[currentSentence].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(erase, deletingSpeed);
        } else {
            currentSentence++;
            if (currentSentence >= sentencesEn.length) currentSentence = 0;
            setTimeout(type, typingSpeed + 1000);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(type, 1000);
    });
}

// Language Toggle
function en() {
    document.getElementById("fa").style.display = "none";
    document.getElementById("en").style.display = "block";
    sidebarFa.classList.add('sidebar-hidden');
}

function fa() {
    document.getElementById("en").style.display = "none";
    document.getElementById("fa").style.display = "block";
    sidebarEn.classList.add('sidebar-hidden');
}

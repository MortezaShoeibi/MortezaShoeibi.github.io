let icon = document.getElementById('icon');

icon.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.src = './assets/images/dark-mode/sun.png';
    } else {
        icon.src = './assets/images/dark-mode/moon.png';
    }
}

document.getElementById("fa").style.display = "none";

function en() {
    document.getElementById("fa").style.display = "none";
    document.getElementById("en").style.display = "block";
    console.log("En");
}

function fa() {
    document.getElementById("en").style.display = "none";
    document.getElementById("fa").style.display = "block";
    console.log("Fa");
}

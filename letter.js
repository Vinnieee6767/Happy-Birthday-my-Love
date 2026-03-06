const audio = document.getElementById("bg-audio");

function playRandomly() {
    audio.play();

    let randomTime = Math.floor(Math.random() * (60000 - 15000 + 1)) + 15000;

    setTimeout(playRandomly, randomTime);
}

window.onload = function () {
    playRandomly();
};

function goToFun() {
    window.location.href = "fun.html";
}
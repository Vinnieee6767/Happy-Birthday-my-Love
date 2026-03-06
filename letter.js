const audio = document.getElementById("bg-audio");
const textElement = document.getElementById("text");
const typingSound = document.getElementById("typing");

const letter = `Happy Birthday my Dearest Beloved <333

I still remember how I felt when I confessed my affections to you not too long ago, how everything happened unexpectedly and how I felt so sure about myself that YOU are the person I wanted to be with. We both didn’t expect the upbringing of our love story, It was God who made it happen. God knew we needed each other to complete the love story that he made and for that, I’m thankful. I still look back and remember how we were blinded of each other back in Highschool and how we’ve only found each other’s hearts now.

My love, you make me feel like home in your heart and I couldn’t thank you enough for choosing me, “Liking” you and getting “Liked” by you makes life so much better my dear. Thank youuuuu so so much for making me feel loved above and beyond. My dear, you deserve everything in this world and more!!! In this special day of yours, you deserve the best of the best!

I sincerely wish you the abundance of happiness and love Langga. Thank you so so much for being yourself Langga, I feel so grateful to have cross paths with you and to have you in my life my dear❤️ Happy Birthday my dear sweet beloved, enjoy your special born day and please know You are loved ❤️.`;

let i = 0;
const typingSpeed = 130;
const soundSpeed = 250;

// Typing sound function
function playTypingSound() {
    const sound = typingSound.cloneNode();
    sound.volume = 0.18;
    sound.play().catch(() => {});
}

// Typing function
function typeWriter() {
    if (i < letter.length) {
        const char = letter.charAt(i);
        textElement.innerHTML += char;

        if (char !== " " && char !== "\n") {
            setTimeout(() => {
                playTypingSound();
            }, soundSpeed);
        }

        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Random background audio
function playRandomly() {
    audio.play().catch(() => {});
    let randomTime = Math.floor(Math.random() * (60000 - 15000 + 1)) + 15000;
    setTimeout(playRandomly, randomTime);
}

// Funsies button
function goToFun() {
    window.location.href = "fun.html";
}

// Start everything safely
function startLetter() {
    typeWriter();
    playRandomly();
}

// Wait for page load, then start after a small delay to ensure user interaction
window.addEventListener("load", () => {
    // some browsers allow audio to play after a slight timeout
    setTimeout(startLetter, 500);
});

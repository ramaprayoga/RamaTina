// ==========================
// ELEMENT
// ==========================
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const windowBox = document.querySelector(".letter-window");

const cards = document.querySelectorAll(".card");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const bgMusic = document.getElementById("bgMusic");

// ==========================
// STATE
// ==========================
let current = 0;
let musicStarted = false;

// ==========================
// OPEN ENVELOPE (MUSIC START)
// ==========================
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        windowBox.classList.add("open");
    }, 50);

    // 🎵 musik mulai saat klik pesan
    if (!musicStarted && bgMusic) {
        musicStarted = true;
        bgMusic.volume = 0.6;
        bgMusic.play().catch(() => {});
    }
});

// ==========================
// SHOW CARD
// ==========================
function showCard(index) {
    cards.forEach((card, i) => {
        card.classList.toggle("active", i === index);
    });
}

// ==========================
// NEXT
// ==========================
nextBtn.addEventListener("click", () => {
    if (current < cards.length - 1) {
        current++;
        showCard(current);
    }
});

// ==========================
// PREV
// ==========================
prevBtn.addEventListener("click", () => {
    if (current > 0) {
        current--;
        showCard(current);
    }
});

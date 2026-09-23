let birthdayName = "";

const starsContainers = document.querySelectorAll(".stars");

starsContainers.forEach(starsc => {

    for (let i = 0; i <= 90; i++) {

        const star = document.createElement("span");

        star.classList.add("star");

        const types = ["•", "·", "✦", "✧"];

        star.textContent =
            types[Math.floor(Math.random() * types.length)];

        star.style.top =
            Math.random() * 100 + "%";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.fontSize =
            (Math.random() * 8 + 3) + "px";

        star.style.animationDuration =
            (Math.random() * 2 + 1) + "s";

        starsc.appendChild(star);
    }

});


/* CLOUD POSITION */

document.querySelectorAll(".cloud").forEach(cloud => {

    let randomTop =
        Math.floor(Math.random() * window.innerHeight * 0.6);

    cloud.style.top = randomTop + "px";

});


/* MAIN STEPS */

const start = document.querySelector("#startbtn");

const step1 = document.querySelector(".step1");

const step2 = document.querySelector(".step2");


/* START BUTTON + NAME */

start.addEventListener("click", () => {

    const nameInput = document.querySelector("#nameInput");

    birthdayName = nameInput.value.trim();

    if (birthdayName === "") {

        alert("Please enter your name ❤️");

        nameInput.focus();

        return;
    }


    /* Show name on birthday page */

    document.querySelector("#birthdayName").textContent =
        birthdayName;


    /* Show name on final surprise */

    document.querySelector("#finalBirthdayName").textContent =
        birthdayName;


    /* Move to Step 2 */

    step1.style.display = "none";

    step2.style.display = "flex";

});


/* CAKE */

const cakes = document.querySelector("#cake");

const message = document.querySelector(".birthday-message");

const button = document.querySelector("#continue-btn");


cakes.addEventListener("click", () => {

    message.style.display = "block";

    button.style.display = "inline-block";

    button.style.animation =
        "buttonfade 0.8s ease forwards";

    launchConfetti();

});


/* CONFETTI */

const CONFETTI_COUNT = 150;


const COLORS = [

    "#ff595e",
    "#ffca3a",
    "#8ac926",
    "#1982c4",
    "#6a4c93",
    "#ff924c",
    "#f15bb5",
    "#00bbf9",
    "#00f5d4"

];


const SHAPES = [

    "shape-square",
    "shape-square",
    "shape-circle",
    "shape-triangle",
    "shape-star",
    "shape-heart"

];


const cake = document.querySelector("#cake");

const confettiContainer =
    document.querySelector("#confetti-container");


function randomBetween(min, max) {

    return Math.random() * (max - min) + min;

}


function createConfettiPiece() {

    const piece = document.createElement("div");


    const shape =
        SHAPES[Math.floor(Math.random() * SHAPES.length)];


    const color =
        COLORS[Math.floor(Math.random() * COLORS.length)];


    piece.classList.add(
        "confetti-piece",
        shape
    );


    const size = randomBetween(7, 15);


    if (
        shape === "shape-square" ||
        shape === "shape-circle"
    ) {

        piece.style.width =
            size + "px";

        piece.style.height =
            randomBetween(8, 18) + "px";

        piece.style.backgroundColor =
            color;

    }

    else if (shape === "shape-triangle") {

        piece.style.borderBottomColor =
            color;

    }

    else {

        piece.style.color =
            color;

        piece.style.textShadow =
            `0 0 8px ${color}`;

    }


    piece.style.left =
        randomBetween(0, 100) + "vw";


    piece.style.setProperty(
        "--sway",
        randomBetween(-120, 120) + "px"
    );


    piece.style.setProperty(
        "--rotate-mid",
        randomBetween(180, 360) + "deg"
    );


    piece.style.setProperty(
        "--rotate-end",
        randomBetween(360, 900) + "deg"
    );


    const duration =
        randomBetween(3.5, 6);

    const delay =
        randomBetween(0, 1.2);


    piece.style.animationDuration =
        duration + "s";

    piece.style.animationDelay =
        delay + "s";


    confettiContainer.appendChild(piece);


    const totalLifetime =
        (duration + delay) * 1000;


    setTimeout(() => {

        piece.remove();

    }, totalLifetime + 200);

}


function launchConfetti() {

    for (
        let i = 0;
        i < CONFETTI_COUNT;
        i++
    ) {

        setTimeout(
            createConfettiPiece,
            randomBetween(0, 400)
        );

    }

}


/* STEP 2 → STEP 3 */

const step3 =
    document.querySelector(".step3");


button.addEventListener("click", () => {

    step2.style.display = "none";

    step3.style.display = "flex";

});


/* STEP 3 → STEP 4 */

const nxtbtn =
    document.querySelector(".next-btn");


const step4 =
    document.querySelector("#step4");


nxtbtn.addEventListener("click", () => {

    step3.style.display = "none";

    step4.style.display = "flex";

});


/* OPEN GIFT */

let openGift =
    document.querySelector("#openGift");


openGift.addEventListener("click", () => {

    document.querySelector("#step4").style.display =
        "none";

    document.querySelector("#finalSurprise").style.display =
        "flex";

});


/* FINAL CAKE */

const finalCake =
    document.querySelector("#finalcake");


finalCake.addEventListener("click", () => {

    document.querySelector("#letter").style.display =
        "block";

    launchConfetti();

});
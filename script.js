// JavaScript Project
// Developed by Sarth Yambal
// Internship Project JavaScript - Task 1 Basics
// Select Button
// Selecting DOM Elements
const button = document.getElementById("clickButton");
const clickVal = document.getElementById("clickVal");
const randomVal = document.getElementById("randomVal");
const themeToggle = document.getElementById("themeToggle");
const exploreButton = document.getElementById("exploreBtn");
let exploreButton =
    document.getElementById("exploreBtn");
// Variable for Counting Clicks
let clickCount = 0;
// Welcome Function
function welcomeMessage() {
/* -----------------------------
   Welcome Message Function
------------------------------ */
function showWelcomeMessage() {
    alert(
        "Welcome to Sarth Yambal's Creative Website"
        "Hello! Welcome to Sarth Yambal's Internship Project"
    );
}
// Background Change Function
/* -----------------------------
   Background Change Function
------------------------------ */
function changeBackgroundColor() {
    document.body.style.backgroundColor = "#dff6ff";
}
/* -----------------------------
   Gradient Background Function
------------------------------ */
function changeBackground() {
    document.body.style.background =
        "linear-gradient(to right, #141e30, #243b55)";
}
// Console Developer Info
/* -----------------------------
   Heading Color Change
------------------------------ */
function changeHeadingColor() {
    const heading = document.getElementById("mainHeading");
    if (heading) {
        heading.style.color = "#165dff";
    }
}
/* -----------------------------
   Paragraph Text Change
------------------------------ */
function changeParagraphText() {
    const paragraph = document.getElementById("aboutText");
    if (paragraph) {
        paragraph.innerHTML =
            "Hello! My name is Sarth Yambal. " +
            "I am learning Web Development using " +
            "HTML, CSS and JavaScript. " +
            "This webpage is created for Internship Task-1.";
    }
}
/* -----------------------------
   Show Date and Time
------------------------------ */
function showCurrentDateTime() {
    const currentDate = new Date();
    console.log("Current Date and Time:");
    console.log(currentDate);
}
/* -----------------------------
   Developer Information
------------------------------ */
function developerInfo() {
    console.log("Developer: Sarth Yambal");
    console.log("Technologies: HTML, CSS, JavaScript");
    console.log("Project Type: Creative Portfolio");
}
/* -----------------------------
   Count Button Clicks
------------------------------ */
function countButtonClicks() {
    clickCount++;
    console.log(
        "Developer: Sarth Yambal"
        "Button Clicked " +
        clickCount +
        " Times"
    );
    // Update counter
    if (clickVal) {
        clickVal.innerText = clickCount;
    }
}
/* -----------------------------
   Random Number Generator
------------------------------ */
function generateRandomNumber() {
    const randomNumber =
        Math.floor(Math.random() * 100);
    console.log(
        "Technologies: HTML, CSS, JavaScript"
        "Generated Random Number: " +
        randomNumber
    );
    console.log(
        "Project Type: Creative Portfolio"
    );
    // Update display
    if (randomVal) {
        randomVal.innerText = randomNumber;
    }
}
// Random Quote Generator
/* -----------------------------
   Random Quote Generator
------------------------------ */
function randomQuote() {
    let quotes = [
    const quotes = [
        "Dream Big and Build Big.",
        "Coding is Creativity.",
        "JavaScript Makes Websites Alive.",
        "Success Starts With Learning."
    ];
    let random =
        Math.floor(
            Math.random() * quotes.length
        );
    const random =
        Math.floor(Math.random() * quotes.length);
    console.log(
        "Quote: " + quotes[random]
    );
}
// Dynamic Time Display
/* -----------------------------
   Mouse Hover Effect
------------------------------ */
function applyMouseHoverEffect() {
    if (!button) return;
    button.addEventListener(
        "mouseover",
        function () {
            button.style.backgroundColor = "green";
        }
    );
    button.addEventListener(
        "mouseout",
        function () {
            button.style.backgroundColor = "#165dff";
        }
    );
}
/* -----------------------------
   Show Current Time
------------------------------ */
function showTime() {
    const currentTime = new Date();
    let currentTime =
        new Date();
    console.log(
        "Current Time: " + currentTime
    );
}
// Button Hover Effect
/* -----------------------------
   Show Developer Information
------------------------------ */
function showDeveloperInformation() {
    console.log("Developer Name: Sarth Yambal");
    console.log("Internship Domain: Web Development");
    console.log("Technologies Used: HTML, CSS, JavaScript");
}
exploreButton.addEventListener(
/* -----------------------------
   Main Button Click Event
------------------------------ */
if (button) {
    "mouseover",
    button.addEventListener(
        "click",
        function () {
    function () {
            showWelcomeMessage();
            changeBackgroundColor();
            changeHeadingColor();
            changeParagraphText();
        exploreButton.style.background =
            "white";
            countButtonClicks();
            generateRandomNumber();
        }
    );
}
        exploreButton.style.color =
            "black";
    }
);
/* -----------------------------
   Theme Toggle
------------------------------ */
if (themeToggle) {
exploreButton.addEventListener(
    themeToggle.addEventListener(
        "click",
        () => {
    "mouseout",
            const htmlEl =
                document.documentElement;
    function () {
            const currentTheme =
                htmlEl.getAttribute("data-theme");
        exploreButton.style.background =
            "cyan";
            if (currentTheme === "light") {
        exploreButton.style.color =
            "black";
    }
);
                htmlEl.setAttribute(
                    "data-theme",
                    "dark"
                );
// Button Click Event
                themeToggle.innerText =
                    "Light Mode";
exploreButton.addEventListener(
                document.body.style.backgroundColor = "";
    "click",
            } else {
    function () {
                htmlEl.setAttribute(
                    "data-theme",
                    "light"
                );
        welcomeMessage();
                themeToggle.innerText =
                    "Dark Mode";
        changeBackground();
                document.body.style.backgroundColor = "";
            }
        }
    );
}
        randomQuote();
/* -----------------------------
   Explore Button Events
------------------------------ */
if (exploreButton) {
        showTime();
    }
);
    exploreButton.addEventListener(
        "mouseover",
        function () {
// Startup Functions
            exploreButton.style.background =
                "white";
            exploreButton.style.color =
                "black";
        }
    );
    exploreButton.addEventListener(
        "mouseout",
        function () {
            exploreButton.style.background =
                "cyan";
            exploreButton.style.color =
                "black";
        }
    );
    exploreButton.addEventListener(
        "click",
        function () {
            showWelcomeMessage();
            changeBackground();
            randomQuote();
            showTime();
        }
    );
}
/* -----------------------------
   Startup Functions
------------------------------ */
showCurrentDateTime();
applyMouseHoverEffect();
showDeveloperInformation();
developerInfo();
/* -----------------------------
   Final Console Messages
------------------------------ */
console.log(
    "Creative Website Loaded Successfully"
);
console.log(
    "Project Loaded Successfully"
);
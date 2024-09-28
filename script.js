const sections = document.querySelectorAll(".sections");
const logo = document.getElementById("port-logo");
const aboutContainer = document.querySelector(".about-container");
const sectionContainer = document.querySelector(".sections-container");
const gameContainer = document.querySelector(".game-design-container");
const projectBtns = document.querySelectorAll(".project-btn");
const gameBtn = document.getElementById("game-btn");
const oopBtn = document.getElementById("oop-btn");

let currentContainer;

sections.forEach((section) => {
  section.addEventListener("click", function () {
    if (section.id === "resume") {
      return;
    }
    if (section.id === "about") {
      setTimeout(() => {
        aboutContainer.style.visibility = "visible";
        aboutContainer.style.opacity = "1";
      }, 500);
    }

    if (section.id === "projects") {
      setTimeout(() => {
        gameContainer.style.visibility = "visible";
        gameContainer.style.opacity = "1";
      }, 500);
    }
    logo.style.pointerEvents = "none";
    setTimeout(() => {
      logo.style.pointerEvents = "auto";
    }, 500);

    sections.forEach((section) => {
      section.style.visibility = "hidden";
      section.style.opacity = "0";
    });
  });
});

logo.addEventListener("click", function () {
  sections.forEach((section) => {
    aboutContainer.style.visibility = "hidden";
    aboutContainer.style.opacity = "0";
    gameContainer.style.visibility = "hidden";
    gameContainer.style.opacity = "0";
    setTimeout(() => {
      section.style.visibility = "visible";
      section.style.opacity = "1";
    }, 500);
  });
});

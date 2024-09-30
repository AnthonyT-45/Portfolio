const sections = document.querySelectorAll(".sections");
const logo = document.getElementById("port-logo");
const aboutContainer = document.querySelector(".about-container");
const projectContainer = document.querySelector(".project-container");
const sectionContainer = document.querySelector(".sections-container");

const containers = [sectionContainer, aboutContainer, projectContainer];
let currentContainer = sectionContainer;

function showContainer(container) {
  container.classList.remove("vanish");
  container.classList.add("appear");
  container.style.display = "block";
  currentContainer = container;
}

function hideContainer(container, callback) {
  container.classList.remove("appear");
  container.classList.add("vanish");

  setTimeout(() => {
    container.style.display = "none";
    if (callback) callback();
  }, 250);
}

sections.forEach((section) => {
  section.addEventListener("click", function () {
    if (section.id === "resume") {
      return;
    }

    logo.style.pointerEvents = "none";

    hideContainer(currentContainer, () => {
      if (section.id === "about") {
        showContainer(aboutContainer);
      } else if (section.id === "projects") {
        showContainer(projectContainer);
      }

      setTimeout(() => {
        logo.style.pointerEvents = "auto";
      }, 250);
    });
  });
});

logo.addEventListener("click", function () {
  logo.style.pointerEvents = "none";

  if (currentContainer !== sectionContainer) {
    hideContainer(currentContainer, () => {
      showContainer(sectionContainer);

      setTimeout(() => {
        logo.style.pointerEvents = "auto";
      }, 250);
    });
  } else {
    logo.style.pointerEvents = "auto";
  }
});

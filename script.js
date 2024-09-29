const sections = document.querySelectorAll(".sections");
const logo = document.getElementById("port-logo");
const aboutContainer = document.querySelector(".about-container");
const projectContainer = document.querySelector(".project-container");
const sectionContainer = document.querySelector(".sections-container");

sections.forEach((section) => {
  section.addEventListener("click", function () {
    if (section.id === "resume") {
      return;
    }

    sectionContainer.classList.add("hidden");
    sectionContainer.classList.remove("visible");

    if (section.id === "about") {
      aboutContainer.classList.add("visible");
      aboutContainer.classList.remove("hidden");
    }

    if (section.id === "projects") {
      projectContainer.classList.add("visible");
      projectContainer.classList.remove("hidden");
    }

    logo.style.pointerEvents = "none";
    setTimeout(() => {
      logo.style.pointerEvents = "auto";
    }, 500);
  });
});

logo.addEventListener("click", function () {
  aboutContainer.classList.add("hidden");
  aboutContainer.classList.remove("visible");
  projectContainer.classList.add("hidden");
  projectContainer.classList.remove("visible");

  sectionContainer.classList.add("visible");
  sectionContainer.classList.remove("hidden");
});

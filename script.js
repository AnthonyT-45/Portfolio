document.addEventListener("DOMContentLoaded", function () {
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
      if (section.id === "about") {
        setTimeout(() => {
          aboutContainer.style.visibility = "visible";
          aboutContainer.style.opacity = "1";
        }, 500);
      }

      if (section.id === "projects") {
        setTimeout(() => {
          projectContainer.style.visibility = "visible";
          projectContainer.style.opacity = "1";
        }, 500);
      }
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
      projectContainer.style.visibility = "hidden";
      projectContainer.style.opacity = "0";
      setTimeout(() => {
        section.style.visibility = "visible";
        section.style.opacity = "1";
      }, 500);
    });
  });
});

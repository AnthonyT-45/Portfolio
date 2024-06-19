var projectItems = document.querySelectorAll(".project-item");
var currentModal;

projectItems.forEach(function (item) {
  item.addEventListener("click", function () {
    var projectId = item.id;
    var modalId = "modal-" + projectId;
    currentModal = document.getElementById(modalId);
    if (currentModal) {
      currentModal.style.display = "block";
    } else {
      console.log("Modal not found for project ID: " + projectId);
    }
  });
});

document.querySelectorAll(".close").forEach(function (span) {
  span.addEventListener("click", function () {
    if (currentModal) {
      currentModal.style.display = "none";
      currentModal = null;
    }
  });
});

window.addEventListener("click", function (event) {
  if (currentModal && event.target == currentModal) {
    currentModal.style.display = "none";
    currentModal = null;
  }
});

function dropdownButton() {
  document.getElementById("dropdown-links").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches("#drop-button") &&
    !event.target.matches("#drop-image")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

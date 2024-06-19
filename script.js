var modal = document.getElementById("modal");

var projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(function (item) {
  item.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("drop-button").onclick = function () {
  dropdownButton();
};

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

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

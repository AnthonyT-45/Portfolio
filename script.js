var modal = document.getElementById("modal");

var projectItems = document.querySelectorAll(".project-item");

projectItems.forEach(function (item) {
  item.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
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

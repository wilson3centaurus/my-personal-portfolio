// Get the container element
let Container = document.querySelector(".navs");

// Get all buttons with class="btn" inside the container
let navLinks = Container.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("activeLink");
    current[0].className = current[0].className.replace(" activeLink", "");
    this.className += " activeLink";
  });
}

/* Open Overlay Nav*/
function openNav() {
  document.querySelector(".overlay").style.display = "block";
  document.getElementById("myNav").style.height = "100%";
}

/* Close Overlay Nav*/
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

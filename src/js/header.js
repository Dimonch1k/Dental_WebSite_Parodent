// variables
const selectParodent = document.querySelector("#select-parodent");
const sidebar = document.querySelector("#sidebar");
const burgerMenu = document.querySelector(".burger");

// Close select tag
function closeSelect() {
  selectParodent.removeAttribute("open");
}

// When window scroll the sidebar hide automatically
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    selectParodent.removeAttribute("open");

    burgerMenu.classList.remove("active");
    sidebar.classList.remove("active");
  }
});

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  sidebar.classList.toggle("active");
});
const menu_button = document.querySelector(".hamburger");
const nav_menu = document.querySelector(".list");

menu_button.addEventListener("click", function () {
  if (nav_menu.classList.contains("non-active")) {
    nav_menu.classList.remove("non-active");
    nav_menu.classList.add("active1");
  } else if (nav_menu.classList.contains("active1")) {
    nav_menu.classList.remove("active1");
    nav_menu.classList.add("non-active");
  }
});

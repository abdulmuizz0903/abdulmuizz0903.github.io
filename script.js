
const menu_btn = document.querySelector("#menu-button")
const mobile_menu = document.querySelector("#mobile-menu")

menu_btn.addEventListener("click", () => {
    mobile_menu.classList.toggle("hidden");
});
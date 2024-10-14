
function createMenu() {
    const menu = document.getElementsByTagName("menu")[0];

    const menu_button = document.createElement("button");
    menu_button.classList.add("free");
    menu_button.classList.add("menu-button");
    menu_button.onclick = () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
    menu.parentElement.appendChild(menu_button);

    const menu_button_icon = document.createElement("img");
    menu_button_icon.src = "/static/icons/menu.svg";
    menu_button_icon.title = "Menu";
    menu_button_icon.alt = "Menu";
    menu_button.appendChild(menu_button_icon);
}
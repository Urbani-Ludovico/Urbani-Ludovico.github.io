
const menuElements = [
    {
        title: "HOME",
        href: "/"
    },
    {
        title: "Judo",
        children: [
            {
                title: "Titoli",
                href: "/judo/titoli.html"
            },
            {
                title: "Corsi",
                href: "/judo/corsi.html"
            },
            {
                title: "Gare",
                href: "/judo/gare.html"
            },
            {
                title: "Arbitraggi",
                href: "/judo/arbitraggi.html"
            },
            {
                title: "Altro...",
                href: "/judo/altro.html"
            }
        ]
    },
    {
        title: "Corsi",
        href: "/corsi.html"
    }
];

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

    menuElements.forEach(element => {
        const el = document.createElement("a");
        if ("href" in el) {
            el.href = element.href;
        }
        el.innerText = element.title;
        menu.appendChild(el);

        if ("children" in element) {
            element.children.forEach(child => {
                const ch = document.createElement("a");
                if ("href" in ch) {
                    ch.href = child.href;
                }
                ch.innerText = child.title;
                ch.classList.add("sub");
                menu.appendChild(ch);
            })
        }
    });
}
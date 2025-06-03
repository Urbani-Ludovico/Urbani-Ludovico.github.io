const menuElements = [
    {
        title: "HOME",
        href: "/"
    }, {
        title: "Judo",
        children: [
            {
                title: "Titoli",
                href: "/judo/titoli.html"
            }, {
                title: "Corsi",
                href: "/judo/corsi.html"
            }, {
                title: "Gare",
                href: "/judo/gare.html"
            }, {
                title: "Stage",
                href: "/judo/stage.html"
            }, {
                title: "Arbitraggi",
                href: "/judo/arbitraggi.html"
            }, {
                title: "Incarichi",
                href: "/judo/incarichi.html"
            }
        ]
    }, {
        title: "Corsi",
        href: "/corsi.html"
    }
];


/**
 * Create page head
 * @param title
 * @param description
 * @param style
 * @return void
 */
function createHead({
                        title,
                        description,
                        style
                    } = {}) {
    const html = document.getElementsByTagName("html")[0];
    html.lang = "it-IT";

    const head = document.head;

    const charset = document.createElement("meta");
    charset.setAttribute("charset", "UTF-8");
    head.appendChild(charset);

    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
    head.appendChild(viewport);

    const stylesheet_base = document.createElement("link");
    stylesheet_base.rel = "stylesheet";
    stylesheet_base.type = "text/css";
    stylesheet_base.href = "/styles/base.css";
    head.appendChild(stylesheet_base);

    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.href = "/static/icon.svg";
    head.appendChild(icon);

    const title_el = document.createElement("title");
    if (!!title) {
        title_el.innerText = title + " | Ludovico Urbani - Curriculum";
    } else {
        title_el.innerText = "Ludovico Urbani - Curriculum";
    }
    head.appendChild(title_el);

    const description_el = document.createElement("meta");
    description_el.name = "description";
    if (!!description) {
        description_el.content = description;
    } else {
        description_el.content = "Ludovico Urbani - Curriculum";
    }
    head.appendChild(description_el);

    const style_add = document.createElement("style");
    style_add.rel = "stylesheet";
    if (style === "judo") {
        style_add.href = "/styles/judo.css";
        head.appendChild(style_add);
    }
}


/**
 * Create page body layout
 * @return void
 */
function createBody({} = {}) {
    createMenu();
    createHeader();
}


function createMenu() {
    const body = document.body;

    const menu = document.createElement("menu");
    body.appendChild(menu);

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
        if (!!element.href) {
            el.href = element.href;
        }
        el.innerText = element.title;
        menu.appendChild(el);

        if ("children" in element) {
            element.children.forEach(child => {
                const ch = document.createElement("a");
                if (!!child.href) {
                    ch.href = child.href;
                }
                ch.innerText = child.title;
                ch.classList.add("sub");
                menu.appendChild(ch);
            })
        }
    });
}


function createHeader() {
    const body = document.body;

    const header = document.createElement("header");
    body.appendChild(header);

    const profile = document.createElement("img");
    profile.src = "/static/profile.jpg";
    profile.classList.add("profile");
    header.appendChild(profile);

    const content = document.createElement("div");
    content.classList.add("content");
    header.appendChild(content);

    const name = document.createElement("h1");
    name.innerText = "Ludovico Urbani";
    name.classList.add("name");
    content.appendChild(name);

    const definition = document.createElement("span");
    definition.innerText = "Eterno studente!";
    definition.classList.add("definition");
    content.appendChild(definition);

    const birth_date = document.createElement("span");
    birth_date.innerText = "2 giugno 2003";
    birth_date.classList.add("other");
    content.appendChild(birth_date);

    const place = document.createElement("span");
    place.innerText = "Trieste (IT)";
    place.classList.add("other");
    content.appendChild(place);
}
function headInit({
                      title,
                        description,
                      style
}) {
    const head = document.getElementsByTagName("head")[0];

    const charset = document.createElement("meta");
    charset.setAttribute("charset", "UTF-8");
    head.appendChild(charset);

    const viewport = document.createElement("meta");
    viewport.name = "viewport";
    viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
    head.appendChild(viewport);

    const google_verification = document.createElement("meta");
    google_verification.name = "google-site-verification";
    google_verification.content = "zk4bv6arfBwX36NH_ncj8vuPLLkalSAb5MspmWDAvNI";
    head.appendChild(google_verification);

    const stylesheet_base = document.createElement("link");
    stylesheet_base.rel = "stylesheet";
    stylesheet_base.type = "text/css";
    stylesheet_base.href = "/styles/base.css";
    head.appendChild(stylesheet_base);

    const stylesheet_std = document.createElement("link");
    stylesheet_std.rel = "stylesheet";
    stylesheet_std.type = "text/css";
    stylesheet_std.href = "/styles/std.css";
    head.appendChild(stylesheet_std);

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
        description_el.content = title + " | Ludovico Urbani - Curriculum";
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

function headerInit() {
    const header = document.getElementsByTagName("header")[0];

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
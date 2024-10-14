function headInit({
                      title,
                      style
                  }) {
    const head = document.getElementsByTagName("head")[0];

    let content = "<meta charset=\"UTF-8\">" +
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />" +
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/base.css\">" +
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/std.css\">";

    if (!!title) {
        content += "<title>" + title + " | Urbani Ludovico - Curriculum</title>"
    } else {
        content += "<title>Urbani Ludovico - Curriculum</title>"
    }

    if (style === "judo") {
        content += "<link rel=\"stylesheet\" type=\"text/css\" href=\"/styles/judo.css\">"
    }

    head.innerHTML = content;
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
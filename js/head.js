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
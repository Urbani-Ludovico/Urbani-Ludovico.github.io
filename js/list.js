function createList({
                        events
                    }) {
    if (events.length > 0) {
        const s = document.getElementsByTagName("script");
        const parent = s[s.length - 1].parentElement;

        const list = document.createElement("div");
        list.classList.add("list");
        parent.appendChild(list);

        let row = 1;
        let column = 1
        events.forEach(event => {
            const content = document.createElement("div");
            content.classList.add("content");
            content.style.gridRow = row.toString();
            content.style.gridColumn = column.toString();
            list.appendChild(content);

            if ("title" in event) {
                const title = document.createElement("span");
                title.innerHTML = event.title;
                title.classList.add("title");
                content.appendChild(title);
            }

            if ("subtitle" in event) {
                const subtitle = document.createElement("span");
                subtitle.innerHTML = event.subtitle;
                subtitle.classList.add("subtitle");
                content.appendChild(subtitle);
            }

            if ("date" in event) {
                const date = document.createElement("span");
                date.innerHTML = format_date(event.date);
                date.classList.add("date");
                content.appendChild(date);
            } else if ("dates_range" in event) {
                const date = document.createElement("span");
                date.innerHTML = "Dal " + format_date(event.dates_range.from) + ("to" in event.dates_range ? " al " + format_date(event.dates_range.to) : "");
                date.classList.add("date");
                content.appendChild(date);
            } else if ("dates" in event) {
                const date = document.createElement("span");
                date.innerHTML = event.dates.map(d => format_date(d)).join(", ");
                date.classList.add("date");
                content.appendChild(date);
            }

            if ("place" in event) {
                const place = document.createElement("span");
                place.innerHTML = event.place;
                place.classList.add("place");
                content.appendChild(place);
            }

            if ("released_by" in event) {
                const released_by = document.createElement("span");
                released_by.innerHTML = "Rilasciato da: " + event.released_by;
                released_by.classList.add("released-by");
                content.appendChild(released_by);
            }

            if ("inner_html" in event) {
                const inner_html = document.createElement("div");
                inner_html.innerHTML = event.inner_html;
                inner_html.classList.add("inner-html");
                content.appendChild(inner_html);
            }

            if (column === 2) {
                row++;
                column = 1;
            } else {
                column = 2
            }
        });
    }
}


function format_date(date) {
    return date;
}
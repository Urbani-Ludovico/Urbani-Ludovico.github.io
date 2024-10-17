function createTimeline({
                            events
                        }) {
    if (events.length > 0) {
        const s = document.getElementsByTagName("script");
        const parent = s[s.length - 1].parentElement;

        const timeline = document.createElement("div");
        timeline.classList.add("timeline");
        parent.appendChild(timeline);

        const line = document.createElement("div");
        line.classList.add("line");
        timeline.appendChild(line);

        const arrow = document.createElement("div");
        arrow.classList.add("line-arrow");
        timeline.appendChild(arrow);

        let row = 2;
        events.forEach(event => {
            // Dot
            const dot = document.createElement("div");
            dot.classList.add("line-dot");
            dot.style.gridRow = row.toString();
            timeline.appendChild(dot);

            // Event
            const content = document.createElement("div");
            content.classList.add("content");
            content.style.gridRow = row.toString();
            timeline.appendChild(content);

            const arrow = document.createElement("div");
            arrow.classList.add("arrow");
            arrow.style.gridRow = row.toString();
            content.appendChild(arrow);

            if ("title" in event) {
                const title = document.createElement("span");
                title.innerText = event.title;
                title.classList.add("title");
                content.appendChild(title);
            }

            if ("subtitle" in event) {
                const subtitle = document.createElement("span");
                subtitle.innerText = event.subtitle;
                subtitle.classList.add("subtitle");
                content.appendChild(subtitle);
            }

            if ("date" in event) {
                const date = document.createElement("span");
                date.innerText = format_date(event.date);
                date.classList.add("date");
                content.appendChild(date);
            } else if ("dates_range" in event) {
                const date = document.createElement("span");
                date.innerText = "Dal " + format_date(event.dates_range.from) + " al " + format_date(event.dates_range.to);
                date.classList.add("date");
                content.appendChild(date);
            } else if ("dates" in event) {
                const date = document.createElement("span");
                date.innerText =  event.dates.map(d => format_date(d)).join(", ");
                date.classList.add("date");
                content.appendChild(date);
            }

            if ("place" in event) {
                const place = document.createElement("span");
                place.innerText = event.place;
                place.classList.add("place");
                content.appendChild(place);
            }

            if ("effective_date" in event) {
                const date = document.createElement("span");
                date.innerText = "Decorrenza dal: " + format_date(event.effective_date);
                date.classList.add("effective-date");
                content.appendChild(date);
            }

            if ("released_by" in event) {
                const released_by = document.createElement("span");
                released_by.innerText = "Rilasciato da: " + event.released_by;
                released_by.classList.add("released-by");
                content.appendChild(released_by);
            }

            if ("teacher" in event) {
                const teacher = document.createElement("span");
                teacher.innerText = "Docente: " + event.teacher;
                teacher.classList.add("teacher");
                content.appendChild(teacher);
            }

            if ("made_from" in event) {
                const made_from = document.createElement("span");
                made_from.innerText = "Organizzato da: " + event.made_from;
                made_from.classList.add("made-from");
                content.appendChild(made_from);
            }

            if ("hours" in event) {
                const hours = document.createElement("span");
                hours.innerText = event.hours + " ore";
                hours.classList.add("teacher");
                content.appendChild(hours);
            }

            if ("inner_html" in event) {
                const inner_html = document.createElement("div");
                inner_html.innerHTML = event.inner_html;
                inner_html.classList.add("inner-html");
                content.appendChild(inner_html);
            }

            row++;
        });

        line.style.gridRowEnd = (row + 1).toString();
    }
}

function format_date(date) {
    return date;
}
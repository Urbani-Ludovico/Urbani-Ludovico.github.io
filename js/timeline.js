
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

            row++;
        });

        line.style.gridRowEnd = (row + 1).toString();

        const arrow = document.createElement("div");
        arrow.classList.add("line-arrow");
        arrow.style.gridRow = row.toString();
        timeline.appendChild(arrow);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "Obfus8database", url: "https://obfus8database.brrrbrrr.tech/" },
        { name: "PingDesk", url: "http://ticket.brrrbrrr.tech/" },
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(async (project) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = project.url;
        link.textContent = project.name;
        link.target = "_blank";

        let responseTime = null;
        try {
            const start = performance.now();
            const response = await fetch(project.url, { method: "HEAD" });
            const end = performance.now();
            responseTime = Math.round(end - start);

            if (!response.ok) {
                throw new Error("Link Broken");
            }
            link.textContent += ` (${responseTime} ms)`;
        } catch (error) {
            link.textContent += responseTime !== null
                ? ` (Link Broken, ${responseTime} ms)`
                : " (Link Broken)";
            link.style.color = "red";
        }

        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});
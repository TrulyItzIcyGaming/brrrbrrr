document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "Obfus8database", url: "https://obfus8database.brrrbrrr.tech/" },
        { name: "PingDesk", url: "http://ticket.brrrbrrr.tech/" },
        { name: "Icy Web Studio", url: "https://icywebstudio.brrrbrrr.tech/" },
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(async (project) => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = project.url;
        link.textContent = project.name;
        link.target = "_blank";

        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});

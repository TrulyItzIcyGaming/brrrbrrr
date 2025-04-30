document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "Obfus8database", url: "https://obfus8database.brrrbrrr.tech/" },
        { name: "CutieCookie Demo", url: "https://cutiecookie.brrrbrrr.tech/" },
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = project.url;
        link.textContent = project.name;
        link.target = "_blank"; // Open in a new tab
        listItem.appendChild(link);
        projectList.appendChild(listItem);
    });
});
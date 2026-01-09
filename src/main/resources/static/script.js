const API_BASE = "http://localhost:8080/api";

// Fetch Skills
async function loadSkills() {
    const res = await fetch(`${API_BASE}/skills`);
    const skills = await res.json();
    const ul = document.getElementById("skills-list");
    ul.innerHTML = "";
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = `${skill.name} (${skill.level})`;
        ul.appendChild(li);
    });
}

// Fetch Projects
async function loadProjects() {
    const res = await fetch(`${API_BASE}/projects`);
    const projects = await res.json();
    const ul = document.getElementById("projects-list");
    ul.innerHTML = "";
    projects.forEach(project => {
        const li = document.createElement("li");
        li.innerHTML = `<b>${project.title}</b> - ${project.description} <i>(${project.techStack})</i> <a href="${project.githubUrl}" target="_blank">GitHub</a>`;
        ul.appendChild(li);
    });
}

// Submit Contact Form
document.getElementById("contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    if (res.ok) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    } else {
        alert("Error sending message");
    }
});

// Load data on page load
window.onload = () => {
    loadSkills();
    loadProjects();
};

//<div class="nav-brand" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Sumit</div>
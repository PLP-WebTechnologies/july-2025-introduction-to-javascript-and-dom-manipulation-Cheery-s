let studentName = "Serifat"; // variable
let completedParts = 3; // number variable

let statusMessage = "";
if (completedParts === 4) {
  statusMessage = studentName + " has completed all assignment parts 🎉";
} else {
  statusMessage = studentName + " is still working on the assignment... 📝";
}

// Display result in output section
document.getElementById("output").innerHTML += `<p>${statusMessage}</p>`;

// ============================
// Part 2: Functions
// ============================

// Function 1: Format project titles
function formatTitle(title) {
  return title.toUpperCase();
}

// Function 2: Calculate total projects
function countProjects(projectsArray) {
  return projectsArray.length;
}

// ============================
// Part 3: Loops
// ============================

// Array of skills and projects

const skills = [
  "HTML5 & Semantic Web Design",
  "CSS3 (Flexbox & Grid)",
  "Responsive Web Design",
  "JavaScript Basics",
];
const projects = [
  { title: "Project 1: HTML Page", link: "#" },
  { title: "Project 2: CSS Styling", link: "#" },
  { title: "Project 3: JavaScript Basics", link: "#" },
  { title: "Project 4: Portfolio Project", link: "#" },
];

// Use forEach loop to insert projects dynamically
const projectGrid = document.querySelector(".project-grid");
projects.forEach((project) => {
  const li = document.createElement("li");
  li.classList.add("project-card");
  li.innerHTML = `<a href="${project.link}">${formatTitle(project.title)}</a>`;
  projectGrid.appendChild(li);
});

const skillGrid = document.querySelector(".skill-grid");
skills.forEach((skill) => {
  const li = document.createElement("li");
  li.classList.add("skill-list");
  li.style.listStyle="square";
  li.style.color = "purple";

  li.innerHTML = `<div>${formatTitle(skill)}</div>`;
  skillGrid.appendChild(li);
});

const asideprojectGrid = document.querySelector("aside .project-grid");
projects.forEach((project) => {
  const li = document.createElement("li");
  li.classList.add("project-card");
  li.innerHTML = `<a href="${project.link}">${formatTitle(project.title)}</a>`;
  asideprojectGrid.appendChild(li);
});

// ============================
// Part 4: DOM Manipulation
// ============================

// Insert total number of projects
const totalProjects = countProjects(projects);
document.getElementById(
  "output"
).innerHTML += `<p>Total Projects: ${totalProjects}</p>`;

// Change the header text dynamically
document.querySelector("header h1").textContent = "Jinadu Jadesola";

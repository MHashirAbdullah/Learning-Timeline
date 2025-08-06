//Mera cheetah Code
// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });

// const userName = "MHashirAbdullah";

// async function fetchRepo() {
//   try {
//     const res = await fetch(`https://api.github.com/users/${userName}/repos`);
//     const repos = await res.json();
//     const repoList = document.getElementById("repo-list");
//     repos.slice(0, 5).forEach((repo) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<a href="${repo.html_url}" target="_blank">${
//         repo.name
//       }</a>:  ${repo.description || "No description available"}`;
//       repoList.appendChild(li);
//     });
//   } catch (error) {
//     console.error("Error fetching repositories:", error);
//   }
// }

// fetchRepo();

// const socket = new WebSocket("ws://localhost:3000");
// socket.onmessage = (event) => {
//   const countEl = document.getElementById("visitor-count");
//   countEl.textContent = `Visitor Online: ${event.data}`;
// };

// const darkModeToggle = document.getElementById("dark-mode-toggle");
// darkModeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
// });

// document.getElementById("contact-form").addEventListener("submit", (e) => {
//   e.preventDefault();
// alert('Form Submitted! Thank you for your message.');
// });


//Code from chatgpt
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const userName = "MHashirAbdullah";

function showLoader() {
  const projectsSection = document.getElementById("projects");
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `
    <div class="spinner"></div>
    <p>Loading GitHub repositories...</p>
  `;
  projectsSection.appendChild(loader);
  return loader;
}

// Function to hide loader
function hideLoader(loader) {
  if (loader && loader.parentNode) {
    loader.parentNode.removeChild(loader);
  }
}

function showError(message) {
  const repoList = document.getElementById("repo-list");
  const li = document.createElement("li");
  li.innerHTML = `
    <div style="text-align: center; color: #e74c3c; padding: 2rem;">
      <h3>⚠️ ${message}</h3>
      <p>Please try again later or check your internet connection.</p>
    </div>
  `;
  li.style.gridColumn = "1 / -1";
  repoList.appendChild(li);
}

async function fetchRepo() {
  const loader = showLoader();

  try {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`);

    if (!res.ok) {
      throw new Error(`GitHub API responded with status: ${res.status}`);
    }

    const repos = await res.json();
    const repoList = document.getElementById("repo-list");
    hideLoader(loader);

    if (repos.length === 0) {
      showError("No repositories found");
      return;
    }

    const sortedRepos = repos
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 30);

    sortedRepos.forEach((repo, index) => {
      const li = document.createElement("li");
      const updatedDate = new Date(repo.updated_at).toLocaleDateString();

      li.innerHTML = `
        <h3>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            ${repo.name}
          </a>
        </h3>
        <p>${repo.description || "No description available"}</p>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
          <span>Updated: ${updatedDate}</span>
          <span>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</span>
        </div>
      `;

      li.style.animationDelay = `${index * 0.1}s`;
      repoList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching repositories:", error);
    hideLoader(loader);
    showError("Failed to load repositories");
  }
}

fetchRepo();

const socket = new WebSocket("ws://localhost:3000");
socket.onmessage = (event) => {
  const countEl = document.getElementById("visitor-count");
  countEl.textContent = `Visitor Online: ${event.data}`;
};

const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const submitButton = e.target.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  setTimeout(() => {
    alert("Form Submitted! Thank you for your message.");
    e.target.reset();
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }, 1000);
});

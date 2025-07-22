const myProjects = [
  {
    name: "gratefultime",
    url: "https://gratefultime.app/",
    description: "digital gratitude journal",
  },
  {
    name: "mysimplesat",
    url: "https://github.com/eesazahed/mysimplesat-frontend/",
    description: "AI SAT prep app",
  },
  {
    name: "laser social",
    url: "https://laser.vercel.app/feed",
    description: "functioning social media platform",
  },
  {
    name: "less letters",
    url: "https://lessletters.vercel.app/",
    description: "say it but with less letters",
  },
  {
    name: "explore ontario",
    url: "https://isu.vercel.app/",
    description: "tourism website (school project)",
  },
  {
    name: "summarize-hacklet",
    url: "https://github.com/eesazahed/summarize-hacklet",
    description: "convenient summaries",
  },
  {
    name: "next-auth-boilerplate",
    url: "https://github.com/eesazahed/next-auth-boilerplate",
    description: "full stack boilerplate",
  },
  {
    name: "stockbot",
    url: "https://github.com/eesazahed/stockbot",
    description: "a slack bot that fetches stock prices",
  },
  {
    name: "quadratic-helper",
    url: "https://github.com/eesazahed/quadratic-helper",
    description: "helps with quadratic equations",
  },
  {
    name: "eesa.hackclub.app",
    url: "https://github.com/eesazahed/eesa-hackclub-app",
    description: "this website",
  },
];

const myLinks = [
  {
    name: "github",
    url: "https://github.com/eesazahed",
    description: "my repos",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/eszhd/",
    description: "my profile",
  },
  {
    name: "hack club slack",
    url: "https://hackclub.slack.com/team/U074SFQFJMS",
    description: "say hi",
  },
  {
    name: "freecodecamp",
    url: "https://www.freecodecamp.org/news/author/eesazahed/",
    description: "my articles",
  },
  {
    name: "album",
    url: "https://eesazahed.github.io/album/",
    description: "all photographs are my original works",
  },
  {
    name: "twitter",
    url: "https://x.com/eesazahed",
    description: "i never use it",
  },
  {
    name: "instagram",
    url: "https://instagram.com/eesazahed",
    description: "i never use it",
  },
  {
    name: "bluesky",
    url: "https://bsky.app/profile/eszhd.bsky.social",
    description: "i never use it",
  },
  {
    name: "bitcoin",
    url: "bitcoin:bc1q8gw6zh8tz9rcz9jacz7csls0ldjavnsm8dk3zt",
    description: "there is no second best",
  },
];

function renderLink({ name, url, description, color }) {
  const li = document.createElement("li");
  li.className = "list-item";

  const a = document.createElement("a");
  a.className = "list-item-link";
  a.href = url;
  a.textContent = name;
  a.target = "_blank";
  a.rel = "noreferrer";
  if (color) a.style.color = color;

  const span = document.createElement("span");
  span.className = "description";
  span.textContent = ` ~ ${description}`;

  li.appendChild(a);
  li.appendChild(span);

  return li;
}

document.addEventListener("DOMContentLoaded", () => {
  const linksUl = document.getElementById("links");

  fetch("https://api.github.com/users/eesazahed")
    .then((res) => res.json())
    .then((data) => {
      myLinks[0].description = `my ${data.public_repos || 0} public repos`;
    })
    .finally(() => {
      for (const link of myLinks) {
        linksUl.appendChild(renderLink(link));
      }
    });

  const projectsUl = document.getElementById("projects");
  for (const project of myProjects) {
    projectsUl.appendChild(renderLink({ ...project, color: "#34c05a" }));
  }

  const email = document.getElementById("email");
  email.addEventListener("click", (e) => {
    if (!email.href.includes("mailto:")) {
      e.preventDefault();
      email.textContent = atob("ZWVzYUBoYWNrY2x1Yi5hcHA=");
      email.href = `mailto:${email.textContent}`;
    }
  });
});

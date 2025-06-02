import "./ProjectCard.css";

export const ProjectCard = (project) => `
  <article class="project-card">
    <figure class="project-image-container">
      <img src="${project.image}" alt="${project.title}" class="project-image" />
    </figure>
    
    <h2>${project.title}</h2>
    <p>${project.description}</p>

    <div class="project-detail">
      
      <div class="tech-stack">
        ${project.tech
          .map(
            (tech) =>
              `<img src="${tech.icon}" alt="${tech.name}" title="${tech.name}" />`
          )
          .join("")}
      </div>

      <div class="project-links">

        <a href="${project.github}" target="_blank">
          <img src="/icons/github.png" alt="GitHub" />
        </a>

        ${
          project.link
            ? `
          <a href="${project.link}" target="_blank">

            <img src="/icons/link.png" alt="Live Site"/>
            
          </a>`
            : ""
        }

      </div>

    </div>
  </article>
`;

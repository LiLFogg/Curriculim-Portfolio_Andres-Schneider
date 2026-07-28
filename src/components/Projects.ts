import { projects } from "../data/projects";

export function Projects() {
  return `
  
  <section id="projects">

      <h2 class="section-title">
        PROYECTOS
      </h2>

      <div class="projects-grid">

          ${projects
            .map(
              (project) => `
              
                <div class="project-card">

                    <h3>${project.title}</h3>

                    <img
                      src="${project.image}"
                      alt="${project.title}"
                    >

                    <p>${project.description}</p>

                    <a
                      href="${project.link}"
                      target="_blank"
                    >
                      Ver Proyecto
                    </a>

                </div>
            `
            )
            .join("")}

      </div>

  </section>
  `;
}
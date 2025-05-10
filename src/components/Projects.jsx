import { Github, ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "ONG Crescer Cidadão",
      description:
        "Site para captação de recursos e visibilidade para a ONG Crescer Cidadão, focado em melhorar a presença digital e facilitar doações.",
      tags: ["React", "JavaScript", "CSS", "Responsivo"],
      image: "project1.jpg",
      githubLink: "https://github.com/IIIcaro/Tcc-Crescer-cidadao/tree/main/src",
      liveLink: "#",
    },
    {
      title: "App de Delivery",
      description:
        "Aplicativo mobile desenvolvido com Flutter para serviço de delivery, com funcionalidades de rastreamento em tempo real.",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      image: "project2.jpg",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Dashboard Administrativo",
      description:
        "Painel administrativo para gerenciamento de usuários e produtos, com autenticação e diferentes níveis de acesso.",
      tags: ["React", "AWS", "Material UI"],
      image: "project3.jpg",
      githubLink: "#",
      liveLink: "#",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>Projetos</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-content">
        <div className="projects-intro">
          <h3>Meus Trabalhos Recentes</h3>
          <p>
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência em diferentes
            tecnologias.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title.substring(0, 2).toUpperCase()}</span>
                </div>
              </div>
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    <span>Código</span>
                  </a>
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

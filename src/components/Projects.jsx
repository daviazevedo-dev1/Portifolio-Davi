"use client"

import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      title: t.project1Title,
      description: t.project1Description,
      tags: ["React", "Vite", "MySQL", "PHP", "CSS", "Responsivo"],
      image: "project1.jpg",
      githubLink: "https://github.com/daviazevedo-dev1/TCC-CIDADAO-Ong.git",
      liveLink: "#",
    },
    {
      title: t.project2Title,
      description: t.project2Description,
      tags: ["PHP", "MySQL", "API REST", "Backend"],
      image: "project2.jpg",
      githubLink: "https://github.com/daviazevedo-dev1/tcc-backend.git",
      liveLink: "#",
    },
    {
      title: t.project3Title,
      description: t.project3Description,
      tags: ["React", "AWS", "Material UI"],
      image: "project3.jpg",
      githubLink: "#",
      liveLink: "#",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2>{t.projectsTitle}</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-content">
        <div className="projects-intro">
          <h3>{t.recentWork}</h3>
          <p>{t.projectsDescription}</p>
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
                    <span>{t.codeButton}</span>
                  </a>
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} />
                    <span>{t.demoButton}</span>
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

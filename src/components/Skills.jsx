"use client"

import { Smartphone, Server, Code, Database } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"

const Skills = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const skills = [
    // 🟢 Principais habilidades
    {
      icon: <Code size={32} />,
      title: "React + Vite",
      description: t.reactDescription,
      level: 75,
      category: "main",
    },
    {
      icon: <Database size={32} />,
      title: "MySQL",
      description: t.mysqlDescription,
      level: 70,
      category: "main",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Flutter",
      description: t.flutterDescription,
      level: 65,
      category: "main",
    },
    {
      icon: <Server size={32} />,
      title: "PHP (Backend)",
      description: t.phpDescription,
      level: 40,
      category: "main",
    },

    // 🟡 Tecnologias em aprendizado
    {
      icon: <Server size={32} />,
      title: "AWS EC2",
      description: t.awsDescription,
      level: 50,
      category: "learning",
    },
    {
      icon: <Code size={32} />,
      title: "TypeScript",
      description: t.typescriptDescription,
      level: 35,
      category: "learning",
    },
    {
      icon: <Code size={32} />,
      title: "Python",
      description: t.pythonDescription,
      level: 30,
      category: "learning",
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>{t.skillsTitle}</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-content">
        <div className="skills-intro">
          <h3>{t.skillsSubtitle}</h3>
          <p>{t.skillsDescription}</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
              <div className="skill-level-container">
                <div className="skill-level-bar">
                  <div className="skill-level-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
                <span className="skill-level-text">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

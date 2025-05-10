import { Smartphone, Server, Code, Database, Layout } from "lucide-react"

const Skills = () => {
  const skills = [
    {
      icon: <Smartphone size={32} />,
      title: "Desenvolvimento Mobile",
      description:
        "Criação de aplicativos móveis utilizando Flutter, com foco em interfaces responsivas e experiência do usuário.",
      level: 80,
    },
    {
      icon: <Server size={32} />,
      title: "AWS EC2",
      description: "Configuração e gerenciamento de instâncias EC2 para hospedagem de aplicações na nuvem da Amazon.",
      level: 45,
    },
    {
      icon: <Database size={32} />,
      title: "AWS IAM",
      description: "Gerenciamento de identidade e acesso para controle seguro de recursos na AWS.",
      level: 40,
    },
    {
      icon: <Code size={32} />,
      title: "Desenvolvimento Web",
      description: "Criação de interfaces web utilizando React e outras tecnologias modernas de frontend.",
      level: 70,
    },
    {
      icon: <Layout size={32} />,
      title: "UI/UX Design",
      description: "Design de interfaces de usuário intuitivas e experiências que priorizam a usabilidade.",
      level: 75,
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2>Habilidades</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-content">
        <div className="skills-intro">
          <h3>Minhas Competências Técnicas</h3>
          <p>
            Ao longo da minha jornada acadêmica e projetos pessoais, desenvolvi diversas habilidades técnicas que me
            permitem criar soluções eficientes e modernas.
          </p>
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

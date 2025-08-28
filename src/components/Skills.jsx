import { Smartphone, Server, Code, Database, Layout } from "lucide-react"

const Skills = () => {
  const skills = [
    // 🟢 Principais habilidades
    {
      icon: <Code size={32} />,
      title: "React + Vite",
      description:
        "Desenvolvimento de aplicações web modernas e performáticas utilizando React com Vite.",
      level: 75,
      category: "main",
    },
    {
      icon: <Database size={32} />,
      title: "MySQL",
      description:
        "Modelagem e gerenciamento de bancos de dados relacionais para aplicações web.",
      level: 70,
      category: "main",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Flutter",
      description:
        "Criação de aplicativos móveis multiplataforma com interfaces responsivas e foco na experiência do usuário.",
      level: 65,
      category: "main",
    },
    {
      icon: <Server size={32} />,
      title: "PHP (Backend)",
      description:
        "Desenvolvimento de APIs e lógica de negócio no backend, integrando com MySQL.",
      level: 40,
      category: "main",
    },

    // 🟡 Tecnologias em aprendizado
    {
      icon: <Server size={32} />,
      title: "AWS EC2",
      description:
        "Configuração e gerenciamento de instâncias EC2 para hospedagem de aplicações na nuvem da Amazon.",
      level: 50,
      category: "learning",
    },
    {
      icon: <Code size={32} />,
      title: "TypeScript",
      description:
        "Noções iniciais em tipagem estática para projetos React e backend, atualmente em aprendizado.",
      level: 35,
      category: "learning",
    },
    {
      icon: <Code size={32} />,
      title: "Python",
      description:
        "Conhecimentos básicos na linguagem Python, aplicando em estudos e pequenos projetos.",
      level: 30,
      category: "learning",
    },
  ];

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

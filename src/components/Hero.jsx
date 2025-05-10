"use client"

import { ArrowDown } from "lucide-react"

const Hero = ({ setActiveSection }) => {
  const handleScrollDown = () => {
    setActiveSection("about")
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="greeting">Olá, eu sou</span>
            <span className="name">Davi Oliveira Azevedo</span>
            <span className="title">Desenvolvedor Mobile & Web</span>
          </h1>
          <p className="description">
            Estudante de Análise e Desenvolvimento de Sistemas, especializado em Flutter e com conhecimentos em AWS.
          </p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={handleScrollDown}>
              Conheça meu trabalho
            </button>
            <a href="#contact" className="secondary-button" onClick={() => setActiveSection("contact")}>
              Entre em contato
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-container">
            <pre>
              <code>
                <span className="code-comment">// Davi.js</span>
                <span className="code-keyword">class</span> <span className="code-class">Developer</span> {"{"}
                <span className="code-property">name</span>:{" "}
                <span className="code-string">'Davi Oliveira Azevedo'</span>,<span className="code-property">age</span>:{" "}
                <span className="code-number">19</span>,<span className="code-property">education</span>:{" "}
                <span className="code-string">'Análise e Desenvolvimento de Sistemas'</span>,
                <span className="code-property">skills</span>: [<span className="code-string">'Flutter'</span>,
                <span className="code-string">'Mobile Development'</span>,<span className="code-string">'AWS EC2'</span>
                ,<span className="code-string">'AWS IAM'</span>,<span className="code-string">'React'</span>
                ],
                <span className="code-method">sayHello</span>() {"{"}
                <span className="code-keyword">return</span>{" "}
                <span className="code-string">'Bem-vindo ao meu portfolio!'</span>;{"}"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <button className="scroll-down" onClick={handleScrollDown}>
        <ArrowDown size={24} />
      </button>
    </section>
  )
}

export default Hero

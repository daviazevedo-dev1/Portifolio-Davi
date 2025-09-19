"use client"

import { ArrowDown } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"

const Hero = ({ setActiveSection }) => {
  const { language } = useLanguage()
  const t = translations[language]

  const handleScrollDown = () => {
    setActiveSection("about")
    document.getElementById("about").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="greeting">{t.greeting}</span>
            <span className="name">{t.name}</span>
            <span className="title">{t.title}</span>
          </h1>
          <p className="description">{t.heroDescription}</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={handleScrollDown}>
              {t.knowMyWork}
            </button>
            <a href="#contact" className="secondary-button" onClick={() => setActiveSection("contact")}>
              {t.getInTouch}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-container">
            <pre>
              <code>
                <span className="code-keyword">class</span> <span className="code-class">Developer</span> {"{"}
                <span className="code-property">name</span>:{" "}
                <span className="code-string">'Davi Oliveira Azevedo'</span>,<span className="code-property">age</span>:{" "}
                <span className="code-number">19</span>,<span className="code-property">education</span>:{" "}
                <span className="code-string">'Análise e Desenvolvimento de Sistemas'</span>,
                <span className="code-property">skills</span>: [<span className="code-string">'Flutter'</span>,
                <span className="code-string">'Mobile Development'</span>,<span className="code-string">'AWS EC2'</span>
                ,<span className="code-string">'Php'</span>,<span className="code-string">'React'</span>,{" "}
                <span className="code-string">'TypeScript'</span>,
                <span className="code-string">'Desenvolvimento Web'</span>
                ],
                <span className="code-method">sayHello</span> {"{"}
                <span className="code-string">'{t.welcomeMessage}'</span>;{"}"}
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

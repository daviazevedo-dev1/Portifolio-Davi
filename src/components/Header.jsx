"use client"

import { useState, useEffect } from "react"
import { Code, Menu, X } from "lucide-react"

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)

    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo" onClick={() => handleNavClick("home")}>
          <Code size={24} />
          <span>Davi.dev</span>
        </div>

        <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button className={activeSection === "home" ? "active" : ""} onClick={() => handleNavClick("home")}>
                Home
              </button>
            </li>
            <li>
              <button className={activeSection === "about" ? "active" : ""} onClick={() => handleNavClick("about")}>
                Sobre
              </button>
            </li>
            <li>
              <button className={activeSection === "skills" ? "active" : ""} onClick={() => handleNavClick("skills")}>
                Habilidades
              </button>
            </li>
            <li>
              <button
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => handleNavClick("projects")}
              >
                Projetos
              </button>
            </li>
            <li>
              <button className={activeSection === "contact" ? "active" : ""} onClick={() => handleNavClick("contact")}>
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

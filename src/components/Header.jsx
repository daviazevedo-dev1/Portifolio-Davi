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

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [mobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

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

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button
                className={activeSection === "home" ? "active" : ""}
                onClick={() => handleNavClick("home")}
                aria-label="Ir para Home"
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleNavClick("about")}
                aria-label="Ir para Sobre"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => handleNavClick("skills")}
                aria-label="Ir para Habilidades"
              >
                Habilidades
              </button>
            </li>
            <li>
              <button
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => handleNavClick("projects")}
                aria-label="Ir para Projetos"
              >
                Projetos
              </button>
            </li>
            <li>
              <button
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleNavClick("contact")}
                aria-label="Ir para Contato"
              >
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

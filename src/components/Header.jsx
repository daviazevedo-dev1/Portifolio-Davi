"use client"

import { useState, useEffect } from "react"
import { Code, Menu, X, Globe } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

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

        <div className="header-actions">
          <button
            className="language-switcher"
            onClick={toggleLanguage}
            aria-label={`Switch to ${language === "pt" ? "English" : "Portuguese"}`}
          >
            <Globe size={18} />
            <span>{language.toUpperCase()}</span>
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <button
                className={activeSection === "home" ? "active" : ""}
                onClick={() => handleNavClick("home")}
                aria-label={t.goToHome}
              >
                {t.home}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleNavClick("about")}
                aria-label={t.goToAbout}
              >
                {t.about}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "skills" ? "active" : ""}
                onClick={() => handleNavClick("skills")}
                aria-label={t.goToSkills}
              >
                {t.skills}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "projects" ? "active" : ""}
                onClick={() => handleNavClick("projects")}
                aria-label={t.goToProjects}
              >
                {t.projects}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleNavClick("contact")}
                aria-label={t.goToContact}
              >
                {t.contact}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

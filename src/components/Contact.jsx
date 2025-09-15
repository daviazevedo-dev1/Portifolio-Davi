"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você implementaria a lógica para enviar o formulário
    console.log("Form submitted:", formData)
    alert("Mensagem enviada com sucesso! (Simulação)")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2>{t.contactTitle}</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>{t.letsChat}</h3>
          <p>{t.contactDescription}</p>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h4>{t.email}</h4>
                <p>davifsaazevedo1234@gmail.com</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h4>{t.phone}</h4>
                <p>(75) 9 8808-1908</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h4>{t.location}</h4>
                <p>{t.locationValue}</p>
              </div>
            </div>
          </div>

          <div className="social-links-container">
            <h4 className="social-title">{t.socialNetworks}</h4>
            <div className="social-links">
              <a
                href="https://github.com/DavviiUiu"
                className="social-link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/davi-azevedo-39a851303/"
                className="social-link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/daviazevedo___/"
                className="social-link-contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.nameField}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.emailField}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.subjectField}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.messageField}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              <Send size={18} />
              <span>{t.sendMessage}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

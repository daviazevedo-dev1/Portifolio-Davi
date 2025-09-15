"use client"

import profileImage from "../assets/img-portifolio.png"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations/translations"

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>{t.aboutTitle}</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-image">
            <img src={profileImage || "/placeholder.svg"} alt="Davi Oliveira Azevedo" />
          </div>
        </div>
        <div className="about-text">
          <h3>{t.whoAmI}</h3>
          <p>{t.aboutDescription1}</p>
          <p>{t.aboutDescription2}</p>
          <p>{t.aboutDescription3}</p>
          <p>{t.aboutDescription4}</p>
          <p>{t.aboutDescription5}</p>
          <div className="about-details">
            <div className="detail">
              <span className="detail-label">{t.nameLabel}</span>
              <span className="detail-value">{t.nameValue}</span>
            </div>
            <div className="detail">
              <span className="detail-label">{t.ageLabel}</span>
              <span className="detail-value">{t.ageValue}</span>
            </div>
            <div className="detail">
              <span className="detail-label">{t.educationLabel}</span>
              <span className="detail-value">{t.educationValue}</span>
            </div>
            <div className="detail">
              <span className="detail-label">{t.locationLabel}</span>
              <span className="detail-value">{t.locationValue}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

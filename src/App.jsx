"use client"

import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="app">
      <div className="noise"></div>
      <div className="app-container">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Hero setActiveSection={setActiveSection} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

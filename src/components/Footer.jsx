import { Github, Linkedin, Twitter, Instagram, Code } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Code size={24} />
            <span>Davi.dev</span>
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Davi Oliveira Azevedo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

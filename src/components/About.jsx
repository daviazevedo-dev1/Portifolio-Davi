const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>Sobre Mim</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="image-placeholder">
            <span>DA</span>
          </div>
        </div>
        <div className="about-text">
          <h3>Quem sou eu?</h3>
          <p>
            Olá! Sou Davi Oliveira Azevedo, tenho 19 anos e sou um desenvolvedor em formação, atualmente cursando
            Análise e Desenvolvimento de Sistemas.
          </p>
          <p>
            Minha jornada na programação começou com o desenvolvimento de aplicativos móveis utilizando Flutter, onde
            adquiri habilidades sólidas em criação de interfaces responsivas e funcionais.
          </p>
          <p>
            Além disso, possuo conhecimentos em serviços AWS, especificamente EC2 para computação em nuvem e IAM para
            gerenciamento de identidade e acesso, o que me permite entender melhor a infraestrutura necessária para
            aplicações modernas.
          </p>
          <p>
            Estou em busca de oportunidades profissionais onde possa aplicar e expandir meus conhecimentos, contribuindo
            para projetos inovadores enquanto continuo meu desenvolvimento como programador.
          </p>
          <div className="about-details">
            <div className="detail">
              <span className="detail-label">Nome:</span>
              <span className="detail-value">Davi Oliveira Azevedo</span>
            </div>
            <div className="detail">
              <span className="detail-label">Idade:</span>
              <span className="detail-value">19 anos</span>
            </div>
            <div className="detail">
              <span className="detail-label">Formação:</span>
              <span className="detail-value">Análise e Desenvolvimento de Sistemas (cursando)</span>
            </div>
            <div className="detail">
              <span className="detail-label">Localização:</span>
              <span className="detail-value">Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

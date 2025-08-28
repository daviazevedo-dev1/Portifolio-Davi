import profileImage from "../assets/img-portifolio.png"; 


const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2>Sobre Mim</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <div className="profile-image">
            <img src= {profileImage} alt="Davi Oliveira Azevedo" />
          </div>
        </div>
        <div className="about-text">
          <h3>Quem sou eu?</h3>
          <p>
  Olá! Sou Davi Oliveira Azevedo, tenho 19 anos e sou graduado em Análise e Desenvolvimento de Sistemas.  
</p>
<p>
  Minha jornada na programação começou com a lógica de programação, onde construí a base do meu raciocínio computacional. Com o tempo, fui avançando e explorando diferentes tecnologias que ampliaram minhas habilidades como desenvolvedor.  
</p>
<p>
  Atualmente possuo conhecimentos em <strong>React + Vite</strong> para o desenvolvimento de interfaces modernas e dinâmicas, além de experiência com <strong>PHP</strong> para o backend e <strong>MySQL</strong> para modelagem e gerenciamento de bancos de dados relacionais.  
</p>
<p>
  Estou em busca de oportunidades profissionais onde possa aplicar e expandir esses conhecimentos, contribuindo para projetos inovadores enquanto continuo meu crescimento como programador.  
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
              <span className="detail-value">(Tecnologo) em Análise e Desenvolvimento de Sistemas</span>
            </div>
            <div className="detail">
              <span className="detail-label">Localização:</span>
              <span className="detail-value">Feira de Santana - Bahia, Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

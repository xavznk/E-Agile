import "../styles/Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Boostez vos projets avec l'Agilité !</h1>
        <p>
          Apprenez les méthodes, techniques et outils pour une gestion de projet efficace. Nos formations sont conçues
          pour vous aider à réussir vos projets en collaboration.
        </p>
        <button className="cta-button">En savoir plus</button>
      </div>
      <div className="hero-image">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Illustration d'une personne travaillant sur un ordinateur portable"
        />
      </div>
    </section>
  )
}

export default Hero

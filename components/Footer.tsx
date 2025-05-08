import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>E-AGILE</h2>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Accueil</h3>
            <ul>
              <li>
                <a href="#">Cours</a>
              </li>
              <li>
                <a href="#">À propos de nous</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Légal</h3>
            <ul>
              <li>
                <a href="#">Conditions d'utilisation</a>
              </li>
              <li>
                <a href="#">Politique de confidentialité</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023-2024 E-AGILE. Tous droits réservés.</p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            T
          </a>
          <a href="#" className="social-icon">
            F
          </a>
          <a href="#" className="social-icon">
            I
          </a>
          <a href="#" className="social-icon">
            L
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

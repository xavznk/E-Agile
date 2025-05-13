import Link from "next/link"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>E-AGILE</h2>
          <p>Apprenez les méthodes agiles pour booster vos projets</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/cours">Cours</Link>
              </li>
              <li>
                <Link href="/a-propos-de-nous">À propos de nous</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Cours</h3>
            <ul>
              <li>
                <Link href="/cours/introduction-aux-methodes-agiles">Introduction aux méthodes agiles</Link>
              </li>
              <li>
                <Link href="/cours/cadre-scrum-et-kanban">Cadre Scrum et Kanban</Link>
              </li>
              <li>
                <Link href="/cours/techniques-de-planification">Techniques de planification</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Légal</h3>
            <ul>
              <li>
                <Link href="#">Conditions d'utilisation</Link>
              </li>
              <li>
                <Link href="#">Politique de confidentialité</Link>
              </li>
              <li>
                <Link href="#">Mentions légales</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:contact@e-agile.com">contact@e-agile.com</a>
              </li>
              <li>
                <a href="tel:+33123456789">+33 1 23 45 67 89</a>
              </li>
              <li>
                <address>123 Rue de l'Agilité, 75000 Paris</address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023-2024 E-AGILE. Tous droits réservés.</p>
        <div className="social-icons">
          <a href="#" className="social-icon" aria-label="Twitter">
            T
          </a>
          <a href="#" className="social-icon" aria-label="Facebook">
            F
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            I
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            L
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

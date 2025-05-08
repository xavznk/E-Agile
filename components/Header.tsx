import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">E-AGILE</a>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/cours">Cours</a>
          </li>
          <li>
            <a href="#a-propos-de-nous">À propos de nous</a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="/connexion" className="connexion">
          Connexion
        </a>
        <a href="/inscription" className="inscription">
          S'inscrire
        </a>
      </div>
    </header>
  )
}

export default Header

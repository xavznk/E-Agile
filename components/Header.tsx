"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "../styles/Header.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Vérifier si l'écran est mobile au chargement et lors du redimensionnement
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Vérifier au chargement
    checkIfMobile()

    // Ajouter un écouteur d'événement pour le redimensionnement
    window.addEventListener("resize", checkIfMobile)

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    if (isMobile) {
      setMenuOpen(false)
    }
  }

  return (
    <header className="header">
      <div className="logo">
        <Link href="/">E-AGILE</Link>
      </div>

      <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Menu">
        <span className="menu-icon">{menuOpen ? "✕" : "☰"}</span>
      </button>

      <nav className={`navigation ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/cours" onClick={closeMenu}>
              Cours
            </Link>
          </li>
          <li>
            <Link href="/a-propos-de-nous" onClick={closeMenu}>
              À propos de nous
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`auth-buttons ${menuOpen ? "active" : ""}`}>
        <Link href="/connexion" className="connexion" onClick={closeMenu}>
          Connexion
        </Link>
        <Link href="/inscription" className="inscription" onClick={closeMenu}>
          S'inscrire
        </Link>
      </div>
    </header>
  )
}

export default Header

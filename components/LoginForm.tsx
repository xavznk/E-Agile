"use client"

import type React from "react"

import { useState } from "react"
import "../styles/AuthForms.css"
import Link from "next/link"

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de connexion à implémenter
    console.log("Tentative de connexion")
  }

  return (
    <div className="auth-form login-form">
      <h2>Bienvenue sur E-AGILE !</h2>

      <div className="auth-tabs">
        <button className="auth-tab active">Connexion</button>
        <Link href="/inscription" className="auth-tab">
          S'inscrire
        </Link>
      </div>

      <p className="auth-description">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" id="username" placeholder="Entrez votre nom d'utilisateur" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Entrez votre mot de passe"
              required
            />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label htmlFor="remember">Se souvenir de moi</label>
          </div>
          <Link href="/mot-de-passe-oublie" className="forgot-password">
            Mot de passe oublié ?
          </Link>
        </div>

        <button type="submit" className="auth-submit-button">
          Connexion
        </button>
      </form>
    </div>
  )
}

export default LoginForm

"use client"

import type React from "react"

import { useState } from "react"
import "../styles/AuthForms.css"
import Link from "next/link"

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription à implémenter
    console.log("Tentative d'inscription")
  }

  return (
    <div className="auth-form signup-form">
      <h2>Rejoignez E-AGILE</h2>

      <div className="auth-tabs">
        <Link href="/connexion" className="auth-tab">
          Connexion
        </Link>
        <button className="auth-tab active">S'inscrire</button>
      </div>

      <p className="auth-description">Créez votre compte pour accéder à tous nos cours et ressources.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Nom complet</label>
          <input type="text" id="fullname" placeholder="Entrez votre nom complet" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Entrez votre email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Créez votre mot de passe"
              required
            />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="form-options">
          <div className="terms-agreement">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">J'accepte les conditions d'utilisation</label>
          </div>
        </div>

        <button type="submit" className="auth-submit-button">
          S'inscrire
        </button>
      </form>
    </div>
  )
}

export default SignupForm

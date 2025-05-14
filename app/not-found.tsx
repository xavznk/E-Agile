import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import "@/styles/NotFound.css"

export default function NotFound() {
  return (
    <div className="app">
      <Header />
      <main className="not-found-page">
        <div className="not-found-container">
          <div className="not-found-image">
            <img src="/2678.png" alt="Illustration page non trouvée" />
            <h2>Page non trouvée</h2>
            <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
            <div className="not-found-actions">
              <Link href="/" className="not-found-button">
                Retour à l'accueil
              </Link>
              <Link href="/cours" className="not-found-button secondary">
                Voir nos cours
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

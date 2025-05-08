import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CoursesList from "@/components/CoursesList"
import "@/styles/CoursesPage.css"

export default function CoursesPage() {
  return (
    <div className="app">
      <Header />
      <main className="courses-page">
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Recherche" />
          </div>
        </div>

        <div className="courses-content">
          <h1>Apprendre</h1>
          <p className="courses-subtitle">
            Acquérez les compétences dont vous avez besoin pour réaliser des projets efficaces.
          </p>

          <CoursesList />

          <div className="bottom-illustration">
            <img src="/placeholder.svg?height=200&width=400" alt="Illustration d'une personne se reposant" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

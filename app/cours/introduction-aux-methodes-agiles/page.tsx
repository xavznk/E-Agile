import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CourseDetail from "@/components/CourseDetail"
import "@/styles/CourseDetailPage.css"

export default function CourseDetailPage() {
  const courseData = {
    title: "Chapitre 1 : Introduction aux méthodes agiles",
    subtitle: "Commencez ici, si vous n'avez aucune expérience en gestion de projet/agile.",
    duration: "5 heures",
    instructor: "M. Fotsing Eric",
    slug: "introduction-aux-methodes-agiles",
    modules: [
      {
        id: 1,
        title: "Origines et principes fondamentaux de l'agilité",
        description: "Découvrez l'histoire de l'agilité, le Manifeste Agile et ses principes fondateurs.",
        duration: "45 minutes",
      },
      {
        id: 2,
        title: "Le Manifeste Agile : valeurs et principes clés",
        description: "Explorez en profondeur les 4 valeurs et 12 principes qui définissent l'approche agile.",
        duration: "30 minutes",
      },
      {
        id: 3,
        title: "Pourquoi adopter l'agilité ? Avantages et limites",
        description: "Comprenez les bénéfices de l'agilité et identifiez les contextes où elle est la plus pertinente.",
        duration: "40 minutes",
      },
      {
        id: 4,
        title: "Panorama des principales méthodes agiles",
        description: "Vue d'ensemble des frameworks agiles les plus populaires : Scrum, Kanban, XP, SAFe...",
        duration: "50 minutes",
      },
      {
        id: 5,
        title: "Scrum : rôles, événements et artefacts",
        description: "Découvrez en détail la méthode agile la plus utilisée dans le monde.",
        duration: "60 minutes",
      },
      {
        id: 6,
        title: "Cycle de vie d'un projet agile",
        description: "Suivez les étapes d'un projet agile de l'idéation à la livraison.",
        duration: "35 minutes",
      },
      {
        id: 7,
        title: "Comparaison entre méthodes agiles et traditionnelles",
        description: "Analysez les différences fondamentales entre l'approche agile et l'approche en cascade.",
        duration: "30 minutes",
      },
      {
        id: 8,
        title: "Travail en équipe et communication dans un environnement agile",
        description: "Maîtrisez les techniques de collaboration efficace en contexte agile.",
        duration: "40 minutes",
      },
      {
        id: 9,
        title: "Planification et estimation dans un projet agile",
        description: "Apprenez à planifier et estimer de manière agile avec des techniques comme le Planning Poker.",
        duration: "45 minutes",
      },
      {
        id: 10,
        title: "Outils et pratiques courantes en gestion agile",
        description: "Découvrez les outils et pratiques qui facilitent la mise en œuvre de l'agilité au quotidien.",
        duration: "35 minutes",
      },
    ],
  }

  return (
    <div className="app">
      <Header />
      <main className="course-detail-page">
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Recherche" />
          </div>
        </div>

        <CourseDetail course={courseData} />
      </main>
      <Footer />
    </div>
  )
}

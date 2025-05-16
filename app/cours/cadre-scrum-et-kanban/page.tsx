import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CourseDetail from "@/components/CourseDetail"
import "@/styles/CourseDetailPage.css"

export default function CourseDetailPage() {
  const courseData = {
    title: "Cadre Scrum et Kanban",
    subtitle: "Maîtrisez les deux frameworks agiles les plus populaires pour une gestion de projet efficace.",
    duration: "8 heures",
    instructor: "Mme. Dupont Claire",
    slug: "cadre-scrum-et-kanban",
    modules: [
      {
        id: 1,
        title: "Introduction à Scrum et Kanban",
        description: "Découvrez les origines et les principes fondamentaux de Scrum et Kanban.",
        duration: "45 minutes",
      },
      {
        id: 2,
        title: "Scrum en profondeur : rôles et responsabilités",
        description: "Explorez les rôles clés dans Scrum : Product Owner, Scrum Master et équipe de développement.",
        duration: "60 minutes",
      },
      {
        id: 3,
        title: "Scrum en pratique : événements et cérémonies",
        description: "Maîtrisez les événements Scrum : Sprint Planning, Daily Scrum, Sprint Review et Retrospective.",
        duration: "60 minutes",
      },
      {
        id: 4,
        title: "Artefacts Scrum et leur gestion",
        description: "Apprenez à gérer efficacement le Product Backlog, le Sprint Backlog et les incréments.",
        duration: "50 minutes",
      },
      {
        id: 5,
        title: "principes et pratiques",
        description: "Découvrez les principes fondamentaux de Kanban et comment visualiser le flux de travail.",
        duration: "45 minutes",
      },
      {
        id: 6,
        title: "Tableaux Kanban et limites du travail en cours",
        description: "Apprenez à concevoir des tableaux Kanban efficaces et à gérer les limites de WIP.",
        duration: "50 minutes",
      },
      {
        id: 7,
        title: "Métriques et amélioration continue en Kanban",
        description: "Maîtrisez les métriques Kanban et les techniques d'amélioration continue.",
        duration: "45 minutes",
      },
      {
        id: 8,
        title: "Scrumban : le meilleur des deux mondes",
        description: "Découvrez comment combiner Scrum et Kanban pour maximiser les bénéfices.",
        duration: "50 minutes",
      },
      {
        id: 9,
        title: "Mise en œuvre pratique de Scrum et Kanban",
        description: "Apprenez à implémenter Scrum et Kanban dans différents contextes organisationnels.",
        duration: "60 minutes",
      },
      {
        id: 10,
        title: "Études de cas et retours d'expérience",
        description: "Analysez des cas réels d'implémentation de Scrum et Kanban et leurs résultats.",
        duration: "55 minutes",
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

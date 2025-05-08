import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CourseDetail from "@/components/CourseDetail"
import "@/styles/CourseDetailPage.css"

export default function CourseDetailPage() {
  const courseData = {
    title: "Techniques de planification",
    subtitle: "Maîtrisez les méthodes avancées de planification pour optimiser vos projets agiles.",
    duration: "7 heures",
    instructor: "Dr. Leblanc Sophie",
    slug: "techniques-de-planification",
    modules: [
      {
        id: 1,
        title: "Fondamentaux de la planification agile",
        description: "Découvrez les principes qui distinguent la planification agile des approches traditionnelles.",
        duration: "40 minutes",
      },
      {
        id: 2,
        title: "Niveaux de planification en agilité",
        description:
          "Explorez les différents horizons de planification : stratégique, release, itération et quotidien.",
        duration: "45 minutes",
      },
      {
        id: 3,
        title: "User Stories et critères d'acceptation",
        description: "Apprenez à rédiger des User Stories efficaces et des critères d'acceptation clairs.",
        duration: "50 minutes",
      },
      {
        id: 4,
        title: "Techniques d'estimation agile",
        description: "Maîtrisez le Planning Poker, le T-shirt sizing et d'autres techniques d'estimation relative.",
        duration: "55 minutes",
      },
      {
        id: 5,
        title: "Planification de release",
        description: "Découvrez comment planifier des releases prévisibles tout en restant agile.",
        duration: "45 minutes",
      },
      {
        id: 6,
        title: "Planification de Sprint",
        description: "Apprenez à mener des sessions de Sprint Planning efficaces et engageantes.",
        duration: "50 minutes",
      },
      {
        id: 7,
        title: "Gestion de la capacité et de la vélocité",
        description: "Maîtrisez les concepts de vélocité d'équipe et apprenez à gérer la capacité de manière réaliste.",
        duration: "40 minutes",
      },
      {
        id: 8,
        title: "Visualisation et suivi du plan",
        description: "Découvrez des techniques visuelles pour communiquer et suivre l'avancement du plan.",
        duration: "35 minutes",
      },
      {
        id: 9,
        title: "Adaptation du plan et re-priorisation",
        description: "Apprenez à adapter votre plan face aux changements tout en maintenant l'alignement stratégique.",
        duration: "40 minutes",
      },
      {
        id: 10,
        title: "Planification à l'échelle",
        description: "Explorez les techniques de planification pour les projets impliquant plusieurs équipes agiles.",
        duration: "50 minutes",
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

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CourseDetail from "@/components/CourseDetail"
import "@/styles/CourseDetailPage.css"

export default function CourseDetailPage() {
  const courseData = {
    title: "Guide rapide pour la gestion",
    subtitle: "Acquérez les compétences essentielles en gestion de projet pour des résultats immédiats.",
    duration: "6 heures",
    instructor: "M. Martin Thomas",
    slug: "guide-rapide-pour-la-gestion",
    modules: [
      {
        id: 1,
        title: "Fondamentaux de la gestion de projet",
        description: "Découvrez les concepts clés et les principes de base de la gestion de projet efficace.",
        duration: "40 minutes",
      },
      {
        id: 2,
        title: "Définition et planification de projet",
        description: "Apprenez à définir clairement la portée d'un projet et à élaborer un plan solide.",
        duration: "45 minutes",
      },
      {
        id: 3,
        title: "Gestion des parties prenantes",
        description: "Maîtrisez l'art d'identifier, d'analyser et de gérer les attentes des parties prenantes.",
        duration: "35 minutes",
      },
      {
        id: 4,
        title: "Communication efficace en gestion de projet",
        description: "Développez des compétences en communication pour assurer le succès de vos projets.",
        duration: "40 minutes",
      },
      {
        id: 5,
        title: "Gestion des risques et des problèmes",
        description: "Apprenez à identifier, évaluer et atténuer les risques tout au long du cycle de vie du projet.",
        duration: "50 minutes",
      },
      {
        id: 6,
        title: "Suivi et contrôle de projet",
        description: "Découvrez les techniques pour suivre l'avancement et maintenir le projet sur la bonne voie.",
        duration: "45 minutes",
      },
      {
        id: 7,
        title: "Leadership et motivation d'équipe",
        description: "Développez vos compétences en leadership pour motiver et guider votre équipe vers le succès.",
        duration: "40 minutes",
      },
      {
        id: 8,
        title: "Gestion des conflits",
        description: "Maîtrisez les techniques de résolution de conflits dans un contexte de projet.",
        duration: "35 minutes",
      },
      {
        id: 9,
        title: "Clôture de projet et leçons apprises",
        description: "Apprenez à clôturer efficacement un projet et à capitaliser sur les leçons apprises.",
        duration: "30 minutes",
      },
      {
        id: 10,
        title: "Outils et techniques pour une gestion efficace",
        description: "Découvrez les outils et techniques modernes qui facilitent la gestion de projet au quotidien.",
        duration: "40 minutes",
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

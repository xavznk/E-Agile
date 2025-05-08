import "../styles/CoursesList.css"
import Link from "next/link"

const CourseCard = ({ title, chapters, isPopular = false, slug = "" }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src="/placeholder.svg?height=150&width=250" alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="course-chapters">
        <span className="chapters-icon">📚</span>
        <span>Chapitre {chapters}</span>
      </div>
      <Link href={slug ? `/cours/${slug}` : "#"} className={`course-button ${isPopular ? "popular" : ""}`}>
        {isPopular ? "POPULAIRE" : "S'INSCRIRE"}
      </Link>
    </div>
  )
}

const CoursesList = () => {
  return (
    <div className="courses-grid">
      <CourseCard title="Introduction aux méthodes agiles" chapters="1" slug="introduction-aux-methodes-agiles" />
      <CourseCard title="Cadre Scrum et Kanban" chapters="2" isPopular={true} slug="cadre-scrum-et-kanban" />
      <CourseCard title="Guide rapide pour la gestion" chapters="3" slug="guide-rapide-pour-la-gestion" />
      <CourseCard
        title="Techniques de planification"
        chapters="4"
        isPopular={true}
        slug="techniques-de-planification"
      />
    </div>
  )
}

export default CoursesList

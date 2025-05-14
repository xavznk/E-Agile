"use client"

import { useState } from "react"
import "../styles/CourseDetail.css"
import Link from "next/link"
import { useRouter } from "next/navigation"

const CourseDetail = ({ course }) => {
  const [activeTab, setActiveTab] = useState("cours")
  const router = useRouter()

  // Fonction pour vérifier si une leçon existe
  const handleLessonClick = (e, lessonUrl) => {
    // Si la leçon n'existe pas, on redirige vers la page 404
    // Cette fonction est un placeholder - Next.js gère automatiquement la redirection vers la page 404
    // pour les routes qui n'existent pas, donc nous n'avons pas besoin d'implémenter cette logique ici
  }

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <h1>{course.title}</h1>
        <p className="course-subtitle">{course.subtitle}</p>
      </div>

      <div className="course-enrollment">
        <button className="start-course-button">Commencer le cours</button>
        <span className="course-duration">Il reste {course.duration}</span>
      </div>

      <div className="course-tabs">
        <button className={`course-tab ${activeTab === "cours" ? "active" : ""}`} onClick={() => setActiveTab("cours")}>
          Cours
        </button>
        <button
          className={`course-tab ${activeTab === "discussions" ? "active" : ""}`}
          onClick={() => setActiveTab("discussions")}
        >
          Discussions
        </button>
        <button
          className={`course-tab ${activeTab === "lecons" ? "active" : ""}`}
          onClick={() => setActiveTab("lecons")}
        >
          Leçons
        </button>
      </div>

      <div className="course-content">
        {activeTab === "cours" && (
          <div className="course-modules">
            {course.modules.map((module) => {
              // Créer un slug standardisé pour chaque module
              let moduleSlug

              // Mapper les titres aux slugs exacts des pages existantes
              if (course.slug === "introduction-aux-methodes-agiles") {
                switch (module.id) {
                  case 1:
                    moduleSlug = "origines-et-principes"
                    break
                  case 2:
                    moduleSlug = "manifeste-agile"
                    break
                  case 3:
                    moduleSlug = "pourquoi-adopter-agilite"
                    break
                  case 4:
                    moduleSlug = "panorama-methodes-agiles"
                    break
                  case 5:
                    moduleSlug = "scrum"
                    break
                  case 6:
                    moduleSlug = "cycle-de-vie"
                    break
                  case 7:
                    moduleSlug = "comparaison-methodes"
                    break
                  case 8:
                    moduleSlug = "travail-en-equipe"
                    break
                  case 9:
                    moduleSlug = "kanban"
                    break
                  default:
                    // Fallback au cas où
                    moduleSlug = module.title
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-")
                }
              } else if (course.slug === "cadre-scrum-et-kanban") {
                switch (module.id) {
                  case 1:
                    moduleSlug = "introduction-scrum-kanban"
                    break
                  case 2:
                    moduleSlug = "roles-scrum"
                    break
                  default:
                    moduleSlug = module.title
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-")
                }
              } else if (course.slug === "guide-rapide-pour-la-gestion") {
                switch (module.id) {
                  case 1:
                    moduleSlug = "fondamentaux-gestion-projet"
                    break
                  case 2:
                    moduleSlug = "gestion-equipes-agiles"
                    break
                  default:
                    moduleSlug = module.title
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-")
                }
              } else if (course.slug === "techniques-de-planification") {
                switch (module.id) {
                  case 1:
                    moduleSlug = "fondamentaux-planification-agile"
                    break
                  default:
                    moduleSlug = module.title
                      .toLowerCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, "")
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-")
                }
              } else {
                // Pour les autres cours, utiliser la méthode de génération de slug standard
                moduleSlug = module.title
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/[^\w\s-]/g, "")
                  .replace(/\s+/g, "-")
              }

              const lessonUrl = `/cours/${course.slug}/${moduleSlug}`

              return (
                <Link
                  key={module.id}
                  href={lessonUrl}
                  className="course-module"
                  onClick={(e) => handleLessonClick(e, lessonUrl)}
                >
                  <span className="module-number">{module.id}</span>
                  <div className="module-info">
                    <span className="module-title">{module.title}</span>
                    <p className="module-description">{module.description}</p>
                    <span className="module-duration">{module.duration}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        )}

        {activeTab === "discussions" && (
          <div className="course-discussions">
            <p>Aucune discussion pour le moment.</p>
          </div>
        )}

        {activeTab === "lecons" && (
          <div className="course-lessons">
            <p>Les leçons seront disponibles après avoir commencé le cours.</p>
          </div>
        )}
      </div>

      <div className="course-instructor">
        <h3>Instructeur</h3>
        <div className="instructor-info">
          <div className="instructor-avatar">
            <img src="/9955.jpg" alt="Avatar de l'instructeur" />
          </div>
          <div className="instructor-name">{course.instructor}</div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

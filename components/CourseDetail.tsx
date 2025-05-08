"use client"

import { useState } from "react"
import "../styles/CourseDetail.css"
import Link from "next/link"

const CourseDetail = ({ course }) => {
  const [activeTab, setActiveTab] = useState("cours")

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
              // Construire le slug de la leçon en fonction du titre du module
              const moduleSlug = module.title
                .toLowerCase()
                .replace(/[^\w\s]/gi, "")
                .replace(/\s+/g, "-")

              const lessonUrl = `/cours/${course.slug}/${moduleSlug}`

              return (
                <Link key={module.id} href={lessonUrl} className="course-module">
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
            <img src="/placeholder.svg?height=50&width=50" alt="Avatar de l'instructeur" />
          </div>
          <div className="instructor-name">{course.instructor}</div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

import Link from "next/link"
import "../styles/LessonContent.css"

const LessonContent = ({ lesson }) => {
  return (
    <div className="lesson-container">
      <div className="lesson-instructor">
        <span className="instructor-avatar">
          <img src="/images/instructor-avatar.png" alt="Avatar de l'instructeur" />
        </span>
        <span className="instructor-name">Instructeur : {lesson.instructor}</span>
      </div>

      <div className="lesson-content-wrapper">
        <div className="lesson-main-content">
          <h1 className="lesson-title">{lesson.title}</h1>
          <div className="lesson-type">Tutorial</div>

          <div className="lesson-breadcrumb">
            <Link href={`/cours/${lesson.courseSlug}`}>{lesson.course}</Link>
          </div>

          <div className="lesson-progress">
            <span>Étape du cours</span>
            <span className="progress-indicator">
              {lesson.step} sur {lesson.totalSteps}
            </span>
          </div>

          <div className="lesson-text" dangerouslySetInnerHTML={{ __html: lesson.content }}></div>
        </div>

        <div className="lesson-sidebar">
          <div className="table-of-contents">
            <h3>Table des matières</h3>
            <ul>
              {lesson.tableOfContents.map((item, index) => (
                <li key={index}>
                  <a href={`#section-${index + 1}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonContent

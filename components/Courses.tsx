import "../styles/Courses.css"

const CourseCard = ({ title, duration, lessons }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src="/placeholder.svg?height=200&width=200" alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="course-details">
        <span className="duration">{duration} heures</span>
        <span className="lessons">{lessons} leçons</span>
      </div>
      <div className="rating">
        <span className="stars">★★★★★</span>
      </div>
      <button className="course-button">S'inscrire</button>
    </div>
  )
}

const Courses = () => {
  return (
    <section className="courses">
      <h2>Nos cours en ligne</h2>
      <div className="courses-container">
        <CourseCard title="Introduction aux méthodes agiles" duration="12" lessons="7" />
        <CourseCard title="Cadre Scrum et Kanban" duration="8" lessons="5" />
        <CourseCard title="Techniques de planification" duration="14" lessons="9" />
      </div>
    </section>
  )
}

export default Courses

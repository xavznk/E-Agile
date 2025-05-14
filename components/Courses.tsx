import "../styles/Courses.css"

const CourseCard = ({ title, duration, lessons, imageUrl }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={imageUrl || "/placeholder.svg?height=200&width=200"} alt={title} height="200" width="200" />
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
        <CourseCard 
          title="Introduction aux méthodes agiles" 
          duration="12" 
          lessons="7" 
          imageUrl="/9974987.jpg" 
        />
        <CourseCard 
          title="Cadre Scrum et Kanban" 
          duration="8" 
          lessons="5" 
          imageUrl="/19879.jpg" 
        />
        <CourseCard 
          title="Techniques de planification" 
          duration="14" 
          lessons="9" 
          imageUrl="/4862.jpg" 
        />
      </div>
    </section>
  )
}

export default Courses
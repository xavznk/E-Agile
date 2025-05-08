import "../styles/Testimonials.css"

const TestimonialCard = ({ text }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src="/placeholder.svg?height=50&width=50" alt="Avatar" />
      </div>
      <p>{text}</p>
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Ce que disent nos étudiants</h2>
      <div className="testimonials-container">
        <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." />
        <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." />
        <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." />
        <TestimonialCard text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." />
      </div>
    </section>
  )
}

export default Testimonials

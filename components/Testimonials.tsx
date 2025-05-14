import "../styles/Testimonials.css";

const TestimonialCard = ({ text, image, name, role, rating }) => {
  // Crée un tableau d'étoiles en fonction de la note (rating)
  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i}>{i < rating ? '★' : '☆'}</span>
  ));

  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar">
        <img src={image} alt={`Avatar de ${name}`} />
      </div>
      <div className="testimonial-rating">{stars}</div>
      <p>{text}</p>
      <div className="testimonial-author">{name}</div>
      <div className="testimonial-role">{role}</div>
    </div>
  );
};

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "Cette formation a transformé ma carrière. Les enseignants sont accessibles et les projets concrets m'ont permis d'acquérir des compétences immédiatement applicables.",
      image: "/6545.jpg",
      name: "Sophie Martin",
      role: "Développeuse Fullstack",
      rating: 5
    },
    {
      id: 2,
      text: "Un excellent équilibre entre théorie et pratique. J'ai particulièrement apprécié les ateliers en petits groupes qui permettent un apprentissage personnalisé.",
      image: "/9955.jpg",
      name: "Thomas Lefèvre",
      role: "Data Analyst",
      rating: 4
    },
    {
      id: 3,
      text: "Après 10 ans dans un autre domaine, cette formation m'a permis de me reconvertir en seulement 6 mois. L'accompagnement professionnel est exceptionnel.",
      image: "/46468.jpg",
      name: "Amélie Dubois",
      role: "UX Designer",
      rating: 5
    },
    {
      id: 4,
      text: "Les méthodes pédagogiques innovantes et l'ambiance bienveillante font toute la différence. J'ai trouvé un emploi avant même la fin de la formation !",
      image: "/916897.jpg",
      name: "Mohamed Kone",
      role: "Ingénieur DevOps",
      rating: 4
    }
  ];

  return (
    <section className="testimonials">
      <h2>Ce que disent nos étudiants</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id}
            text={testimonial.text}
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
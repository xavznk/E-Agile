import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/AboutUs.css";

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Mr FOTSING ERIC",
      role: "Consultant en méthode agile",
      special: true,
      initials: "FE"
    },
    {
      name: "Minkada samuel",
      role: "Développeur fullstack",
      initials: "MS"
    },
    {
      name: "Georges Mbella",
      role: "Développeur fullstack",
      initials: "GM"
    },
    {
      name: "Nkapnang Xavier",
      role: "Développeur fullstack",
      initials: "NX"
    },
    {
      name: "NGONO joseph",
      role: "Développeur fullstack",
      initials: "NJ"
    },
    {
      name: "Amply kenfack",
      role: "Développeur fullstack",
      initials: "AK"
    },
    {
      name: "Yonta jonathan",
      role: "Développeur fullstack",
      initials: "YJ"
    },
  ];

  const values = [
    {
      title: "Collaboration",
      icon: "👥"
    },
    {
      title: "Flexibilité",
      icon: "🔄"
    },
    {
      title: "Innovation",
      icon: "💡"
    }
  ];

  return (
    <div className="app">
      <Header />
      <main className="about-us-page">
        {/* Header Section */}
        <div className="about-us-header">
          <h1>À PROPOS DE NOUS</h1>
        </div>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>NOTRE MISSION</h2>
          <div className="mission-content">
            <p>
              Notre mission est de fournir des solutions technologiques innovantes qui transforment 
              la façon dont nos clients font des affaires. Nous combinons expertise technique et 
              approche agile pour offrir des résultats exceptionnels.
            </p>
            <p>
              Chez utilisJack, nous croyons en la puissance de la collaboration et de l'innovation 
              continue. Notre équipe travaille sans relâche pour créer des produits qui répondent 
              parfaitement aux besoins de nos utilisateurs.
            </p>
            <p>
              Nous nous engageons à fournir un travail de qualité, des solutions évolutives et 
              une expérience client inégalée dans le domaine du développement logiciel.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <h2>NOS VALEURS</h2>
          <div className="values-container">
            {values.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-circle">{value.icon}</div>
                <h3>{value.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>NOTRE ÉQUIPE</h2>
          <div className="team-container">
            {/* Special Member */}
            {teamMembers.filter(member => member.special).map((member, index) => (
              <div key={index} className="special-member-card">
                <div className="special-member-content">
                  <div className="special-member-avatar">{member.initials}</div>
                  <div className="special-member-details">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
                <div className="special-member-illustration">
                  <img src="/9955.jpg" alt="Consultant agile" />
                </div>
              </div>
            ))}

            {/* Team Grid */}
            <div className="team-grid">
              {teamMembers.filter(member => !member.special).map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-avatar">{member.initials}</div>
                  <div className="member-details">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
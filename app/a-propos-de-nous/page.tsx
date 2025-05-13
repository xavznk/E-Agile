import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/styles/AboutUs.css"

export default function AboutUs() {
  const teamMembers = [
    {
      name: "Mr FOTSING ERIC",
      role: "Consultant en méthode agile",
      special: true,
    },
    {
      name: "Minkada samuel",
      role: "Développeur fullstack",
    },
    {
      name: "Georges Mbella",
      role: "Développeur fullstack",
    },
    {
      name: "xavier nkamgang",
      role: "Développeur fullstack",
    },
    {
      name: "NGONO joseph",
      role: "Développeur fullstack",
    },
    {
      name: "Amply kenfack",
      role: "Développeur fullstack",
    },
    {
      name: "Yonta jonathan",
      role: "Développeur fullstack",
    },
  ]

  return (
    <div className="app">
      <Header />
      <main className="about-us-page">
        <div className="about-us-header">
          <h1>À PROPOS DE NOUS</h1>
        </div>

        <section className="mission-section">
          <h2>NOTRE MISSION</h2>
          <div className="mission-content">
            <p>
              Lorem ipsum dolor sit amet consectetur. At pellentesque et et turpis egestas imperdiet amet. Amet pretium
              nisi blandit nunc blandit nunc nunc. Fermentum facilisis placerat pulvinar. Nec condimentum tempus diam
              nulla nunc et in non vestibulum. Egestas id tempor dapibus vel. Vivamus quam suspendisse risus amet et
              cursus porttitor turpis sed. Maecenas non et amet nunc nunc nulla facilisi.
            </p>
            <p>
              Egestas id tempor dapibus vel. Vivamus quam suspendisse risus amet et cursus porttitor turpis sed.
              Maecenas non et amet nunc nunc nulla facilisi. Consectetur sagittis vitae. Mauris leo nunc blandit
              ultrices urna eget. Imperdiet nunc sociis sed nec sed sed et ultrices nunc et. Interdum purus turpis
              quisque in neque posuere velit. Ultrices ultricies auctor sed erat sollicitudin vulputate amet. Ac sed
              adipiscing amet amet sapien amet volutpat vestibulum porttitor. Mauris in non cursus.
            </p>
            <p>
              Pulvinar quam nulla fermentum sed massa nunc massa blandit. Sagittis aliquet faucibus felis ullamcorper
              sed et erat vitae. Etiam nunc sit dictum amet amet feugiat adipiscing.
            </p>
          </div>
        </section>

        <section className="values-section">
          <h2>NOS VALEURS</h2>
          <div className="values-container">
            <div className="value-item">
              <div className="value-circle"></div>
              <h3>Collaboration</h3>
            </div>
            <div className="value-item">
              <div className="value-circle"></div>
              <h3>Flexibilité</h3>
            </div>
            <div className="value-item">
              <div className="value-circle"></div>
              <h3>Innovation</h3>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>ÉQUIPES</h2>
          <div className="team-container">
            <div className="special-member-row">
              <div className="team-member special-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>Mr FOTSING ERIC</h3>
                  <p>Consultant en méthode agile</p>
                </div>
                <div className="member-illustration">
                  <img src="/images/consultant-illustration.png" alt="Consultant en méthode agile" />
                </div>
              </div>
            </div>

            <div className="team-row">
              <div className="team-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>Minkada samuel</h3>
                  <p>Développeur fullstack</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>Georges Mbella</h3>
                  <p>Développeur fullstack</p>
                </div>
              </div>
            </div>

            <div className="team-row">
              <div className="team-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>xavier nkamgang</h3>
                  <p>Développeur fullstack</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>NGONO joseph</h3>
                  <p>Développeur fullstack</p>
                </div>
              </div>
            </div>

            <div className="team-row">
              <div className="team-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>Amply kenfack</h3>
                  <p>Développeur fullstack</p>
                </div>
              </div>
              <div className="team-member">
                <div className="member-square"></div>
                <div className="member-info">
                  <h3>Yonta jonathan</h3>
                  <p>Développeur fullstack</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

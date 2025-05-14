import "../styles/Articles.css"

const ArticleCard = ({ title, excerpt, imageUrl }) => {
  return (
    <div className="article-card">
      <div className="article-image">
        <img src={imageUrl} alt={title} height="150" width="200" />
      </div>
      <div className="article-content">
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <a href="#" className="read-more">
          Lire la suite
        </a>
      </div>
    </div>
  )
}

const Articles = () => {
  return (
    <section className="articles">
      <h2>Articles sur la Méthode Agile</h2>
      <div className="recent-label">Nos récents articles Agile</div>
      <div className="articles-container">
        <ArticleCard
          title="Les principes fondamentaux de l'Agile"
          excerpt="Découvrez les 12 principes du manifeste Agile et comment ils transforment la gestion de projet..."
          imageUrl="/68747.jpg"
        />
        <ArticleCard
          title="Scrum vs Kanban: Quelle méthode choisir?"
          excerpt="Comparaison détaillée entre Scrum et Kanban, deux frameworks Agile populaires..."
          imageUrl="/4878033.jpg"
        />
      </div>
    </section>
  )
}

export default Articles
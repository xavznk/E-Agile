import "../styles/Articles.css"

const ArticleCard = ({ title, excerpt }) => {
  return (
    <div className="article-card">
      <div className="article-image">
        <img src="/placeholder.svg?height=150&width=200" alt={title} />
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
      <h2>Articles</h2>
      <div className="recent-label">Nos récents blogs</div>
      <div className="articles-container">
        <ArticleCard
          title="Titre"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ArticleCard
          title="Titre"
          excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  )
}

export default Articles

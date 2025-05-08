import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Le Manifeste Agile : valeurs et principes clés",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 2,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Contexte historique du Manifeste Agile</h2>
      
      <p>En février 2001, dix-sept experts en développement logiciel se sont réunis dans une station de ski à Snowbird, Utah. Parmi eux figuraient des créateurs de méthodologies comme Scrum, Extreme Programming (XP), Crystal, et Feature-Driven Development (FDD). Malgré leurs différences d'approches, ils partageaient une frustration commune face aux méthodes traditionnelles de développement logiciel, jugées trop rigides et inefficaces.</p>
      
      <p>Cette rencontre historique a donné naissance au "Manifeste pour le développement agile de logiciels", communément appelé "Manifeste Agile". Ce document concis mais puissant a formalisé une nouvelle vision du développement logiciel, centrée sur l'adaptation au changement, la collaboration et la livraison de valeur.</p>
      
      <p>Les signataires originaux du Manifeste étaient :</p>
      <ul>
        <li>Kent Beck (créateur d'Extreme Programming)</li>
        <li>Mike Beedle</li>
        <li>Arie van Bennekum</li>
        <li>Alistair Cockburn (créateur de Crystal)</li>
        <li>Ward Cunningham (inventeur du wiki)</li>
        <li>Martin Fowler</li>
        <li>James Grenning</li>
        <li>Jim Highsmith</li>
        <li>Andrew Hunt</li>
        <li>Ron Jeffries</li>
        <li>Jon Kern</li>
        <li>Brian Marick</li>
        <li>Robert C. Martin (Uncle Bob)</li>
        <li>Steve Mellor</li>
        <li>Ken Schwaber (co-créateur de Scrum)</li>
        <li>Jeff Sutherland (co-créateur de Scrum)</li>
        <li>Dave Thomas</li>
      </ul>
      
      <h2 id="section-2">Les quatre valeurs fondamentales</h2>
      
      <p>Le Manifeste Agile s'articule autour de quatre valeurs fondamentales qui définissent l'essence de l'approche agile :</p>
      
      <blockquote>
        "Nous découvrons comment mieux développer des logiciels par la pratique et en aidant les autres à le faire. Ces expériences nous ont amenés à valoriser :
        <br><br>
        <strong>Les individus et leurs interactions</strong> plus que les processus et les outils<br>
        <strong>Des logiciels opérationnels</strong> plus qu'une documentation exhaustive<br>
        <strong>La collaboration avec les clients</strong> plus que la négociation contractuelle<br>
        <strong>L'adaptation au changement</strong> plus que le suivi d'un plan
        <br><br>
        Nous reconnaissons la valeur des seconds éléments, mais privilégions les premiers."
      </blockquote>
      
      <p>Examinons chacune de ces valeurs en détail :</p>
      
      <h3>1. Les individus et leurs interactions plus que les processus et les outils</h3>
      
      <p>Cette valeur place l'humain au centre du développement logiciel. Elle reconnaît que les logiciels sont créés par des personnes et que la qualité des interactions entre ces personnes a un impact majeur sur la réussite du projet.</p>
      
      <p><strong>Ce que cela signifie :</strong></p>
      <ul>
        <li>Privilégier la communication directe entre les membres de l'équipe</li>
        <li>Créer un environnement de travail qui favorise la collaboration</li>
        <li>Valoriser les compétences et l'expertise des individus</li>
        <li>Adapter les processus aux personnes, et non l'inverse</li>
        <li>Choisir des outils qui facilitent la collaboration, pas qui la remplacent</li>
      </ul>
      
      <p><strong>Ce que cela ne signifie pas :</strong></p>
      <ul>
        <li>Abandonner tout processus ou discipline</li>
        <li>Ignorer la documentation ou les outils</li>
        <li>Travailler sans structure ni organisation</li>
      </ul>
      
      <h3>2. Des logiciels opérationnels plus qu'une documentation exhaustive</h3>
      
      <p>Cette valeur met l'accent sur la livraison de fonctionnalités qui fonctionnent réellement, plutôt que sur la production de documents qui décrivent ce que le logiciel devrait faire.</p>
      
      <p><strong>Ce que cela signifie :</strong></p>
      <ul>
        <li>Mesurer la progression par la quantité de fonctionnalités opérationnelles</li>
        <li>Livrer régulièrement des incréments de produit utilisables</li>
        <li>Privilégier le code qui fonctionne aux spécifications détaillées</li>
        <li>Créer une documentation utile, concise et à jour</li>
      </ul>
      
      <p><strong>Ce que cela ne signifie pas :</strong></p>
      <ul>
        <li>Ne pas documenter du tout</li>
        <li>Ignorer l'architecture ou la conception</li>
        <li>Livrer des fonctionnalités de mauvaise qualité</li>
      </ul>
      
      <h3>3. La collaboration avec les clients plus que la négociation contractuelle</h3>
      
      <p>Cette valeur souligne l'importance d'une relation de partenariat avec le client, plutôt qu'une relation adversariale basée uniquement sur des obligations contractuelles.</p>
      
      <p><strong>Ce que cela signifie :</strong></p>
      <ul>
        <li>Impliquer le client tout au long du processus de développement</li>
        <li>Rechercher activement le feedback du client</li>
        <li>Adapter le produit en fonction des besoins évolutifs du client</li>
        <li>Établir une relation de confiance basée sur la transparence</li>
      </ul>
      
      <p><strong>Ce que cela ne signifie pas :</strong></p>
      <ul>
        <li>Travailler sans contrat</li>
        <li>Accepter toutes les demandes du client sans discussion</li>
        <li>Négliger les aspects commerciaux de la relation</li>
      </ul>
      
      <h3>4. L'adaptation au changement plus que le suivi d'un plan</h3>
      
      <p>Cette valeur reconnaît que le changement est inévitable et même souhaitable dans le développement logiciel, et qu'une approche flexible est plus efficace qu'une planification rigide.</p>
      
      <p><strong>Ce que cela signifie :</strong></p>
      <ul>
        <li>Accepter que les exigences évoluent au cours du projet</li>
        <li>Planifier de manière adaptative, en révisant régulièrement les priorités</li>
        <li>Réagir rapidement aux changements de l'environnement ou du marché</li>
        <li>Voir le changement comme une opportunité d'amélioration</li>
      </ul>
      
      <p><strong>Ce que cela ne signifie pas :</strong></p>
      <ul>
        <li>Ne pas planifier du tout</li>
        <li>Changer constamment de direction sans raison</li>
        <li>Ignorer les engagements pris</li>
      </ul>
      
      <h2 id="section-3">Les douze principes du Manifeste Agile</h2>
      
      <p>Pour concrétiser les quatre valeurs, le Manifeste Agile définit douze principes qui guident la mise en œuvre de l'agilité au quotidien :</p>
      
      <ol>
        <li><strong>Satisfaction du client</strong> : "Notre plus haute priorité est de satisfaire le client en livrant rapidement et régulièrement des fonctionnalités à grande valeur ajoutée."</li>
        <li><strong>Accueil du changement</strong> : "Accueillez positivement les changements de besoins, même tard dans le projet. Les processus Agiles exploitent le changement pour donner un avantage compétitif au client."</li>
        <li><strong>Livraison fréquente</strong> : "Livrez fréquemment un logiciel opérationnel avec des cycles de quelques semaines à quelques mois et une préférence pour les plus courts."</li>
        <li><strong>Collaboration quotidienne</strong> : "Les utilisateurs ou leurs représentants et les développeurs doivent travailler ensemble quotidiennement tout au long du projet."</li>
        <li><strong>Motivation et confiance</strong> : "Réalisez les projets avec des personnes motivées. Fournissez-leur l'environnement et le soutien dont ils ont besoin et faites-leur confiance pour atteindre les objectifs fixés."</li>
        <li><strong>Communication face à face</strong> : "La méthode la plus simple et la plus efficace pour transmettre de l'information à l'équipe de développement et à l'intérieur de celle-ci est le dialogue en face à face."</li>
        <li><strong>Mesure de progression</strong> : "Un logiciel opérationnel est la principale mesure d'avancement."</li>
        <li><strong>Rythme soutenable</strong> : "Les processus Agiles encouragent un rythme de développement soutenable. Ensemble, les commanditaires, les développeurs et les utilisateurs devraient être capables de maintenir indéfiniment un rythme constant."</li>
        <li><strong>Excellence technique</strong> : "Une attention continue à l'excellence technique et à une bonne conception renforce l'Agilité."</li>
        <li><strong>Simplicité</strong> : "La simplicité – c'est-à-dire l'art de minimiser la quantité de travail inutile – est essentielle."</li>
        <li><strong>Auto-organisation</strong> : "Les meilleures architectures, spécifications et conceptions émergent d'équipes auto-organisées."</li>
        <li><strong>Amélioration continue</strong> : "À intervalles réguliers, l'équipe réfléchit aux moyens de devenir plus efficace, puis règle et modifie son comportement en conséquence."</li>
      </ol>
      
      <h2 id="section-4">Analyse approfondie des principes</h2>
      
      <p>Examinons plus en détail certains de ces principes et leur application pratique :</p>
      
      <h3>Principe 1 : Satisfaction du client</h3>
      
      <p>Ce principe place la satisfaction du client au cœur de la démarche agile. Il souligne l'importance de livrer rapidement et régulièrement des fonctionnalités qui apportent une réelle valeur au client.</p>
      
      <p><strong>Application pratique :</strong></p>
      <ul>
        <li>Prioriser les fonctionnalités en fonction de leur valeur business</li>
        <li>Définir des "MVP" (Produits Minimums Viables) pour livrer de la valeur rapidement</li>
        <li>Recueillir régulièrement le feedback des utilisateurs</li>
        <li>Mesurer la satisfaction client et s'adapter en conséquence</li>
      </ul>
      
      <h3>Principe 5 : Motivation et confiance</h3>
      
      <p>Ce principe reconnaît que les personnes motivées et responsabilisées sont la clé du succès d'un projet. Il met l'accent sur l'importance de créer un environnement propice à l'épanouissement des équipes.</p>
      
      <p><strong>Application pratique :</strong></p>
      <ul>
        <li>Donner aux équipes l'autonomie nécessaire pour prendre des décisions</li>
        <li>Éliminer les obstacles qui freinent la progression</li>
        <li>Fournir les ressources et le soutien nécessaires</li>
        <li>Reconnaître et célébrer les réussites</li>
        <li>Favoriser un environnement de confiance et de respect mutuel</li>
      </ul>
      
      <h3>Principe 9 : Excellence technique</h3>
      
      <p>Ce principe souligne que l'agilité ne doit pas se faire au détriment de la qualité technique. Au contraire, une attention constante à l'excellence technique est essentielle pour maintenir l'agilité sur le long terme.</p>
      
      <p><strong>Application pratique :</strong></p>
      <ul>
        <li>Adopter des pratiques d'ingénierie de qualité (TDD, refactoring, intégration continue...)</li>
        <li>Investir dans la formation continue des équipes</li>
        <li>Réduire la dette technique de manière proactive</li>
        <li>Favoriser le partage de connaissances au sein de l'équipe</li>
        <li>Automatiser les tâches répétitives pour se concentrer sur la valeur ajoutée</li>
      </ul>
      
      <h3>Principe 12 : Amélioration continue</h3>
      
      <p>Ce principe incarne l'esprit d'apprentissage et d'adaptation qui est au cœur de l'agilité. Il encourage les équipes à réfléchir régulièrement à leur façon de travailler et à s'améliorer constamment.</p>
      
      <p><strong>Application pratique :</strong></p>
      <ul>
        <li>Organiser des rétrospectives régulières</li>
        <li>Expérimenter de nouvelles approches et pratiques</li>
        <li>Mesurer les résultats des changements mis en œuvre</li>
        <li>Partager les apprentissages avec d'autres équipes</li>
        <li>Cultiver une mentalité de croissance et d'amélioration</li>
      </ul>
      
      <h2 id="section-5">Interprétation et mauvaises interprétations</h2>
      
      <p>Depuis sa publication, le Manifeste Agile a parfois été mal interprété ou déformé. Voici quelques clarifications importantes :</p>
      
      <h3>Mauvaise interprétation 1 : "Agile = pas de documentation"</h3>
      
      <p><strong>Clarification :</strong> Le Manifeste ne dit pas qu'il ne faut pas documenter, mais qu'il faut privilégier le logiciel opérationnel à une documentation excessive. Une documentation utile, concise et à jour reste nécessaire.</p>
      
      <h3>Mauvaise interprétation 2 : "Agile = pas de planification"</h3>
      
      <p><strong>Clarification :</strong> L'agilité n'élimine pas la planification, elle la rend plus adaptative. Les équipes agiles planifient régulièrement, mais elles sont prêtes à ajuster leurs plans en fonction des retours et des changements.</p>
      
      <h3>Mauvaise interprétation 3 : "Agile = pas de management"</h3>
      
      <p><strong>Clarification :</strong> L'auto-organisation ne signifie pas l'absence de leadership. Les managers ont toujours un rôle crucial, mais ce rôle évolue vers plus de facilitation, de coaching et d'élimination d'obstacles.</p>
      
      <h3>Mauvaise interprétation 4 : "Agile = faire ce que le client demande"</h3>
      
      <p><strong>Clarification :</strong> La collaboration avec le client ne signifie pas céder à toutes ses demandes sans réflexion. Il s'agit plutôt d'établir un partenariat où l'équipe apporte son expertise pour aider le client à atteindre ses objectifs.</p>
      
      <h2 id="section-6">L'évolution du Manifeste Agile</h2>
      
      <p>Depuis sa publication en 2001, le Manifeste Agile a eu un impact considérable sur l'industrie du développement logiciel et au-delà. Son influence s'est étendue à d'autres domaines comme le marketing, les ressources humaines, la finance, et même l'éducation.</p>
      
      <p>Bien que le texte du Manifeste soit resté inchangé, son interprétation et son application ont évolué avec le temps :</p>
      
      <ul>
        <li><strong>Scaling Agile</strong> : Des frameworks comme SAFe, LeSS, et Nexus ont émergé pour appliquer les principes agiles à grande échelle.</li>
        <li><strong>DevOps</strong> : Le mouvement DevOps a étendu les principes agiles à l'exploitation et à l'infrastructure.</li>
        <li><strong>Business Agility</strong> : L'agilité s'est étendue au-delà des équipes de développement pour englober l'ensemble de l'organisation.</li>
        <li><strong>Lean Startup</strong> : Les principes du Lean Startup ont complété l'approche agile avec un focus sur la validation des hypothèses business.</li>
      </ul>
      
      <p>Malgré ces évolutions, les valeurs et principes fondamentaux du Manifeste Agile restent pertinents et continuent de guider les organisations dans leur quête d'agilité.</p>
      
      <h2 id="section-7">Application pratique des valeurs et principes</h2>
      
      <p>Comment mettre concrètement en œuvre les valeurs et principes du Manifeste Agile dans votre contexte ? Voici quelques conseils pratiques :</p>
      
      <h3>Pour les équipes de développement</h3>
      <ul>
        <li>Organisez des stand-ups quotidiens pour favoriser la communication</li>
        <li>Utilisez des tableaux visuels (physiques ou numériques) pour suivre l'avancement</li>
        <li>Pratiquez le pair programming pour partager les connaissances</li>
        <li>Automatisez les tests pour garantir la qualité</li>
        <li>Livrez fréquemment des incréments de produit</li>
        <li>Organisez des rétrospectives régulières pour vous améliorer</li>
      </ul>
      
      <h3>Pour les managers et leaders</h3>
      <ul>
        <li>Créez un environnement sécurisant où les erreurs sont vues comme des opportunités d'apprentissage</li>
        <li>Éliminez les obstacles qui freinent les équipes</li>
        <li>Favorisez la transparence à tous les niveaux</li>
        <li>Alignez les objectifs des équipes avec la stratégie de l'organisation</li>
        <li>Mesurez la valeur livrée plutôt que l'activité</li>
        <li>Investissez dans le développement des compétences</li>
      </ul>
      
      <h3>Pour les organisations</h3>
      <ul>
        <li>Alignez les structures organisationnelles avec les flux de valeur</li>
        <li>Adaptez les processus RH pour soutenir l'agilité (recrutement, évaluation, rémunération)</li>
        <li>Repensez les espaces de travail pour favoriser la collaboration</li>
        <li>Établissez des métriques qui mesurent la valeur et la satisfaction client</li>
        <li>Créez des communautés de pratique pour partager les connaissances</li>
        <li>Intégrez les clients et utilisateurs dans le processus de développement</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension du Manifeste Agile, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Analyse de valeurs</h3>
      <p>Pour chacune des quatre valeurs du Manifeste Agile, identifiez dans votre organisation ou projet :</p>
      <ul>
        <li>Un exemple où cette valeur est bien appliquée</li>
        <li>Un exemple où cette valeur est négligée</li>
        <li>Une action concrète pour mieux incarner cette valeur</li>
      </ul>
      
      <h3>Exercice 2 : Évaluation des principes</h3>
      <p>Évaluez votre équipe ou organisation sur chacun des 12 principes du Manifeste Agile, sur une échelle de 1 à 5. Identifiez les trois principes les moins bien notés et proposez des actions d'amélioration.</p>
      
      <h3>Exercice 3 : Reformulation personnelle</h3>
      <p>Réécrivez les valeurs et principes du Manifeste Agile dans vos propres mots, en les adaptant à votre contexte spécifique. Partagez cette reformulation avec votre équipe et discutez-en.</p>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>Le Manifeste Agile, avec ses valeurs et principes, constitue le fondement de toutes les méthodes agiles. Sa force réside dans sa simplicité et son universalité : il définit une philosophie plutôt qu'une méthodologie rigide, ce qui permet de l'adapter à différents contextes.</p>
      
      <p>Les quatre valeurs et les douze principes du Manifeste nous rappellent que l'agilité n'est pas une fin en soi, mais un moyen de livrer plus efficacement de la valeur aux clients, tout en créant un environnement de travail épanouissant pour les équipes.</p>
      
      <p>Dans un monde en constante évolution, où l'incertitude et la complexité sont la norme, les valeurs et principes du Manifeste Agile restent plus pertinents que jamais. Ils nous invitent à embrasser le changement, à collaborer efficacement, à livrer régulièrement de la valeur, et à nous améliorer continuellement.</p>
      
      <p>Dans les prochaines leçons, nous verrons comment ces valeurs et principes se concrétisent dans différentes méthodes agiles comme Scrum, Kanban, et Extreme Programming.</p>
    `,
    tableOfContents: [
      "Contexte historique du Manifeste Agile",
      "Les quatre valeurs fondamentales",
      "Les douze principes du Manifeste Agile",
      "Analyse approfondie des principes",
      "Interprétation et mauvaises interprétations",
      "L'évolution du Manifeste Agile",
      "Application pratique des valeurs et principes",
      "Exercices pratiques",
      "Conclusion",
    ],
  }

  return (
    <div className="app">
      <Header />
      <main className="lesson-page">
        <div className="search-container">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Recherche" />
          </div>
        </div>

        <LessonContent lesson={lessonData} />
      </main>
      <Footer />
    </div>
  )
}

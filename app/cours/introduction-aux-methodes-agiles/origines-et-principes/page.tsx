import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Origines et principes fondamentaux de l'agilité",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 1,
    totalSteps: 9,
    content: `
      <h2 id="section-1">Origines de l'agilité</h2>
      
      <p>L'agilité trouve ses racines dans les années 1990, lorsque plusieurs méthodologies de développement logiciel légères ont émergé en réaction aux méthodes traditionnelles jugées trop rigides et bureaucratiques. Ces approches, comme Scrum (1995), Crystal (1997), Feature-Driven Development (1997), et Extreme Programming (1999), partageaient des valeurs communes malgré leurs différences d'implémentation.</p>
      
      <p>La frustration grandissante face aux méthodes en cascade (Waterfall) a conduit 17 experts en développement logiciel à se réunir en février 2001 dans une station de ski à Snowbird, Utah. Cette rencontre historique a donné naissance au "Manifeste pour le développement agile de logiciels", document fondateur qui a formalisé les valeurs et principes de l'approche agile.</p>
      
      <p>Cette évolution n'était pas un hasard, mais une réponse nécessaire à un environnement d'affaires de plus en plus volatile, incertain, complexe et ambigu (VUCA). Les organisations avaient besoin d'approches plus adaptatives pour rester compétitives dans un monde en constante évolution.</p>
      
      <h2 id="section-2">Principes fondamentaux</h2>
      
      <p>Le Manifeste Agile repose sur quatre valeurs fondamentales qui guident toute approche agile :</p>
      
      <ul>
        <li><strong>Les individus et leurs interactions</strong> plus que les processus et les outils</li>
        <li><strong>Des logiciels opérationnels</strong> plus qu'une documentation exhaustive</li>
        <li><strong>La collaboration avec les clients</strong> plus que la négociation contractuelle</li>
        <li><strong>L'adaptation au changement</strong> plus que le suivi d'un plan</li>
      </ul>
      
      <p>Ces valeurs ne rejettent pas les éléments de droite (processus, documentation, contrats, plans) mais affirment que ceux de gauche ont plus de valeur dans le contexte du développement logiciel.</p>
      
      <p>Au-delà de ces valeurs, le Manifeste définit 12 principes qui précisent comment mettre en œuvre l'agilité au quotidien. Ces principes mettent l'accent sur la livraison continue de valeur, l'acceptation du changement, la collaboration étroite avec les parties prenantes, la motivation des équipes, et l'amélioration continue.</p>
      
      <h2 id="section-3">Valeurs agiles</h2>
      
      <p>Examinons plus en détail chacune des quatre valeurs du Manifeste Agile :</p>
      
      <h3>Les individus et leurs interactions plus que les processus et les outils</h3>
      
      <p>Cette valeur reconnaît que le développement logiciel est avant tout une activité humaine. Les processus et les outils sont importants, mais ils doivent servir les personnes, et non l'inverse. Une équipe composée d'individus compétents qui communiquent efficacement produira de meilleurs résultats qu'une équipe suivant rigoureusement un processus mais souffrant de problèmes de communication.</p>
      
      <p>En pratique, cela signifie privilégier :</p>
      <ul>
        <li>La communication face à face</li>
        <li>Les espaces de travail collaboratifs</li>
        <li>L'autonomie et la responsabilisation des équipes</li>
        <li>Le développement des compétences individuelles et collectives</li>
      </ul>
      
      <h3>Des logiciels opérationnels plus qu'une documentation exhaustive</h3>
      
      <p>La valeur réelle d'un logiciel réside dans sa capacité à fonctionner et à répondre aux besoins des utilisateurs, pas dans la documentation qui l'accompagne. La documentation reste nécessaire, mais elle doit être pertinente et proportionnée.</p>
      
      <p>Cette valeur encourage :</p>
      <ul>
        <li>La livraison fréquente de fonctionnalités utilisables</li>
        <li>La validation par l'usage plutôt que par la conformité aux spécifications</li>
        <li>Une documentation légère, juste suffisante</li>
        <li>L'automatisation des tests pour garantir le bon fonctionnement</li>
      </ul>
      
      <h3>La collaboration avec les clients plus que la négociation contractuelle</h3>
      
      <p>Les contrats sont nécessaires, mais ils ne garantissent pas le succès d'un projet. Une relation de confiance et une collaboration étroite avec le client sont plus efficaces pour créer de la valeur.</p>
      
      <p>Cette valeur se traduit par :</p>
      <ul>
        <li>L'implication continue du client dans le développement</li>
        <li>Des démonstrations régulières pour recueillir des feedbacks</li>
        <li>Des contrats flexibles qui permettent l'adaptation</li>
        <li>Une transparence sur l'avancement et les difficultés</li>
      </ul>
      
      <h3>L'adaptation au changement plus que le suivi d'un plan</h3>
      
      <p>Dans un environnement complexe, la capacité à s'adapter est plus précieuse que la capacité à planifier en détail. Les plans sont utiles, mais ils doivent être considérés comme des hypothèses à ajuster en fonction de la réalité.</p>
      
      <p>Cette valeur encourage :</p>
      <ul>
        <li>Des cycles courts de développement</li>
        <li>Des rétrospectives régulières pour s'améliorer</li>
        <li>Une planification progressive et adaptative</li>
        <li>Une ouverture aux changements, même tardifs</li>
      </ul>
      
      <h2 id="section-4">Manifeste agile</h2>
      
      <p>Le Manifeste Agile, dans sa forme complète, comprend les quatre valeurs mentionnées précédemment, suivies de douze principes qui les concrétisent :</p>
      
      <ol>
        <li>Notre plus haute priorité est de satisfaire le client en livrant rapidement et régulièrement des fonctionnalités à grande valeur ajoutée.</li>
        <li>Accueillez positivement les changements de besoins, même tard dans le projet. Les processus Agiles exploitent le changement pour donner un avantage compétitif au client.</li>
        <li>Livrez fréquemment un logiciel opérationnel avec des cycles de quelques semaines à quelques mois et une préférence pour les plus courts.</li>
        <li>Les utilisateurs ou leurs représentants et les développeurs doivent travailler ensemble quotidiennement tout au long du projet.</li>
        <li>Réalisez les projets avec des personnes motivées. Fournissez-leur l'environnement et le soutien dont ils ont besoin et faites-leur confiance pour atteindre les objectifs fixés.</li>
        <li>La méthode la plus simple et la plus efficace pour transmettre de l'information à l'équipe de développement et à l'intérieur de celle-ci est le dialogue en face à face.</li>
        <li>Un logiciel opérationnel est la principale mesure d'avancement.</li>
        <li>Les processus Agiles encouragent un rythme de développement soutenable. Ensemble, les commanditaires, les développeurs et les utilisateurs devraient être capables de maintenir indéfiniment un rythme constant.</li>
        <li>Une attention continue à l'excellence technique et à une bonne conception renforce l'Agilité.</li>
        <li>La simplicité – c'est-à-dire l'art de minimiser la quantité de travail inutile – est essentielle.</li>
        <li>Les meilleures architectures, spécifications et conceptions émergent d'équipes auto-organisées.</li>
        <li>À intervalles réguliers, l'équipe réfléchit aux moyens de devenir plus efficace, puis règle et modifie son comportement en conséquence.</li>
      </ol>
      
      <p>Ces principes constituent un guide pratique pour mettre en œuvre l'agilité au quotidien. Ils mettent l'accent sur la livraison continue de valeur, l'acceptation du changement comme une réalité inévitable et même bénéfique, la collaboration étroite entre toutes les parties prenantes, et l'importance de l'amélioration continue.</p>
      
      <h2 id="section-5">Bénéfices de l'approche agile</h2>
      
      <p>L'adoption des méthodes agiles apporte de nombreux avantages aux organisations :</p>
      
      <h3>Pour les clients et utilisateurs</h3>
      <ul>
        <li><strong>Meilleure adéquation aux besoins</strong> : Grâce aux feedbacks réguliers et à l'adaptation continue</li>
        <li><strong>Time-to-market réduit</strong> : Les fonctionnalités sont livrées progressivement, sans attendre que tout soit terminé</li>
        <li><strong>Visibilité accrue</strong> : Les démonstrations régulières permettent de suivre l'avancement réel</li>
        <li><strong>Contrôle des risques</strong> : Les problèmes sont identifiés et traités tôt dans le cycle de développement</li>
      </ul>
      
      <h3>Pour les équipes de développement</h3>
      <ul>
        <li><strong>Motivation et engagement</strong> : Autonomie, maîtrise et finalité, les trois piliers de la motivation intrinsèque</li>
        <li><strong>Qualité améliorée</strong> : Grâce à l'intégration continue, aux tests automatisés et aux revues régulières</li>
        <li><strong>Réduction du stress</strong> : Un rythme soutenable et des objectifs clairs à court terme</li>
        <li><strong>Apprentissage continu</strong> : Les rétrospectives favorisent l'amélioration constante</li>
      </ul>
      
      <h3>Pour les organisations</h3>
      <ul>
        <li><strong>Agilité business</strong> : Capacité à pivoter rapidement face aux changements du marché</li>
        <li><strong>Optimisation des investissements</strong> : Concentration sur les fonctionnalités à forte valeur ajoutée</li>
        <li><strong>Innovation accélérée</strong> : Expérimentation et apprentissage rapides</li>
        <li><strong>Satisfaction client améliorée</strong> : Alignement plus précis avec les attentes</li>
      </ul>
      
      <h2 id="section-6">Différence avec les méthodes traditionnelles</h2>
      
      <p>Pour bien comprendre l'agilité, il est utile de la comparer aux approches traditionnelles, souvent désignées sous le terme de "méthodes en cascade" (Waterfall) :</p>
      
      <table>
        <tr>
          <th>Aspect</th>
          <th>Approche traditionnelle</th>
          <th>Approche agile</th>
        </tr>
        <tr>
          <td>Planification</td>
          <td>Détaillée dès le début du projet</td>
          <td>Progressive et adaptative</td>
        </tr>
        <tr>
          <td>Exigences</td>
          <td>Figées après la phase d'analyse</td>
          <td>Évolutives tout au long du projet</td>
        </tr>
        <tr>
          <td>Livraison</td>
          <td>En une fois à la fin du projet</td>
          <td>Incrémentale et itérative</td>
        </tr>
        <tr>
          <td>Tests</td>
          <td>Après le développement</td>
          <td>En continu, souvent automatisés</td>
        </tr>
        <tr>
          <td>Documentation</td>
          <td>Exhaustive et formelle</td>
          <td>Légère et juste suffisante</td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>Formelle, souvent écrite</td>
          <td>Informelle, privilégiant les échanges directs</td>
        </tr>
        <tr>
          <td>Implication client</td>
          <td>Principalement au début et à la fin</td>
          <td>Continue tout au long du projet</td>
        </tr>
        <tr>
          <td>Mesure du succès</td>
          <td>Conformité au plan initial</td>
          <td>Valeur livrée et satisfaction client</td>
        </tr>
      </table>
      
      <p>Il est important de noter que l'approche agile n'est pas toujours la plus adaptée à tous les contextes. Les méthodes traditionnelles peuvent être plus appropriées pour des projets où :</p>
      <ul>
        <li>Les exigences sont stables et bien comprises</li>
        <li>Le domaine est fortement réglementé</li>
        <li>Les changements sont coûteux ou risqués</li>
        <li>La prévisibilité à long terme est cruciale</li>
      </ul>
      
      <h2 id="section-7">Études de cas</h2>
      
      <p>Examinons quelques exemples concrets d'organisations ayant adopté l'agilité avec succès :</p>
      
      <h3>Spotify</h3>
      <p>Spotify a développé son propre modèle agile, basé sur des "squads" (équipes), "tribes" (tribus), "chapters" (chapitres) et "guilds" (guildes). Cette structure permet de combiner autonomie des équipes et alignement stratégique à grande échelle. Résultat : une capacité d'innovation continue qui a permis à l'entreprise de rester leader sur son marché malgré la concurrence de géants comme Apple et Google.</p>
      
      <h3>ING Bank</h3>
      <p>Cette banque néerlandaise a complètement restructuré son organisation en s'inspirant des principes agiles. Les départements traditionnels ont été remplacés par des équipes pluridisciplinaires et autonomes, organisées autour de "customer journeys". Cette transformation a permis de réduire drastiquement le time-to-market des nouveaux produits et d'améliorer significativement la satisfaction client.</p>
      
      <h3>Saab</h3>
      <p>Le constructeur aéronautique suédois a appliqué les principes agiles au développement de ses avions de chasse, un domaine pourtant très réglementé et traditionnellement géré de façon séquentielle. En adoptant une approche itérative et en favorisant la collaboration entre experts de différents domaines, Saab a réussi à réduire les coûts et les délais tout en maintenant les standards de qualité et de sécurité exigés.</p>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour mieux comprendre les principes agiles, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Analyse de valeurs</h3>
      <p>Identifiez dans votre organisation ou dans un projet que vous connaissez des exemples concrets illustrant chacune des quatre valeurs du Manifeste Agile. Réfléchissez également à des situations où ces valeurs n'ont pas été respectées et aux conséquences qui en ont découlé.</p>
      
      <h3>Exercice 2 : Auto-évaluation agile</h3>
      <p>Sur une échelle de 1 à 5, évaluez dans quelle mesure votre équipe ou organisation applique chacun des 12 principes du Manifeste Agile. Identifiez les trois principes les moins bien notés et proposez des actions concrètes pour progresser sur ces aspects.</p>
      
      <h3>Exercice 3 : Jeu de rôle</h3>
      <p>En groupe, simulez une situation où un changement important est demandé en cours de projet. Une partie du groupe adopte une approche traditionnelle, l'autre une approche agile. Comparez ensuite les réactions, décisions et résultats des deux approches.</p>
      
      <h2 id="section-9">Résumé</h2>
      
      <p>Dans cette leçon, nous avons exploré les fondements de l'agilité :</p>
      
      <ul>
        <li>L'agilité est née d'un besoin d'adaptation face à un environnement de plus en plus complexe et changeant</li>
        <li>Le Manifeste Agile, avec ses 4 valeurs et 12 principes, constitue le socle commun à toutes les méthodes agiles</li>
        <li>L'approche agile se distingue des méthodes traditionnelles par sa flexibilité, son focus sur la valeur livrée et sa collaboration étroite avec les clients</li>
        <li>Les bénéfices de l'agilité sont nombreux : meilleure adéquation aux besoins, time-to-market réduit, qualité améliorée, motivation des équipes...</li>
        <li>De nombreuses organisations, dans des secteurs variés, ont adopté avec succès les principes agiles</li>
      </ul>
      
      <p>Dans les prochaines leçons, nous explorerons plus en détail les différentes méthodes agiles (Scrum, Kanban, XP...) et leur mise en œuvre pratique.</p>
    `,
    tableOfContents: [
      "Origines de l'agilité",
      "Principes fondamentaux",
      "Valeurs agiles",
      "Manifeste agile",
      "Bénéfices de l'approche agile",
      "Différence avec les méthodes traditionnelles",
      "Études de cas",
      "Exercices pratiques",
      "Résumé",
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

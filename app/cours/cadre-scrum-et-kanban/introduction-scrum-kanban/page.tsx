import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Introduction à Scrum et Kanban",
    instructor: "Mme. Dupont Claire",
    course: "Cadre Scrum et Kanban",
    courseSlug: "cadre-scrum-et-kanban",
    step: 1,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Origines et contexte historique</h2>
      
      <p>Avant de plonger dans les détails de Scrum et Kanban, il est important de comprendre leurs origines et le contexte dans lequel ces méthodes ont émergé.</p>
      
      <h3>Origines de Scrum</h3>
      
      <p>Scrum a été formalisé au début des années 1990 par Ken Schwaber et Jeff Sutherland. Le terme "Scrum" est emprunté au rugby et désigne une mêlée où les joueurs se regroupent pour faire avancer le ballon collectivement. Cette métaphore illustre bien l'esprit de collaboration et d'auto-organisation qui caractérise cette approche.</p>
      
      <p>Les fondements conceptuels de Scrum s'inspirent de plusieurs sources :</p>
      <ul>
        <li>Les travaux de Hirotaka Takeuchi et Ikujiro Nonaka sur les équipes pluridisciplinaires et auto-organisées</li>
        <li>Les principes du Lean Manufacturing développés chez Toyota</li>
        <li>La théorie des systèmes complexes et l'approche empirique</li>
      </ul>
      
      <p>En 1995, Schwaber et Sutherland présentent Scrum pour la première fois lors d'une conférence OOPSLA (Object-Oriented Programming, Systems, Languages & Applications). Depuis, Scrum est devenu la méthode agile la plus utilisée dans le monde, particulièrement dans le développement logiciel.</p>
      
      <h3>Origines de Kanban</h3>
      
      <p>Kanban trouve ses racines dans le système de production Toyota (Toyota Production System ou TPS) développé par Taiichi Ohno dans les années 1940-1950. Le mot "Kanban" signifie "panneau" ou "signal visuel" en japonais.</p>
      
      <p>À l'origine, Kanban était un système de cartes physiques utilisées pour signaler le besoin de réapprovisionnement dans la chaîne de production. Ce système permettait de mettre en œuvre le principe du "juste-à-temps" (Just-In-Time) en limitant le travail en cours et en tirant la production en fonction de la demande réelle.</p>
      
      <p>C'est David J. Anderson qui, dans les années 2000, a adapté ces principes au développement logiciel et à la gestion de services informatiques. Il a formalisé cette approche dans son livre "Kanban: Successful Evolutionary Change for Your Technology Business" publié en 2010.</p>
      
      <h2 id="section-2">Principes fondamentaux de Scrum</h2>
      
      <p>Scrum est un cadre de travail léger qui aide les équipes à résoudre des problèmes complexes tout en livrant de manière productive et créative des produits de la plus grande valeur possible.</p>
      
      <h3>Les piliers de Scrum</h3>
      
      <p>Scrum repose sur trois piliers fondamentaux :</p>
      
      <ul>
        <li><strong>Transparence</strong> : Les aspects significatifs du processus doivent être visibles par tous ceux qui sont responsables du résultat. La transparence exige que ces aspects soient définis par un standard commun afin que les observateurs partagent une compréhension commune de ce qui est observé.</li>
        <li><strong>Inspection</strong> : Les utilisateurs de Scrum doivent fréquemment inspecter les artefacts Scrum et la progression vers un objectif pour détecter les écarts indésirables. Cette inspection ne doit pas être si fréquente qu'elle gêne le travail.</li>
        <li><strong>Adaptation</strong> : Si un inspecteur détermine qu'un ou plusieurs aspects d'un processus dévient des limites acceptables et que le produit qui en résulte sera inacceptable, le processus ou le matériel en cours de traitement doit être ajusté. L'ajustement doit être effectué au plus tôt pour minimiser d'autres déviations.</li>
      </ul>
      
      <h3>Les valeurs de Scrum</h3>
      
      <p>Lorsque les valeurs d'engagement, de courage, de concentration, d'ouverture et de respect sont incarnées et vécues par l'équipe Scrum, les piliers Scrum de transparence, d'inspection et d'adaptation prennent vie et instaurent la confiance pour tous.</p>
      
      <ul>
        <li><strong>Engagement</strong> : Les membres de l'équipe s'engagent personnellement à atteindre les objectifs de l'équipe Scrum.</li>
        <li><strong>Courage</strong> : Les membres de l'équipe Scrum ont le courage de faire ce qui est juste et de s'attaquer aux problèmes difficiles.</li>
        <li><strong>Focus</strong> : Tout le monde se concentre sur le travail du Sprint et les objectifs de l'équipe Scrum.</li>
        <li><strong>Ouverture</strong> : L'équipe Scrum et ses parties prenantes sont ouverts sur le travail et les défis.</li>
        <li><strong>Respect</strong> : Les membres de l'équipe Scrum se respectent mutuellement pour être des personnes capables et indépendantes.</li>
      </ul>
      
      <h2 id="section-3">Principes fondamentaux de Kanban</h2>
      
      <p>Kanban est une méthode de gestion visuelle du travail qui met l'accent sur la livraison juste-à-temps et ne surcharge pas les membres de l'équipe.</p>
      
      <h3>Principes de base</h3>
      
      <p>Kanban repose sur quatre principes fondamentaux :</p>
      
      <ul>
        <li><strong>Commencer avec ce que vous faites actuellement</strong> : Kanban ne prescrit pas de rôles ou de pratiques spécifiques. Il s'applique directement à votre processus existant pour faciliter l'évolution incrémentale.</li>
        <li><strong>S'accorder sur la poursuite d'un changement évolutif</strong> : L'organisation (ou l'équipe) doit s'accorder sur le fait que l'amélioration continue par des changements évolutifs est la voie à suivre.</li>
        <li><strong>Respecter le processus, les rôles et les responsabilités actuels</strong> : Kanban reconnaît la valeur des processus existants, des rôles et des responsabilités, et promet de ne pas les perturber initialement.</li>
        <li><strong>Encourager les actes de leadership à tous les niveaux</strong> : Le leadership ne doit pas être limité aux positions managériales traditionnelles. Des personnes à tous les niveaux peuvent montrer des qualités de leadership.</li>
      </ul>
      
      <h3>Pratiques de Kanban</h3>
      
      <p>Pour mettre en œuvre Kanban, six pratiques sont généralement recommandées :</p>
      
      <ul>
        <li><strong>Visualiser le flux de travail</strong> : Représenter visuellement les différentes étapes du processus de travail.</li>
        <li><strong>Limiter le travail en cours (WIP)</strong> : Définir des limites explicites sur le nombre d'éléments pouvant être en cours de traitement à chaque étape du flux de travail.</li>
        <li><strong>Gérer le flux</strong> : Surveiller, mesurer et optimiser le flux de travail pour qu'il soit aussi fluide et prévisible que possible.</li>
        <li><strong>Rendre les politiques explicites</strong> : Définir et afficher clairement les règles et directives qui régissent le processus.</li>
        <li><strong>Mettre en œuvre des boucles de feedback</strong> : Établir des mécanismes de retour d'information à différents niveaux du processus.</li>
        <li><strong>Améliorer collaborativement, évoluer expérimentalement</strong> : Utiliser des modèles et la méthode scientifique pour mettre en œuvre des améliorations basées sur des hypothèses.</li>
      </ul>
      
      <h2 id="section-4">Comparaison initiale entre Scrum et Kanban</h2>
      
      <p>Bien que Scrum et Kanban partagent des valeurs et des principes agiles communs, ils présentent des différences significatives dans leur approche et leur mise en œuvre.</p>
      
      <h3>Similitudes</h3>
      
      <ul>
        <li>Les deux sont des méthodes agiles qui favorisent la livraison incrémentale et itérative</li>
        <li>Les deux mettent l'accent sur la visualisation du travail</li>
        <li>Les deux limitent le travail en cours (WIP)</li>
        <li>Les deux se concentrent sur la transparence</li>
        <li>Les deux encouragent l'auto-organisation des équipes</li>
        <li>Les deux visent l'amélioration continue</li>
      </ul>
      
      <h3>Différences</h3>
      
      <table>
        <tr>
          <th>Aspect</th>
          <th>Scrum</th>
          <th>Kanban</th>
        </tr>
        <tr>
          <td>Cadence</td>
          <td>Timeboxes fixes (Sprints)</td>
          <td>Flux continu, cadence optionnelle</td>
        </tr>
        <tr>
          <td>Rôles</td>
          <td>Définis (Product Owner, Scrum Master, Équipe de développement)</td>
          <td>Non prescrits, conserve les rôles existants</td>
        </tr>
        <tr>
          <td>Artefacts</td>
          <td>Product Backlog, Sprint Backlog, Incrément</td>
          <td>Tableau Kanban (principal artefact)</td>
        </tr>
        <tr>
          <td>Événements</td>
          <td>Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective</td>
          <td>Non prescrits, adaptés aux besoins</td>
        </tr>
        <tr>
          <td>Changements</td>
          <td>Pas de changements pendant le Sprint</td>
          <td>Changements possibles à tout moment</td>
        </tr>
        <tr>
          <td>Mesures</td>
          <td>Vélocité</td>
          <td>Lead time, Cycle time, Throughput</td>
        </tr>
        <tr>
          <td>Équipes</td>
          <td>Équipes pluridisciplinaires</td>
          <td>Peut fonctionner avec des équipes spécialisées</td>
        </tr>
      </table>
      
      <h2 id="section-5">Quand utiliser Scrum ou Kanban</h2>
      
      <p>Le choix entre Scrum et Kanban dépend de nombreux facteurs liés au contexte de votre organisation et de vos projets.</p>
      
      <h3>Scrum est généralement plus adapté quand :</h3>
      
      <ul>
        <li>Le produit ou service est nouveau et les exigences sont incertaines</li>
        <li>Le travail peut être divisé en incréments livrables</li>
        <li>L'équipe peut se consacrer à un seul produit ou projet</li>
        <li>Une structure claire est nécessaire pour guider l'équipe</li>
        <li>Des changements significatifs dans la façon de travailler sont acceptables</li>
        <li>Le client ou les parties prenantes peuvent s'engager régulièrement</li>
      </ul>
      
      <h3>Kanban est généralement plus adapté quand :</h3>
      
      <ul>
        <li>Le travail arrive de manière imprévisible (comme dans les équipes de support ou de maintenance)</li>
        <li>La flexibilité dans la planification et la priorisation est essentielle</li>
        <li>L'équipe travaille sur plusieurs projets ou produits simultanément</li>
        <li>Une transition en douceur à partir des processus existants est préférée</li>
        <li>Les délais de livraison sont critiques et doivent être optimisés</li>
        <li>Le processus existant fonctionne relativement bien mais pourrait être amélioré</li>
      </ul>
      
      <h3>Approche hybride : Scrumban</h3>
      
      <p>Dans de nombreux cas, les équipes choisissent d'adopter une approche hybride, souvent appelée "Scrumban", qui combine des éléments de Scrum et de Kanban :</p>
      
      <ul>
        <li>Utilisation du cadre Scrum (rôles, certains événements) avec la visualisation et le flux de Kanban</li>
        <li>Planification à la demande plutôt qu'à intervalles fixes</li>
        <li>Limites WIP explicites comme dans Kanban</li>
        <li>Rétrospectives régulières comme dans Scrum</li>
        <li>Flexibilité pour les changements en cours d'itération</li>
      </ul>
      
      <h2 id="section-6">Cas d'utilisation réels</h2>
      
      <p>Examinons quelques exemples concrets d'organisations qui ont mis en œuvre Scrum, Kanban ou des approches hybrides avec succès.</p>
      
      <h3>Cas d'utilisation de Scrum</h3>
      
      <p><strong>Spotify</strong> : Bien que Spotify ait développé son propre modèle (le modèle Spotify avec des "squads", "tribes", "chapters" et "guilds"), il est fortement inspiré de Scrum. Les équipes (squads) sont organisées autour de fonctionnalités ou de composants spécifiques et travaillent en sprints pour livrer des incréments de valeur.</p>
      
      <p><strong>Microsoft</strong> : Microsoft a adopté Scrum pour le développement de nombreux produits, notamment Visual Studio et Xbox. Cette transition a permis à l'entreprise de réduire les cycles de développement et d'améliorer la qualité des produits.</p>
      
      <h3>Cas d'utilisation de Kanban</h3>
      
      <p><strong>Équipes de support IT</strong> : De nombreuses équipes de support IT utilisent Kanban pour gérer les tickets d'incident et les demandes de service. Le flux imprévisible des demandes et la nécessité de réagir rapidement rendent Kanban particulièrement adapté à ce contexte.</p>
      
      <p><strong>Équipes de marketing de contenu</strong> : Les équipes qui produisent régulièrement du contenu (articles de blog, vidéos, infographies) utilisent souvent Kanban pour visualiser le flux de travail depuis l'idéation jusqu'à la publication, en passant par la création et la révision.</p>
      
      <h3>Cas d'utilisation hybrides</h3>
      
      <p><strong>Équipes de développement logiciel matures</strong> : De nombreuses équipes de développement commencent par Scrum, puis évoluent vers une approche plus hybride à mesure qu'elles gagnent en maturité. Elles conservent les aspects de Scrum qui leur sont utiles (comme les rétrospectives) tout en adoptant la flexibilité de Kanban.</p>
      
      <p><strong>Équipes de maintenance de produits</strong> : Ces équipes doivent souvent jongler entre des corrections de bugs urgentes et des améliorations planifiées. Une approche hybride leur permet de planifier des fonctionnalités à moyen terme tout en restant réactives aux problèmes critiques.</p>
      
      <h2 id="section-7">Préparation à l'adoption</h2>
      
      <p>Avant de se lancer dans l'adoption de Scrum ou Kanban, il est important de se préparer adéquatement.</p>
      
      <h3>Évaluation de la situation actuelle</h3>
      
      <ul>
        <li>Analyser le processus de travail existant</li>
        <li>Identifier les points forts et les points faibles</li>
        <li>Comprendre la culture organisationnelle</li>
        <li>Évaluer la maturité de l'équipe</li>
        <li>Identifier les contraintes et les dépendances</li>
      </ul>
      
      <h3>Préparation à Scrum</h3>
      
      <ul>
        <li>Former l'équipe aux principes et pratiques de Scrum</li>
        <li>Identifier et former les personnes qui assumeront les rôles de Scrum Master et de Product Owner</li>
        <li>Créer un Product Backlog initial</li>
        <li>Définir la durée du Sprint (généralement 2-4 semaines)</li>
        <li>Mettre en place les outils nécessaires (physiques ou numériques)</li>
        <li>Planifier les premiers événements Scrum</li>
      </ul>
      
      <h3>Préparation à Kanban</h3>
      
      <ul>
        <li>Former l'équipe aux principes et pratiques de Kanban</li>
        <li>Cartographier le flux de travail actuel</li>
        <li>Concevoir un tableau Kanban initial</li>
        <li>Définir les limites WIP initiales</li>
        <li>Établir des politiques explicites</li>
        <li>Mettre en place des métriques de base</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension de Scrum et Kanban, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Analyse comparative</h3>
      <p>Pour un projet ou une équipe que vous connaissez bien :</p>
      <ul>
        <li>Identifiez les caractéristiques qui rendraient Scrum approprié</li>
        <li>Identifiez les caractéristiques qui rendraient Kanban approprié</li>
        <li>Déterminez quelle approche serait la plus adaptée et pourquoi</li>
        <li>Réfléchissez à une approche hybride potentielle</li>
      </ul>
      
      <h3>Exercice 2 : Conception de tableau Kanban</h3>
      <p>Pour un processus de travail que vous connaissez :</p>
      <ul>
        <li>Identifiez les principales étapes du flux de travail</li>
        <li>Concevez un tableau Kanban avec des colonnes appropriées</li>
        <li>Définissez des limites WIP pour chaque colonne</li>
        <li>Identifiez les politiques qui devraient être explicites</li>
      </ul>
      
      <h3>Exercice 3 : Simulation Scrum</h3>
      <p>En groupe, simulez un Sprint Scrum pour un projet fictif :</p>
      <ul>
        <li>Assignez les rôles (Product Owner, Scrum Master, Équipe de développement)</li>
        <li>Créez un Product Backlog simple</li>
        <li>Menez une réunion de planification de Sprint</li>
        <li>Simulez quelques mêlées quotidiennes</li>
        <li>Terminez par une revue et une rétrospective</li>
      </ul>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>Scrum et Kanban sont deux approches agiles puissantes qui peuvent transformer la façon dont les équipes travaillent et livrent de la valeur. Bien qu'elles partagent des principes communs, elles offrent des cadres différents adaptés à des contextes spécifiques.</p>
      
      <p>Scrum fournit un cadre structuré avec des rôles, des événements et des artefacts définis, idéal pour les équipes qui développent de nouveaux produits dans un environnement complexe. Kanban, avec son accent sur la visualisation du flux et la limitation du travail en cours, est particulièrement adapté aux équipes qui gèrent un flux de travail continu et variable.</p>
      
      <p>Le choix entre Scrum, Kanban ou une approche hybride dépend de nombreux facteurs, notamment la nature du travail, la culture organisationnelle, la maturité de l'équipe et les contraintes spécifiques. L'important est de comprendre les principes fondamentaux de chaque approche et de les adapter à votre contexte spécifique.</p>
      
      <p>Dans les prochaines leçons, nous explorerons plus en détail les rôles, les événements et les artefacts de Scrum, ainsi que les pratiques et métriques de Kanban, pour vous donner une compréhension approfondie de ces deux cadres agiles.</p>
    `,
    tableOfContents: [
      "Origines et contexte historique",
      "Principes fondamentaux de Scrum",
      "Principes fondamentaux de Kanban",
      "Comparaison initiale entre Scrum et Kanban",
      "Quand utiliser Scrum ou Kanban",
      "Cas d'utilisation réels",
      "Préparation à l'adoption",
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

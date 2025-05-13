import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Fondamentaux de la planification agile",
    instructor: "Dr. Leblanc Sophie",
    course: "Techniques de planification",
    courseSlug: "techniques-de-planification",
    step: 1,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction à la planification agile</h2>
      
      <p>La planification est un aspect essentiel de tout projet, y compris dans un contexte agile. Cependant, l'approche de la planification en agilité diffère fondamentalement de celle des méthodes traditionnelles. Cette leçon explore les principes, les niveaux et les techniques de planification agile qui permettent de concilier structure et flexibilité.</p>
      
      <h3>Le paradoxe de la planification agile</h3>
      
      <p>L'une des valeurs du Manifeste Agile stipule : "Privilégier l'adaptation au changement plutôt que le suivi d'un plan". Cette affirmation est parfois mal interprétée comme signifiant que l'agilité rejette la planification. En réalité, les méthodes agiles reconnaissent l'importance de la planification, mais avec une perspective différente.</p>
      
      <p>Le paradoxe de la planification agile peut se résumer ainsi : "Planifier soigneusement tout en acceptant que ces plans changeront." Cette approche reconnaît deux réalités fondamentales :</p>
      
      <ul>
        <li><strong>La nécessité de planifier</strong> : Sans plan, il est difficile de coordonner les efforts, d'allouer les ressources et de créer une vision partagée.</li>
        <li><strong>L'inévitabilité du changement</strong> : Dans un environnement complexe, les plans initiaux seront presque certainement incomplets ou partiellement incorrects.</li>
      </ul>
      
      <p>La planification agile résout ce paradoxe en adoptant une approche progressive, adaptative et multi-niveaux.</p>
      
      <h3>Différences avec la planification traditionnelle</h3>
      
      <table>
        <tr>
          <th>Aspect</th>
          <th>Planification traditionnelle</th>
          <th>Planification agile</th>
        </tr>
        <tr>
          <td>Horizon</td>
          <td>Plan détaillé à long terme</td>
          <td>Détaillé à court terme, général à long terme</td>
        </tr>
        <tr>
          <td>Fréquence</td>
          <td>Principalement au début du projet</td>
          <td>Continue et à plusieurs niveaux</td>
        </tr>
        <tr>
          <td>Approche</td>
          <td>Prédictive (basée sur des prévisions)</td>
          <td>Adaptative (basée sur l'apprentissage)</td>
        </tr>
        <tr>
          <td>Focus</td>
          <td>Tâches et activités</td>
          <td>Valeur et résultats</td>
        </tr>
        <tr>
          <td>Participation</td>
          <td>Principalement les gestionnaires</td>
          <td>Équipe entière et parties prenantes</td>
        </tr>
        <tr>
          <td>Mesure du succès</td>
          <td>Conformité au plan</td>
          <td>Valeur livrée et adaptation</td>
        </tr>
      </table>
      
      <h2 id="section-2">Principes de la planification agile</h2>
      
      <p>La planification agile repose sur plusieurs principes fondamentaux qui guident son approche :</p>
      
      <h3>1. Planification progressive</h3>
      
      <p>La planification agile adopte une approche "juste à temps" où les détails sont élaborés progressivement, au fur et à mesure que l'on se rapproche de l'exécution. Cette approche permet de :</p>
      
      <ul>
        <li>Réduire le gaspillage de planification détaillée pour des éléments qui pourraient changer</li>
        <li>Intégrer les apprentissages et les feedbacks dans les plans</li>
        <li>Maintenir la flexibilité face aux changements</li>
      </ul>
      
      <p>Le principe est simple : plus l'horizon est lointain, moins le plan est détaillé.</p>
      
      <h3>2. Planification collaborative</h3>
      
      <p>En agilité, la planification n'est pas l'apanage des gestionnaires ou des chefs de projet. Elle implique activement :</p>
      
      <ul>
        <li>L'équipe de développement qui apporte son expertise technique</li>
        <li>Les représentants du client qui apportent la vision business</li>
        <li>Les parties prenantes qui apportent leurs perspectives diverses</li>
      </ul>
      
      <p>Cette collaboration permet de créer des plans plus réalistes, mieux compris et plus largement acceptés.</p>
      
      <h3>3. Planification basée sur la valeur</h3>
      
      <p>La planification agile se concentre d'abord sur la valeur à livrer plutôt que sur les activités à réaliser. Cela implique de :</p>
      
      <ul>
        <li>Identifier ce qui apporte le plus de valeur aux utilisateurs et à l'organisation</li>
        <li>Prioriser les éléments à forte valeur</li>
        <li>Séquencer le travail pour livrer de la valeur le plus tôt possible</li>
      </ul>
      
      <p>Cette approche permet de maximiser le retour sur investissement et de réduire les risques en livrant d'abord ce qui est le plus important.</p>
      
      <h3>4. Planification adaptative</h3>
      
      <p>Les plans agiles sont conçus pour évoluer en fonction des apprentissages et des changements. Cela nécessite :</p>
      
      <ul>
        <li>Des boucles de feedback régulières pour évaluer les résultats</li>
        <li>Une révision et un ajustement fréquents des plans</li>
        <li>Une acceptation du changement comme une réalité normale</li>
      </ul>
      
      <p>Cette adaptabilité permet de maintenir la pertinence des plans face à l'évolution des besoins, des contraintes et des opportunités.</p>
      
      <h3>5. Planification empirique</h3>
      
      <p>La planification agile s'appuie sur des données réelles plutôt que sur des hypothèses non vérifiées. Cela implique de :</p>
      
      <ul>
        <li>Utiliser les performances passées pour estimer le futur (vélocité, throughput)</li>
        <li>Expérimenter et mesurer les résultats</li>
        <li>Ajuster les plans en fonction des données observées</li>
      </ul>
      
      <p>Cette approche empirique permet d'améliorer progressivement la précision et la fiabilité des plans.</p>
      
      <h2 id="section-3">Les niveaux de planification agile</h2>
      
      <p>La planification agile s'organise généralement en plusieurs niveaux, chacun avec un horizon temporel et un niveau de détail différents :</p>
      
      <h3>1. Planification stratégique</h3>
      
      <p><strong>Horizon</strong> : 6-12 mois ou plus</p>
      <p><strong>Objectif</strong> : Aligner le développement produit avec la stratégie d'entreprise</p>
      
      <p><strong>Éléments clés :</strong></p>
      <ul>
        <li>Vision du produit</li>
        <li>Objectifs stratégiques</li>
        <li>Feuille de route produit</li>
        <li>Budgets et allocation des ressources</li>
      </ul>
      
      <p><strong>Participants</strong> : Direction, Product Management, représentants des équipes</p>
      
      <p><strong>Fréquence de révision</strong> : Trimestrielle ou semestrielle</p>
      
      <h3>2. Planification de release</h3>
      
      <p><strong>Horizon</strong> : 2-3 mois</p>
      <p><strong>Objectif</strong> : Définir ce qui sera livré dans les prochaines releases</p>
      
      <p><strong>Éléments clés :</strong></p>
      <ul>
        <li>Thèmes ou fonctionnalités majeures</li>
        <li>Dépendances entre équipes</li>
        <li>Dates cibles de livraison</li>
        <li>Critères de succès de la release</li>
      </ul>
      
      <p><strong>Participants</strong> : Product Owners, Scrum Masters, représentants des équipes, parties prenantes clés</p>
      
      <p><strong>Fréquence de révision</strong> : Mensuelle</p>
      
      <h3>3. Planification d'itération</h3>
      
      <p><strong>Horizon</strong> : 1-4 semaines</p>
      <p><strong>Objectif</strong> : Définir ce qui sera développé dans l'itération à venir</p>
      
      <p><strong>Éléments clés :</strong></p>
      <ul>
        <li>User stories ou éléments de backlog sélectionnés</li>
        <li>Critères d'acceptation</li>
        <li>Tâches détaillées</li>
        <li>Engagement de l'équipe</li>
      </ul>
      
      <p><strong>Participants</strong> : Équipe complète (développeurs, testeurs, etc.), Product Owner</p>
      
      <p><strong>Fréquence de révision</strong> : Au début de chaque itération</p>
      
      <h3>4. Planification quotidienne</h3>
      
      <p><strong>Horizon</strong> : 24 heures</p>
      <p><strong>Objectif</strong> : Coordonner le travail quotidien et identifier les obstacles</p>
      
      <p><strong>Éléments clés :</strong></p>
      <ul>
        <li>Tâches pour la journée</li>
        <li>Obstacles à résoudre</li>
        <li>Ajustements au plan d'itération</li>
      </ul>
      
      <p><strong>Participants</strong> : Équipe de développement</p>
      
      <p><strong>Fréquence de révision</strong> : Quotidienne</p>
      
      <h2 id="section-4">Techniques de planification agile</h2>
      
      <p>Plusieurs techniques et outils sont utilisés pour faciliter la planification agile à différents niveaux :</p>
      
      <h3>Roadmapping agile</h3>
      
      <p>Le roadmapping agile est une technique de planification stratégique qui permet de visualiser l'évolution d'un produit sur plusieurs mois ou trimestres.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Organisé par thèmes ou objectifs plutôt que par fonctionnalités détaillées</li>
        <li>Utilise des horizons temporels approximatifs (Now, Next, Later ou Q1, Q2, etc.)</li>
        <li>Met l'accent sur les résultats business plutôt que sur les solutions techniques</li>
        <li>Reste flexible et adaptable</li>
      </ul>
      
      <p><strong>Étapes :</strong></p>
      <ol>
        <li>Définir la vision et les objectifs du produit</li>
        <li>Identifier les thèmes ou initiatives clés</li>
        <li>Prioriser ces thèmes en fonction de la valeur et des dépendances</li>
        <li>Placer les thèmes sur un calendrier approximatif</li>
        <li>Réviser et ajuster régulièrement</li>
      </ol>
      
      <h3>User Story Mapping</h3>
      
      <p>Le User Story Mapping est une technique visuelle qui permet d'organiser les user stories selon le parcours utilisateur et de planifier les releases.</p>
      
      <p><strong>Structure :</strong></p>
      <ul>
        <li><strong>Axe horizontal</strong> : Représente le flux d'utilisation ou les activités de l'utilisateur</li>
        <li><strong>Axe vertical</strong> : Représente la priorité (les éléments essentiels en haut, les détails en bas)</li>
      </ul>
      
      <p><strong>Étapes :</strong></p>
      <ol>
        <li>Identifier les principaux utilisateurs ou personas</li>
        <li>Cartographier les activités principales de l'utilisateur (backbone)</li>
        <li>Décomposer chaque activité en tâches utilisateur</li>
        <li>Ajouter les user stories sous chaque tâche</li>
        <li>Prioriser verticalement les stories</li>
        <li>Définir des "tranches horizontales" pour les releases</li>
      </ol>
      
      <h3>Planning Poker</h3>
      
      <p>Le Planning Poker est une technique d'estimation collaborative utilisée pour évaluer l'effort ou la complexité des user stories.</p>
      
      <p><strong>Processus :</strong></p>
      <ol>
        <li>Le Product Owner présente une user story</li>
        <li>L'équipe discute pour clarifier la story</li>
        <li>Chaque membre choisit secrètement une carte représentant son estimation</li>
        <li>Toutes les cartes sont révélées simultanément</li>
        <li>Les estimations divergentes sont discutées</li>
        <li>Le processus est répété jusqu'à l'obtention d'un consensus</li>
      </ol>
      
      <p><strong>Échelles courantes :</strong></p>
      <ul>
        <li>Suite de Fibonacci modifiée : 0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100, ?</li>
        <li>T-shirt sizing : XS, S, M, L, XL, XXL</li>
      </ul>
      
      <h3>Relative Sizing</h3>
      
      <p>Le Relative Sizing est une approche d'estimation qui compare les éléments entre eux plutôt que d'essayer de prédire des durées absolues.</p>
      
      <p><strong>Avantages :</strong></p>
      <ul>
        <li>Plus rapide et plus précis que l'estimation en temps absolu</li>
        <li>Évite le piège de la "loi de Parkinson" (le travail s'étend pour remplir le temps disponible)</li>
        <li>Facilite la discussion sur la complexité réelle</li>
      </ul>
      
      <p><strong>Techniques :</strong></p>
      <ul>
        <li><strong>Affinity Estimating</strong> : Regrouper les stories de complexité similaire</li>
        <li><strong>Bucket System</strong> : Placer les stories dans des "seaux" prédéfinis</li>
        <li><strong>Team Estimation Game</strong> : Ordonner les stories de la plus simple à la plus complexe</li>
      </ul>
      
      <h2 id="section-5">Gestion du Product Backlog</h2>
      
      <p>Le Product Backlog est l'élément central de la planification agile. Sa gestion efficace est essentielle pour une planification réussie.</p>
      
      <h3>Création et alimentation</h3>
      
      <p>Le Product Backlog est initialement créé lors de la phase d'initiation du projet, mais il évolue constamment tout au long du projet.</p>
      
      <p><strong>Sources d'alimentation :</strong></p>
      <ul>
        <li>Vision du produit</li>
        <li>Besoins des utilisateurs</li>
        <li>Feedback sur les incréments livrés</li>
        <li>Analyse de la concurrence</li>
        <li>Évolutions technologiques</li>
        <li>Contraintes réglementaires</li>
      </ul>
      
      <h3>Priorisation</h3>
      
      <p>La priorisation du Product Backlog est une activité continue qui permet de maximiser la valeur livrée.</p>
      
      <p><strong>Critères de priorisation :</strong></p>
      <ul>
        <li>Valeur business</li>
        <li>Coût de développement</li>
        <li>Risque</li>
        <li>Dépendances</li>
        <li>Date limite</li>
        <li>Apprentissage et feedback</li>
      </ul>
      
      <p><strong>Techniques de priorisation :</strong></p>
      <ul>
        <li><strong>MoSCoW</strong> : Must have, Should have, Could have, Won't have</li>
        <li><strong>WSJF</strong> (Weighted Shortest Job First) : Valeur / Taille</li>
        <li><strong>Kano Model</strong> : Basiques, Performants, Attractifs</li>
        <li><strong>Value vs Effort</strong> : Matrice 2x2</li>
        <li><strong>Business Value Points</strong> : Attribution de points de valeur</li>
      </ul>
      
      <h3>Raffinement</h3>
      
      <p>Le raffinement du Product Backlog est le processus continu d'ajout de détails, d'estimations et d'ordre aux éléments du backlog.</p>
      
      <p><strong>Activités :</strong></p>
      <ul>
        <li>Clarification des éléments</li>
        <li>Décomposition des éléments trop gros</li>
        <li>Estimation de la taille relative</li>
        <li>Définition des critères d'acceptation</li>
        <li>Identification des dépendances techniques</li>
      </ul>
      
      <p><strong>Bonnes pratiques :</strong></p>
      <ul>
        <li>Consacrer régulièrement du temps au raffinement (5-10% du temps de l'équipe)</li>
        <li>Impliquer toute l'équipe</li>
        <li>Se concentrer sur les éléments de haute priorité</li>
        <li>Maintenir un backlog "prêt" pour 2-3 itérations à venir</li>
      </ul>
      
      <h2 id="section-6">Planification d'itération</h2>
      
      <p>La planification d'itération (ou Sprint Planning dans Scrum) est une session de travail où l'équipe détermine ce qu'elle peut livrer dans l'itération à venir et comment elle va s'y prendre.</p>
      
      <h3>Objectifs</h3>
      
      <ul>
        <li>Sélectionner les éléments du Product Backlog à inclure dans l'itération</li>
        <li>Définir un objectif clair pour l'itération</li>
        <li>Décomposer les éléments en tâches</li>
        <li>Estimer le travail</li>
        <li>S'engager collectivement sur un plan réalisable</li>
      </ul>
      
      <h3>Structure typique</h3>
      
      <p>La planification d'itération se déroule généralement en deux parties :</p>
      
      <ol>
        <li><strong>Partie 1 : Quoi</strong>
          <ul>
            <li>Le Product Owner présente les éléments prioritaires du Product Backlog</li>
            <li>L'équipe pose des questions pour clarifier les éléments</li>
            <li>L'équipe sélectionne les éléments qu'elle pense pouvoir compléter</li>
            <li>Un objectif d'itération est défini</li>
          </ul>
        </li>
        <li><strong>Partie 2 : Comment</strong>
          <ul>
            <li>L'équipe décompose les éléments sélectionnés en tâches</li>
            <li>Les tâches sont estimées (généralement en heures)</li>
            <li>L'équipe vérifie que le plan est réalisable</li>
            <li>Le plan est ajusté si nécessaire</li>
          </ul>
        </li>
      </ol>
      
      <h3>Détermination de la capacité</h3>
      
      <p>Pour planifier de manière réaliste, l'équipe doit déterminer sa capacité pour l'itération :</p>
      
      <ol>
        <li>Identifier les membres disponibles pour l'itération</li>
        <li>Calculer les jours-personnes disponibles (en tenant compte des congés, formations, etc.)</li>
        <li>Appliquer un facteur de focus (généralement 60-80%) pour tenir compte des réunions, des interruptions, etc.</li>
        <li>Pour les équipes utilisant la vélocité, se baser sur la vélocité moyenne des dernières itérations</li>
      </ol>
      
      <h3>Bonnes pratiques</h3>
      
      <ul>
        <li>Limiter la durée de la session (2 heures par semaine d'itération est une règle empirique)</li>
        <li>S'assurer que les éléments du backlog sont suffisamment raffinés</li>
        <li>Impliquer toute l'équipe</li>
        <li>Visualiser le plan (tableau physique ou numérique)</li>
        <li>Être réaliste plutôt qu'optimiste</li>
        <li>Prévoir une marge pour les imprévus</li>
      </ul>
      
      <h2 id="section-7">Suivi et adaptation</h2>
      
      <p>La planification agile ne s'arrête pas une fois le plan initial établi. Le suivi continu et l'adaptation sont essentiels pour maintenir le plan aligné avec la réalité.</p>
      
      <h3>Métriques de suivi</h3>
      
      <p>Plusieurs métriques peuvent être utilisées pour suivre l'avancement et adapter les plans :</p>
      
      <ul>
        <li><strong>Burndown Chart</strong> : Graphique montrant le travail restant au fil du temps</li>
        <li><strong>Burnup Chart</strong> : Graphique montrant le travail accompli au fil du temps</li>
        <li><strong>Vélocité</strong> : Quantité de travail que l'équipe peut accomplir par itération</li>
        <li><strong>Cumulative Flow Diagram</strong> : Visualisation du flux de travail et des goulots d'étranglement</li>
        <li><strong>Lead Time</strong> : Temps entre la demande et la livraison d'une fonctionnalité</li>
        <li><strong>Cycle Time</strong> : Temps de traitement d'une fonctionnalité une fois qu'elle est commencée</li>
      </ul>
      
      <h3>Réunions d'adaptation</h3>
      
      <p>Plusieurs types de réunions permettent d'adapter les plans en fonction des apprentissages :</p>
      
      <ul>
        <li><strong>Daily Stand-up</strong> : Synchronisation quotidienne pour ajuster le plan à court terme</li>
        <li><strong>Review</strong> : Démonstration de l'incrément et recueil du feedback</li>
        <li><strong>Retrospective</strong> : Réflexion sur le processus et identification d'améliorations</li>
        <li><strong>Backlog Refinement</strong> : Ajustement continu du backlog</li>
      </ul>
      
      <h3>Gestion des changements</h3>
      
      <p>Les changements sont inévitables et même bienvenus en agilité, mais ils doivent être gérés de manière structurée :</p>
      
      <ul>
        <li>Évaluer l'impact du changement sur les plans actuels</li>
        <li>Communiquer clairement les changements à toutes les parties prenantes</li>
        <li>Ajuster les priorités en conséquence</li>
        <li>Mettre à jour les plans à tous les niveaux si nécessaire</li>
        <li>Documenter les raisons des changements pour l'apprentissage organisationnel</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension de la planification agile, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Création d'une roadmap agile</h3>
      <p>Pour un produit de votre choix (réel ou fictif) :</p>
      <ol>
        <li>Définissez la vision du produit</li>
        <li>Identifiez 3-5 objectifs stratégiques</li>
        <li>Pour chaque objectif, listez 2-3 initiatives ou thèmes</li>
        <li>Organisez ces initiatives sur un calendrier approximatif (Now, Next, Later)</li>
        <li>Identifiez les dépendances entre initiatives</li>
      </ol>
      
      <h3>Exercice 2 : User Story Mapping</h3>
      <p>Pour une fonctionnalité ou un produit simple :</p>
      <ol>
        <li>Identifiez l'utilisateur principal</li>
        <li>Listez les activités principales de l'utilisateur (5-7 maximum)</li>
        <li>Pour chaque activité, identifiez 3-5 tâches utilisateur</li>
        <li>Pour chaque tâche, créez 2-3 user stories</li>
        <li>Organisez ces stories verticalement par priorité</li>
        <li>Définissez 2-3 releases potentielles (tranches horizontales)</li>
      </ol>
      
      <h3>Exercice 3 : Simulation de Planning Poker</h3>
      <p>En groupe, simulez une session de Planning Poker :</p>
      <ol>
        <li>Préparez 5-10 user stories pour un produit fictif</li>
        <li>Distribuez des cartes de Planning Poker (ou utilisez des substituts)</li>
        <li>Pour chaque story, suivez le processus complet (présentation, questions, estimation, discussion)</li>
        <li>Notez les estimations finales</li>
        <li>Discutez des différences d'estimation et des leçons apprises</li>
      </ol>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>La planification agile représente un changement fondamental dans la façon d'aborder la planification de projet. Elle reconnaît à la fois l'importance de la planification et l'inévitabilité du changement, en adoptant une approche progressive, collaborative et adaptative.</p>
      
      <p>Les principes clés de la planification agile incluent :</p>
      <ul>
        <li>La planification progressive (plus détaillée à court terme, plus générale à long terme)</li>
        <li>La planification collaborative (impliquant toute l'équipe et les parties prenantes)</li>
        <li>La planification basée sur la valeur (priorisant ce qui apporte le plus de valeur)</li>
        <li>La planification adaptative (évoluant en fonction des apprentissages)</li>
        <li>La planification empirique (basée sur des données réelles)</li>
      </ul>
      
      <p>En pratiquant la planification à différents niveaux (stratégique, release, itération, quotidien) et en utilisant des techniques appropriées (roadmapping, user story mapping, planning poker), les équipes agiles peuvent maintenir un équilibre entre structure et flexibilité.</p>
      
      <p>Dans les prochaines leçons, nous approfondirons certaines de ces techniques et explorerons d'autres aspects de la planification agile, notamment l'estimation, la gestion des dépendances et la planification à l'échelle.</p>
    `,
    tableOfContents: [
      "Introduction à la planification agile",
      "Principes de la planification agile",
      "Les niveaux de planification agile",
      "Techniques de planification agile",
      "Gestion du Product Backlog",
      "Planification d'itération",
      "Suivi et adaptation",
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

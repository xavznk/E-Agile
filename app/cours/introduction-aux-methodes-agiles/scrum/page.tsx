import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Scrum : rôles, événements et artefacts",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 5,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction à Scrum</h2>
      
      <p>Scrum est un cadre de travail léger qui aide les équipes à résoudre des problèmes complexes tout en livrant de manière productive et créative des produits de la plus grande valeur possible. Développé par Ken Schwaber et Jeff Sutherland dans les années 1990, Scrum est aujourd'hui la méthode agile la plus utilisée dans le monde.</p>
      
      <p>Le terme "Scrum" vient du rugby et désigne une mêlée où les joueurs se regroupent pour faire avancer le ballon collectivement. Cette métaphore illustre bien l'esprit de collaboration et d'auto-organisation qui caractérise cette approche.</p>
      
      <p>Scrum n'est pas un processus ou une technique pour construire des produits ; c'est un cadre à l'intérieur duquel vous pouvez employer divers processus et techniques. Il rend visible l'efficacité relative de vos pratiques de gestion de produit et de développement afin que vous puissiez vous améliorer.</p>
      
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
      
      <h2 id="section-2">Les rôles dans Scrum</h2>
      
      <p>L'équipe Scrum est composée de trois rôles distincts et complémentaires :</p>
      
      <h3>Le Product Owner</h3>
      
      <p>Le Product Owner est responsable de maximiser la valeur du produit résultant du travail de l'équipe de développement. Il est l'unique personne responsable de la gestion du Product Backlog.</p>
      
      <p><strong>Responsabilités :</strong></p>
      <ul>
        <li>Exprimer clairement les éléments du Product Backlog</li>
        <li>Ordonner les éléments du Product Backlog pour atteindre au mieux les objectifs</li>
        <li>Optimiser la valeur du travail effectué par l'équipe de développement</li>
        <li>S'assurer que le Product Backlog est visible, transparent et clair pour tous</li>
        <li>S'assurer que l'équipe de développement comprend les éléments du Product Backlog au niveau nécessaire</li>
      </ul>
      
      <p><strong>Compétences clés :</strong></p>
      <ul>
        <li>Vision produit</li>
        <li>Connaissance du marché et des besoins clients</li>
        <li>Capacité à prioriser</li>
        <li>Communication claire</li>
        <li>Prise de décision</li>
      </ul>
      
      <h3>Le Scrum Master</h3>
      
      <p>Le Scrum Master est responsable de promouvoir et de soutenir Scrum tel que défini dans le Guide Scrum. Il aide tout le monde à comprendre la théorie, les pratiques, les règles et les valeurs de Scrum.</p>
      
      <p><strong>Responsabilités :</strong></p>
      <ul>
        <li>Faciliter les événements Scrum</li>
        <li>Coacher l'équipe de développement dans l'auto-organisation et la pluridisciplinarité</li>
        <li>Aider l'équipe de développement à créer des produits de haute valeur</li>
        <li>Éliminer les obstacles à l'avancement de l'équipe de développement</li>
        <li>Faciliter l'adoption de Scrum dans l'organisation</li>
      </ul>
      
      <p><strong>Compétences clés :</strong></p>
      <ul>
        <li>Facilitation</li>
        <li>Coaching</li>
        <li>Résolution de problèmes</li>
        <li>Connaissance approfondie de Scrum</li>
        <li>Leadership serviteur</li>
      </ul>
      
      <h3>L'équipe de développement</h3>
      
      <p>L'équipe de développement est composée de professionnels qui réalisent le travail de livrer un incrément potentiellement livrable du produit à la fin de chaque Sprint.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li><strong>Auto-organisée</strong> : Personne ne dit à l'équipe comment transformer le Product Backlog en incréments de fonctionnalités potentiellement livrables</li>
        <li><strong>Pluridisciplinaire</strong> : L'équipe possède toutes les compétences nécessaires pour créer un incrément de produit</li>
        <li><strong>Pas de sous-équipes</strong> : Pas de titres, pas de sous-équipes dédiées à des domaines particuliers</li>
        <li><strong>Responsabilité collective</strong> : L'équipe dans son ensemble est responsable, même si les membres ont des compétences spécialisées</li>
        <li><strong>Taille optimale</strong> : Assez petite pour rester agile, assez grande pour accomplir un travail significatif (généralement 3-9 personnes)</li>
      </ul>
      
      <h2 id="section-3">Les événements Scrum</h2>
      
      <p>Scrum définit cinq événements formels pour l'inspection et l'adaptation. Ces événements sont conçus pour minimiser le besoin de réunions non définies dans Scrum.</p>
      
      <h3>Le Sprint</h3>
      
      <p>Le Sprint est le cœur de Scrum, un time-box d'un mois ou moins pendant lequel un incrément de produit "Terminé", utilisable et potentiellement livrable est créé.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Durée fixe (généralement 2-4 semaines)</li>
        <li>Un nouveau Sprint commence immédiatement après la conclusion du Sprint précédent</li>
        <li>Chaque Sprint a un objectif clair (Sprint Goal)</li>
        <li>Aucun changement qui mettrait en péril l'objectif du Sprint n'est autorisé</li>
        <li>La portée peut être clarifiée et renégociée entre le Product Owner et l'équipe de développement à mesure que l'on en apprend davantage</li>
      </ul>
      
      <h3>La planification de Sprint (Sprint Planning)</h3>
      
      <p>La planification de Sprint est une réunion time-boxée à huit heures maximum pour un Sprint d'un mois. Pour des Sprints plus courts, l'événement est généralement plus court.</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Définir ce qui peut être livré dans l'incrément résultant du Sprint à venir</li>
        <li>Déterminer comment le travail nécessaire pour livrer l'incrément sera réalisé</li>
      </ul>
      
      <p><strong>Structure :</strong></p>
      <ol>
        <li><strong>Partie 1</strong> : L'équipe de développement prévoit les fonctionnalités qui seront développées pendant le Sprint</li>
        <li><strong>Partie 2</strong> : L'équipe de développement décide comment elle va accomplir ce travail</li>
      </ol>
      
      <p><strong>Résultats :</strong></p>
      <ul>
        <li>Un objectif de Sprint clair</li>
        <li>Un Sprint Backlog contenant les éléments du Product Backlog sélectionnés pour le Sprint et un plan pour les livrer</li>
      </ul>
      
      <h3>La mêlée quotidienne (Daily Scrum)</h3>
      
      <p>La mêlée quotidienne est une réunion time-boxée à 15 minutes pour l'équipe de développement. Elle se tient chaque jour du Sprint, généralement à la même heure et au même endroit pour réduire la complexité.</p>
      
      <p><strong>Objectif :</strong></p>
      <ul>
        <li>Synchroniser les activités et créer un plan pour les prochaines 24 heures</li>
      </ul>
      
      <p><strong>Structure classique :</strong></p>
      <p>Chaque membre de l'équipe de développement répond à trois questions :</p>
      <ol>
        <li>Qu'ai-je accompli hier qui aide l'équipe à atteindre l'objectif du Sprint ?</li>
        <li>Que vais-je faire aujourd'hui pour aider l'équipe à atteindre l'objectif du Sprint ?</li>
        <li>Est-ce que je vois des obstacles qui m'empêchent ou empêchent l'équipe d'atteindre l'objectif du Sprint ?</li>
      </ol>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Animée par l'équipe de développement</li>
        <li>Le Scrum Master s'assure que la réunion a lieu et que les règles sont respectées</li>
        <li>Les discussions détaillées sont reportées après la mêlée</li>
      </ul>
      
      <h3>La revue de Sprint (Sprint Review)</h3>
      
      <p>La revue de Sprint est tenue à la fin du Sprint pour inspecter l'incrément et adapter le Product Backlog si nécessaire. C'est une réunion time-boxée à quatre heures maximum pour un Sprint d'un mois.</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Présenter l'incrément aux parties prenantes et recueillir leurs feedbacks</li>
        <li>Discuter de ce qui s'est bien passé, des problèmes rencontrés et de leur résolution</li>
        <li>Examiner l'état actuel du Product Backlog</li>
        <li>Projeter les dates d'achèvement probables en fonction de l'avancement</li>
      </ul>
      
      <p><strong>Participants :</strong></p>
      <ul>
        <li>L'équipe Scrum</li>
        <li>Les parties prenantes invitées par le Product Owner</li>
      </ul>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Informelle (pas une simple présentation)</li>
        <li>Collaborative</li>
        <li>Axée sur le feedback et la collaboration</li>
      </ul>
      
      <h3>La rétrospective de Sprint (Sprint Retrospective)</h3>
      
      <p>La rétrospective de Sprint est une opportunité pour l'équipe Scrum de s'inspecter elle-même et de créer un plan d'amélioration à mettre en œuvre lors du prochain Sprint. C'est une réunion time-boxée à trois heures maximum pour un Sprint d'un mois.</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Inspecter comment le dernier Sprint s'est déroulé en termes de personnes, relations, processus et outils</li>
        <li>Identifier et ordonner les principaux éléments qui se sont bien passés et les améliorations potentielles</li>
        <li>Créer un plan pour mettre en œuvre des améliorations à la façon dont l'équipe Scrum effectue son travail</li>
      </ul>
      
      <p><strong>Structure possible :</strong></p>
      <ol>
        <li>Ce qui s'est bien passé</li>
        <li>Ce qui pourrait être amélioré</li>
        <li>Actions concrètes pour le prochain Sprint</li>
      </ol>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Positive et productive (pas un blâme)</li>
        <li>Focalisée sur l'amélioration continue</li>
        <li>Résulte en des actions concrètes</li>
      </ul>
      
      <h2 id="section-4">Les artefacts Scrum</h2>
      
      <p>Les artefacts Scrum représentent le travail ou la valeur et fournissent des opportunités d'inspection et d'adaptation. Ils sont conçus pour maximiser la transparence des informations clés.</p>
      
      <h3>Le Product Backlog</h3>
      
      <p>Le Product Backlog est une liste ordonnée de tout ce qui pourrait être nécessaire dans le produit. C'est la source unique des exigences pour tout changement à apporter au produit.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Jamais complet (évolue constamment)</li>
        <li>Dynamique (change constamment pour identifier ce dont le produit a besoin)</li>
        <li>Ordonné par le Product Owner (les éléments les plus importants en haut)</li>
        <li>Contient des estimations, des descriptions, de la valeur business</li>
        <li>Souvent exprimé sous forme de User Stories</li>
      </ul>
      
      <p><strong>Raffinement du Product Backlog :</strong></p>
      <p>Le raffinement est l'acte d'ajouter des détails, des estimations et un ordre aux éléments du Product Backlog. C'est un processus continu dans lequel le Product Owner et l'équipe de développement collaborent sur les détails des éléments du Product Backlog.</p>
      
      <h3>Le Sprint Backlog</h3>
      
      <p>Le Sprint Backlog est l'ensemble des éléments du Product Backlog sélectionnés pour le Sprint, plus un plan pour livrer l'incrément de produit et réaliser l'objectif du Sprint.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Prévision de l'équipe de développement sur les fonctionnalités qui seront dans le prochain incrément</li>
        <li>Plan suffisamment détaillé pour que les changements de progression soient compréhensibles lors de la mêlée quotidienne</li>
        <li>Mis à jour tout au long du Sprint à mesure que l'équipe en apprend davantage</li>
        <li>Appartient uniquement à l'équipe de développement</li>
      </ul>
      
      <p><strong>Suivi de l'avancement :</strong></p>
      <p>L'équipe de développement suit le travail restant au moins à chaque mêlée quotidienne. Elle projette la probabilité d'atteindre l'objectif du Sprint et suit l'avancement du travail restant tout au long du Sprint.</p>
      
      <h3>L'incrément</h3>
      
      <p>L'incrément est la somme de tous les éléments du Product Backlog complétés pendant un Sprint et la valeur des incréments de tous les Sprints précédents.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Doit être "Terminé", ce qui signifie qu'il doit être dans un état utilisable</li>
        <li>Doit répondre à la définition de "Terminé" de l'équipe Scrum</li>
        <li>Doit être utilisable indépendamment du fait que le Product Owner décide de le publier ou non</li>
      </ul>
      
      <h3>La définition de "Terminé" (Definition of Done)</h3>
      
      <p>La définition de "Terminé" est une compréhension partagée de ce que signifie qu'un travail soit complet, assurant la transparence.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Définie par l'équipe Scrum</li>
        <li>Peut varier d'une équipe à l'autre</li>
        <li>S'enrichit avec le temps</li>
        <li>Garantit la qualité du produit</li>
      </ul>
      
      <p><strong>Exemples de critères :</strong></p>
      <ul>
        <li>Code revu</li>
        <li>Tests unitaires passés</li>
        <li>Tests d'intégration passés</li>
        <li>Documentation mise à jour</li>
        <li>Déployable en production</li>
      </ul>
      
      <h2 id="section-5">Mise en œuvre de Scrum</h2>
      
      <p>La mise en œuvre de Scrum nécessite une compréhension approfondie du cadre et un engagement à respecter ses valeurs et principes. Voici quelques conseils pratiques pour une mise en œuvre réussie :</p>
      
      <h3>Démarrer avec Scrum</h3>
      
      <ol>
        <li><strong>Former l'équipe Scrum</strong> : Identifier le Product Owner, le Scrum Master et l'équipe de développement</li>
        <li><strong>Créer le Product Backlog initial</strong> : Le Product Owner travaille avec les parties prenantes pour créer et prioriser le Product Backlog</li>
        <li><strong>Définir la définition de "Terminé"</strong> : L'équipe établit une compréhension commune de ce que signifie qu'un travail soit complet</li>
        <li><strong>Planifier le premier Sprint</strong> : Organiser la première réunion de planification de Sprint</li>
        <li><strong>Mettre en place les outils nécessaires</strong> : Tableau Scrum (physique ou numérique), outils de suivi, etc.</li>
      </ol>
      
      <h3>Bonnes pratiques</h3>
      
      <ul>
        <li><strong>Respecter les time-boxes</strong> : Les événements Scrum ont une durée fixe qui doit être respectée</li>
        <li><strong>Favoriser la transparence</strong> : Rendre visible l'avancement, les obstacles, les décisions</li>
        <li><strong>Encourager l'auto-organisation</strong> : Laisser l'équipe de développement décider comment accomplir le travail</li>
        <li><strong>Maintenir un rythme soutenable</strong> : Éviter le surengagement et l'épuisement</li>
        <li><strong>Focus sur la valeur</strong> : Toujours prioriser ce qui apporte le plus de valeur au client</li>
        <li><strong>Amélioration continue</strong> : Utiliser les rétrospectives pour s'améliorer constamment</li>
      </ul>
      
      <h3>Défis courants et solutions</h3>
      
      <ul>
        <li><strong>Résistance au changement</strong> : Former, expliquer les bénéfices, commencer petit</li>
        <li><strong>Product Owner trop occupé</strong> : Clarifier l'importance du rôle, déléguer certaines tâches</li>
        <li><strong>Scrum Master directif</strong> : Former au leadership serviteur, coacher plutôt que diriger</li>
        <li><strong>Équipe non auto-organisée</strong> : Coacher, donner de l'autonomie progressivement</li>
        <li><strong>Mêlées quotidiennes inefficaces</strong> : Rappeler l'objectif, rester focalisé, time-boxer</li>
        <li><strong>Définition de "Terminé" floue</strong> : Clarifier, afficher visiblement, réviser régulièrement</li>
        <li><strong>Dépendances externes</strong> : Identifier tôt, collaborer avec les autres équipes</li>
      </ul>
      
      <h2 id="section-6">Scrum dans différents contextes</h2>
      
      <p>Bien que Scrum ait été initialement conçu pour le développement logiciel, il est aujourd'hui utilisé dans de nombreux autres domaines. Voici comment Scrum peut être adapté à différents contextes :</p>
      
      <h3>Scrum pour les produits non-logiciels</h3>
      
      <p>Scrum peut être utilisé pour développer des produits physiques, des services, du contenu marketing, etc. Les adaptations peuvent inclure :</p>
      
      <ul>
        <li>Ajuster la définition de "Terminé" au contexte spécifique</li>
        <li>Adapter la durée des Sprints en fonction du cycle de développement</li>
        <li>Modifier la fréquence des événements si nécessaire</li>
        <li>Utiliser des prototypes ou maquettes comme incréments</li>
      </ul>
      
      <h3>Scrum pour les grandes organisations</h3>
      
      <p>Dans les grandes organisations avec plusieurs équipes Scrum travaillant sur le même produit, des adaptations sont nécessaires :</p>
      
      <ul>
        <li>Utiliser des frameworks comme LeSS, SAFe ou Nexus pour coordonner les équipes</li>
        <li>Mettre en place des mécanismes de coordination entre équipes</li>
        <li>Gérer les dépendances entre équipes</li>
        <li>Aligner les Sprints pour faciliter l'intégration</li>
      </ul>
      
      <h3>Scrum pour les équipes distribuées</h3>
      
      <p>Avec des équipes réparties géographiquement, des ajustements sont nécessaires :</p>
      
      <ul>
        <li>Utiliser des outils de collaboration en ligne</li>
        <li>Adapter les horaires des événements pour accommoder les fuseaux horaires</li>
        <li>Investir dans une bonne infrastructure de communication</li>
        <li>Organiser des rencontres physiques périodiques si possible</li>
        <li>Mettre l'accent sur la documentation des décisions</li>
      </ul>
      
      <h2 id="section-7">Scrum et autres pratiques agiles</h2>
      
      <p>Scrum est souvent combiné avec d'autres pratiques agiles pour renforcer certains aspects du développement :</p>
      
      <h3>Scrum + XP (Extreme Programming)</h3>
      
      <p>XP apporte des pratiques techniques qui complètent bien le cadre Scrum :</p>
      
      <ul>
        <li>Développement piloté par les tests (TDD)</li>
        <li>Programmation en binôme</li>
        <li>Intégration continue</li>
        <li>Refactoring régulier</li>
        <li>Propriété collective du code</li>
      </ul>
      
      <h3>Scrumban</h3>
      
      <p>Scrumban combine Scrum et Kanban, en utilisant :</p>
      
      <ul>
        <li>Le cadre Scrum pour la structure</li>
        <li>La visualisation du flux de travail de Kanban</li>
        <li>Les limites de travail en cours (WIP) de Kanban</li>
        <li>L'approche "pull" de Kanban</li>
        <li>Les métriques de flux de Kanban</li>
      </ul>
      
      <h3>Scrum + DevOps</h3>
      
      <p>L'intégration de DevOps avec Scrum permet :</p>
      
      <ul>
        <li>L'automatisation du déploiement</li>
        <li>L'intégration et la livraison continues</li>
        <li>Le monitoring en production</li>
        <li>La collaboration entre développement et opérations</li>
        <li>Le feedback rapide des utilisateurs</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension de Scrum, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Simulation Scrum</h3>
      <p>En groupe, simulez un Sprint Scrum complet sur un projet fictif :</p>
      <ol>
        <li>Définissez les rôles (Product Owner, Scrum Master, équipe de développement)</li>
        <li>Créez un Product Backlog simple</li>
        <li>Menez une réunion de planification de Sprint</li>
        <li>Simulez quelques mêlées quotidiennes</li>
        <li>Organisez une revue de Sprint</li>
        <li>Terminez par une rétrospective</li>
      </ol>
      
      <h3>Exercice 2 : Création d'un Product Backlog</h3>
      <p>Pour un produit ou service que vous connaissez bien :</p>
      <ol>
        <li>Identifiez les principales fonctionnalités sous forme de User Stories</li>
        <li>Priorisez ces fonctionnalités</li>
        <li>Estimez la complexité relative (en points de story)</li>
        <li>Définissez les critères d'acceptation pour les 3 premières stories</li>
      </ol>
      
      <h3>Exercice 3 : Définition de "Terminé"</h3>
      <p>Pour un projet ou une équipe spécifique :</p>
      <ol>
        <li>Élaborez une définition de "Terminé" complète</li>
        <li>Identifiez les critères généraux applicables à toutes les stories</li>
        <li>Définissez des critères spécifiques pour différents types de travail</li>
        <li>Discutez de comment cette définition pourrait évoluer avec le temps</li>
      </ol>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>Scrum est un cadre puissant qui aide les équipes à livrer de la valeur de manière itérative et incrémentale. Ses rôles, événements et artefacts bien définis fournissent une structure qui favorise la collaboration, la transparence et l'amélioration continue.</p>
      
      <p>Cependant, Scrum n'est pas une solution miracle. Son efficacité dépend de la compréhension et du respect de ses valeurs et principes fondamentaux. Il nécessite un changement de mentalité, passant d'une approche prédictive à une approche empirique, et d'une culture de contrôle à une culture de confiance et d'auto-organisation.</p>
      
      <p>La mise en œuvre de Scrum est un voyage d'apprentissage continu. Chaque équipe doit trouver sa propre voie, en adaptant le cadre à son contexte spécifique tout en restant fidèle à ses principes fondamentaux.</p>
      
      <p>Dans les prochaines leçons, nous explorerons d'autres aspects de l'agilité, notamment le cycle de vie d'un projet agile et la comparaison entre méthodes agiles et traditionnelles.</p>
    `,
    tableOfContents: [
      "Introduction à Scrum",
      "Les rôles dans Scrum",
      "Les événements Scrum",
      "Les artefacts Scrum",
      "Mise en œuvre de Scrum",
      "Scrum dans différents contextes",
      "Scrum et autres pratiques agiles",
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

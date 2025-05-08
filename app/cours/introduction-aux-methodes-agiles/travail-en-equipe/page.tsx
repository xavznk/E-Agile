import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Travail en équipe et communication dans un environnement agile",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 8,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction au travail en équipe agile</h2>
      
      <p>Le travail en équipe et la communication sont au cœur de l'approche agile. Contrairement aux méthodes traditionnelles qui mettent l'accent sur les processus et les outils, l'agilité place les individus et leurs interactions au premier plan, comme l'affirme la première valeur du Manifeste Agile.</p>
      
      <p>Cette importance accordée à la dimension humaine n'est pas un hasard. Dans un environnement complexe et changeant, la capacité d'une équipe à collaborer efficacement, à s'adapter rapidement et à communiquer de manière transparente devient un facteur critique de succès.</p>
      
      <p>Dans cette leçon, nous explorerons les principes et pratiques qui favorisent un travail en équipe efficace et une communication fluide dans un contexte agile. Nous verrons comment ces éléments contribuent à la performance de l'équipe et à la réussite des projets.</p>
      
      <h3>Caractéristiques des équipes agiles</h3>
      
      <p>Les équipes agiles se distinguent par plusieurs caractéristiques clés :</p>
      
      <ul>
        <li><strong>Auto-organisation</strong> : L'équipe décide elle-même comment accomplir son travail, sans direction imposée de l'extérieur</li>
        <li><strong>Pluridisciplinarité</strong> : L'équipe possède toutes les compétences nécessaires pour livrer de la valeur</li>
        <li><strong>Taille optimale</strong> : Généralement 5 à 9 personnes, pour faciliter la communication et la coordination</li>
        <li><strong>Co-localisation</strong> : Idéalement, les membres travaillent dans le même espace physique ou virtuel</li>
        <li><strong>Stabilité</strong> : L'équipe reste ensemble suffisamment longtemps pour atteindre un haut niveau de performance</li>
        <li><strong>Engagement collectif</strong> : L'équipe s'engage collectivement sur des objectifs communs</li>
        <li><strong>Responsabilité partagée</strong> : Tous les membres sont responsables de la qualité et du succès</li>
      </ul>
      
      <h2 id="section-2">Dynamique d'équipe en contexte agile</h2>
      
      <p>La dynamique d'une équipe agile évolue au fil du temps, passant par différentes phases de développement.</p>
      
      <h3>Les phases de développement d'équipe</h3>
      
      <p>Le modèle de Tuckman identifie cinq phases dans le développement d'une équipe :</p>
      
      <ol>
        <li><strong>Formation (Forming)</strong> : Les membres font connaissance, sont polis mais prudents, et dépendent fortement du leadership</li>
        <li><strong>Confrontation (Storming)</strong> : Des conflits émergent autour des rôles, des responsabilités et des façons de travailler</li>
        <li><strong>Normalisation (Norming)</strong> : L'équipe établit des normes de travail, développe la confiance et améliore sa cohésion</li>
        <li><strong>Performance (Performing)</strong> : L'équipe fonctionne de manière optimale, avec une haute productivité et autonomie</li>
        <li><strong>Dissolution (Adjourning)</strong> : L'équipe se sépare à la fin du projet ou lors d'une réorganisation</li>
      </ol>
      
      <p>En contexte agile, ces phases peuvent être accélérées grâce aux pratiques qui favorisent la communication et la collaboration. Cependant, il est important de reconnaître que chaque équipe passe par ces étapes et de les accompagner en conséquence.</p>
      
      <h3>Rôles et responsabilités</h3>
      
      <p>Dans une équipe agile, les rôles sont souvent moins rigides que dans les approches traditionnelles, mais certaines responsabilités doivent être clairement définies :</p>
      
      <ul>
        <li><strong>Membres de l'équipe</strong> : Responsables de livrer le travail, de s'auto-organiser et de s'améliorer continuellement</li>
        <li><strong>Facilitateur</strong> (ex: Scrum Master) : Aide l'équipe à suivre le processus, élimine les obstacles et facilite les interactions</li>
        <li><strong>Représentant du client</strong> (ex: Product Owner) : Définit les priorités, clarifie les besoins et valide le travail</li>
      </ul>
      
      <p>La clarté des rôles est essentielle, mais la flexibilité et l'entraide sont également valorisées. Les membres de l'équipe peuvent assumer différentes responsabilités selon les besoins du projet.</p>
      
      <h3>Confiance et sécurité psychologique</h3>
      
      <p>La confiance est le fondement d'une équipe agile performante. Elle permet la prise de risque, l'innovation et la résolution efficace des problèmes.</p>
      
      <p>La sécurité psychologique, concept développé par Amy Edmondson, désigne un climat d'équipe où les membres se sentent à l'aise pour prendre des risques interpersonnels. Dans une équipe psychologiquement sûre :</p>
      
      <ul>
        <li>Les membres peuvent exprimer leurs opinions sans crainte de jugement</li>
        <li>Les erreurs sont vues comme des opportunités d'apprentissage</li>
        <li>Les désaccords sont exprimés et résolus de manière constructive</li>
        <li>Les idées nouvelles sont encouragées et considérées</li>
        <li>Les demandes d'aide sont perçues comme des signes de force, non de faiblesse</li>
      </ul>
      
      <p>Pour développer la confiance et la sécurité psychologique, les pratiques suivantes sont recommandées :</p>
      
      <ul>
        <li>Établir des normes claires de respect mutuel</li>
        <li>Modéliser la vulnérabilité (les leaders admettent leurs erreurs)</li>
        <li>Pratiquer l'écoute active et l'empathie</li>
        <li>Célébrer les succès et apprendre des échecs</li>
        <li>Favoriser les interactions informelles et la connaissance mutuelle</li>
      </ul>
      
      <h2 id="section-3">Communication efficace en agile</h2>
      
      <p>La communication est l'élément vital d'une équipe agile. Elle doit être fréquente, transparente et efficace.</p>
      
      <h3>Principes de communication agile</h3>
      
      <ul>
        <li><strong>Face à face</strong> : Privilégier les interactions directes, considérées comme le mode de communication le plus efficace</li>
        <li><strong>Fréquence</strong> : Communiquer régulièrement plutôt que par grandes sessions espacées</li>
        <li><strong>Transparence</strong> : Partager ouvertement les informations, y compris les problèmes et les incertitudes</li>
        <li><strong>Feedback</strong> : Solliciter et donner du feedback de manière continue</li>
        <li><strong>Visualisation</strong> : Utiliser des supports visuels pour faciliter la compréhension</li>
        <li><strong>Concision</strong> : Aller à l'essentiel, éviter la surcharge d'information</li>
        <li><strong>Contextualisation</strong> : Fournir le contexte nécessaire à la compréhension</li>
      </ul>
      
      <h3>Modes de communication</h3>
      
      <p>Différents modes de communication sont utilisés en fonction des besoins :</p>
      
      <table>
        <tr>
          <th>Mode</th>
          <th>Caractéristiques</th>
          <th>Utilisations recommandées</th>
        </tr>
        <tr>
          <td>Face à face</td>
          <td>Riche, synchrone, verbal et non-verbal</td>
          <td>Discussions complexes, résolution de problèmes, feedback</td>
        </tr>
        <tr>
          <td>Vidéoconférence</td>
          <td>Proche du face à face, mais avec des limitations</td>
          <td>Équipes distribuées, réunions formelles</td>
        </tr>
        <tr>
          <td>Téléphone</td>
          <td>Synchrone, verbal uniquement</td>
          <td>Discussions rapides, clarifications</td>
        </tr>
        <tr>
          <td>Messagerie instantanée</td>
          <td>Quasi-synchrone, textuel</td>
          <td>Questions simples, coordination quotidienne</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>Asynchrone, formel, persistant</td>
          <td>Communications officielles, avec historique nécessaire</td>
        </tr>
        <tr>
          <td>Documentation</td>
          <td>Asynchrone, détaillé, structuré</td>
          <td>Connaissances durables, références</td>
        </tr>
        <tr>
          <td>Tableaux visuels</td>
          <td>Visuel, persistant, collaboratif</td>
          <td>Suivi du travail, partage d'idées</td>
        </tr>
      </table>
      
      <p>En agile, on privilégie généralement les modes de communication riches (face à face) pour les discussions importantes, tout en utilisant d'autres modes selon les besoins spécifiques.</p>
      
      <h3>Réunions agiles efficaces</h3>
      
      <p>Les réunions sont essentielles dans un contexte agile, mais elles doivent être efficaces pour ne pas devenir un frein à la productivité. Voici quelques principes pour des réunions agiles réussies :</p>
      
      <ul>
        <li><strong>Objectif clair</strong> : Chaque réunion doit avoir un but précis et des résultats attendus</li>
        <li><strong>Timeboxing</strong> : Limiter la durée de la réunion pour maintenir la concentration</li>
        <li><strong>Préparation</strong> : S'assurer que tous les participants sont prêts et ont les informations nécessaires</li>
        <li><strong>Participation active</strong> : Encourager la contribution de tous les membres</li>
        <li><strong>Focalisation</strong> : Rester centré sur le sujet et éviter les digressions</li>
        <li><strong>Suivi</strong> : Documenter les décisions et les actions à entreprendre</li>
      </ul>
      
      <p>Les principales réunions agiles (comme le Daily Stand-up, la Sprint Planning, la Sprint Review et la Retrospective en Scrum) suivent ces principes pour maximiser leur valeur.</p>
      
      <h3>Feedback et communication constructive</h3>
      
      <p>Le feedback est un élément central de la communication agile. Il permet l'amélioration continue et l'adaptation.</p>
      
      <p><strong>Principes du feedback efficace :</strong></p>
      <ul>
        <li><strong>Régularité</strong> : Donner du feedback fréquemment, pas seulement lors d'évaluations formelles</li>
        <li><strong>Spécificité</strong> : Être précis sur les comportements ou résultats observés</li>
        <li><strong>Équilibre</strong> : Souligner tant les points positifs que les axes d'amélioration</li>
        <li><strong>Actionnable</strong> : Proposer des suggestions concrètes d'amélioration</li>
        <li><strong>Bienveillance</strong> : Formuler le feedback avec respect et dans une intention d'aide</li>
      </ul>
      
      <p><strong>Techniques de feedback :</strong></p>
      <ul>
        <li><strong>SBI (Situation-Behavior-Impact)</strong> : Décrire la situation, le comportement observé et son impact</li>
        <li><strong>Feedback en sandwich</strong> : Commencer par un point positif, aborder l'axe d'amélioration, terminer sur une note positive</li>
        <li><strong>Questions ouvertes</strong> : Encourager la réflexion par des questions plutôt que des affirmations</li>
        <li><strong>Feedback 360°</strong> : Recueillir des retours de multiples sources (pairs, managers, clients)</li>
      </ul>
      
      <h2 id="section-4">Outils et techniques de collaboration</h2>
      
      <p>Les équipes agiles utilisent divers outils et techniques pour faciliter la collaboration et la communication.</p>
      
      <h3>Espaces de travail collaboratifs</h3>
      
      <p>L'environnement physique ou virtuel joue un rôle important dans la collaboration :</p>
      
      <ul>
        <li><strong>Espaces physiques</strong> : Idéalement ouverts, avec des zones pour le travail d'équipe et des zones calmes pour la concentration</li>
        <li><strong>Murs d'information</strong> : Tableaux blancs, tableaux Kanban physiques, affichages visuels</li>
        <li><strong>Espaces virtuels</strong> : Pour les équipes distribuées, plateformes de collaboration comme Miro, Mural, etc.</li>
        <li><strong>Zones de socialisation</strong> : Espaces pour les interactions informelles qui renforcent la cohésion</li>
      </ul>
      
      <h3>Outils numériques</h3>
      
      <p>De nombreux outils numériques soutiennent le travail des équipes agiles :</p>
      
      <ul>
        <li><strong>Gestion de projet agile</strong> : Jira, Trello, Azure DevOps, etc.</li>
        <li><strong>Communication</strong> : Slack, Microsoft Teams, Discord, etc.</li>
        <li><strong>Visioconférence</strong> : Zoom, Google Meet, Microsoft Teams, etc.</li>
        <li><strong>Documentation collaborative</strong> : Confluence, Google Docs, Notion, etc.</li>
        <li><strong>Tableaux virtuels</strong> : Miro, Mural, Lucidspark, etc.</li>
        <li><strong>Gestion de code</strong> : GitHub, GitLab, Bitbucket, etc.</li>
        <li><strong>Intégration continue</strong> : Jenkins, CircleCI, GitHub Actions, etc.</li>
      </ul>
      
      <p>Le choix des outils doit être guidé par les besoins spécifiques de l'équipe et du projet, en privilégiant la simplicité et l'efficacité.</p>
      
      <h3>Techniques de facilitation</h3>
      
      <p>La facilitation est l'art de rendre les interactions de groupe plus efficaces. Voici quelques techniques utiles :</p>
      
      <ul>
        <li><strong>Timeboxing</strong> : Allouer un temps limité à chaque activité pour maintenir le focus</li>
        <li><strong>Tour de table</strong> : Donner à chacun l'opportunité de s'exprimer à tour de rôle</li>
        <li><strong>Dot voting</strong> : Utiliser des points pour voter et prioriser collectivement</li>
        <li><strong>Brainstorming</strong> : Générer un maximum d'idées sans jugement initial</li>
        <li><strong>World Café</strong> : Discussions en petits groupes qui tournent entre différentes tables/sujets</li>
        <li><strong>Fist of Five</strong> : Voter avec les doigts (1 à 5) pour mesurer le consensus</li>
        <li><strong>Parking lot</strong> : Liste des sujets à traiter ultérieurement pour rester focalisé</li>
      </ul>
      
      <h3>Visualisation du travail</h3>
      
      <p>La visualisation rend le travail et les problèmes visibles pour tous, facilitant la coordination et l'identification des obstacles :</p>
      
      <ul>
        <li><strong>Tableaux Kanban</strong> : Visualisation du flux de travail avec des colonnes représentant les étapes</li>
        <li><strong>Burndown/Burnup Charts</strong> : Graphiques montrant l'avancement par rapport à l'objectif</li>
        <li><strong>Task Board</strong> : Tableau des tâches en cours, souvent organisé par personne ou par statut</li>
        <li><strong>Information radiators</strong> : Affichages visuels des métriques clés, visibles par tous</li>
        <li><strong>User Story Mapping</strong> : Représentation visuelle des fonctionnalités organisées par parcours utilisateur</li>
      </ul>
      
      <h2 id="section-5">Gestion des conflits en équipe agile</h2>
      
      <p>Les conflits sont inévitables dans toute équipe, mais ils peuvent être gérés de manière constructive pour renforcer l'équipe plutôt que l'affaiblir.</p>
      
      <h3>Types de conflits</h3>
      
      <ul>
        <li><strong>Conflits de tâches</strong> : Désaccords sur la façon d'accomplir le travail</li>
        <li><strong>Conflits de processus</strong> : Désaccords sur les méthodes et procédures</li>
        <li><strong>Conflits relationnels</strong> : Tensions interpersonnelles basées sur des incompatibilités</li>
        <li><strong>Conflits de valeurs</strong> : Différences fondamentales dans les croyances et principes</li>
      </ul>
      
      <p>Les conflits de tâches et de processus peuvent être bénéfiques s'ils sont bien gérés, car ils stimulent la créativité et l'innovation. Les conflits relationnels, en revanche, sont généralement néfastes et doivent être résolus rapidement.</p>
      
      <h3>Approches de résolution de conflits</h3>
      
      <ul>
        <li><strong>Confrontation directe</strong> : Aborder le problème ouvertement pour trouver une solution mutuellement acceptable</li>
        <li><strong>Compromis</strong> : Chaque partie fait des concessions pour atteindre un accord</li>
        <li><strong>Collaboration</strong> : Travailler ensemble pour trouver une solution qui satisfait pleinement toutes les parties</li>
        <li><strong>Accommodation</strong> : Une partie cède pour maintenir l'harmonie (utile pour les enjeux mineurs)</li>
        <li><strong>Évitement</strong> : Reporter la résolution (peut être approprié temporairement pour laisser les émotions se calmer)</li>
      </ul>
      
      <p>En contexte agile, on privilégie généralement la confrontation directe et la collaboration, qui favorisent la transparence et l'apprentissage collectif.</p>
      
      <h3>Rôle du facilitateur dans la résolution de conflits</h3>
      
      <p>Le facilitateur (comme le Scrum Master) joue un rôle clé dans la gestion des conflits :</p>
      
      <ul>
        <li>Créer un environnement sûr pour exprimer les désaccords</li>
        <li>Aider à distinguer les faits des interprétations</li>
        <li>Faciliter la communication entre les parties</li>
        <li>Recentrer la discussion sur les intérêts plutôt que sur les positions</li>
        <li>Proposer des techniques de résolution adaptées à la situation</li>
        <li>Suivre la mise en œuvre des solutions convenues</li>
      </ul>
      
      <h2 id="section-6">Équipes distribuées et communication à distance</h2>
      
      <p>Avec la mondialisation et le travail à distance, de nombreuses équipes agiles sont distribuées géographiquement, ce qui pose des défis spécifiques.</p>
      
      <h3>Défis des équipes distribuées</h3>
      
      <ul>
        <li><strong>Différences de fuseaux horaires</strong> : Limitent les plages de collaboration synchrone</li>
        <li><strong>Barrières linguistiques et culturelles</strong> : Peuvent créer des malentendus</li>
        <li><strong>Manque d'interactions informelles</strong> : Réduit la cohésion d'équipe</li>
        <li><strong>Difficultés de communication non verbale</strong> : Perte des signaux visuels et du langage corporel</li>
        <li><strong>Problèmes techniques</strong> : Connexions instables, outils incompatibles, etc.</li>
        <li><strong>Sentiment d'isolement</strong> : Peut affecter la motivation et l'engagement</li>
      </ul>
      
      <h3>Stratégies pour les équipes distribuées</h3>
      
      <ul>
        <li><strong>Outils adaptés</strong> : Utiliser des plateformes intégrées pour la communication, la collaboration et la gestion de projet</li>
        <li><strong>Rituels virtuels</strong> : Adapter les cérémonies agiles au format virtuel</li>
        <li><strong>Plages de chevauchement</strong> : Identifier et maximiser les heures de travail communes</li>
        <li><strong>Documentation accrue</strong> : Compenser le manque d'interactions par une documentation claire</li>
        <li><strong>Socialisation virtuelle</strong> : Organiser des activités informelles à distance</li>
        <li><strong>Rencontres physiques périodiques</strong> : Si possible, réunir l'équipe en personne occasionnellement</li>
        <li><strong>Communication asynchrone efficace</strong> : Structurer les messages pour minimiser les allers-retours</li>
      </ul>
      
      <h3>Pratiques spécifiques</h3>
      
      <ul>
        <li><strong>Working agreements</strong> : Établir des règles claires sur la disponibilité, les réponses, etc.</li>
        <li><strong>Buddy system</strong> : Associer les membres par paires pour le soutien mutuel</li>
        <li><strong>Rotation des horaires</strong> : Alterner les heures de réunion pour partager la charge des horaires difficiles</li>
        <li><strong>Enregistrement des réunions</strong> : Permettre aux absents de se mettre à jour</li>
        <li><strong>Tableau de bord d'équipe</strong> : Maintenir une vue d'ensemble visible par tous</li>
        <li><strong>Check-ins réguliers</strong> : Prendre le pouls de l'équipe fréquemment</li>
      </ul>
      
      <h2 id="section-7">Leadership et facilitation en contexte agile</h2>
      
      <p>Le leadership en contexte agile diffère du management traditionnel. Il s'agit davantage de facilitation, de coaching et de création des conditions propices à la performance de l'équipe.</p>
      
      <h3>Leadership serviteur</h3>
      
      <p>Le concept de "servant leadership" (leadership serviteur), développé par Robert K. Greenleaf, est central dans l'agilité. Le leader serviteur :</p>
      
      <ul>
        <li>Met les besoins de l'équipe avant les siens</li>
        <li>Se concentre sur la croissance et le bien-être des membres de l'équipe</li>
        <li>Partage le pouvoir et aide les autres à développer leur potentiel</li>
        <li>Écoute activement et cherche à comprendre</li>
        <li>Crée un environnement de confiance et de sécurité psychologique</li>
        <li>Facilite plutôt que dirige</li>
      </ul>
      
      <h3>Compétences de facilitation</h3>
      
      <p>La facilitation est l'art d'aider un groupe à atteindre ses objectifs sans imposer ses propres idées. Les compétences clés incluent :</p>
      
      <ul>
        <li><strong>Écoute active</strong> : Comprendre ce qui est dit et non dit</li>
        <li><strong>Questionnement puissant</strong> : Poser des questions qui stimulent la réflexion</li>
        <li><strong>Gestion de groupe</strong> : Équilibrer la participation et gérer les dynamiques</li>
        <li><strong>Neutralité</strong> : Rester impartial sur le contenu tout en guidant le processus</li>
        <li><strong>Synthèse</strong> : Résumer et clarifier les discussions</li>
        <li><strong>Gestion du temps</strong> : Maintenir le rythme et respecter les timeboxes</li>
        <li><strong>Résolution de conflits</strong> : Aider à naviguer les désaccords constructivement</li>
      </ul>
      
      <h3>Coaching agile</h3>
      
      <p>Le coaching complète la facilitation en se concentrant sur le développement à long terme de l'équipe et des individus :</p>
      
      <ul>
        <li><strong>Observation</strong> : Observer les comportements et interactions sans juger</li>
        <li><strong>Feedback</strong> : Offrir des retours constructifs pour favoriser l'amélioration</li>
        <li><strong>Questionnement</strong> : Aider les personnes à trouver leurs propres solutions</li>
        <li><strong>Enseignement</strong> : Partager des connaissances et des pratiques au moment opportun</li>
        <li><strong>Modélisation</strong> : Démontrer les comportements et attitudes agiles</li>
        <li><strong>Soutien</strong> : Encourager et soutenir pendant les périodes difficiles</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension du travail en équipe et de la communication en contexte agile, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Analyse de communication</h3>
      <p>Observez les communications au sein de votre équipe pendant une semaine :</p>
      <ul>
        <li>Identifiez les modes de communication utilisés (face à face, email, chat, etc.)</li>
        <li>Notez la fréquence et la durée des interactions</li>
        <li>Évaluez l'efficacité de chaque mode pour différents types de messages</li>
        <li>Proposez des améliorations concrètes</li>
      </ul>
      
      <h3>Exercice 2 : Facilitation de réunion</h3>
      <p>Préparez et facilitez une réunion d'équipe en appliquant les principes agiles :</p>
      <ul>
        <li>Définissez clairement l'objectif et les résultats attendus</li>
        <li>Préparez un agenda timeboxé</li>
        <li>Utilisez des techniques de facilitation (tour de table, dot voting, etc.)</li>
        <li>Recueillez le feedback des participants après la réunion</li>
        <li>Réfléchissez à ce qui a bien fonctionné et ce qui pourrait être amélioré</li>
      </ul>
      
      <h3>Exercice 3 : Working Agreement</h3>
      <p>Élaborez avec votre équipe un "working agreement" (accord de travail) qui définit :</p>
      <ul>
        <li>Les valeurs partagées</li>
        <li>Les normes de communication (canaux, délais de réponse, etc.)</li>
        <li>Les pratiques de collaboration</li>
        <li>Les rituels d'équipe</li>
        <li>La gestion des conflits</li>
        <li>Les engagements mutuels</li>
      </ul>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>Le travail en équipe et la communication efficace sont des piliers de l'agilité. Ils permettent de transformer un groupe d'individus en une équipe performante, capable de s'adapter rapidement aux changements et de livrer régulièrement de la valeur.</p>
      
      <p>Les principes clés à retenir sont :</p>
      
      <ul>
        <li>L'importance de la confiance et de la sécurité psychologique comme fondements de la collaboration</li>
        <li>La valeur de la communication directe, transparente et fréquente</li>
        <li>Le rôle crucial de la visualisation pour rendre le travail et les problèmes visibles</li>
        <li>L'auto-organisation comme moteur de l'engagement et de la responsabilisation</li>
        <li>La résolution constructive des conflits comme source d'apprentissage et d'innovation</li>
        <li>Le leadership serviteur comme approche pour créer les conditions de la performance</li>
        <li>L'adaptation des pratiques pour les équipes distribuées</li>
      </ul>
      
      <p>En cultivant ces aspects, les équipes agiles peuvent atteindre un haut niveau de performance, caractérisé par la collaboration fluide, l'adaptation rapide et la livraison continue de valeur.</p>
      
      <p>Dans la prochaine leçon, nous explorerons les techniques de planification et d'estimation spécifiques aux projets agiles, qui complètent les pratiques de travail en équipe abordées ici.</p>
    `,
    tableOfContents: [
      "Introduction au travail en équipe agile",
      "Dynamique d'équipe en contexte agile",
      "Communication efficace en agile",
      "Outils et techniques de collaboration",
      "Gestion des conflits en équipe agile",
      "Équipes distribuées et communication à distance",
      "Leadership et facilitation en contexte agile",
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

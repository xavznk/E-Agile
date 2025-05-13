import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Les événements Scrum",
    instructor: "Mme. Dupont Claire",
    course: "Cadre Scrum et Kanban",
    courseSlug: "cadre-scrum-et-kanban",
    step: 3,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction aux événements Scrum</h2>
      
      <p>Les événements Scrum sont des moments formels prévus dans le cadre Scrum pour créer de la régularité et minimiser le besoin de réunions non définies. Tous ces événements sont limités dans le temps (timeboxed), c'est-à-dire qu'ils ont une durée maximale.</p>
      
      <p>Le Sprint lui-même est un contenant pour tous les autres événements. Chaque événement dans Scrum est une opportunité formelle d'inspecter et d'adapter quelque chose. Ces événements sont spécifiquement conçus pour permettre la transparence et l'inspection critiques.</p>
      
      <p>Les cinq événements Scrum sont :</p>
      <ul>
        <li>Le Sprint</li>
        <li>La planification de Sprint (Sprint Planning)</li>
        <li>La mêlée quotidienne (Daily Scrum)</li>
        <li>La revue de Sprint (Sprint Review)</li>
        <li>La rétrospective de Sprint (Sprint Retrospective)</li>
      </ul>
      
      <h2 id="section-2">Le Sprint</h2>
      
      <p>Le Sprint est le cœur de Scrum, un intervalle de temps fixe (généralement de 1 à 4 semaines) pendant lequel un incrément de produit "Terminé", utilisable et potentiellement livrable est créé.</p>
      
      <h3>Caractéristiques du Sprint</h3>
      
      <ul>
        <li><strong>Durée fixe</strong> : Les Sprints ont une durée constante tout au long du développement</li>
        <li><strong>Consécutifs</strong> : Un nouveau Sprint démarre immédiatement après la conclusion du Sprint précédent</li>
        <li><strong>Contenant</strong> : Le Sprint contient et consiste en la planification de Sprint, les mêlées quotidiennes, le travail de développement, la revue de Sprint et la rétrospective de Sprint</li>
        <li><strong>Limité dans le temps</strong> : La durée maximale est d'un mois calendaire</li>
      </ul>
      
      <h3>Objectif du Sprint</h3>
      
      <p>Chaque Sprint a un objectif de ce qui sera construit, une conception et un plan flexible qui guidera sa construction, le travail et l'incrément de produit résultant.</p>
      
      <p>L'objectif du Sprint :</p>
      <ul>
        <li>Fournit une orientation à l'équipe de développement sur la raison pour laquelle elle construit l'incrément</li>
        <li>Crée une cohérence et une concentration, encourageant l'équipe à travailler ensemble plutôt que sur des initiatives séparées</li>
        <li>Est défini lors de la planification de Sprint</li>
        <li>Reste stable pendant toute la durée du Sprint</li>
      </ul>
      
      <h3>Annulation d'un Sprint</h3>
      
      <p>Un Sprint peut être annulé avant la fin de sa durée prévue. Seul le Product Owner a l'autorité d'annuler le Sprint, bien qu'il puisse le faire sous l'influence des parties prenantes, de l'équipe de développement ou du Scrum Master.</p>
      
      <p>Un Sprint serait annulé si :</p>
      <ul>
        <li>L'objectif du Sprint devient obsolète</li>
        <li>Des changements majeurs dans la technologie ou l'environnement d'affaires rendent le travail planifié non pertinent</li>
        <li>L'entreprise change de direction ou de priorités</li>
      </ul>
      
      <p>L'annulation d'un Sprint est rare et souvent traumatisante pour l'équipe Scrum. En raison des courtes durées des Sprints, l'annulation est rarement justifiée.</p>
      
      <h2 id="section-3">La planification de Sprint</h2>
      
      <p>La planification de Sprint est l'événement qui démarre le Sprint. C'est une session de travail collaborative où l'équipe Scrum établit ce qui sera livré dans le prochain Sprint et comment ce travail sera réalisé.</p>
      
      <h3>Durée et participants</h3>
      
      <ul>
        <li><strong>Durée</strong> : Limitée à un maximum de huit heures pour un Sprint d'un mois. Pour des Sprints plus courts, l'événement est généralement plus court (par exemple, 4 heures pour un Sprint de 2 semaines)</li>
        <li><strong>Participants</strong> : L'équipe Scrum complète (Product Owner, Scrum Master et équipe de développement)</li>
      </ul>
      
      <h3>Structure de la planification</h3>
      
      <p>La planification de Sprint répond à deux questions fondamentales :</p>
      
      <h4>Partie 1 : Que peut-on livrer dans l'incrément résultant du prochain Sprint ?</h4>
      
      <ul>
        <li>Le Product Owner présente les éléments du Product Backlog qu'il considère comme prioritaires</li>
        <li>L'équipe de développement sélectionne les éléments qu'elle pense pouvoir compléter</li>
        <li>L'équipe Scrum élabore un objectif de Sprint</li>
        <li>La vélocité historique guide la quantité de travail sélectionnée</li>
      </ul>
      
      <h4>Partie 2 : Comment le travail nécessaire pour livrer l'incrément sera-t-il réalisé ?</h4>
      
      <ul>
        <li>L'équipe de développement décide comment elle construira les fonctionnalités</li>
        <li>Les éléments du Product Backlog sont décomposés en tâches</li>
        <li>L'équipe identifie le travail nécessaire pour créer un incrément "Terminé"</li>
        <li>Les tâches sont généralement estimées en heures et devraient être suffisamment détaillées pour que le travail restant puisse être évalué lors de la mêlée quotidienne</li>
      </ul>
      
      <h3>Résultats de la planification</h3>
      
      <p>À la fin de la planification de Sprint, l'équipe devrait être en mesure d'expliquer au Product Owner et au Scrum Master comment elle compte travailler en tant qu'équipe auto-organisée pour atteindre l'objectif du Sprint et créer l'incrément prévu.</p>
      
      <p>Les résultats concrets incluent :</p>
      <ul>
        <li>Un objectif de Sprint clair</li>
        <li>Un Sprint Backlog contenant les éléments sélectionnés du Product Backlog et un plan pour les livrer</li>
        <li>Une compréhension partagée du travail à accomplir</li>
      </ul>
      
      <h2 id="section-4">La mêlée quotidienne</h2>
      
      <p>La mêlée quotidienne (Daily Scrum) est un événement de 15 minutes pour l'équipe de développement. Elle est tenue chaque jour du Sprint, généralement à la même heure et au même endroit pour réduire la complexité.</p>
      
      <h3>Objectif et structure</h3>
      
      <p>L'objectif de la mêlée quotidienne est d'inspecter les progrès vers l'objectif du Sprint et d'adapter le plan du Sprint Backlog si nécessaire. Elle améliore la communication, élimine les autres réunions, identifie et élimine les obstacles au développement, met en évidence et favorise la prise de décision rapide, et améliore le niveau de connaissance de l'équipe de développement.</p>
      
      <p>Pendant la mêlée quotidienne, chaque membre de l'équipe de développement explique :</p>
      <ul>
        <li>Ce que j'ai fait hier qui a aidé l'équipe de développement à atteindre l'objectif du Sprint</li>
        <li>Ce que je vais faire aujourd'hui pour aider l'équipe de développement à atteindre l'objectif du Sprint</li>
        <li>Est-ce que je vois des obstacles qui m'empêchent ou empêchent l'équipe de développement d'atteindre l'objectif du Sprint</li>
      </ul>
      
      <h3>Participants et facilitation</h3>
      
      <ul>
        <li><strong>Participants principaux</strong> : L'équipe de développement</li>
        <li><strong>Autres participants</strong> : Le Scrum Master et le Product Owner peuvent y assister, mais ne participent généralement pas activement</li>
        <li><strong>Facilitation</strong> : Le Scrum Master s'assure que l'événement a lieu, mais c'est l'équipe de développement qui est responsable de sa conduite</li>
      </ul>
      
      <h3>Bonnes pratiques</h3>
      
      <ul>
        <li><strong>Rester debout</strong> : Pour garder la réunion courte et focalisée</li>
        <li><strong>Commencer à l'heure</strong> : Même si certains membres sont absents</li>
        <li><strong>Se concentrer sur l'objectif</strong> : Éviter les discussions détaillées</li>
        <li><strong>Planifier des réunions de suivi</strong> : Pour les discussions détaillées identifiées pendant la mêlée</li>
        <li><strong>Utiliser un tableau visuel</strong> : Pour suivre les progrès et les obstacles</li>
      </ul>
      
      <h3>Anti-patterns courants</h3>
      
      <ul>
        <li><strong>Rapport de statut au Scrum Master</strong> : La mêlée devient un rapport au Scrum Master plutôt qu'une collaboration d'équipe</li>
        <li><strong>Discussions techniques détaillées</strong> : Qui dépassent le cadre de la mêlée et devraient être reportées</li>
        <li><strong>Ignorer les obstacles</strong> : Ne pas mentionner les problèmes par crainte ou par habitude</li>
        <li><strong>Absence de certains membres</strong> : Qui réduit la valeur de la synchronisation</li>
        <li><strong>Dépassement systématique du timebox</strong> : Qui indique un problème dans la façon dont la mêlée est conduite</li>
      </ul>
      
      <h2 id="section-5">La revue de Sprint</h2>
      
      <p>La revue de Sprint (Sprint Review) est tenue à la fin du Sprint pour inspecter l'incrément et adapter le Product Backlog si nécessaire. C'est une session informelle, pas une session de statut, destinée à recueillir des feedbacks et à favoriser la collaboration.</p>
      
      <h3>Durée et participants</h3>
      
      <ul>
        <li><strong>Durée</strong> : Limitée à un maximum de quatre heures pour un Sprint d'un mois. Pour des Sprints plus courts, l'événement est généralement plus court</li>
        <li><strong>Participants</strong> : L'équipe Scrum et les parties prenantes clés invitées par le Product Owner</li>
      </ul>
      
      <h3>Structure et contenu</h3>
      
      <p>La revue de Sprint inclut généralement les éléments suivants :</p>
      
      <ol>
        <li>Le Product Owner identifie ce qui a été "Terminé" et ce qui n'a pas été "Terminé"</li>
        <li>L'équipe de développement discute de ce qui s'est bien passé pendant le Sprint, des problèmes rencontrés et de comment ces problèmes ont été résolus</li>
        <li>L'équipe de développement démontre le travail "Terminé" et répond aux questions sur l'incrément</li>
        <li>Le Product Owner discute du Product Backlog tel qu'il se présente actuellement et projette des dates d'achèvement probables basées sur les progrès réalisés jusqu'à présent</li>
        <li>L'ensemble du groupe collabore sur ce qu'il convient de faire ensuite, de sorte que la revue de Sprint fournit une précieuse contribution à la planification du Sprint suivant</li>
      </ol>
      
      <h3>Résultats de la revue</h3>
      
      <p>Le résultat de la revue de Sprint est un Product Backlog révisé qui définit les éléments probables pour le prochain Sprint. Le Product Backlog peut également être ajusté globalement pour répondre à de nouvelles opportunités.</p>
      
      <h3>Bonnes pratiques</h3>
      
      <ul>
        <li><strong>Préparation adéquate</strong> : S'assurer que les démonstrations sont prêtes et fonctionnelles</li>
        <li><strong>Impliquer les parties prenantes</strong> : Encourager leur participation active et leurs feedbacks</li>
        <li><strong>Célébrer les réussites</strong> : Reconnaître les accomplissements de l'équipe</li>
        <li><strong>Être transparent sur les défis</strong> : Discuter ouvertement des problèmes rencontrés</li>
        <li><strong>Capturer les feedbacks</strong> : Documenter les suggestions et les intégrer dans le Product Backlog</li>
      </ul>
      
      <h2 id="section-6">La rétrospective de Sprint</h2>
      
      <p>La rétrospective de Sprint est une opportunité pour l'équipe Scrum de s'inspecter elle-même et de créer un plan d'amélioration à mettre en œuvre pendant le prochain Sprint.</p>
      
      <h3>Durée et participants</h3>
      
      <ul>
        <li><strong>Durée</strong> : Limitée à un maximum de trois heures pour un Sprint d'un mois. Pour des Sprints plus courts, l'événement est généralement plus court</li>
        <li><strong>Participants</strong> : L'équipe Scrum (Product Owner, Scrum Master et équipe de développement)</li>
      </ul>
      
      <h3>Objectifs de la rétrospective</h3>
      
      <p>La rétrospective de Sprint a pour objectifs :</p>
      <ul>
        <li>Inspecter comment le dernier Sprint s'est déroulé en ce qui concerne les personnes, les relations, les processus et les outils</li>
        <li>Identifier et ordonner les principaux éléments qui se sont bien passés et les améliorations potentielles</li>
        <li>Créer un plan pour mettre en œuvre des améliorations dans la façon dont l'équipe Scrum fait son travail</li>
      </ul>
      
      <h3>Structure typique</h3>
      
      <p>Bien qu'il existe de nombreux formats de rétrospective, une structure typique pourrait inclure :</p>
      
      <ol>
        <li><strong>Mise en place</strong> : Établir les règles de base et l'objectif de la session</li>
        <li><strong>Collecte de données</strong> : Rassembler des informations sur ce qui s'est passé pendant le Sprint</li>
        <li><strong>Génération d'idées</strong> : Identifier les causes profondes et générer des idées d'amélioration</li>
        <li><strong>Décision d'actions</strong> : Sélectionner les améliorations à mettre en œuvre</li>
        <li><strong>Clôture</strong> : Résumer les décisions et réfléchir à la rétrospective elle-même</li>
      </ol>
      
      <h3>Techniques de rétrospective</h3>
      
      <p>Il existe de nombreuses techniques pour faciliter les rétrospectives, notamment :</p>
      
      <ul>
        <li><strong>Glad, Sad, Mad</strong> : Catégoriser les observations selon qu'elles rendent heureux, triste ou en colère</li>
        <li><strong>Start, Stop, Continue</strong> : Identifier ce que l'équipe devrait commencer à faire, arrêter de faire et continuer à faire</li>
        <li><strong>Speedboat</strong> : Utiliser la métaphore d'un bateau avec des ancres (ce qui ralentit l'équipe) et des propulseurs (ce qui accélère l'équipe)</li>
        <li><strong>5 Pourquoi</strong> : Technique pour identifier les causes profondes des problèmes</li>
        <li><strong>Diagramme d'affinité</strong> : Regrouper les idées similaires pour identifier les thèmes</li>
      </ul>
      
      <h3>Rôle du Scrum Master</h3>
      
      <p>Le Scrum Master participe à la rétrospective comme membre de l'équipe Scrum avec la responsabilité du processus Scrum. Il a également la responsabilité spécifique de :</p>
      
      <ul>
        <li>S'assurer que l'événement est positif et productif</li>
        <li>Enseigner à tous à garder l'événement dans les limites de temps imparties</li>
        <li>Faciliter l'événement en utilisant des techniques appropriées</li>
        <li>Aider l'équipe à améliorer son processus et ses pratiques</li>
      </ul>
      
      <h3>Suivi des actions</h3>
      
      <p>Pour que les rétrospectives soient efficaces, il est essentiel de suivre les actions décidées :</p>
      
      <ul>
        <li><strong>Documenter les actions</strong> : Enregistrer clairement les actions, les responsables et les délais</li>
        <li><strong>Intégrer au Sprint Backlog</strong> : Ajouter les actions d'amélioration au Sprint Backlog du prochain Sprint</li>
        <li><strong>Vérifier les progrès</strong> : Suivre régulièrement l'état d'avancement des actions, par exemple lors des mêlées quotidiennes</li>
        <li><strong>Revoir lors de la prochaine rétrospective</strong> : Évaluer l'impact des actions mises en œuvre</li>
      </ul>
      
      <h2 id="section-7">Interactions entre les événements</h2>
      
      <p>Les événements Scrum forment un cycle continu d'inspection et d'adaptation à différents niveaux.</p>
      
      <h3>Flux d'information</h3>
      
      <p>Les informations circulent entre les événements de la manière suivante :</p>
      
      <ul>
        <li>La <strong>rétrospective</strong> du Sprint précédent alimente la <strong>planification</strong> du Sprint suivant avec des améliorations de processus</li>
        <li>La <strong>planification</strong> établit l'objectif et le plan qui guident les <strong>mêlées quotidiennes</strong></li>
        <li>Les <strong>mêlées quotidiennes</strong> permettent d'adapter le plan pour atteindre l'objectif qui sera évalué lors de la <strong>revue</strong></li>
        <li>La <strong>revue</strong> fournit des feedbacks sur le produit qui influencent le Product Backlog et la prochaine <strong>planification</strong></li>
        <li>Les observations faites pendant le Sprint sont discutées lors de la <strong>rétrospective</strong></li>
      </ul>
      
      <h3>Cadence et rythme</h3>
      
      <p>Les événements Scrum établissent une cadence régulière qui crée un rythme prévisible pour l'équipe :</p>
      
      <ul>
        <li>Le <strong>Sprint</strong> établit un rythme de livraison</li>
        <li>La <strong>planification</strong> et la <strong>revue</strong> encadrent chaque Sprint</li>
        <li>Les <strong>mêlées quotidiennes</strong> créent un rythme quotidien</li>
        <li>La <strong>rétrospective</strong> assure l'amélioration continue à chaque cycle</li>
      </ul>
      
      <h2 id="section-8">Adaptation des événements</h2>
      
      <p>Bien que les événements Scrum soient définis dans le Guide Scrum, ils peuvent être adaptés aux besoins spécifiques de l'équipe tout en respectant leur objectif fondamental.</p>
      
      <h3>Adaptation de la durée</h3>
      
      <p>La durée des événements peut être ajustée en fonction de la longueur du Sprint et des besoins de l'équipe :</p>
      
      <ul>
        <li>Pour un Sprint de deux semaines, la <strong>planification</strong> pourrait durer 4 heures au lieu de 8</li>
        <li>Une équipe expérimentée pourrait réduire la durée de certains événements</li>
        <li>Une équipe nouvelle pourrait avoir besoin de plus de temps pour certains événements</li>
      </ul>
      
      <p>Cependant, il est important de ne pas raccourcir les événements au point de compromettre leur objectif.</p>
      
      <h3>Adaptation du format</h3>
      
      <p>Le format des événements peut être adapté tant que leur objectif est atteint :</p>
      
      <ul>
        <li>La <strong>mêlée quotidienne</strong> pourrait utiliser un format différent des trois questions standard</li>
        <li>La <strong>revue</strong> pourrait inclure des démonstrations interactives ou des ateliers</li>
        <li>La <strong>rétrospective</strong> peut utiliser diverses techniques de facilitation</li>
      </ul>
      
      <h3>Équipes distribuées</h3>
      
      <p>Pour les équipes distribuées géographiquement, des adaptations spécifiques peuvent être nécessaires :</p>
      
      <ul>
        <li>Utilisation d'outils de vidéoconférence et de collaboration en ligne</li>
        <li>Rotation des horaires pour partager la charge des fuseaux horaires</li>
        <li>Documentation plus détaillée pour compenser le manque d'interactions en personne</li>
        <li>Sessions plus courtes mais plus fréquentes pour maintenir l'engagement</li>
      </ul>
      
      <h2 id="section-9">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension des événements Scrum, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Simulation de planification de Sprint</h3>
      <p>En groupe, simulez une session de planification de Sprint :</p>
      <ul>
        <li>Désignez un Product Owner, un Scrum Master et une équipe de développement</li>
        <li>Préparez un Product Backlog simplifié avec 10-15 éléments</li>
        <li>Conduisez les deux parties de la planification</li>
        <li>Créez un objectif de Sprint et un Sprint Backlog</li>
        <li>Réfléchissez ensuite aux défis rencontrés et aux apprentissages</li>
      </ul>
      
      <h3>Exercice 2 : Amélioration de la mêlée quotidienne</h3>
      <p>Analysez vos mêlées quotidiennes actuelles ou hypothétiques :</p>
      <ul>
        <li>Identifiez ce qui fonctionne bien et ce qui pourrait être amélioré</li>
        <li>Proposez des modifications spécifiques pour rendre les mêlées plus efficaces</li>
        <li>Expérimentez avec différents formats pendant une semaine</li>
        <li>Évaluez les résultats et décidez d'un format optimal</li>
      </ul>
      
      <h3>Exercice 3 : Conception de rétrospective</h3>
      <p>Concevez une rétrospective de Sprint pour une équipe spécifique :</p>
      <ul>
        <li>Identifiez les défis particuliers que l'équipe pourrait rencontrer</li>
        <li>Sélectionnez ou créez des techniques de facilitation appropriées</li>
        <li>Élaborez un plan détaillé avec timing pour chaque activité</li>
        <li>Préparez les matériaux et instructions nécessaires</li>
        <li>Si possible, facilitez cette rétrospective avec une équipe réelle</li>
      </ul>
      
      <h2 id="section-10">Conclusion</h2>
      
      <p>Les événements Scrum constituent la structure temporelle qui permet l'inspection et l'adaptation régulières, essentielles à l'agilité. Chaque événement a un objectif spécifique et contribue à la transparence, à l'inspection et à l'adaptation à différents niveaux.</p>
      
      <p>Le Sprint encapsule tous les autres événements et établit un rythme régulier de livraison. La planification de Sprint définit l'objectif et le plan pour atteindre cet objectif. Les mêlées quotidiennes permettent à l'équipe de s'inspecter et de s'adapter quotidiennement pour maximiser les chances d'atteindre l'objectif du Sprint. La revue de Sprint permet d'inspecter l'incrément produit et d'adapter le Product Backlog. Enfin, la rétrospective de Sprint permet à l'équipe de s'inspecter elle-même et de créer un plan d'amélioration.</p>
      
      <p>Bien que ces événements soient définis dans le Guide Scrum avec des objectifs et des durées spécifiques, ils peuvent être adaptés aux besoins particuliers de chaque équipe, tant que leur objectif fondamental est respecté. L'important est qu'ils servent efficacement leur but : créer des opportunités régulières d'inspection et d'adaptation pour maximiser la valeur livrée et l'efficacité de l'équipe.</p>
      
      <p>En maîtrisant ces événements et en les adaptant judicieusement, les équipes Scrum peuvent établir un rythme durable de livraison de valeur tout en s'améliorant continuellement.</p>
    `,
    tableOfContents: [
      "Introduction aux événements Scrum",
      "Le Sprint",
      "La planification de Sprint",
      "La mêlée quotidienne",
      "La revue de Sprint",
      "La rétrospective de Sprint",
      "Interactions entre les événements",
      "Adaptation des événements",
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

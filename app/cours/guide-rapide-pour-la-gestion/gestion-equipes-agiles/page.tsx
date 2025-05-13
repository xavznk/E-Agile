import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Gestion des équipes agiles",
    instructor: "Dr. Martin Philippe",
    course: "Guide rapide pour la gestion",
    courseSlug: "guide-rapide-pour-la-gestion",
    step: 2,
    totalSteps: 8,
    content: `
      <h2 id="section-1">Introduction à la gestion d'équipes agiles</h2>
      
      <p>La gestion d'équipes agiles diffère fondamentalement de la gestion traditionnelle. Alors que l'approche traditionnelle repose sur le contrôle et la direction, l'approche agile met l'accent sur l'auto-organisation, l'autonomie et l'amélioration continue.</p>
      
      <p>Cette différence d'approche nécessite une évolution du rôle du manager, qui passe d'un rôle de "commandant" à un rôle de "servant-leader" dont la mission principale est de créer les conditions permettant à l'équipe de réussir.</p>
      
      <h3>Évolution du rôle du manager</h3>
      
      <table>
        <tr>
          <th>Management traditionnel</th>
          <th>Management agile</th>
        </tr>
        <tr>
          <td>Planifier et contrôler</td>
          <td>Faciliter et coacher</td>
        </tr>
        <tr>
          <td>Assigner des tâches</td>
          <td>Définir des objectifs clairs</td>
        </tr>
        <tr>
          <td>Résoudre les problèmes</td>
          <td>Aider l'équipe à résoudre ses problèmes</td>
        </tr>
        <tr>
          <td>Prendre les décisions</td>
          <td>Créer un cadre pour la prise de décision</td>
        </tr>
        <tr>
          <td>Évaluer les performances individuelles</td>
          <td>Faciliter l'amélioration collective</td>
        </tr>
      </table>
      
      <h2 id="section-2">Principes de leadership agile</h2>
      
      <p>Le leadership agile repose sur plusieurs principes fondamentaux qui guident les actions et décisions du manager.</p>
      
      <h3>Servant Leadership</h3>
      
      <p>Le concept de "servant leadership", développé par Robert K. Greenleaf, est au cœur du management agile. Le servant-leader se concentre d'abord sur les besoins des autres, en particulier ceux de son équipe, avant de considérer ses propres besoins.</p>
      
      <p>Caractéristiques du servant-leader :</p>
      <ul>
        <li><strong>Écoute active</strong> : Écouter attentivement pour comprendre les besoins et préoccupations</li>
        <li><strong>Empathie</strong> : Comprendre et partager les sentiments des autres</li>
        <li><strong>Conscience</strong> : Être conscient de l'impact de ses actions et décisions</li>
        <li><strong>Persuasion</strong> : Convaincre plutôt que contraindre</li>
        <li><strong>Conceptualisation</strong> : Penser au-delà des réalités quotidiennes</li>
        <li><strong>Prévoyance</strong> : Anticiper les conséquences futures des décisions</li>
        <li><strong>Intendance</strong> : Gérer quelque chose au nom d'un autre</li>
        <li><strong>Engagement envers la croissance des personnes</strong> : Aider les autres à se développer</li>
        <li><strong>Construction de communauté</strong> : Créer un sentiment d'appartenance</li>
      </ul>
      
      <h3>Autonomie et responsabilisation</h3>
      
      <p>L'autonomie est la capacité d'une équipe à décider comment accomplir son travail sans direction externe. La responsabilisation consiste à donner à l'équipe l'autorité et les ressources nécessaires pour prendre ces décisions.</p>
      
      <p>Pour favoriser l'autonomie et la responsabilisation :</p>
      <ul>
        <li>Définir clairement les objectifs et les contraintes</li>
        <li>Déléguer l'autorité, pas seulement les tâches</li>
        <li>Fournir les ressources et informations nécessaires</li>
        <li>Accepter différentes approches pour atteindre les objectifs</li>
        <li>Tolérer les erreurs comme opportunités d'apprentissage</li>
        <li>Reconnaître et célébrer les initiatives</li>
      </ul>
      
      <h3>Transparence et communication ouverte</h3>
      
      <p>La transparence est essentielle dans un environnement agile. Elle implique de partager ouvertement les informations, les décisions et les raisons qui les motivent.</p>
      
      <p>Pratiques pour favoriser la transparence :</p>
      <ul>
        <li>Partager régulièrement les informations sur la stratégie et les objectifs</li>
        <li>Rendre visibles les progrès et les obstacles</li>
        <li>Communiquer honnêtement, même les mauvaises nouvelles</li>
        <li>Encourager les feedbacks dans toutes les directions</li>
        <li>Expliquer le "pourquoi" derrière les décisions</li>
        <li>Admettre ses erreurs et incertitudes</li>
      </ul>
      
      <h3>Amélioration continue</h3>
      
      <p>L'amélioration continue (Kaizen) est un principe fondamental de l'agilité. Le manager agile crée un environnement où l'équipe peut constamment apprendre et s'améliorer.</p>
      
      <p>Pour favoriser l'amélioration continue :</p>
      <ul>
        <li>Encourager la réflexion régulière sur les pratiques de travail</li>
        <li>Allouer du temps pour l'expérimentation et l'apprentissage</li>
        <li>Valoriser les petites améliorations incrémentales</li>
        <li>Créer une culture où il est sûr d'échouer et d'apprendre</li>
        <li>Mesurer les progrès et célébrer les améliorations</li>
        <li>Partager les apprentissages entre les équipes</li>
      </ul>
      
      <h2 id="section-3">Création et développement d'équipes agiles</h2>
      
      <p>La création d'équipes agiles performantes est un processus qui nécessite attention et soin.</p>
      
      <h3>Composition de l'équipe</h3>
      
      <p>Une équipe agile efficace est généralement :</p>
      <ul>
        <li><strong>Pluridisciplinaire</strong> : Possède toutes les compétences nécessaires pour livrer de la valeur</li>
        <li><strong>De taille appropriée</strong> : Généralement 5-9 personnes (assez petite pour être agile, assez grande pour accomplir un travail significatif)</li>
        <li><strong>Stable</strong> : Les membres restent ensemble suffisamment longtemps pour développer des relations de travail efficaces</li>
        <li><strong>Dédiée</strong> : Idéalement, les membres travaillent à plein temps sur le même projet ou produit</li>
        <li><strong>Diversifiée</strong> : Différentes perspectives, expériences et styles de pensée</li>
      </ul>
      
      <h3>Phases de développement d'équipe</h3>
      
      <p>Le modèle de Bruce Tuckman identifie quatre phases de développement d'équipe :</p>
      
      <ul>
        <li><strong>Formation (Forming)</strong> : Les membres font connaissance, sont généralement polis et évitent les conflits</li>
        <li><strong>Confrontation (Storming)</strong> : Des conflits émergent alors que les membres expriment leurs opinions et établissent leur place</li>
        <li><strong>Normalisation (Norming)</strong> : L'équipe établit des normes de travail et développe la cohésion</li>
        <li><strong>Performance (Performing)</strong> : L'équipe fonctionne efficacement, avec une haute productivité et autonomie</li>
      </ul>
      
      <p>Le rôle du manager varie selon la phase de développement :</p>
      <ul>
        <li>En phase de formation : Clarifier les objectifs, faciliter les présentations, établir un cadre initial</li>
        <li>En phase de confrontation : Faciliter la résolution des conflits, rappeler l'objectif commun</li>
        <li>En phase de normalisation : Encourager l'établissement de normes efficaces, renforcer la cohésion</li>
        <li>En phase de performance : Déléguer davantage, se concentrer sur l'élimination des obstacles externes</li>
      </ul>
      
      <h3>Création d'un environnement sûr</h3>
      
      <p>La sécurité psychologique, concept développé par Amy Edmondson, est la conviction partagée que l'équipe est un lieu sûr pour prendre des risques interpersonnels. C'est un facteur clé de la performance des équipes.</p>
      
      <p>Pour créer un environnement psychologiquement sûr :</p>
      <ul>
        <li>Montrer l'exemple en admettant ses propres erreurs et incertitudes</li>
        <li>Réagir positivement lorsque les membres partagent des préoccupations ou des erreurs</li>
        <li>Encadrer les échecs comme des opportunités d'apprentissage</li>
        <li>Encourager la curiosité et les questions</li>
        <li>Valoriser les contributions de chacun</li>
        <li>Intervenir rapidement en cas de comportements irrespectueux</li>
      </ul>
      
      <h2 id="section-4">Facilitation et coaching d'équipe</h2>
      
      <p>La facilitation et le coaching sont deux compétences essentielles pour le manager agile.</p>
      
      <h3>Techniques de facilitation</h3>
      
      <p>La facilitation consiste à aider un groupe à atteindre ses objectifs en améliorant ses processus de collaboration et de prise de décision.</p>
      
      <p>Techniques de facilitation efficaces :</p>
      <ul>
        <li><strong>Préparation structurée</strong> : Définir clairement l'objectif, l'agenda et les résultats attendus</li>
        <li><strong>Cadrage</strong> : Établir les règles de base et clarifier les attentes</li>
        <li><strong>Gestion du temps</strong> : Maintenir le rythme et respecter les délais</li>
        <li><strong>Participation équilibrée</strong> : S'assurer que toutes les voix sont entendues</li>
        <li><strong>Écoute active</strong> : Écouter attentivement et reformuler pour vérifier la compréhension</li>
        <li><strong>Questions puissantes</strong> : Poser des questions ouvertes qui stimulent la réflexion</li>
        <li><strong>Gestion des conflits</strong> : Transformer les désaccords en discussions constructives</li>
        <li><strong>Synthèse</strong> : Résumer les points clés et les décisions</li>
      </ul>
      
      <h3>Approche de coaching</h3>
      
      <p>Le coaching vise à aider les individus et les équipes à développer leur potentiel et à trouver leurs propres solutions.</p>
      
      <p>Principes de coaching efficace :</p>
      <ul>
        <li><strong>Partir des forces</strong> : Identifier et développer ce qui fonctionne déjà bien</li>
        <li><strong>Poser des questions plutôt que donner des réponses</strong> : Aider l'équipe à trouver ses propres solutions</li>
        <li><strong>Écouter à plusieurs niveaux</strong> : Entendre les mots, les émotions et les non-dits</li>
        <li><strong>Donner un feedback constructif</strong> : Spécifique, opportun et orienté vers l'amélioration</li>
        <li><strong>Fixer des objectifs ambitieux mais atteignables</strong> : Créer des défis qui stimulent la croissance</li>
        <li><strong>Célébrer les progrès</strong> : Reconnaître les avancées, même petites</li>
      </ul>
      
      <h3>Facilitation des événements agiles</h3>
      
      <p>Les événements agiles comme les réunions quotidiennes, les revues et les rétrospectives nécessitent une facilitation efficace.</p>
      
      <p>Conseils pour faciliter les événements agiles :</p>
      <ul>
        <li><strong>Réunion quotidienne</strong> : Maintenir le focus, encourager la résolution de problèmes après la réunion</li>
        <li><strong>Revue</strong> : Créer une atmosphère de feedback constructif, impliquer activement les parties prenantes</li>
        <li><strong>Rétrospective</strong> : Varier les formats, assurer un suivi des actions décidées</li>
        <li><strong>Planification</strong> : Clarifier les objectifs, faciliter l'estimation collaborative</li>
      </ul>
      
      <h2 id="section-5">Gestion des performances</h2>
      
      <p>La gestion des performances dans un contexte agile se concentre davantage sur l'amélioration continue que sur l'évaluation traditionnelle.</p>
      
      <h3>Objectifs et résultats clés (OKR)</h3>
      
      <p>Les OKR (Objectives and Key Results) sont un cadre de définition d'objectifs popularisé par Google. Ils consistent en :</p>
      <ul>
        <li><strong>Objectifs</strong> : Déclarations qualitatives, inspirantes et ambitieuses de ce qu'on veut accomplir</li>
        <li><strong>Résultats clés</strong> : Mesures quantitatives qui indiquent si l'objectif a été atteint</li>
      </ul>
      
      <p>Principes des OKR :</p>
      <ul>
        <li>Alignement avec la mission et la stratégie</li>
        <li>Transparence et visibilité pour tous</li>
        <li>Ambition (les objectifs devraient être difficiles mais pas impossibles)</li>
        <li>Fréquence trimestrielle typique</li>
        <li>Séparation de la mesure de performance et des compensations</li>
      </ul>
      
      <h3>Feedback continu</h3>
      
      <p>Le feedback continu remplace ou complète les évaluations annuelles traditionnelles.</p>
      
      <p>Pratiques de feedback efficace :</p>
      <ul>
        <li><strong>Régularité</strong> : Feedback fréquent plutôt que rare</li>
        <li><strong>Spécificité</strong> : Exemples concrets plutôt que généralités</li>
        <li><strong>Équilibre</strong> : Points forts et axes d'amélioration</li>
        <li><strong>Orientation future</strong> : Focus sur l'amélioration plutôt que sur le blâme</li>
        <li><strong>Bidirectionnalité</strong> : Encourager le feedback dans les deux sens</li>
      </ul>
      
      <h3>Reconnaissance et célébration</h3>
      
      <p>La reconnaissance et la célébration sont essentielles pour maintenir la motivation et l'engagement.</p>
      
      <p>Principes de reconnaissance efficace :</p>
      <ul>
        <li><strong>Authenticité</strong> : Sincère et spécifique</li>
        <li><strong>Opportunité</strong> : Proche de l'événement reconnu</li>
        <li><strong>Personnalisation</strong> : Adaptée aux préférences individuelles</li>
        <li><strong>Visibilité</strong> : Publique ou privée selon le contexte</li>
        <li><strong>Alignement</strong> : Cohérente avec les valeurs et objectifs</li>
      </ul>
      
      <p>Occasions de célébration :</p>
      <ul>
        <li>Atteinte d'objectifs importants</li>
        <li>Livraison de valeur aux clients</li>
        <li>Résolution de problèmes difficiles</li>
        <li>Amélioration des processus</li>
        <li>Apprentissages significatifs, même issus d'échecs</li>
      </ul>
      
      <h2 id="section-6">Gestion des conflits</h2>
      
      <p>Les conflits sont inévitables dans toute équipe. Dans un contexte agile, ils peuvent être vus comme des opportunités d'apprentissage et d'amélioration.</p>
      
      <h3>Types de conflits</h3>
      
      <ul>
        <li><strong>Conflits de tâches</strong> : Désaccords sur le travail lui-même (comment faire quelque chose)</li>
        <li><strong>Conflits de processus</strong> : Désaccords sur la façon dont le travail devrait être organisé</li>
        <li><strong>Conflits relationnels</strong> : Tensions interpersonnelles basées sur des incompatibilités personnelles</li>
      </ul>
      
      <p>Les conflits de tâches et de processus peuvent être bénéfiques s'ils sont bien gérés, car ils peuvent conduire à de meilleures solutions. Les conflits relationnels sont généralement négatifs et doivent être résolus rapidement.</p>
      
      <h3>Approches de résolution de conflits</h3>
      
      <p>Plusieurs approches peuvent être utilisées selon la nature du conflit :</p>
      
      <ul>
        <li><strong>Collaboration</strong> : Travailler ensemble pour trouver une solution qui satisfait toutes les parties</li>
        <li><strong>Compromis</strong> : Chaque partie cède un peu pour trouver un terrain d'entente</li>
        <li><strong>Accommodation</strong> : Une partie cède pour maintenir l'harmonie</li>
        <li><strong>Évitement</strong> : Reporter ou ignorer le conflit (rarement une solution à long terme)</li>
        <li><strong>Compétition</strong> : Une partie impose sa solution (peut être nécessaire en cas d'urgence)</li>
      </ul>
      
      <p>La collaboration est généralement l'approche préférée dans un contexte agile, mais chaque approche peut être appropriée selon les circonstances.</p>
      
      <h3>Rôle du manager dans la résolution de conflits</h3>
      
      <p>Le manager agile peut jouer plusieurs rôles dans la résolution de conflits :</p>
      
      <ul>
        <li><strong>Médiateur</strong> : Faciliter la communication entre les parties en conflit</li>
        <li><strong>Coach</strong> : Aider les individus à développer leurs compétences en résolution de conflits</li>
        <li><strong>Modèle</strong> : Montrer l'exemple en gérant les désaccords de manière constructive</li>
        <li><strong>Arbitre</strong> : En dernier recours, prendre une décision si l'équipe ne peut pas résoudre le conflit</li>
      </ul>
      
      <h2 id="section-7">Gestion du changement organisationnel</h2>
      
      <p>L'adoption de l'agilité implique souvent un changement organisationnel significatif. Le manager agile joue un rôle clé dans la facilitation de ce changement.</p>
      
      <h3>Modèles de changement</h3>
      
      <p>Plusieurs modèles peuvent guider le processus de changement :</p>
      
      <ul>
        <li><strong>Modèle de Kotter (8 étapes)</strong> : Créer l'urgence, former une coalition, créer une vision, communiquer la vision, éliminer les obstacles, générer des victoires à court terme, consolider les gains, ancrer les changements</li>
        <li><strong>Modèle ADKAR</strong> : Conscience (Awareness), Désir, Connaissance, Capacité, Renforcement</li>
        <li><strong>Changement émergent</strong> : Approche plus organique basée sur l'expérimentation et l'adaptation</li>
      </ul>
      
      <h3>Surmonter la résistance au changement</h3>
      
      <p>La résistance au changement est naturelle et peut prendre différentes formes :</p>
      
      <ul>
        <li><strong>Résistance cognitive</strong> : "Je ne comprends pas pourquoi ce changement est nécessaire"</li>
        <li><strong>Résistance émotionnelle</strong> : "J'ai peur de ce que ce changement signifie pour moi"</li>
        <li><strong>Résistance comportementale</strong> : "Je ne sais pas comment travailler différemment"</li>
      </ul>
      
      <p>Stratégies pour surmonter la résistance :</p>
      <ul>
        <li>Communiquer clairement la raison du changement</li>
        <li>Impliquer les personnes concernées dans la conception du changement</li>
        <li>Fournir formation et soutien</li>
        <li>Reconnaître et valider les préoccupations</li>
        <li>Célébrer les succès précoces</li>
        <li>Être patient et persévérant</li>
      </ul>
      
      <h3>Création d'une culture agile</h3>
      
      <p>La culture organisationnelle est un facteur clé de succès pour l'agilité. Le manager agile contribue à façonner cette culture.</p>
      
      <p>Éléments d'une culture agile :</p>
      <ul>
        <li><strong>Orientation client</strong> : Focus sur la valeur pour le client</li>
        <li><strong>Collaboration</strong> : Travail d'équipe et communication ouverte</li>
        <li><strong>Apprentissage</strong> : Curiosité, expérimentation et amélioration continue</li>
        <li><strong>Adaptabilité</strong> : Ouverture au changement et flexibilité</li>
        <li><strong>Autonomie</strong> : Confiance et responsabilisation</li>
        <li><strong>Excellence technique</strong> : Engagement envers la qualité et le professionnalisme</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension de la gestion d'équipes agiles, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Auto-évaluation de leadership</h3>
      <p>Évaluez votre style de leadership actuel :</p>
      <ul>
        <li>Dans quelle mesure incarnez-vous les principes du servant leadership ?</li>
        <li>Comment équilibrez-vous direction et autonomie ?</li>
        <li>Quelles sont vos forces et axes d'amélioration en tant que leader agile ?</li>
        <li>Identifiez trois actions concrètes pour améliorer votre leadership</li>
      </ul>
      
      <h3>Exercice 2 : Analyse d'équipe</h3>
      <p>Pour une équipe que vous gérez ou connaissez bien :</p>
      <ul>
        <li>Identifiez sa phase de développement actuelle (formation, confrontation, normalisation, performance)</li>
        <li>Évaluez son niveau d'auto-organisation et de pluridisciplinarité</li>
        <li>Analysez les dynamiques de communication et de collaboration</li>
        <li>Proposez des actions pour aider l'équipe à progresser vers la phase suivante</li>
      </ul>
      
      <h3>Exercice 3 : Plan de changement</h3>
      <p>Élaborez un plan pour introduire ou renforcer une pratique agile dans votre organisation :</p>
      <ul>
        <li>Identifiez la pratique et sa valeur potentielle</li>
        <li>Anticipez les résistances possibles</li>
        <li>Définissez une approche progressive d'introduction</li>
        <li>Identifiez les indicateurs de succès</li>
        <li>Planifiez comment soutenir et renforcer le changement</li>
      </ul>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>La gestion d'équipes agiles représente un changement de paradigme par rapport au management traditionnel. Elle requiert une évolution du rôle du manager, qui devient un servant-leader focalisé sur la création d'un environnement propice à l'auto-organisation, l'apprentissage et la performance.</p>
      
      <p>Les principes clés du leadership agile incluent le servant leadership, l'autonomie et la responsabilisation, la transparence et la communication ouverte, et l'amélioration continue. Ces principes se traduisent par des pratiques concrètes de facilitation, de coaching, de gestion des performances et de résolution de conflits.</p>
      
      <p>La création et le développement d'équipes agiles performantes nécessitent une attention particulière à la composition de l'équipe, aux phases de développement et à la création d'un environnement psychologiquement sûr.</p>
      
      <p>Enfin, le manager agile joue un rôle crucial dans la gestion du changement organisationnel et la création d'une culture qui soutient l'agilité.</p>
      
      <p>En adoptant ces principes et pratiques, les managers peuvent aider leurs équipes à atteindre des niveaux élevés de performance, d'engagement et de satisfaction, tout en livrant régulièrement de la valeur aux clients et à l'organisation.</p>
    `,
    tableOfContents: [
      "Introduction à la gestion d'équipes agiles",
      "Principes de leadership agile",
      "Création et développement d'équipes agiles",
      "Facilitation et coaching d'équipe",
      "Gestion des performances",
      "Gestion des conflits",
      "Gestion du changement organisationnel",
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

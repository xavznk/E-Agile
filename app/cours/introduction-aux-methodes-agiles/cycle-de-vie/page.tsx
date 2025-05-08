import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Cycle de vie d'un projet agile",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 6,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction au cycle de vie agile</h2>
      
      <p>Le cycle de vie d'un projet agile diffère fondamentalement de celui d'un projet traditionnel. Alors que les approches traditionnelles suivent généralement un modèle séquentiel (comme le cycle en cascade ou "waterfall"), les projets agiles adoptent une approche itérative et incrémentale.</p>
      
      <p>Cette différence d'approche répond à une réalité fondamentale : dans un environnement complexe et changeant, il est impossible de tout prévoir dès le début. L'agilité reconnaît cette incertitude et propose un cadre qui permet de s'adapter continuellement aux nouvelles informations et aux changements.</p>
      
      <h3>Caractéristiques du cycle de vie agile</h3>
      
      <ul>
        <li><strong>Itératif</strong> : Le projet progresse par cycles répétés (itérations)</li>
        <li><strong>Incrémental</strong> : Chaque itération produit un incrément de valeur</li>
        <li><strong>Adaptatif</strong> : Le plan s'ajuste en fonction des retours et des apprentissages</li>
        <li><strong>Collaboratif</strong> : Implication continue des parties prenantes</li>
        <li><strong>Orienté valeur</strong> : Priorisation basée sur la valeur business</li>
        <li><strong>Empirique</strong> : Décisions basées sur l'observation et l'expérience</li>
      </ul>
      
      <h3>Comparaison avec le cycle en cascade</h3>
      
      <table>
        <tr>
          <th>Aspect</th>
          <th>Cycle en cascade</th>
          <th>Cycle agile</th>
        </tr>
        <tr>
          <td>Phases</td>
          <td>Séquentielles et distinctes</td>
          <td>Itératives et se chevauchant</td>
        </tr>
        <tr>
          <td>Livrables</td>
          <td>Un produit final à la fin du projet</td>
          <td>Des incréments utilisables à chaque itération</td>
        </tr>
        <tr>
          <td>Planification</td>
          <td>Détaillée dès le début</td>
          <td>Progressive et adaptative</td>
        </tr>
        <tr>
          <td>Changements</td>
          <td>Résistance aux changements</td>
          <td>Accueil des changements</td>
        </tr>
        <tr>
          <td>Feedback</td>
          <td>Principalement à la fin</td>
          <td>Continu tout au long du projet</td>
        </tr>
        <tr>
          <td>Risques</td>
          <td>Identifiés au début, gérés par anticipation</td>
          <td>Identifiés et traités en continu</td>
        </tr>
      </table>
      
      <h2 id="section-2">Les phases d'un projet agile</h2>
      
      <p>Bien que les projets agiles soient itératifs, ils suivent généralement un flux global qui peut être divisé en plusieurs phases. Ces phases ne sont pas strictement séquentielles et peuvent se chevaucher.</p>
      
      <h3>Phase 1 : Initiation</h3>
      
      <p>Cette phase pose les fondations du projet et établit une vision partagée.</p>
      
      <p><strong>Activités clés :</strong></p>
      <ul>
        <li>Définir la vision du produit</li>
        <li>Identifier les parties prenantes</li>
        <li>Former l'équipe</li>
        <li>Établir le cadre de travail (Scrum, Kanban, etc.)</li>
        <li>Définir les métriques de succès</li>
        <li>Créer une feuille de route initiale</li>
      </ul>
      
      <p><strong>Outils et techniques :</strong></p>
      <ul>
        <li>Product Vision Board</li>
        <li>Impact Mapping</li>
        <li>Lean Canvas</li>
        <li>Stakeholder Mapping</li>
        <li>Elevator Pitch</li>
      </ul>
      
      <h3>Phase 2 : Planification et élaboration</h3>
      
      <p>Cette phase consiste à élaborer suffisamment le backlog pour permettre le démarrage des itérations.</p>
      
      <p><strong>Activités clés :</strong></p>
      <ul>
        <li>Créer le Product Backlog initial</li>
        <li>Affiner les éléments de haute priorité</li>
        <li>Établir l'architecture initiale</li>
        <li>Définir la "Definition of Done"</li>
        <li>Mettre en place l'environnement technique</li>
        <li>Planifier la première itération</li>
      </ul>
      
      <p><strong>Outils et techniques :</strong></p>
      <ul>
        <li>User Story Mapping</li>
        <li>Product Backlog Refinement</li>
        <li>Spike Solutions</li>
        <li>Architectural Runway</li>
        <li>Definition of Done Workshop</li>
      </ul>
      
      <h3>Phase 3 : Développement itératif</h3>
      
      <p>C'est le cœur du projet agile, où l'équipe développe le produit par itérations successives.</p>
      
      <p><strong>Activités clés :</strong></p>
      <ul>
        <li>Planifier l'itération</li>
        <li>Développer les fonctionnalités</li>
        <li>Tester en continu</li>
        <li>Intégrer régulièrement</li>
        <li>Démontrer l'incrément</li>
        <li>Recueillir le feedback</li>
        <li>Mener des rétrospectives</li>
        <li>Adapter le Product Backlog</li>
      </ul>
      
      <p><strong>Outils et techniques :</strong></p>
      <ul>
        <li>Sprint Planning (Scrum)</li>
        <li>Daily Stand-up</li>
        <li>Test-Driven Development</li>
        <li>Continuous Integration</li>
        <li>Sprint Review</li>
        <li>Sprint Retrospective</li>
        <li>Burndown/Burnup Charts</li>
      </ul>
      
      <h3>Phase 4 : Release</h3>
      
      <p>Cette phase consiste à livrer l'incrément de produit aux utilisateurs finaux.</p>
      
      <p><strong>Activités clés :</strong></p>
      <ul>
        <li>Finaliser la documentation</li>
        <li>Réaliser les tests de validation</li>
        <li>Former les utilisateurs</li>
        <li>Déployer en production</li>
        <li>Communiquer sur la release</li>
        <li>Surveiller les performances</li>
      </ul>
      
      <p><strong>Outils et techniques :</strong></p>
      <ul>
        <li>Continuous Delivery</li>
        <li>Feature Toggles</li>
        <li>Canary Releases</li>
        <li>A/B Testing</li>
        <li>User Acceptance Testing</li>
      </ul>
      
      <h3>Phase 5 : Clôture ou transition</h3>
      
      <p>Cette phase marque la fin du projet ou la transition vers une nouvelle phase.</p>
      
      <p><strong>Activités clés :</strong></p>
      <ul>
        <li>Évaluer l'atteinte des objectifs</li>
        <li>Documenter les leçons apprises</li>
        <li>Célébrer les succès</li>
        <li>Transférer les connaissances</li>
        <li>Libérer les ressources</li>
        <li>Planifier les prochaines étapes</li>
      </ul>
      
      <p><strong>Outils et techniques :</strong></p>
      <ul>
        <li>Project Retrospective</li>
        <li>Knowledge Transfer Sessions</li>
        <li>Celebration Events</li>
        <li>Post-Implementation Review</li>
      </ul>
      
      <h2 id="section-3">Le cycle itératif en détail</h2>
      
      <p>Le cœur du cycle de vie agile est l'itération, un cycle court et timeboxé qui produit un incrément de valeur. Examinons en détail ce qui se passe au sein d'une itération typique.</p>
      
      <h3>Planification de l'itération</h3>
      
      <p>L'itération commence par une session de planification où l'équipe détermine ce qu'elle peut livrer et comment elle va s'y prendre.</p>
      
      <p><strong>Activités :</strong></p>
      <ul>
        <li>Révision et clarification des éléments prioritaires du backlog</li>
        <li>Estimation de la capacité de l'équipe pour l'itération</li>
        <li>Sélection des éléments à inclure dans l'itération</li>
        <li>Décomposition des éléments en tâches</li>
        <li>Identification des dépendances et des risques</li>
        <li>Engagement sur un objectif d'itération</li>
      </ul>
      
      <h3>Exécution</h3>
      
      <p>C'est la phase où l'équipe réalise le travail nécessaire pour transformer les éléments du backlog en fonctionnalités opérationnelles.</p>
      
      <p><strong>Activités :</strong></p>
      <ul>
        <li>Développement des fonctionnalités</li>
        <li>Tests unitaires et d'intégration</li>
        <li>Revues de code</li>
        <li>Intégration continue</li>
        <li>Documentation</li>
        <li>Synchronisation quotidienne (Daily Stand-up)</li>
        <li>Gestion des obstacles</li>
      </ul>
      
      <h3>Revue</h3>
      
      <p>À la fin de l'itération, l'équipe présente l'incrément réalisé aux parties prenantes pour obtenir leur feedback.</p>
      
      <p><strong>Activités :</strong></p>
      <ul>
        <li>Démonstration des fonctionnalités développées</li>
        <li>Validation par rapport aux critères d'acceptation</li>
        <li>Recueil du feedback des parties prenantes</li>
        <li>Discussion sur les prochaines priorités</li>
        <li>Mise à jour du backlog et de la roadmap</li>
      </ul>
      
      <h3>Rétrospective</h3>
      
      <p>L'équipe prend du recul sur son fonctionnement et identifie des axes d'amélioration pour les prochaines itérations.</p>
      
      <p><strong>Activités :</strong></p>
      <ul>
        <li>Analyse de ce qui a bien fonctionné</li>
        <li>Identification des difficultés rencontrées</li>
        <li>Recherche des causes racines</li>
        <li>Définition d'actions d'amélioration</li>
        <li>Célébration des succès</li>
      </ul>
      
      <h2 id="section-4">Gestion du Product Backlog</h2>
      
      <p>Le Product Backlog est le cœur du cycle de vie agile. Sa gestion efficace est essentielle pour maximiser la valeur livrée.</p>
      
      <h3>Création et alimentation</h3>
      
      <p>Le Product Backlog est initialement créé lors de la phase d'initiation, mais il évolue constamment tout au long du projet.</p>
      
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
        <li>MoSCoW (Must, Should, Could, Won't)</li>
        <li>WSJF (Weighted Shortest Job First)</li>
        <li>Kano Model</li>
        <li>Value vs Effort</li>
        <li>Business Value Points</li>
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
      
      <h2 id="section-5">Planification à différents niveaux</h2>
      
      <p>La planification agile s'effectue à différents niveaux d'horizon temporel et de détail.</p>
      
      <h3>Planification stratégique</h3>
      
      <p>Horizon : 6-12 mois ou plus</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Aligner le développement produit avec la stratégie d'entreprise</li>
        <li>Définir une vision à long terme</li>
        <li>Identifier les initiatives majeures</li>
        <li>Allouer les budgets et ressources</li>
      </ul>
      
      <p><strong>Outils :</strong></p>
      <ul>
        <li>Roadmap produit</li>
        <li>OKRs (Objectives and Key Results)</li>
        <li>Impact Mapping</li>
        <li>Portfolio Kanban</li>
      </ul>
      
      <h3>Planification de release</h3>
      
      <p>Horizon : 2-3 mois</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Définir le contenu d'une release</li>
        <li>Établir une date de livraison cible</li>
        <li>Coordonner les activités interdépendantes</li>
        <li>Communiquer avec les parties prenantes</li>
      </ul>
      
      <p><strong>Outils :</strong></p>
      <ul>
        <li>Release Planning</li>
        <li>Story Mapping</li>
        <li>Release Burndown</li>
        <li>Feature Timeline</li>
      </ul>
      
      <h3>Planification d'itération</h3>
      
      <p>Horizon : 1-4 semaines</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Sélectionner les éléments à développer dans l'itération</li>
        <li>Décomposer les éléments en tâches</li>
        <li>Estimer le travail</li>
        <li>S'engager sur un objectif d'itération</li>
      </ul>
      
      <p><strong>Outils :</strong></p>
      <ul>
        <li>Sprint Planning</li>
        <li>Task Board</li>
        <li>Sprint Backlog</li>
        <li>Sprint Burndown</li>
      </ul>
      
      <h3>Planification quotidienne</h3>
      
      <p>Horizon : 24 heures</p>
      
      <p><strong>Objectifs :</strong></p>
      <ul>
        <li>Synchroniser l'équipe</li>
        <li>Identifier les obstacles</li>
        <li>Ajuster le plan pour la journée</li>
        <li>Maintenir la concentration sur l'objectif d'itération</li>
      </ul>
      
      <p><strong>Outils :</strong></p>
      <ul>
        <li>Daily Stand-up</li>
        <li>Task Board</li>
        <li>Impediment Log</li>
      </ul>
      
      <h2 id="section-6">Gestion des risques en agile</h2>
      
      <p>La gestion des risques en agile est intégrée au processus itératif plutôt que traitée comme une activité séparée.</p>
      
      <h3>Principes de gestion des risques agile</h3>
      
      <ul>
        <li><strong>Identification continue</strong> : Les risques sont identifiés tout au long du projet, pas seulement au début</li>
        <li><strong>Mitigation par l'action</strong> : La meilleure façon de gérer un risque est souvent de le confronter rapidement</li>
        <li><strong>Transparence</strong> : Les risques sont visibles et discutés ouvertement</li>
        <li><strong>Priorisation basée sur la valeur</strong> : Traiter d'abord les risques qui menacent la plus grande valeur</li>
        <li><strong>Apprentissage par l'expérience</strong> : Utiliser les rétrospectives pour améliorer la gestion des risques</li>
      </ul>
      
      <h3>Techniques de gestion des risques</h3>
      
      <ul>
        <li><strong>Spikes</strong> : Itérations dédiées à l'exploration d'un risque technique</li>
        <li><strong>MVP (Minimum Viable Product)</strong> : Validation rapide des hypothèses business</li>
        <li><strong>Priorisation des risques</strong> : Traiter les éléments risqués en priorité dans le backlog</li>
        <li><strong>Décomposition</strong> : Diviser les éléments complexes en plus petits morceaux</li>
        <li><strong>Intégration continue</strong> : Réduire le risque d'intégration par des tests fréquents</li>
        <li><strong>Démonstrations fréquentes</strong> : Obtenir un feedback rapide pour réduire le risque de développer la mauvaise chose</li>
      </ul>
      
      <h2 id="section-7">Mesure et suivi de l'avancement</h2>
      
      <p>En agile, le suivi de l'avancement se concentre sur la valeur livrée et l'adaptation plutôt que sur la conformité à un plan initial.</p>
      
      <h3>Métriques agiles</h3>
      
      <ul>
        <li><strong>Vélocité</strong> : Quantité de travail que l'équipe peut accomplir par itération</li>
        <li><strong>Burndown Chart</strong> : Visualisation du travail restant au fil du temps</li>
        <li><strong>Burnup Chart</strong> : Visualisation du travail accompli au fil du temps</li>
        <li><strong>Cumulative Flow Diagram</strong> : Visualisation du flux de travail et des goulots d'étranglement</li>
        <li><strong>Lead Time</strong> : Temps entre la demande et la livraison d'une fonctionnalité</li>
        <li><strong>Cycle Time</strong> : Temps de traitement d'une fonctionnalité une fois qu'elle est commencée</li>
        <li><strong>Défauts</strong> : Nombre et gravité des bugs identifiés</li>
        <li><strong>Satisfaction client</strong> : Feedback des utilisateurs sur les fonctionnalités livrées</li>
      </ul>
      
      <h3>Radiateurs d'information</h3>
      
      <p>Les radiateurs d'information sont des affichages visuels qui rendent l'avancement et les problèmes visibles pour tous.</p>
      
      <ul>
        <li><strong>Task Board</strong> : Visualisation du flux de travail au sein de l'itération</li>
        <li><strong>Burndown/Burnup Charts</strong> : Suivi de l'avancement par rapport à l'objectif</li>
        <li><strong>Impediment Log</strong> : Liste des obstacles identifiés et leur statut</li>
        <li><strong>Definition of Done</strong> : Critères de qualité à respecter</li>
        <li><strong>Team Dashboard</strong> : Vue d'ensemble des métriques clés</li>
      </ul>
      
      <h2 id="section-8">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension du cycle de vie agile, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Création d'une roadmap produit</h3>
      <p>Pour un produit de votre choix (réel ou fictif) :</p>
      <ol>
        <li>Définissez la vision du produit</li>
        <li>Identifiez les principales fonctionnalités</li>
        <li>Organisez ces fonctionnalités en releases</li>
        <li>Créez une roadmap visuelle sur 6-12 mois</li>
      </ol>
      
      <h3>Exercice 2 : Simulation d'un cycle itératif</h3>
      <p>En groupe, simulez un cycle itératif complet pour un projet simple :</p>
      <ol>
        <li>Créez un Product Backlog avec 10-15 items</li>
        <li>Priorisez le backlog</li>
        <li>Planifiez une itération de 2 semaines</li>
        <li>Simulez l'exécution (en accéléré)</li>
        <li>Menez une revue et une rétrospective</li>
        <li>Ajustez le backlog en fonction du feedback</li>
      </ol>
      
      <h3>Exercice 3 : Analyse de métriques</h3>
      <p>À partir d'un ensemble de données fournies (ou fictives) :</p>
      <ol>
        <li>Calculez la vélocité moyenne de l'équipe</li>
        <li>Analysez un Burndown Chart</li>
        <li>Identifiez les tendances et problèmes potentiels</li>
        <li>Proposez des actions correctives</li>
      </ol>
      
      <h2 id="section-9">Conclusion</h2>
      
      <p>Le cycle de vie d'un projet agile se distingue par son approche itérative, incrémentale et adaptative. Plutôt que de suivre un plan rigide établi au début du projet, il évolue constamment en fonction des apprentissages et du feedback.</p>
      
      <p>Cette approche présente plusieurs avantages :</p>
      <ul>
        <li>Livraison plus rapide de valeur aux utilisateurs</li>
        <li>Réduction des risques grâce à la validation continue</li>
        <li>Meilleure adaptation aux changements</li>
        <li>Amélioration continue du produit et du processus</li>
        <li>Engagement accru des parties prenantes</li>
      </ul>
      
      <p>Cependant, elle nécessite également un changement de mentalité et de pratiques :</p>
      <ul>
        <li>Accepter l'incertitude et l'émergence</li>
        <li>Privilégier la collaboration et la communication</li>
        <li>Adopter une approche empirique basée sur l'observation et l'adaptation</li>
        <li>Mesurer le succès par la valeur livrée plutôt que par la conformité au plan</li>
      </ul>
      
      <p>Dans les prochaines leçons, nous approfondirons d'autres aspects de l'agilité, notamment la comparaison détaillée entre méthodes agiles et traditionnelles, et les techniques de travail en équipe et de communication dans un environnement agile.</p>
    `,
    tableOfContents: [
      "Introduction au cycle de vie agile",
      "Les phases d'un projet agile",
      "Le cycle itératif en détail",
      "Gestion du Product Backlog",
      "Planification à différents niveaux",
      "Gestion des risques en agile",
      "Mesure et suivi de l'avancement",
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

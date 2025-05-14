import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Artefacts Scrum et leur gestion",
    instructor: "M. Fotsing Eric",
    course: "Cadre Scrum et Kanban",
    courseSlug: "cadre-scrum-et-kanban",
    step: 4,
    totalSteps: 8,
    content: `
      <h2 id="section-1">Introduction aux artefacts Scrum</h2>
      
      <p>Scrum définit trois artefacts principaux qui visent à maximiser la transparence et la compréhension commune du travail à accomplir. Ces artefacts sont des outils concrets qui aident les équipes à gérer la complexité et à livrer de la valeur de manière itérative.</p>
      
      <p>Dans cette leçon, nous explorerons en détail chaque artefact Scrum, son utilité et les bonnes pratiques pour les gérer efficacement.</p>
      
      <h3>Les trois artefacts officiels</h3>
      
      <ul>
        <li><strong>Product Backlog</strong> : La liste ordonnée de tout ce qui est nécessaire dans le produit</li>
        <li><strong>Sprint Backlog</strong> : L'ensemble des éléments sélectionnés pour le Sprint en cours</li>
        <li><strong>Increment</strong> : Le résultat tangible du Sprint, potentiellement livrable</li>
      </ul>
      
      <h2 id="section-2">Product Backlog</h2>
      
      <p>Le Product Backlog est l'artefact central en Scrum, représentant la source unique de vérité pour tout ce qui concerne le produit.</p>
      
      <h3>Caractéristiques principales</h3>
      
      <ul>
        <li><strong>Dynamique</strong> : Évolue constamment pour refléter les besoins changeants</li>
        <li><strong>Ordonné</strong> : Les éléments les plus importants et les plus urgents sont en haut</li>
        <li><strong>Détaillé progressivement</strong> : Seule la partie haute est affinée et prête</li>
        <li><strong>Exhaustif</strong> : Contient toutes les fonctionnalités, améliorations et corrections</li>
      </ul>
      
      <h3>Rôles et responsabilités</h3>
      
      <table>
        <tr>
          <th>Rôle</th>
          <th>Responsabilités</th>
        </tr>
        <tr>
          <td>Product Owner</td>
          <td>
            <ul>
              <li>Créer et maintenir le Product Backlog</li>
              <li>Ordonner les éléments par valeur</li>
              <li>S'assurer de la clarté et de la compréhension</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Équipe de Développement</td>
          <td>
            <ul>
              <li>Contribuer aux estimations</li>
              <li>Proposer des éléments techniques</li>
              <li>Participer aux affinages</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Parties prenantes</td>
          <td>
            <ul>
              <li>Fournir des feedbacks</li>
              <li>Suggérer de nouveaux besoins</li>
            </ul>
          </td>
        </tr>
      </table>
      
      <h3>Bonnes pratiques de gestion</h3>
      
      <ul>
        <li><strong>Affinage régulier</strong> : Organiser des Product Backlog Refinement sessions</li>
        <li><strong>Définition de "Ready"</strong> : Critères clairs pour qu'un item soit sélectionnable</li>
        <li><strong>Visualisation</strong> : Utiliser des outils adaptés (Jira, tableau physique, etc.)</li>
        <li><strong>Équilibre</strong> : Maintenir un bon ratio entre fonctionnel, technique et dette</li>
      </ul>
      
      <h2 id="section-3">Sprint Backlog</h2>
      
      <p>Le Sprint Backlog est le plan de l'équipe pour réaliser l'objectif du Sprint. Il émerge des discussions lors du Sprint Planning.</p>
      
      <h3>Composition typique</h3>
      
      <ul>
        <li>Les User Stories sélectionnées du Product Backlog</li>
        <li>L'objectif du Sprint (Sprint Goal)</li>
        <li>Le plan pour livrer l'Increment</li>
        <li>Les tâches techniques identifiées</li>
      </ul>
      
      <h3>Gestion quotidienne</h3>
      
      <p>L'équipe gère activement le Sprint Backlog :</p>
      
      <ol>
        <li><strong>Mise à jour</strong> : Ajuster les tâches et estimations au Daily Scrum</li>
        <li><strong>Visualisation</strong> : Tableau Kanban ou outil numérique partagé</li>
        <li><strong>Adaptation</strong> : Modifier le plan si nécessaire pour atteindre l'objectif</li>
      </ol>
      
      <h3>Erreurs courantes</h3>
      
      <ul>
        <li>Changer le scope pendant le Sprint (sauf accord de l'équipe)</li>
        <li>Ne pas mettre à jour l'état des tâches régulièrement</li>
        <li>Oublier de lier les tâches à l'objectif du Sprint</li>
        <li>Sur-détailler les tâches à l'avance</li>
      </ul>
      
      <h2 id="section-4">Increment</h2>
      
      <p>L'Increment est le résultat concret du Sprint, la somme de tous les éléments du Product Backlog terminés pendant le Sprint.</p>
      
      <h3>Caractéristiques clés</h3>
      
      <ul>
        <li><strong>Potentiellement livrable</strong> : Doit être dans un état utilisable</li>
        <li><strong>Conforme à la Definition of Done</strong> : Respecte les standards qualité</li>
        <li><strong>Valeur ajoutée</strong> : Contribue à l'évolution du produit</li>
      </ul>
      
      <h3>Gestion de l'Increment</h3>
      
      <table>
        <tr>
          <th>Aspect</th>
          <th>Pratiques recommandées</th>
        </tr>
        <tr>
          <td>Definition of Done</td>
          <td>
            <ul>
              <li>Créer collectivement et maintenir à jour</li>
              <li>Inclure tests, documentation, critères qualité</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Présentation</td>
          <td>
            <ul>
              <li>Montrer un produit fonctionnel lors de la Sprint Review</li>
              <li>Focus sur les feedbacks utilisateurs</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Livraison</td>
          <td>
            <ul>
              <li>Livrer fréquemment pour valider la valeur</li>
              <li>Automatiser le processus de livraison</li>
            </ul>
          </td>
        </tr>
      </table>
      
      <h2 id="section-5">Outils de gestion des artefacts</h2>
      
      <p>Plusieurs outils peuvent aider à gérer efficacement les artefacts Scrum.</p>
      
      <h3>Outils physiques</h3>
      
      <ul>
        <li><strong>Tableaux blancs et post-its</strong> : Excellents pour la visibilité et la collaboration</li>
        <li><strong>Tableaux Kanban muraux</strong> : Pour visualiser le flux de travail</li>
        <li><strong>Cartes d'histoires imprimées</strong> : Utiles pour les ateliers de planification</li>
      </ul>
      
      <h3>Outils numériques</h3>
      
      <table>
        <tr>
          <th>Type</th>
          <th>Exemples</th>
          <th>Avantages</th>
        </tr>
        <tr>
          <td>Généralistes</td>
          <td>Jira, Azure DevOps</td>
          <td>Fonctionnalités complètes, intégrations</td>
        </tr>
        <tr>
          <td>Simplifiés</td>
          <td>Trello, Kanbanize</td>
          <td>Prise en main rapide, visuels</td>
        </tr>
        <tr>
          <td>Spécialisés</td>
          <td>ScrumDo, VivifyScrum</td>
          <td>Optimisés pour Scrum</td>
        </tr>
      </table>
      
      <h2 id="section-6">Exercices pratiques</h2>
      
      <h3>Exercice 1 : Création d'un Product Backlog</h3>
      <p>Pour un produit fictif (ex: application de gestion de tâches) :</p>
      <ul>
        <li>Listez 15-20 éléments de backlog (fonctionnalités, améliorations, corrections)</li>
        <li>Classez-les par ordre de priorité</li>
        <li>Affinez les 5 premiers éléments avec des critères d'acceptation</li>
      </ul>
      
      <h3>Exercice 2 : Simulation de Sprint Planning</h3>
      <p>Avec un groupe :</p>
      <ul>
        <li>Sélectionnez 5-7 items du backlog créé précédemment</li>
        <li>Définissez un objectif de Sprint (Sprint Goal)</li>
        <li>Décomposez les items en tâches techniques</li>
        <li>Créez un tableau de Sprint Backlog</li>
      </ul>
      
      <h3>Exercice 3 : Élaboration d'une Definition of Done</h3>
      <p>Pour votre projet :</p>
      <ul>
        <li>Listez tous les critères nécessaires pour considérer un item comme "terminé"</li>
        <li>Organisez-les par catégorie (code, tests, documentation, etc.)</li>
        <li>Priorisez les critères selon votre contexte</li>
      </ul>
      
      <h2 id="section-7">Conclusion</h2>
      
      <p>Les artefacts Scrum ne sont pas de simples documents, mais des outils vivants qui :</p>
      
      <ul>
        <li>Favorisent la transparence et l'alignement</li>
        <li>Encadrent le travail itératif et incrémental</li>
        <li>Facilitent l'inspection et l'adaptation</li>
      </ul>
      
      <p>Pour maximiser leur valeur :</p>
      
      <ul>
        <li>Investissez du temps dans leur maintenance et affinage</li>
        <li>Gardez-les visibles et accessibles à tous</li>
        <li>Adaptez leur gestion à votre contexte spécifique</li>
        <li>Utilisez-les comme base pour les discussions et décisions</li>
      </ul>
    `,
    tableOfContents: [
      "Introduction aux artefacts Scrum",
      "Product Backlog",
      "Sprint Backlog",
      "Increment",
      "Outils de gestion des artefacts",
      "Exercices pratiques",
      "Conclusion"
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
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Outils et pratiques courantes en gestion agile",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 10,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction aux outils agiles</h2>
      
      <p>Dans l'univers agile, les outils et pratiques sont conçus pour favoriser la collaboration, la transparence et l'adaptabilité. Contrairement aux méthodes traditionnelles qui reposent sur une documentation exhaustive et des plans rigides, l'agilité privilégie des outils visuels et interactifs qui soutiennent le travail d'équipe.</p>
      
      <p>Cette leçon présente les principaux outils et pratiques utilisés dans les projets agiles, avec un focus sur leur utilité concrète et leur mise en œuvre.</p>
      
      <h3>Pourquoi des outils spécifiques en agile ?</h3>
      
      <p>Les outils agiles répondent à plusieurs besoins clés :</p>
      
      <ul>
        <li><strong>Visualisation du travail</strong> : Rendre visible l'état d'avancement et les blocages</li>
        <li><strong>Collaboration</strong> : Faciliter les interactions entre les membres de l'équipe</li>
        <li><strong>Adaptabilité</strong> : Permettre des ajustements rapides aux changements</li>
        <li><strong>Transparence</strong> : Donner à tous une vision claire du projet</li>
        <li><strong>Simplicité</strong> : Éviter la surcharge documentaire</li>
      </ul>
      
      <h2 id="section-2">Tableaux Kanban</h2>
      
      <p>Le Kanban est l'un des outils visuels les plus répandus en gestion agile. Originaire du système de production Toyota, il a été adapté au développement logiciel et à la gestion de projet.</p>
      
      <h3>Structure d'un tableau Kanban</h3>
      
      <p>Un tableau Kanban classique comprend :</p>
      
      <ul>
        <li><strong>Colonnes</strong> : Représentent les étapes du flux de travail (ex: À faire, En cours, Terminé)</li>
        <li><strong>Cartes</strong> : Représentent les éléments de travail (user stories, tâches, bugs)</li>
        <li><strong>Swimlanes</strong> : Lignes horizontales pour catégoriser les cartes (priorités, types de travail)</li>
        <li><strong>WIP Limits</strong> : Limites de travail en cours pour éviter la surcharge</li>
      </ul>
      
      <h3>Avantages du Kanban</h3>
      
      <ul>
        <li>Visualisation immédiate de l'état du projet</li>
        <li>Identification rapide des goulots d'étranglement</li>
        <li>Flexibilité pour accueillir les changements</li>
        <li>Amélioration continue du flux de travail</li>
        <li>Adaptable à tout type de projet</li>
      </ul>
      
      <h2 id="section-3">Outils numériques pour équipes agiles</h2>
      
      <p>De nombreux outils logiciels ont été développés pour supporter les pratiques agiles, notamment pour les équipes distribuées.</p>
      
      <h3>Catégories d'outils</h3>
      
      <table>
        <tr>
          <th>Catégorie</th>
          <th>Exemples</th>
          <th>Utilité</th>
        </tr>
        <tr>
          <td>Gestion de projet</td>
          <td>Jira, Trello, Azure DevOps</td>
          <td>Suivi des tâches, tableaux Kanban, rapports</td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>Slack, Microsoft Teams</td>
          <td>Messagerie instantanée, canaux thématiques</td>
        </tr>
        <tr>
          <td>Collaboration</td>
          <td>Miro, Mural, Confluence</td>
          <td>Tableaux blancs virtuels, documentation</td>
        </tr>
        <tr>
          <td>Développement</td>
          <td>GitHub, GitLab</td>
          <td>Gestion de code, revues, intégration continue</td>
        </tr>
        <tr>
          <td>Visioconférence</td>
          <td>Zoom, Google Meet</td>
          <td>Réunions à distance, partage d'écran</td>
        </tr>
      </table>
      
      <h3>Critères de choix</h3>
      
      <p>Pour sélectionner les bons outils :</p>
      
      <ul>
        <li><strong>Simplicité</strong> : L'outil doit faciliter le travail, pas le compliquer</li>
        <li><strong>Intégration</strong> : Capacité à fonctionner avec les autres outils utilisés</li>
        <li><strong>Accessibilité</strong> : Disponible pour tous les membres de l'équipe</li>
        <li><strong>Personnalisation</strong> : Adaptable aux besoins spécifiques du projet</li>
        <li><strong>Reporting</strong> : Capacité à générer des métriques utiles</li>
      </ul>
      
      <h2 id="section-4">Pratiques de planification agile</h2>
      
      <p>La planification en agile est itérative et progressive, avec plusieurs pratiques clés.</p>
      
      <h3>User Story Mapping</h3>
      
      <p>Technique visuelle pour organiser les user stories selon le parcours utilisateur :</p>
      
      <ul>
        <li>Axé sur la valeur métier plutôt que sur les tâches techniques</li>
        <li>Permet de prioriser par "tranches" fonctionnelles</li>
        <li>Crée une vision partagée du produit</li>
      </ul>
      
      <h3>Planning Poker</h3>
      
      <p>Technique d'estimation collaborative :</p>
      
      <ul>
        <li>Utilise des cartes avec des nombres (série de Fibonacci)</li>
        <li>Favorise la discussion sur les exigences</li>
        <li>Crée un consensus sur la complexité relative</li>
      </ul>
      
      <h3>Definition of Ready/Done</h3>
      
      <p>Critères clairs pour :</p>
      
      <ul>
        <li><strong>Ready</strong> : Ce qu'il faut pour qu'une user story soit prête à être développée</li>
        <li><strong>Done</strong> : Ce qu'il faut pour considérer une user story comme terminée</li>
      </ul>
      
      <h2 id="section-5">Métriques et suivi agile</h2>
      
      <p>Les métriques agiles visent à fournir des indicateurs utiles sans tomber dans le micro-management.</p>
      
      <h3>Principales métriques</h3>
      
      <ul>
        <li><strong>Velocity</strong> : Capacité de l'équipe mesurée en points par itération</li>
        <li><strong>Burn-down/burn-up charts</strong> : Suivi de l'avancement par rapport au scope</li>
        <li><strong>Lead time/Cycle time</strong> : Temps moyen pour compléter un item</li>
        <li><strong>CFD (Cumulative Flow Diagram)</strong> : Visualisation du flux de travail</li>
      </ul>
      
      <h3>Bonnes pratiques</h3>
      
      <ul>
        <li>Utiliser les métriques pour s'améliorer, pas pour juger</li>
        <li>Adapter les métriques au contexte du projet</li>
        <li>Privilégier la tendance sur le chiffre absolu</li>
        <li>Discuter des écarts lors des rétrospectives</li>
      </ul>
      
      <h2 id="section-6">Exercices pratiques</h2>
      
      <h3>Exercice 1 : Création d'un tableau Kanban</h3>
      <p>Créez un tableau Kanban (physique ou numérique) pour un projet fictif :</p>
      <ul>
        <li>Définissez 4-5 colonnes représentant votre flux de travail</li>
        <li>Ajoutez 10-15 cartes représentant des tâches</li>
        <li>Appliquez des WIP Limits appropriés</li>
        <li>Simulez le déplacement des cartes sur une semaine de travail</li>
      </ul>
      
      <h3>Exercice 2 : Comparaison d'outils</h3>
      <p>Comparez deux outils de gestion de projet agile (ex: Jira vs Trello) :</p>
      <ul>
        <li>Listez les fonctionnalités clés de chacun</li>
        <li>Identifiez les avantages et limites</li>
        <li>Déterminez quel outil conviendrait le mieux à différents types de projets</li>
      </ul>
      
      <h3>Exercice 3 : Session de Planning Poker</h3>
      <p>Organisez une session d'estimation avec des collègues :</p>
      <ul>
        <li>Préparez 5-10 user stories à estimer</li>
        <li>Utilisez la séquence de Fibonacci (1, 2, 3, 5, 8, 13, 20)</li>
        <li>Notez les discussions et justifications des estimations</li>
        <li>Analysez les écarts de perception</li>
      </ul>
      
      <h2 id="section-7">Conclusion</h2>
      
      <p>Les outils et pratiques présentés dans cette leçon constituent la boîte à outils de base d'une équipe agile. Leur maîtrise permet :</p>
      
      <ul>
        <li>Une meilleure collaboration entre les membres de l'équipe</li>
        <li>Une transparence accrue sur l'état du projet</li>
        <li>Une capacité d'adaptation aux changements</li>
        <li>Une amélioration continue des processus</li>
      </ul>
      
      <p>Rappelez-vous que les outils doivent servir l'équipe et non l'inverse. La simplicité et l'utilité concrète doivent guider vos choix.</p>
    `,
    tableOfContents: [
      "Introduction aux outils agiles",
      "Tableaux Kanban", 
      "Outils numériques pour équipes agiles",
      "Pratiques de planification agile",
      "Métriques et suivi agile",
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
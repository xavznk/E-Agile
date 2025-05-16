import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LessonContent from "@/components/LessonContent";
import "@/styles/LessonPage.css";

export default function LessonPage() {
  const lessonData = {
    title: "Métriques et amélioration continue en Kanban",
    instructor: "Mme. Dupont Claire",
    course: "Kanban : principes et pratiques",
    courseSlug: "kanban-principes-pratiques",
    step: 7,
    totalSteps: 10,
    content: `
      <div class="metrics-section">
        <h2 id="section-1">Les métriques clés en Kanban</h2>
        
        <div class="metrics-grid">
          <div class="metric-card">
            <h3>📊 Cycle Time (Temps de cycle)</h3>
            <p><strong>Définition :</strong> Temps moyen pour compléter une tâche une fois commencée</p>
            <p><strong>Formule :</strong> ∑(Date fin - Date début) / Nombre de tâches</p>
            <p><strong>Objectif :</strong> Réduire ce temps sans sacrifier la qualité</p>
            <div class="example">
              <p>Exemple : Votre équipe a un cycle time moyen de 3.2 jours</p>
            </div>
          </div>
          
          <div class="metric-card">
            <h3>⏱ Lead Time (Délai de réalisation)</h3>
            <p><strong>Définition :</strong> Temps total entre la demande et la livraison</p>
            <p><strong>Différence avec Cycle Time :</strong> Inclut le temps d'attente avant prise en charge</p>
            <p><strong>Usage :</strong> Gestion des attentes clients</p>
          </div>
          
          <div class="metric-card">
            <h3>📈 Throughput (Débit)</h3>
            <p><strong>Définition :</strong> Nombre de tâches terminées par unité de temps (jour/semaine)</p>
            <p><strong>Analyse :</strong> Permet de prédire la capacité de livraison</p>
            <div class="example">
              <p>Exemple : 12 tâches/semaine ± 2 (variation normale)</p>
            </div>
          </div>
          
          <div class="metric-card">
            <h3>📉 Diagramme de flux cumulé</h3>
            <p><strong>Visualisation :</strong> Nombre de tâches dans chaque état au fil du temps</p>
            <p><strong>Utilité :</strong> Identifier les goulots d'étranglement</p>
            <p><strong>Lecture :</strong> Plus les lignes sont écartées, plus le délai est long</p>
          </div>
        </div>

        <h2 id="section-2">Collecte et analyse des données</h2>
        
        <div class="data-collection">
          <h3>Méthodes de collecte</h3>
          <ul class="collection-methods">
            <li>
              <strong>Outils numériques :</strong> Jira, Trello, Kanbanize automatisent le tracking
              <span class="tag">Recommandé</span>
            </li>
            <li>
              <strong>Tableaux physiques :</strong> Notes manuelles + tableur Excel
              <span class="tag warning">Laborieux</span>
            </li>
            <li>
              <strong>Hybride :</strong> Photos quotidiennes du tableau + saisie
              <span class="tag">Intermédiaire</span>
            </li>
          </ul>
          
          <h3>Fréquence d'analyse</h3>
          <table class="analysis-frequency">
            <tr>
              <th>Métrique</th>
              <th>Fréquence</th>
              <th>Responsable</th>
            </tr>
            <tr>
              <td>Cycle Time</td>
              <td>Hebdomadaire</td>
              <td>Team Lead</td>
            </tr>
            <tr>
              <td>Throughput</td>
              <td>Quotidienne</td>
              <td>Scrum Master</td>
            </tr>
            <tr>
              <td>Diagramme de flux</td>
              <td>Mensuelle</td>
              <td>Coach Agile</td>
            </tr>
          </table>
        </div>

        <h2 id="section-3">Amélioration continue avec Kanban</h2>
        
        <div class="improvement-process">
          <h3>Le cycle PDCA adapté à Kanban</h3>
          <ol class="pdca-steps">
            <li>
              <strong>Plan (Planifier)</strong>
              <p>Identifier un problème via les métriques (ex: cycle time trop long)</p>
            </li>
            <li>
              <strong>Do (Expérimenter)</strong>
              <p>Implémenter un changement (ex: réduire les limites WIP de 20%)</p>
            </li>
            <li>
              <strong>Check (Vérifier)</strong>
              <p>Analyser l'impact sur les métriques après 2-3 semaines</p>
            </li>
            <li>
              <strong>Act (Standardiser)</strong>
              <p>Adopter le changement ou essayer autre chose</p>
            </li>
          </ol>
          
          <h3>Techniques d'amélioration</h3>
          <div class="techniques">
            <div class="technique">
              <h4>🔧 Kaizen (Amélioration progressive)</h4>
              <p>Petits changements fréquents plutôt que grandes révolutions</p>
            </div>
            <div class="technique">
              <h4>🎯 Focus sur les goulots</h4>
              <p>Optimiser en priorité l'étape la plus lente du workflow</p>
            </div>
            <div class="technique">
              <h4>🔄 Revue des politiques</h4>
              <p>Adapter les règles quand les métriques montrent des dysfonctionnements</p>
            </div>
          </div>
        </div>

        <h2 id="section-4">Cas pratiques</h2>
        
        <div class="case-studies">
          <div class="case-study">
            <h3>Cas 1 : Réduction du Cycle Time</h3>
            <p><strong>Situation :</strong> Cycle time moyen de 5.3 jours (objectif: 3 jours)</p>
            <p><strong>Actions :</strong></p>
            <ol>
              <li>Limite WIP réduite de 6 à 4</li>
              <li>Colonne "Test" divisée en "Test unitaire" et "Test intégration"</li>
              <li>Revue quotidienne des blocages</li>
            </ol>
            <p><strong>Résultat :</strong> Cycle time à 3.1 jours après 4 semaines</p>
          </div>
          
          <div class="case-study">
            <h3>Cas 2 : Stabilisation du Throughput</h3>
            <p><strong>Situation :</strong> Variation de 8 à 15 tâches/semaine</p>
            <p><strong>Diagnostic :</strong> Taille des tâches trop variable</p>
            <p><strong>Solution :</strong></p>
            <ul>
              <li>Implémentation du "Work Item Size" (S/M/L)</li>
              <li>Planification basée sur la capacité en points</li>
              <li>Throughput stabilisé à 12±1 tâches/semaine</li>
            </ul>
          </div>
        </div>

        <h2 id="section-5">Exercice pratique</h2>
        
        <div class="exercise">
          <h3>Analyse de données Kanban</h3>
          <p><strong>Données fournies :</strong></p>
          <ul>
            <li>Cycle time moyen : 4.2 jours</li>
            <li>Lead time moyen : 6.5 jours</li>
            <li>Throughput : 18 tâches/semaine</li>
            <li>Diagramme de flux montrant accumulation en "Test"</li>
          </ul>
          
          <p><strong>Travail à faire :</strong></p>
          <ol>
            <li>Identifier 3 problèmes potentiels</li>
            <li>Proposer 2 actions d'amélioration</li>
            <li>Définir comment mesurer l'efficacité des changements</li>
          </ol>
        </div>
      </div>
    `,
    tableOfContents: [
      "Les métriques clés en Kanban",
      "Collecte et analyse des données",
      "Amélioration continue avec Kanban",
      "Cas pratiques",
      "Exercice pratique"
    ],
  };

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
  );
}
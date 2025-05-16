import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LessonContent from "@/components/LessonContent";
import "@/styles/LessonPage.css";

export default function LessonPage() {
  const lessonData = {
    title: "Tableaux Kanban et limites du travail en cours",
    instructor: "Mme. Dupont Claire",
    course: "Kanban : principes et pratiques",
    courseSlug: "kanban-principes-pratiques",
    step: 6,
    totalSteps: 10,
    content: `
      <div class="kanban-section">
        <h2 id="section-1">Maîtriser les tableaux Kanban et les limites WIP</h2>
        
        <h3>L'anatomie d'un tableau Kanban efficace</h3>
        
        <div class="kanban-grid">
          <div class="kanban-card">
            <h4>1. Colonnes d'état</h4>
            <p>Structure de base :</p>
            <ul>
              <li><strong>À faire</strong> : Tâches validées et prêtes</li>
              <li><strong>En cours</strong> : Travail en traitement</li>
              <li><strong>Terminé</strong> : Tâches finalisées</li>
            </ul>
            <p class="tip">💡 Astuce : Ajoutez une colonne "En attente" pour les tâches bloquées</p>
          </div>
          
          <div class="kanban-card">
            <h4>2. Cartes de travail</h4>
            <p>Éléments essentiels :</p>
            <ul>
              <li>Description claire</li>
              <li>Responsable assigné</li>
              <li>Date de création</li>
              <li>Code couleur par type</li>
            </ul>
          </div>
          
          <div class="kanban-card">
            <h4>3. Limites WIP</h4>
            <p>Exemple : "Développement (WIP: 3)"</p>
            <ul>
              <li>Prévient la surcharge</li>
              <li>Réduit le multitâche</li>
              <li>Améliore la qualité</li>
            </ul>
          </div>
        </div>

        <h3>Configurations avancées</h3>
        
        <table class="kanban-table">
          <thead>
            <tr>
              <th>Type de workflow</th>
              <th>Structure recommandée</th>
              <th>Avantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Développement logiciel</td>
              <td>Backlog → Analyse → Dev → Test → Déploiement</td>
              <td>Visibilité complète du cycle</td>
            </tr>
            <tr>
              <td>Équipe marketing</td>
              <td>Idées → Brief → Création → Révision → Publication</td>
              <td>Clarté sur l'état des contenus</td>
            </tr>
            <tr>
              <td>Support client</td>
              <td>Nouveau → Tri → Résolution → Validation → Clôturé</td>
              <td>Gestion des priorités</td>
            </tr>
          </tbody>
        </table>

        <h3>Détermination des limites WIP</h3>
        
        <div class="wip-method">
          <div class="wip-step">
            <h4>Étape 1 : Calcul initial</h4>
            <p><strong>Formule :</strong> Nombre de membres × 1.5</p>
            <p>Exemple : 4 développeurs × 1.5 = WIP 6</p>
          </div>
          
          <div class="wip-step">
            <h4>Étape 2 : Ajustements</h4>
            <ul>
              <li>➖ Réduire si tâches complexes</li>
              <li>➖ Réduire si nombreuses dépendances</li>
              <li>➕ Augmenter si temps d'attente fréquents</li>
            </ul>
          </div>
          
          <div class="wip-step">
            <h4>Étape 3 : Optimisation</h4>
            <p>Mesurer après 2 semaines :</p>
            <ul>
              <li>📉 Taux d'occupation</li>
              <li>⏱ Temps de cycle moyen</li>
              <li>🚦 Points de blocage</li>
            </ul>
          </div>
        </div>

        <h3>Signaux visuels avancés</h3>
        
        <div class="visual-signals">
          <div>
            <h4>Codes couleur</h4>
            <ul class="color-list">
              <li><span class="color-dot bug"></span> Bugs/corrections</li>
              <li><span class="color-dot feature"></span> Nouvelles fonctionnalités</li>
              <li><span class="color-dot improvement"></span> Améliorations</li>
              <li><span class="color-dot urgent"></span> Urgences</li>
            </ul>
          </div>
          
          <div>
            <h4>Marqueurs spéciaux</h4>
            <ul>
              <li>🔴 Carte bloquée</li>
              <li>⭐ Priorité haute</li>
              <li>🔗 Lien entre cartes</li>
              <li>⏱ Délai critique</li>
            </ul>
          </div>
        </div>

        <h3>Erreurs fréquentes</h3>
        
        <div class="mistakes">
          <div class="mistake">
            <h4>❌ Ignorer les limites WIP</h4>
            <p>Entraîne du multitâche et réduit la qualité</p>
          </div>
          
          <div class="mistake">
            <h4>❌ Colonnes trop vagues</h4>
            <p>"En cours" devrait souvent être divisé</p>
          </div>
          
          <div class="mistake">
            <h4>❌ Cartes trop grandes</h4>
            <p>Une carte = 1-3 jours max de travail</p>
          </div>
        </div>

        <h3>Exercice pratique</h3>
        
        <div class="exercise">
          <h4>Cas : Équipe de développement (5 personnes)</h4>
          <ol>
            <li>Concevez un tableau Kanban avec colonnes adaptées</li>
            <li>Définissez des limites WIP réalistes</li>
            <li>Créez 8 cartes de différents types</li>
            <li>Simulez un blocage et sa résolution</li>
          </ol>
        </div>
      </div>
    `,
    tableOfContents: [
      "L'anatomie d'un tableau Kanban efficace",
      "Configurations avancées",
      "Détermination des limites WIP",
      "Signaux visuels avancés",
      "Erreurs fréquentes",
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
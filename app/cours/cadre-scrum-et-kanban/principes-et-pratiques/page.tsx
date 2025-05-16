import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Kanban : principes et pratiques",
    instructor: "Mme. Dupont Claire",
    course: "Méthodes agiles de gestion",
    courseSlug: "methodes-agiles-de-gestion",
    step: 5,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Origines et contexte historique de Kanban</h2>
      
      <p>Kanban trouve ses racines dans le système de production Toyota (Toyota Production System ou TPS) développé par Taiichi Ohno dans les années 1940-1950. Le mot "Kanban" signifie "panneau" ou "signal visuel" en japonais.</p>
      
      <p>À l'origine, Kanban était un système de cartes physiques utilisées pour signaler le besoin de réapprovisionnement dans la chaîne de production. Ce système permettait de mettre en œuvre le principe du "juste-à-temps" (Just-In-Time) en limitant le travail en cours et en tirant la production en fonction de la demande réelle.</p>
      
      <p>C'est David J. Anderson qui, dans les années 2000, a adapté ces principes au développement logiciel et à la gestion de services informatiques. Il a formalisé cette approche dans son livre "Kanban: Successful Evolutionary Change for Your Technology Business" publié en 2010.</p>
      
      <h3>Évolution vers le Kanban moderne</h3>
      
      <p>Le Kanban moderne a évolué pour devenir une méthode de gestion du travail applicable à divers domaines :</p>
      <ul>
        <li>Développement logiciel</li>
        <li>Gestion de projets</li>
        <li>Services informatiques</li>
        <li>Marketing et création de contenu</li>
        <li>Gestion des opérations</li>
      </ul>
      
      <h2 id="section-2">Principes fondamentaux de Kanban</h2>
      
      <p>Kanban est une méthode de gestion visuelle du travail qui met l'accent sur la livraison juste-à-temps et ne surcharge pas les membres de l'équipe.</p>
      
      <h3>Les quatre principes de base</h3>
      
      <p>Kanban repose sur quatre principes fondamentaux :</p>
      
      <ul>
        <li><strong>Commencer avec ce que vous faites actuellement</strong> : Kanban ne prescrit pas de rôles ou de pratiques spécifiques. Il s'applique directement à votre processus existant pour faciliter l'évolution incrémentale.</li>
        <li><strong>S'accorder sur la poursuite d'un changement évolutif</strong> : L'organisation (ou l'équipe) doit s'accorder sur le fait que l'amélioration continue par des changements évolutifs est la voie à suivre.</li>
        <li><strong>Respecter le processus, les rôles et les responsabilités actuels</strong> : Kanban reconnaît la valeur des processus existants, des rôles et des responsabilités, et promet de ne pas les perturber initialement.</li>
        <li><strong>Encourager les actes de leadership à tous les niveaux</strong> : Le leadership ne doit pas être limité aux positions managériales traditionnelles. Des personnes à tous les niveaux peuvent montrer des qualités de leadership.</li>
      </ul>
      
      <h3>Les six pratiques essentielles</h3>
      
      <p>Pour mettre en œuvre Kanban efficacement, six pratiques sont généralement recommandées :</p>
      
      <ul>
        <li><strong>Visualiser le flux de travail</strong> : Représenter visuellement les différentes étapes du processus de travail à l'aide d'un tableau Kanban avec des colonnes et des cartes.</li>
        <li><strong>Limiter le travail en cours (WIP)</strong> : Définir des limites explicites sur le nombre d'éléments pouvant être en cours de traitement à chaque étape du flux de travail pour éviter la surcharge.</li>
        <li><strong>Gérer le flux</strong> : Surveiller, mesurer et optimiser le flux de travail pour qu'il soit aussi fluide et prévisible que possible.</li>
        <li><strong>Rendre les politiques explicites</strong> : Définir et afficher clairement les règles et directives qui régissent le processus pour une compréhension commune.</li>
        <li><strong>Mettre en œuvre des boucles de feedback</strong> : Établir des mécanismes de retour d'information à différents niveaux du processus pour l'amélioration continue.</li>
        <li><strong>Améliorer collaborativement, évoluer expérimentalement</strong> : Utiliser des modèles et la méthode scientifique pour mettre en œuvre des améliorations basées sur des hypothèses vérifiables.</li>
      </ul>
      
      <h2 id="section-3">Mise en œuvre pratique de Kanban</h2>
      
      <h3>Création d'un tableau Kanban</h3>
      
      <p>Le tableau Kanban est l'outil central de la méthode. Voici comment le concevoir :</p>
      
      <ol>
        <li>Identifier les étapes clés de votre flux de travail (ex: "À faire", "En cours", "Terminé")</li>
        <li>Créer des colonnes pour chaque étape</li>
        <li>Définir des sous-colonnes si nécessaire (ex: "En cours" pourrait être divisé en "En développement", "En test")</li>
        <li>Ajouter des cartes pour représenter chaque élément de travail</li>
        <li>Définir des couleurs ou étiquettes pour catégoriser les types de travail</li>
      </ol>
      
      <h3>Détermination des limites WIP</h3>
      
      <p>Les limites de travail en cours sont cruciales pour éviter la surcharge. Pour les définir :</p>
      
      <ul>
        <li>Commencer par observer la capacité actuelle de l'équipe</li>
        <li>Appliquer la formule : Nombre de membres de l'équipe × 1,5 (pour commencer)</li>
        <li>Ajuster progressivement en fonction des observations</li>
        <li>Considérer des limites différentes pour chaque colonne si nécessaire</li>
      </ul>
      
      <h3>Types de tableaux Kanban</h3>
      
      <p>Il existe plusieurs approches pour structurer un tableau Kanban :</p>
      
      <table>
        <tr>
          <th>Type</th>
          <th>Description</th>
          <th>Cas d'utilisation</th>
        </tr>
        <tr>
          <td>Simple (3 colonnes)</td>
          <td>À faire - En cours - Terminé</td>
          <td>Petites équipes, processus simples</td>
        </tr>
        <tr>
          <td>Détaillé</td>
          <td>Plusieurs colonnes représentant chaque étape du workflow</td>
          <td>Processus complexes avec nombreuses étapes</td>
        </tr>
        <tr>
          <td>Swimlanes</td>
          <td>Lignes horizontales pour catégoriser les types de travail</td>
          <td>Équipes gérant différents types de tâches</td>
        </tr>
        <tr>
          <td>Portfolio</td>
          <td>Vue agrégée de plusieurs projets ou équipes</td>
          <td>Management, vue d'ensemble</td>
        </tr>
      </table>
      
      <h2 id="section-4">Métriques et amélioration continue</h2>
      
      <p>Kanban fournit plusieurs métriques clés pour mesurer et améliorer la performance :</p>
      
      <h3>Cycle Time (Temps de cycle)</h3>
      <p>Le temps moyen nécessaire pour qu'un élément passe de "En cours" à "Terminé". Un objectif clé est de réduire ce temps.</p>
      
      <h3>Lead Time (Délai de réalisation)</h3>
      <p>Le temps total entre la création d'une demande et sa livraison finale.</p>
      
      <h3>Throughput (Débit)</h3>
      <p>Le nombre moyen d'éléments terminés par unité de temps (par jour ou par semaine).</p>
      
      <h3>Diagramme de flux cumulé</h3>
      <p>Un graphique qui montre le nombre d'éléments dans chaque état au fil du temps, permettant d'identifier les goulots d'étranglement.</p>
      
      <h3>Amélioration continue avec Kanban</h3>
      <p>Le processus d'amélioration dans Kanban suit généralement ces étapes :</p>
      <ol>
        <li>Observer le système actuel et collecter des données</li>
        <li>Identifier les opportunités d'amélioration</li>
        <li>Formuler des hypothèses de changement</li>
        <li>Implémenter des changements à petite échelle</li>
        <li>Évaluer les résultats</li>
        <li>Standardiser les améliorations qui fonctionnent</li>
      </ol>
      
      <h2 id="section-5">Cas d'utilisation typiques de Kanban</h2>
      
      <p>Kanban est particulièrement adapté à plusieurs contextes :</p>
      
      <h3>Équipes de support et maintenance</h3>
      <p>Pour gérer les demandes imprévisibles et prioritaires, avec des exemples concrets comme :</p>
      <ul>
        <li>Support informatique</li>
        <li>Maintenance logicielle</li>
        <li>Services clients</li>
      </ul>
      
      <h3>Création de contenu et marketing</h3>
      <p>Pour gérer les flux de travail créatifs avec des étapes comme :</p>
      <ul>
        <li>Idéation</li>
        <li>Rédaction</li>
        <li>Relecture</li>
        <li>Publication</li>
      </ul>
      
      <h3>Développement logiciel</h3>
      <p>Particulièrement pour :</p>
      <ul>
        <li>Équipes matures ayant dépassé le besoin de cadres rigides</li>
        <li>Maintenance de produits existants</li>
        <li>Corrections de bugs et petites améliorations</li>
      </ul>
      
      <h3>Gestion des opérations</h3>
      <p>Dans des domaines comme :</p>
      <ul>
        <li>Gestion des incidents</li>
        <li>Opérations IT</li>
        <li>Processus administratifs</li>
      </ul>
      
      <h2 id="section-6">Outils et technologies pour Kanban</h2>
      
      <p>Plusieurs outils sont disponibles pour implémenter Kanban :</p>
      
      <h3>Outils physiques</h3>
      <ul>
        <li>Tableaux blancs avec post-its</li>
        <li>Tableaux magnétiques</li>
        <li>Tableaux à fiches</li>
      </ul>
      
      <h3>Outils numériques</h3>
      <table>
        <tr>
          <th>Outil</th>
          <th>Avantages</th>
        </tr>
        <tr>
          <td>Trello</td>
          <td>Simple, intuitif, bon pour les petites équipes</td>
        </tr>
        <tr>
          <td>Jira Software</td>
          <td>Puissant, intégrations développeurs, reporting avancé</td>
        </tr>
        <tr>
          <td>Kanbanize</td>
          <td>Spécialisé Kanban, métriques avancées</td>
        </tr>
        <tr>
          <td>Azure DevOps</td>
          <td>Intégré avec la suite Microsoft, bon pour les équipes techniques</td>
        </tr>
        <tr>
          <td>Leankit</td>
          <td>Tableaux complexes, gestion de portefeuille</td>
        </tr>
      </table>
      
      <h2 id="section-7">Exercices pratiques</h2>
      
      <h3>Exercice 1 : Concevoir un tableau Kanban</h3>
      <p>Pour un processus de travail que vous connaissez :</p>
      <ol>
        <li>Identifiez les principales étapes du flux de travail</li>
        <li>Concevez un tableau Kanban avec des colonnes appropriées</li>
        <li>Définissez des limites WIP initiales pour chaque colonne</li>
        <li>Identifiez les politiques qui devraient être explicites</li>
        <li>Créez des cartes pour 5-10 éléments de travail typiques</li>
      </ol>
      
      <h3>Exercice 2 : Analyse de flux</h3>
      <p>En utilisant des données historiques ou en simulant un flux de travail :</p>
      <ol>
        <li>Calculez le cycle time moyen</li>
        <li>Identifiez les goulots d'étranglement</li>
        <li>Proposez des ajustements aux limites WIP</li>
        <li>Simulez l'impact de ces changements</li>
      </ol>
      
      <h3>Exercice 3 : Politiques explicites</h3>
      <p>Pour votre tableau Kanban :</p>
      <ol>
        <li>Listez les critères pour qu'une carte passe d'une colonne à l'autre</li>
        <li>Définissez les règles de priorisation</li>
        <li>Établissez des conventions pour les différents types de cartes</li>
        <li>Documentez ces politiques de manière claire et visible</li>
      </ol>
      
      <h2 id="section-8">Conclusion</h2>
      
      <p>Kanban est une méthode puissante et flexible pour la gestion du travail, applicable à de nombreux domaines. Son approche évolutive et respectueuse des processus existants en fait un excellent choix pour les équipes cherchant à améliorer progressivement leur façon de travailler.</p>
      
      <p>Les principes clés - visualisation, limitation du travail en cours, gestion du flux et amélioration continue - permettent aux équipes d'augmenter leur efficacité tout en réduisant le stress et la surcharge.</p>
      
      <p>Contrairement à d'autres méthodes plus prescriptives, Kanban s'adapte à votre contexte spécifique plutôt que de vous forcer à vous adapter à un cadre rigide. Cette flexibilité en fait une approche durable qui peut évoluer avec les besoins changeants de votre organisation.</p>
      
      <p>Dans les prochaines leçons, nous approfondirons les techniques avancées de Kanban, les stratégies pour surmonter les défis courants et les moyens d'intégrer Kanban avec d'autres pratiques agiles.</p>
    `,
    tableOfContents: [
      "Origines et contexte historique de Kanban",
      "Principes fondamentaux de Kanban",
      "Mise en œuvre pratique de Kanban",
      "Métriques et amélioration continue",
      "Cas d'utilisation typiques de Kanban",
      "Outils et technologies pour Kanban",
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
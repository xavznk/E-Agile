import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Les rôles dans Scrum",
    instructor: "Mme. Dupont Claire",
    course: "Cadre Scrum et Kanban",
    courseSlug: "cadre-scrum-et-kanban",
    step: 2,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction aux rôles Scrum</h2>
      
      <p>Scrum définit trois rôles spécifiques qui, ensemble, forment l'équipe Scrum. Chaque rôle a des responsabilités distinctes mais complémentaires, et leur collaboration est essentielle au succès de Scrum.</p>
      
      <p>Les trois rôles sont :</p>
      <ul>
        <li>Le Product Owner (Propriétaire du Produit)</li>
        <li>Le Scrum Master</li>
        <li>L'équipe de développement</li>
      </ul>
      
      <p>Il est important de noter que Scrum ne reconnaît pas de rôles hiérarchiques traditionnels comme "chef de projet" ou "responsable technique" au sein de l'équipe Scrum. Cela ne signifie pas que ces rôles n'existent pas dans l'organisation, mais ils ne font pas partie du cadre Scrum à proprement parler.</p>
      
      <h2 id="section-2">Le Product Owner</h2>
      
      <p>Le Product Owner est la voix du client et des parties prenantes au sein de l'équipe Scrum. Il est responsable de maximiser la valeur du produit résultant du travail de l'équipe de développement.</p>
      
      <h3>Responsabilités principales</h3>
      
      <ul>
        <li><strong>Gestion du Product Backlog</strong> : Créer, maintenir et prioriser le Product Backlog</li>
        <li><strong>Expression claire des éléments du Product Backlog</strong> : S'assurer que les éléments sont compréhensibles par l'équipe</li>
        <li><strong>Optimisation de la valeur</strong> : Ordonner les éléments pour maximiser la valeur livrée</li>
        <li><strong>Transparence et visibilité</strong> : Rendre le Product Backlog visible et transparent pour tous</li>
        <li><strong>Compréhension du travail</strong> : S'assurer que l'équipe comprend les éléments du Product Backlog au niveau nécessaire</li>
      </ul>
      
      <h3>Caractéristiques d'un bon Product Owner</h3>
      
      <ul>
        <li><strong>Vision claire</strong> : Capacité à définir et communiquer une vision convaincante du produit</li>
        <li><strong>Disponibilité</strong> : Être accessible pour répondre aux questions de l'équipe</li>
        <li><strong>Autorité</strong> : Avoir le pouvoir de prendre des décisions concernant le produit</li>
        <li><strong>Connaissance du domaine</strong> : Comprendre les besoins des utilisateurs et le contexte métier</li>
        <li><strong>Communication</strong> : Savoir communiquer efficacement avec toutes les parties prenantes</li>
        <li><strong>Capacité de décision</strong> : Être capable de faire des choix difficiles et de les assumer</li>
      </ul>
      
      <h3>Défis courants du Product Owner</h3>
      
      <ul>
        <li><strong>Équilibre entre vision à long terme et besoins à court terme</strong></li>
        <li><strong>Gestion des attentes des différentes parties prenantes</strong></li>
        <li><strong>Résistance à la pression pour ajouter constamment de nouvelles fonctionnalités</strong></li>
        <li><strong>Maintien d'un Product Backlog gérable et bien priorisé</strong></li>
        <li><strong>Disponibilité pour l'équipe tout en gérant les relations externes</strong></li>
      </ul>
      
      <h2 id="section-3">Le Scrum Master</h2>
      
      <p>Le Scrum Master est responsable de promouvoir et soutenir Scrum tel que défini dans le Guide Scrum. Il aide tout le monde à comprendre la théorie, les pratiques, les règles et les valeurs de Scrum.</p>
      
      <h3>Responsabilités envers l'équipe de développement</h3>
      
      <ul>
        <li><strong>Coaching</strong> : Aider l'équipe à s'auto-organiser et à être pluridisciplinaire</li>
        <li><strong>Facilitation</strong> : Animer les événements Scrum et faciliter la collaboration</li>
        <li><strong>Élimination des obstacles</strong> : Aider à résoudre les problèmes qui entravent la progression</li>
        <li><strong>Protection</strong> : Protéger l'équipe des interférences externes</li>
        <li><strong>Amélioration</strong> : Aider l'équipe à améliorer ses pratiques</li>
      </ul>
      
      <h3>Responsabilités envers le Product Owner</h3>
      
      <ul>
        <li><strong>Techniques de gestion du Product Backlog</strong> : Aider à trouver des techniques efficaces</li>
        <li><strong>Compréhension de la planification</strong> : S'assurer que les objectifs sont compris</li>
        <li><strong>Optimisation de la valeur</strong> : Aider à organiser le Product Backlog pour maximiser la valeur</li>
        <li><strong>Facilitation des événements</strong> : Animer les événements Scrum au besoin</li>
      </ul>
      
      <h3>Responsabilités envers l'organisation</h3>
      
      <ul>
        <li><strong>Leadership</strong> : Guider l'organisation dans son adoption de Scrum</li>
        <li><strong>Planification</strong> : Aider à mettre en œuvre Scrum</li>
        <li><strong>Formation</strong> : Aider les employés et les parties prenantes à comprendre Scrum</li>
        <li><strong>Changement</strong> : Provoquer des changements qui augmentent la productivité</li>
        <li><strong>Collaboration</strong> : Travailler avec d'autres Scrum Masters pour améliorer l'efficacité</li>
      </ul>
      
      <h3>Caractéristiques d'un bon Scrum Master</h3>
      
      <ul>
        <li><strong>Servant-leader</strong> : Mettre les besoins de l'équipe avant les siens</li>
        <li><strong>Facilitateur</strong> : Savoir animer des réunions efficaces</li>
        <li><strong>Coach</strong> : Aider les autres à s'améliorer</li>
        <li><strong>Enseignant</strong> : Expliquer les principes et pratiques de Scrum</li>
        <li><strong>Observateur</strong> : Remarquer les dynamiques d'équipe et les problèmes potentiels</li>
        <li><strong>Influenceur</strong> : Capable d'influencer sans autorité directe</li>
      </ul>
      
      <h2 id="section-4">L'équipe de développement</h2>
      
      <p>L'équipe de développement est composée de professionnels qui réalisent le travail de livrer un incrément potentiellement livrable du produit à la fin de chaque Sprint. Seuls les membres de l'équipe de développement créent l'incrément.</p>
      
      <h3>Caractéristiques de l'équipe de développement</h3>
      
      <ul>
        <li><strong>Auto-organisée</strong> : L'équipe décide elle-même comment accomplir son travail</li>
        <li><strong>Pluridisciplinaire</strong> : L'équipe possède toutes les compétences nécessaires pour créer un incrément</li>
        <li><strong>Pas de titres</strong> : Pas de sous-équipes ou de titres spécifiques au sein de l'équipe</li>
        <li><strong>Pas de hiérarchie</strong> : Tous les membres ont le même statut, quelle que soit leur expertise</li>
        <li><strong>Responsabilité collective</strong> : L'équipe entière est responsable de son travail</li>
      </ul>
      
      <h3>Taille optimale</h3>
      
      <p>La taille optimale de l'équipe de développement est suffisamment petite pour rester agile et suffisamment grande pour accomplir un travail significatif. Généralement, cela signifie entre 3 et 9 personnes, sans compter le Scrum Master et le Product Owner (sauf s'ils font aussi partie de l'équipe de développement).</p>
      
      <p>Moins de trois membres réduisent l'interaction et les gains de productivité, tandis que plus de neuf membres nécessitent trop de coordination. Des équipes plus grandes peuvent être divisées en plusieurs équipes Scrum.</p>
      
      <h3>Responsabilités de l'équipe de développement</h3>
      
      <ul>
        <li><strong>Création de l'incrément</strong> : Développer un incrément potentiellement livrable à chaque Sprint</li>
        <li><strong>Auto-organisation</strong> : Décider comment transformer le Product Backlog en incréments</li>
        <li><strong>Estimation</strong> : Estimer les éléments du Product Backlog</li>
        <li><strong>Engagement</strong> : S'engager sur un objectif de Sprint réaliste</li>
        <li><strong>Adaptation</strong> : Ajuster son plan chaque jour pour atteindre l'objectif du Sprint</li>
        <li><strong>Transparence</strong> : Rendre visible l'avancement du travail</li>
        <li><strong>Amélioration</strong> : Améliorer continuellement ses pratiques et outils</li>
      </ul>
      
      <h2 id="section-5">Interactions entre les rôles</h2>
      
      <p>La collaboration entre les trois rôles est essentielle au succès de Scrum. Chaque rôle a des responsabilités distinctes mais complémentaires.</p>
      
      <h3>Product Owner et Scrum Master</h3>
      
      <ul>
        <li>Le Scrum Master aide le Product Owner à gérer efficacement le Product Backlog</li>
        <li>Le Scrum Master facilite la communication entre le Product Owner et l'équipe</li>
        <li>Le Product Owner respecte le rôle de facilitateur du Scrum Master</li>
        <li>Ensemble, ils veillent à ce que la valeur soit maximisée tout en respectant le cadre Scrum</li>
      </ul>
      
      <h3>Product Owner et équipe de développement</h3>
      
      <ul>
        <li>Le Product Owner définit ce qui doit être fait (le "quoi")</li>
        <li>L'équipe de développement décide comment le faire (le "comment")</li>
        <li>Le Product Owner est disponible pour clarifier les éléments du Product Backlog</li>
        <li>L'équipe fournit des estimations et des feedbacks sur la faisabilité</li>
        <li>Ensemble, ils négocient le contenu des Sprints lors de la planification</li>
      </ul>
      
      <h3>Scrum Master et équipe de développement</h3>
      
      <ul>
        <li>Le Scrum Master coach l'équipe sur l'auto-organisation et la pluridisciplinarité</li>
        <li>Le Scrum Master aide l'équipe à éliminer les obstacles</li>
        <li>L'équipe respecte le cadre Scrum que le Scrum Master fait respecter</li>
        <li>Ensemble, ils travaillent à l'amélioration continue des pratiques</li>
      </ul>
      
      <h2 id="section-6">Rôles externes à l'équipe Scrum</h2>
      
      <p>Bien que Scrum ne définisse que trois rôles spécifiques, d'autres personnes peuvent interagir avec l'équipe Scrum.</p>
      
      <h3>Parties prenantes</h3>
      
      <p>Les parties prenantes sont toutes les personnes qui ont un intérêt dans le produit mais ne font pas partie de l'équipe Scrum. Elles peuvent inclure :</p>
      
      <ul>
        <li>Utilisateurs finaux</li>
        <li>Clients</li>
        <li>Managers</li>
        <li>Équipes marketing et ventes</li>
        <li>Autres équipes de développement</li>
      </ul>
      
      <p>Les parties prenantes interagissent principalement avec l'équipe Scrum lors de la revue de Sprint, où elles peuvent fournir des feedbacks sur l'incrément.</p>
      
      <h3>Managers</h3>
      
      <p>Dans une organisation agile, le rôle des managers évolue :</p>
      
      <ul>
        <li>Ils créent un environnement propice à l'auto-organisation</li>
        <li>Ils soutiennent le développement des compétences</li>
        <li>Ils éliminent les obstacles organisationnels</li>
        <li>Ils alignent les objectifs de l'équipe avec la stratégie de l'entreprise</li>
      </ul>
      
      <p>Les managers ne dirigent pas le travail quotidien de l'équipe Scrum, mais ils peuvent jouer un rôle important dans la création des conditions de son succès.</p>
      
      <h3>Spécialistes et experts</h3>
      
      <p>Des spécialistes peuvent être consultés par l'équipe Scrum pour des questions spécifiques :</p>
      
      <ul>
        <li>Experts en sécurité</li>
        <li>Architectes d'entreprise</li>
        <li>Spécialistes UX/UI</li>
        <li>Experts métier</li>
      </ul>
      
      <p>Ces spécialistes ne font généralement pas partie de l'équipe Scrum à plein temps, mais peuvent être consultés au besoin.</p>
      
      <h2 id="section-7">Évolution des rôles dans les organisations matures</h2>
      
      <p>À mesure que les organisations gagnent en maturité dans leur adoption de Scrum, les rôles peuvent évoluer.</p>
      
      <h3>Évolution du Product Owner</h3>
      
      <ul>
        <li><strong>Product Owner proxy</strong> : Dans les grandes organisations, des "proxy" peuvent aider le Product Owner principal</li>
        <li><strong>Chief Product Owner</strong> : Pour les produits complexes avec plusieurs équipes</li>
        <li><strong>Product Owner à temps partiel</strong> : Dans certains contextes, le rôle peut être combiné avec d'autres responsabilités</li>
      </ul>
      
      <h3>Évolution du Scrum Master</h3>
      
      <ul>
        <li><strong>Scrum Master à temps partiel</strong> : Dans les équipes matures, le Scrum Master peut servir plusieurs équipes</li>
        <li><strong>Coach agile</strong> : Évolution vers un rôle plus large de transformation organisationnelle</li>
        <li><strong>Scrum Master développeur</strong> : Dans certaines équipes, un membre de l'équipe de développement peut assumer ce rôle</li>
      </ul>
      
      <h3>Évolution de l'équipe de développement</h3>
      
      <ul>
        <li><strong>Spécialisation progressive</strong> : Tout en maintenant la pluridisciplinarité, certains membres peuvent développer des expertises spécifiques</li>
        <li><strong>Mentorat</strong> : Les membres expérimentés peuvent mentorer les nouveaux</li>
        <li><strong>Communautés de pratique</strong> : Formation de groupes d'intérêt transcendant les équipes Scrum</li>
      </ul>
      
      <h2 id="section-8">Défis et anti-patterns courants</h2>
      
      <p>La mise en œuvre des rôles Scrum peut faire face à plusieurs défis et anti-patterns.</p>
      
      <h3>Anti-patterns du Product Owner</h3>
      
      <ul>
        <li><strong>Product Owner absent</strong> : Indisponible pour l'équipe, ne fournit pas de clarifications</li>
        <li><strong>Product Owner proxy sans autorité</strong> : Ne peut pas prendre de décisions importantes</li>
        <li><strong>Product Owner comité</strong> : Décisions prises par un groupe, ralentissant le processus</li>
        <li><strong>Product Owner trop détaillé</strong> : Spécifie comment l'équipe doit implémenter les fonctionnalités</li>
        <li><strong>Product Owner débordé</strong> : Responsable de trop de produits ou équipes</li>
      </ul>
      
      <h3>Anti-patterns du Scrum Master</h3>
      
      <ul>
        <li><strong>Scrum Master chef de projet</strong> : Assigne des tâches et dirige l'équipe</li>
        <li><strong>Scrum Master secrétaire</strong> : Se limite à organiser des réunions et prendre des notes</li>
        <li><strong>Scrum Master absent</strong> : N'est pas disponible pour l'équipe</li>
        <li><strong>Scrum Master policier</strong> : Applique les règles de manière rigide sans comprendre leur but</li>
        <li><strong>Scrum Master technique</strong> : Se concentre uniquement sur les aspects techniques</li>
      </ul>
      
      <h3>Anti-patterns de l'équipe de développement</h3>
      
      <ul>
        <li><strong>Équipe dépendante</strong> : Attend qu'on lui dise quoi faire</li>
        <li><strong>Équipe fragmentée</strong> : Travaille en silos sans collaboration</li>
        <li><strong>Équipe surchargée</strong> : S'engage à faire trop de travail</li>
        <li><strong>Équipe sous-estimée</strong> : N'a pas toutes les compétences nécessaires</li>
        <li><strong>Équipe instable</strong> : Changements fréquents de composition</li>
      </ul>
      
      <h2 id="section-9">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension des rôles Scrum, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Analyse de rôles</h3>
      <p>Pour une équipe Scrum que vous connaissez ou imaginez :</p>
      <ul>
        <li>Identifiez qui joue chaque rôle</li>
        <li>Évaluez dans quelle mesure chaque personne remplit les responsabilités de son rôle</li>
        <li>Identifiez les anti-patterns éventuels</li>
        <li>Proposez des améliorations</li>
      </ul>
      
      <h3>Exercice 2 : Jeu de rôle</h3>
      <p>En groupe, simulez une situation typique (comme une planification de Sprint) :</p>
      <ul>
        <li>Assignez les rôles de Product Owner, Scrum Master et membres de l'équipe</li>
        <li>Jouez la situation en respectant les responsabilités de chaque rôle</li>
        <li>Discutez ensuite des difficultés rencontrées et des apprentissages</li>
      </ul>
      
      <h3>Exercice 3 : Résolution de conflits</h3>
      <p>Analysez les scénarios suivants et proposez des solutions :</p>
      <ul>
        <li>Le Product Owner veut ajouter de nouvelles fonctionnalités en milieu de Sprint</li>
        <li>Un manager demande à un membre de l'équipe de travailler sur un autre projet</li>
        <li>L'équipe de développement estime que les demandes du Product Owner sont irréalistes</li>
        <li>Le Scrum Master et le Product Owner sont en désaccord sur la priorité des éléments du backlog</li>
      </ul>
      
      <h2 id="section-10">Conclusion</h2>
      
      <p>Les rôles clairement définis sont l'un des piliers du cadre Scrum. Le Product Owner, le Scrum Master et l'équipe de développement ont chacun des responsabilités distinctes mais complémentaires qui, ensemble, permettent de maximiser la valeur livrée.</p>
      
      <p>Le Product Owner se concentre sur le "quoi", en définissant et priorisant ce qui doit être fait pour maximiser la valeur du produit. Le Scrum Master se concentre sur le "comment Scrum", en aidant l'équipe et l'organisation à comprendre et appliquer efficacement le cadre Scrum. L'équipe de développement se concentre sur le "comment technique", en décidant comment transformer les éléments du Product Backlog en incréments fonctionnels.</p>
      
      <p>La collaboration entre ces trois rôles est essentielle au succès de Scrum. Chaque rôle doit respecter les responsabilités des autres tout en assumant pleinement les siennes.</p>
      
      <p>Dans les organisations matures, ces rôles peuvent évoluer pour s'adapter aux spécificités du contexte, mais leurs responsabilités fondamentales restent les mêmes.</p>
      
      <p>En évitant les anti-patterns courants et en cultivant une compréhension profonde de chaque rôle, les équipes Scrum peuvent atteindre un haut niveau de performance et livrer régulièrement de la valeur à leurs clients.</p>
    `,
    tableOfContents: [
      "Introduction aux rôles Scrum",
      "Le Product Owner",
      "Le Scrum Master",
      "L'équipe de développement",
      "Interactions entre les rôles",
      "Rôles externes à l'équipe Scrum",
      "Évolution des rôles dans les organisations matures",
      "Défis et anti-patterns courants",
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

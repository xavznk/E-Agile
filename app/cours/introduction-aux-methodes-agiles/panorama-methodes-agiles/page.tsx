import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LessonContent from "@/components/LessonContent"
import "@/styles/LessonPage.css"

export default function LessonPage() {
  const lessonData = {
    title: "Panorama des principales méthodes agiles",
    instructor: "M. Fotsing Eric",
    course: "Introduction aux méthodes agiles",
    courseSlug: "introduction-aux-methodes-agiles",
    step: 4,
    totalSteps: 10,
    content: `
      <h2 id="section-1">Introduction aux méthodes agiles</h2>
      
      <p>Bien que toutes les méthodes agiles partagent les valeurs et principes du Manifeste Agile, elles se distinguent par leurs pratiques, leurs rôles, leurs artefacts et leur domaine d'application privilégié. Comprendre ces différences permet de choisir l'approche la plus adaptée à votre contexte.</p>
      
      <p>Il est important de noter que ces méthodes ne sont pas mutuellement exclusives. De nombreuses organisations adoptent une approche hybride, combinant des éléments de différentes méthodes pour créer leur propre façon de travailler.</p>
      
      <p>Dans cette leçon, nous explorerons les principales méthodes agiles, leurs caractéristiques distinctives, leurs forces et leurs limites, ainsi que leurs domaines d'application privilégiés.</p>
      
      <h2 id="section-2">Scrum</h2>
      
      <p>Scrum est probablement la méthode agile la plus connue et la plus utilisée. Développée par Ken Schwaber et Jeff Sutherland dans les années 1990, elle offre un cadre simple mais puissant pour la gestion de projets complexes.</p>
      
      <h3>Principes clés</h3>
      
      <ul>
        <li><strong>Transparence</strong> : Tous les aspects du processus doivent être visibles par tous</li>
        <li><strong>Inspection</strong> : Examiner régulièrement les artefacts et la progression</li>
        <li><strong>Adaptation</strong> : Ajuster le processus et le produit en fonction des résultats des inspections</li>
      </ul>
      
      <h3>Rôles</h3>
      
      <ul>
        <li><strong>Product Owner</strong> : Responsable de maximiser la valeur du produit et de gérer le Product Backlog</li>
        <li><strong>Scrum Master</strong> : Garant du processus Scrum, coach de l'équipe et facilitateur</li>
        <li><strong>Équipe de développement</strong> : Professionnels qui réalisent le travail de création du produit</li>
      </ul>
      
      <h3>Événements</h3>
      
      <ul>
        <li><strong>Sprint</strong> : Période fixe (généralement 2-4 semaines) pendant laquelle un incrément de produit utilisable est créé</li>
        <li><strong>Sprint Planning</strong> : Réunion de planification au début de chaque sprint</li>
        <li><strong>Daily Scrum</strong> : Réunion quotidienne de 15 minutes pour synchroniser l'équipe</li>
        <li><strong>Sprint Review</strong> : Présentation de l'incrément réalisé à la fin du sprint</li>
        <li><strong>Sprint Retrospective</strong> : Réflexion sur le sprint passé pour s'améliorer</li>
      </ul>
      
      <h3>Artefacts</h3>
      
      <ul>
        <li><strong>Product Backlog</strong> : Liste ordonnée de tout ce qui pourrait être nécessaire dans le produit</li>
        <li><strong>Sprint Backlog</strong> : Ensemble des éléments du Product Backlog sélectionnés pour le sprint</li>
        <li><strong>Incrément</strong> : Somme de tous les éléments du Product Backlog complétés pendant le sprint</li>
      </ul>
      
      <h3>Forces</h3>
      
      <ul>
        <li>Cadre simple et bien défini</li>
        <li>Rôles clairs et complémentaires</li>
        <li>Livraison régulière de valeur</li>
        <li>Adaptation continue aux changements</li>
        <li>Large communauté et nombreuses ressources disponibles</li>
      </ul>
      
      <h3>Limites</h3>
      
      <ul>
        <li>Peut être difficile à mettre en œuvre dans des organisations très hiérarchiques</li>
        <li>Nécessite un engagement fort de toutes les parties prenantes</li>
        <li>Peut être mal adapté aux projets très prévisibles ou aux équipes très distribuées</li>
        <li>Risque d'application mécanique sans compréhension des principes sous-jacents</li>
      </ul>
      
      <h3>Domaines d'application privilégiés</h3>
      
      <ul>
        <li>Développement de produits complexes</li>
        <li>Projets avec des exigences évolutives</li>
        <li>Équipes de taille modérée (typiquement 3-9 personnes)</li>
        <li>Organisations prêtes à donner de l'autonomie aux équipes</li>
      </ul>
      
      <h2 id="section-3">Kanban</h2>
      
      <p>Kanban est une méthode agile inspirée du système de production Toyota. Développée par David J. Anderson dans les années 2000, elle met l'accent sur la visualisation du flux de travail, la limitation du travail en cours et l'amélioration continue.</p>
      
      <h3>Principes clés</h3>
      
      <ul>
        <li><strong>Commencer avec ce que vous faites actuellement</strong> : Pas de changements radicaux initiaux</li>
        <li><strong>S'accorder sur la poursuite d'un changement évolutif</strong> : Amélioration continue par petits pas</li>
        <li><strong>Respecter le processus, les rôles et les responsabilités actuels</strong> : Évolution plutôt que révolution</li>
        <li><strong>Encourager les actes de leadership à tous les niveaux</strong> : Leadership distribué</li>
      </ul>
      
      <h3>Pratiques</h3>
      
      <ul>
        <li><strong>Visualiser le flux de travail</strong> : Utilisation d'un tableau Kanban pour représenter les étapes du processus</li>
        <li><strong>Limiter le travail en cours (WIP)</strong> : Définir des limites pour chaque étape du processus</li>
        <li><strong>Gérer le flux</strong> : Optimiser le flux de travail pour qu'il soit aussi fluide que possible</li>
        <li><strong>Rendre les politiques explicites</strong> : Clarifier les règles et conventions</li>
        <li><strong>Mettre en œuvre des boucles de feedback</strong> : Réunions de revue, métriques, etc.</li>
        <li><strong>Améliorer collaborativement, évoluer expérimentalement</strong> : Kaizen (amélioration continue)</li>
      </ul>
      
      <h3>Métriques</h3>
      
      <ul>
        <li><strong>Lead Time</strong> : Temps total entre la demande et la livraison</li>
        <li><strong>Cycle Time</strong> : Temps de traitement une fois le travail commencé</li>
        <li><strong>Throughput</strong> : Nombre d'éléments livrés par unité de temps</li>
        <li><strong>WIP</strong> : Quantité de travail en cours à un moment donné</li>
        <li><strong>Blocages</strong> : Nombre et durée des blocages</li>
      </ul>
      
      <h3>Forces</h3>
      
      <ul>
        <li>Mise en œuvre progressive et non disruptive</li>
        <li>Flexibilité et adaptabilité</li>
        <li>Focus sur le flux et l'élimination des goulots d'étranglement</li>
        <li>Visualisation claire du travail et des problèmes</li>
        <li>Applicable à de nombreux contextes au-delà du développement logiciel</li>
      </ul>
      
      <h3>Limites</h3>
      
      <ul>
        <li>Moins structuré que Scrum, ce qui peut être déroutant pour certaines équipes</li>
        <li>Pas de rôles définis, ce qui peut poser problème dans certains contextes</li>
        <li>Risque de stagnation sans mécanisme formel d'amélioration</li>
        <li>Peut être moins adapté aux projets nécessitant une planification à moyen terme</li>
      </ul>
      
      <h3>Domaines d'application privilégiés</h3>
      
      <ul>
        <li>Maintenance et support</li>
        <li>Services opérationnels</li>
        <li>Équipes avec un flux de travail continu plutôt que par projets</li>
        <li>Contextes où les priorités changent fréquemment</li>
        <li>Organisations cherchant une transition en douceur vers l'agilité</li>
      </ul>
      
      <h2 id="section-4">Extreme Programming (XP)</h2>
      
      <p>Extreme Programming est une méthode agile créée par Kent Beck à la fin des années 1990. Elle met l'accent sur l'excellence technique, la communication et la simplicité pour produire des logiciels de haute qualité.</p>
      
      <h3>Valeurs</h3>
      
      <ul>
        <li><strong>Communication</strong> : Favoriser les échanges directs entre tous les acteurs</li>
        <li><strong>Simplicité</strong> : Faire les choses les plus simples qui puissent fonctionner</li>
        <li><strong>Feedback</strong> : Obtenir et intégrer rapidement les retours</li>
        <li><strong>Courage</strong> : Dire la vérité sur l'avancement et s'adapter au changement</li>
        <li><strong>Respect</strong> : Valoriser chaque membre de l'équipe et son travail</li>
      </ul>
      
      <h3>Pratiques</h3>
      
      <ul>
        <li><strong>Programmation en binôme</strong> : Deux développeurs travaillent ensemble sur le même code</li>
        <li><strong>Développement piloté par les tests (TDD)</strong> : Écrire les tests avant le code</li>
        <li><strong>Intégration continue</strong> : Intégrer et tester le code plusieurs fois par jour</li>
        <li><strong>Refactoring</strong> : Améliorer continuellement la conception du code</li>
        <li><strong>Conception simple</strong> : Créer la solution la plus simple qui réponde aux besoins actuels</li>
        <li><strong>Métaphore du système</strong> : Utiliser un langage commun pour décrire le système</li>
        <li><strong>Rythme soutenable</strong> : Maintenir un rythme de travail que l'équipe peut soutenir indéfiniment</li>
        <li><strong>Propriété collective du code</strong> : Tout le monde peut modifier n'importe quelle partie du code</li>
        <li><strong>Client sur site</strong> : Un représentant du client travaille avec l'équipe</li>
        <li><strong>Livraisons fréquentes</strong> : Livrer de petits incréments fonctionnels régulièrement</li>
        <li><strong>Planning game</strong> : Planification collaborative basée sur la valeur business et les estimations techniques</li>
        <li><strong>Standards de code</strong> : Suivre des conventions de codage communes</li>
      </ul>
      
      <h3>Forces</h3>
      
      <ul>
        <li>Focus sur la qualité technique et la durabilité du code</li>
        <li>Réduction des défauts grâce aux tests automatisés</li>
        <li>Feedback rapide et continu</li>
        <li>Adaptabilité aux changements, même tardifs</li>
        <li>Développement des compétences de l'équipe</li>
      </ul>
      
      <h3>Limites</h3>
      
      <ul>
        <li>Exigeant en termes de discipline et de compétences techniques</li>
        <li>Peut être difficile à mettre en œuvre dans des équipes distribuées</li>
        <li>Certaines pratiques (comme la programmation en binôme) peuvent rencontrer des résistances</li>
        <li>Nécessite un engagement fort du client</li>
        <li>Peut sembler trop radical pour certaines organisations</li>
      </ul>
      
      <h3>Domaines d'application privilégiés</h3>
      
      <ul>
        <li>Projets avec des exigences changeantes ou incertaines</li>
        <li>Équipes co-localisées ou bien outillées pour la collaboration à distance</li>
        <li>Organisations valorisant l'excellence technique</li>
        <li>Projets nécessitant un haut niveau de qualité et de fiabilité</li>
      </ul>
      
      <h2 id="section-5">Lean Software Development</h2>
      
      <p>Lean Software Development est une adaptation des principes du Lean Manufacturing au développement logiciel, popularisée par Mary et Tom Poppendieck dans les années 2000. Elle se concentre sur l'élimination du gaspillage et l'optimisation du flux de valeur.</p>
      
      <h3>Principes</h3>
      
      <ul>
        <li><strong>Éliminer le gaspillage</strong> : Supprimer tout ce qui n'apporte pas de valeur au client</li>
        <li><strong>Amplifier l'apprentissage</strong> : Favoriser les cycles courts et le feedback</li>
        <li><strong>Décider le plus tard possible</strong> : Garder des options ouvertes jusqu'à ce que les informations soient suffisantes</li>
        <li><strong>Livrer aussi vite que possible</strong> : Réduire le temps entre l'idée et la livraison</li>
        <li><strong>Responsabiliser l'équipe</strong> : Donner autonomie et soutien à ceux qui font le travail</li>
        <li><strong>Construire l'intégrité</strong> : Créer des systèmes cohérents et bien intégrés</li>
        <li><strong>Voir l'ensemble</strong> : Optimiser le système global, pas les parties</li>
      </ul>
      
      <h3>Pratiques</h3>
      
      <ul>
        <li><strong>Value Stream Mapping</strong> : Cartographier le flux de valeur pour identifier les gaspillages</li>
        <li><strong>Kanban</strong> : Visualiser et optimiser le flux de travail</li>
        <li><strong>Set-based design</strong> : Explorer plusieurs solutions en parallèle avant de choisir</li>
        <li><strong>Feedback rapide</strong> : Obtenir des retours au plus tôt pour apprendre et s'adapter</li>
        <li><strong>Automatisation</strong> : Automatiser les tâches répétitives pour réduire les erreurs et accélérer</li>
        <li><strong>Amélioration continue (Kaizen)</strong> : Chercher constamment à s'améliorer</li>
      </ul>
      
      <h3>Types de gaspillage</h3>
      
      <ul>
        <li><strong>Fonctionnalités partiellement développées</strong> : Travail commencé mais non terminé</li>
        <li><strong>Fonctionnalités superflues</strong> : Développement de ce qui n'apporte pas de valeur</li>
        <li><strong>Réapprentissage</strong> : Perte de connaissances et redécouverte</li>
        <li><strong>Transferts</strong> : Passages de responsabilité d'une personne à une autre</li>
        <li><strong>Délais</strong> : Temps d'attente entre les activités</li>
        <li><strong>Tâches multiples</strong> : Perte d'efficacité due au changement de contexte</li>
        <li><strong>Défauts</strong> : Bugs et problèmes de qualité</li>
      </ul>
      
      <h3>Forces</h3>
      
      <ul>
        <li>Focus sur la création de valeur et l'élimination du gaspillage</li>
        <li>Approche systémique et holistique</li>
        <li>Adaptabilité à différents contextes</li>
        <li>Complémentarité avec d'autres méthodes agiles</li>
        <li>Principes applicables au-delà du développement logiciel</li>
      </ul>
      
      <h3>Limites</h3>
      
      <ul>
        <li>Moins de pratiques concrètes que Scrum ou XP</li>
        <li>Peut nécessiter une expertise en Lean pour une mise en œuvre efficace</li>
        <li>Risque de focus excessif sur l'efficience au détriment de l'innovation</li>
        <li>Changement culturel profond nécessaire pour une adoption complète</li>
      </ul>
      
      <h3>Domaines d'application privilégiés</h3>
      
      <ul>
        <li>Organisations cherchant à optimiser leurs processus</li>
        <li>Environnements avec des contraintes de ressources</li>
        <li>Projets nécessitant une livraison rapide et continue</li>
        <li>Contextes où la réduction des coûts est importante</li>
      </ul>
      
      <h2 id="section-6">Feature-Driven Development (FDD)</h2>
      
      <p>Feature-Driven Development est une méthode agile développée par Jeff De Luca et Peter Coad à la fin des années 1990. Elle se concentre sur la modélisation du domaine et le développement par fonctionnalités.</p>
      
      <h3>Processus</h3>
      
      <p>FDD se compose de cinq processus séquentiels :</p>
      
      <ol>
        <li><strong>Élaborer un modèle global</strong> : Créer une vision d'ensemble du système</li>
        <li><strong>Construire une liste de fonctionnalités</strong> : Décomposer le domaine en fonctionnalités</li>
        <li><strong>Planifier par fonctionnalité</strong> : Prioriser et assigner les fonctionnalités</li>
        <li><strong>Concevoir par fonctionnalité</strong> : Concevoir chaque fonctionnalité en détail</li>
        <li><strong>Construire par fonctionnalité</strong> : Implémenter les fonctionnalités</li>
      </ol>
      
      <h3>Rôles</h3>
      
      <ul>
        <li><strong>Chef de projet</strong> : Responsable administratif du projet</li>
        <li><strong>Architecte en chef</strong> : Responsable de la conception globale</li>
        <li><strong>Responsable du développement</strong> : Coordonne les activités de développement</li>
        <li><strong>Propriétaire de classe</strong> : Responsable d'un ensemble de classes</li>
        <li><strong>Expert du domaine</strong> : Apporte la connaissance métier</li>
        <li><strong>Programmeur</strong> : Développe les fonctionnalités</li>
      </ul>
      
      <h3>Pratiques</h3>
      
      <ul>
        <li><strong>Modélisation du domaine</strong> : Création d'un modèle objet du domaine</li>
        <li><strong>Développement par fonctionnalité</strong> : Travail organisé autour de fonctionnalités client</li>
        <li><strong>Propriété individuelle du code</strong> : Chaque classe a un propriétaire désigné</li>
        <li><strong>Équipes de fonctionnalités</strong> : Petites équipes dynamiques formées pour chaque fonctionnalité</li>
        <li><strong>Inspections</strong> : Revues de code et de conception</li>
        <li><strong>Builds réguliers</strong> : Intégration régulière du code</li>
        <li><strong>Gestion de configuration</strong> : Suivi des versions et des changements</li>
        <li><strong>Reporting de progression</strong> : Suivi basé sur les fonctionnalités terminées</li>
      </ul>
      
      <h3>Forces</h3>
      
      <ul>
        <li>Approche structurée et méthodique</li>
        <li>Focus sur la qualité de la conception</li>
        <li>Reporting clair sur l'avancement</li>
        <li>Scalabilité pour les grands projets</li>
        <li>Transition plus douce pour les organisations habituées aux méthodes traditionnelles</li>
      </ul>
      
      <h3>Limites</h3>
      
      <ul>
        <li>Moins flexible que d'autres méthodes agiles</li>
        <li>Nécessite une expertise en modélisation objet</li>
        <li>Moins d'emphase sur la collaboration client que Scrum ou XP</li>
        <li>Structure de rôles plus hiérarchique</li>
      </ul>
      
      <h3>Domaines d'application privilégiés</h3>
      
      <ul>
        <li>Projets complexes nécessitant une modélisation approfondie</li>
        <li>Grandes équipes ou équipes distribuées</li>
        <li>Organisations en transition vers l'agilité</li>
        <li>Projets où la qualité de conception est critique</li>
      </ul>
      
      <h2 id="section-7">Méthodes agiles à l'échelle</h2>
      
      <p>Avec la popularisation de l'agilité, de nombreuses organisations ont cherché à appliquer ces principes à grande échelle, au-delà de l'équipe individuelle. Plusieurs frameworks ont émergé pour répondre à ce besoin :</p>
      
      <h3>Scaled Agile Framework (SAFe)</h3>
      
      <p>SAFe est l'un des frameworks agiles à l'échelle les plus populaires, développé par Dean Leffingwell. Il propose une approche structurée pour appliquer les principes agiles et lean à tous les niveaux de l'organisation.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Structure à plusieurs niveaux (Équipe, Programme, Grande Solution, Portfolio)</li>
        <li>Planification synchronisée via les "PI Planning" (Program Increment)</li>
        <li>Intégration de pratiques Scrum, Kanban, XP et Lean</li>
        <li>Cadre de travail détaillé avec rôles, événements et artefacts définis</li>
        <li>Focus sur l'alignement stratégique et l'exécution</li>
      </ul>
      
      <h3>Large-Scale Scrum (LeSS)</h3>
      
      <p>LeSS, développé par Craig Larman et Bas Vodde, est une extension de Scrum pour les grandes organisations. Il vise à appliquer les principes et pratiques de Scrum à grande échelle tout en minimisant la complexité additionnelle.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Un seul Product Owner et un Product Backlog pour plusieurs équipes</li>
        <li>Événements Scrum synchronisés entre les équipes</li>
        <li>Focus sur la simplification et la décentralisation</li>
        <li>Deux frameworks : LeSS (2-8 équipes) et LeSS Huge (8+ équipes)</li>
        <li>Emphase sur l'apprentissage organisationnel et l'amélioration systémique</li>
      </ul>
      
      <h3>Disciplined Agile (DA)</h3>
      
      <p>Disciplined Agile, développé par Scott Ambler et Mark Lines, est un toolkit qui permet aux organisations de personnaliser leur approche agile en fonction de leur contexte spécifique.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Approche hybride intégrant des éléments de diverses méthodes</li>
        <li>Focus sur la prise de décision contextuelle</li>
        <li>Couvre l'ensemble du cycle de vie de la livraison (inception, construction, transition)</li>
        <li>S'étend au-delà de l'IT pour inclure l'entreprise dans son ensemble</li>
        <li>Offre des "goal diagrams" pour guider les choix de pratiques</li>
      </ul>
      
      <h3>Nexus</h3>
      
      <p>Nexus, développé par Ken Schwaber (co-créateur de Scrum), est un framework pour mettre à l'échelle Scrum avec 3 à 9 équipes travaillant sur un même produit.</p>
      
      <p><strong>Caractéristiques :</strong></p>
      <ul>
        <li>Extension minimale de Scrum avec un nouveau rôle (Nexus Integration Team)</li>
        <li>Focus sur l'identification et la résolution des dépendances</li>
        <li>Événements Scrum étendus pour la coordination entre équipes</li>
        <li>Un seul Product Backlog et un seul incrément de produit intégré</li>
        <li>Simplicité et fidélité aux principes de Scrum</li>
      </ul>
      
      <h2 id="section-8">Choisir la méthode adaptée à votre contexte</h2>
      
      <p>Le choix d'une méthode agile dépend de nombreux facteurs liés à votre contexte spécifique. Voici quelques critères à considérer :</p>
      
      <h3>Facteurs organisationnels</h3>
      
      <ul>
        <li><strong>Culture</strong> : Une organisation hiérarchique pourrait commencer avec Kanban, moins disruptif</li>
        <li><strong>Taille</strong> : Les grandes organisations peuvent nécessiter un framework à l'échelle</li>
        <li><strong>Maturité agile</strong> : Les débutants peuvent préférer Scrum pour sa structure claire</li>
        <li><strong>Distribution géographique</strong> : Les équipes distribuées peuvent trouver Kanban plus adapté</li>
      </ul>
      
      <h3>Facteurs liés au projet</h3>
      
      <ul>
        <li><strong>Complexité</strong> : Les projets complexes peuvent bénéficier de XP ou FDD</li>
        <li><strong>Stabilité des exigences</strong> : Des exigences changeantes favorisent Scrum ou XP</li>
        <li><strong>Contraintes</strong> : Des contraintes fortes de qualité peuvent orienter vers XP</li>
        <li><strong>Type de livraison</strong> : Un flux continu favorise Kanban, des releases planifiées Scrum</li>
      </ul>
      
      <h3>Facteurs humains</h3>
      
      <ul>
        <li><strong>Compétences</strong> : XP requiert une expertise technique plus poussée</li>
        <li><strong>Résistance au changement</strong> : Kanban offre une transition plus douce</li>
        <li><strong>Engagement client</strong> : Un client très impliqué favorise Scrum ou XP</li>
        <li><strong>Leadership</strong> : Le style de leadership peut influencer le choix de la méthode</li>
      </ul>
      
      <h3>Approche pragmatique</h3>
      
      <p>En pratique, de nombreuses organisations adoptent une approche hybride, combinant des éléments de différentes méthodes :</p>
      
      <ul>
        <li><strong>Scrumban</strong> : Combine la structure de Scrum avec la visualisation et le flux de Kanban</li>
        <li><strong>Scrum + XP</strong> : Utilise le cadre Scrum avec les pratiques techniques d'XP</li>
        <li><strong>Lean Startup + Scrum</strong> : Intègre la validation d'hypothèses dans le cadre Scrum</li>
        <li><strong>Approche personnalisée</strong> : Sélectionne les pratiques les plus adaptées au contexte</li>
      </ul>
      
      <p>L'important n'est pas de suivre une méthode à la lettre, mais d'adopter les pratiques qui vous aideront à incarner les valeurs et principes agiles dans votre contexte spécifique.</p>
      
      <h2 id="section-9">Exercices pratiques</h2>
      
      <p>Pour approfondir votre compréhension des différentes méthodes agiles, réalisez les exercices suivants :</p>
      
      <h3>Exercice 1 : Analyse comparative</h3>
      <p>Choisissez deux méthodes agiles et comparez-les selon les critères suivants :</p>
      <ul>
        <li>Structure et cadre</li>
        <li>Rôles et responsabilités</li>
        <li>Pratiques clés</li>
        <li>Avantages et inconvénients</li>
        <li>Contextes d'application privilégiés</li>
      </ul>
      
      <h3>Exercice 2 : Étude de cas</h3>
      <p>Analysez un projet ou une organisation que vous connaissez bien :</p>
      <ul>
        <li>Quelle méthode agile serait la plus adaptée à ce contexte ? Pourquoi ?</li>
        <li>Quelles pratiques spécifiques recommanderiez-vous ?</li>
        <li>Quels défis anticipez-vous dans la mise en œuvre de cette méthode ?</li>
        <li>Comment adapteriez-vous la méthode à ce contexte particulier ?</li>
      </ul>
      
      <h3>Exercice 3 : Simulation</h3>
      <p>En groupe, simulez la mise en œuvre d'une méthode agile (Scrum, Kanban, XP) sur un projet fictif :</p>
      <ul>
        <li>Définissez les rôles et responsabilités</li>
        <li>Établissez les artefacts nécessaires</li>
        <li>Planifiez les événements et cérémonies</li>
        <li>Identifiez les métriques de suivi</li>
        <li>Discutez des adaptations nécessaires au contexte</li>
      </ul>
      
      <h2 id="section-10">Conclusion</h2>
      
      <p>Dans cette leçon, nous avons exploré les principales méthodes agiles, leurs caractéristiques distinctives, leurs forces et leurs limites, ainsi que leurs domaines d'application privilégiés.</p>
      
      <p>Chaque méthode a ses particularités, mais toutes partagent les valeurs et principes fondamentaux du Manifeste Agile. Le choix d'une méthode dépend de nombreux facteurs liés à votre contexte organisationnel, à la nature de vos projets et aux personnes impliquées.</p>
      
      <p>Il est important de se rappeler que ces méthodes sont des moyens, pas des fins en soi. L'objectif n'est pas de "faire de l'agile", mais d'incarner les valeurs et principes agiles pour livrer plus efficacement de la valeur à vos clients tout en créant un environnement de travail épanouissant pour vos équipes.</p>
      
      <p>Dans les prochaines leçons, nous approfondirons certaines de ces méthodes, en commençant par Scrum, la plus populaire d'entre elles.</p>
    `,
    tableOfContents: [
      "Introduction aux méthodes agiles",
      "Scrum",
      "Kanban",
      "Extreme Programming (XP)",
      "Lean Software Development",
      "Feature-Driven Development (FDD)",
      "Méthodes agiles à l'échelle",
      "Choisir la méthode adaptée à votre contexte",
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

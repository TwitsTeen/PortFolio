import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "VideoTube",
    image: "/PortFolio/images/storyset/Video tutorial.png",
    description: "Application de streaming vidéo multiplateforme",
    tags: ["React Native", "Laravel"],
  },
  {
    title: "Movie App",
    image: "/PortFolio/images/storyset/Film rolls-bro.png",
    description: "Application de streaming de films et séries",
    tags: ["React Native"],
  },
  {
    title: "Trio",
    image: "/PortFolio/images/storyset/Card game-bro.png",
    description: "Reproduction du jeu de cartes Trio en ligne",
    tags: ["React", "Node.js", "Express"],
  },
  {
    title: "Site de gestion de finances",
    image: "/PortFolio/images/storyset/Finance app-bro.png",
    description: "Application web pour la gestion des finances personnelles",
    tags: ["Angular", "Laravel"],
  },
  {
    title: "Réseau social",
    image: "/PortFolio/images/storyset/Social media-amico.png",
    description:
      "Plateforme sociale développée avec Flutter et Supabase, compatible multiplateforme",
    tags: ["Flutter", "Supabase"],
  },
  {
    title: "Application de prise de notes Markdown",
    image: "/PortFolio/images/storyset/Notes-bro.png",
    description:
      "Outil de prise de notes avec support Markdown, basé sur Vue.js et Spring",
    tags: ["Vue.js", "Spring"],
  },
  {
    title: "Bomberman",
    image: "/PortFolio/images/storyset/Gaming-pana.png",
    description: "Version JavaFX du célèbre jeu Bomberman",
    tags: ["JavaFX"],
  },
  {
    title: "Site de recettes",
    image: "/PortFolio/images/storyset/Chef-bro.png",
    description: "Plateforme de partage de recettes développée avec Laravel",
    tags: ["Laravel", "Blade"],
  },
  {
    title: "Site de voyage",
    image: "/PortFolio/images/storyset/Traveling-bro.png",
    description: "Application web de journal et partage de voyages",
    tags: ["Laravel", "Blade"],
  },
  {
    title: "Vue Flash Cards",
    image: "/PortFolio/images/storyset/Learning languages-cuate.png",
    description: "Application d’apprentissage via des flash cards en Vue.js",
    tags: ["Vue.js"],
  },
  {
    title: "Laravel CRUD Generator",
    image: "/PortFolio/images/storyset/Coding-amico.png",
    description:
      "Générateur d’interfaces CRUD pour Laravel, construit avec Node.js",
    tags: ["Node.js", "Laravel"],
  },
  {
    title: "Hébergement d’images Symfony",
    image: "/PortFolio/images/storyset/Image upload-bro.png",
    description:
      "Site d’hébergement d’images avec système de connexion, développé en Symfony",
    tags: ["Symfony", "Twig"],
  },
  {
    title: "RandomChords",
    image: "/PortFolio/images/storyset/Playing Music-bro.png",
    description:
      "Application web/mobile pour générer des accords de guitare aléatoires selon une gamme",
    tags: ["React Native"],
  },
  {
    title: "Juge automatique de programmation",
    image: "/PortFolio/images/storyset/paralympic winners podium-pana.png",
    description:
      "Programme Java qui compile et exécute des codes, puis compare les sorties pour en évaluer l’exactitude",
    tags: ["Java"],
  },
  {
    title: "PyMeme",
    image: "/PortFolio/images/storyset/Memory storage-amico.png",
    description: "Générateur de memes développé avec Flask",
    tags: ["Flask"],
  },
  {
    title: "Solveur de Wordle",
    image: "/PortFolio/images/storyset/Artificial intelligence-amico.png",
    description:
      "Application Flask permettant de deviner les mots possibles au jeu Wordle à partir des lettres connues",
    tags: ["Flask", "SQLite"],
  },
  {
    title: "Historique des prix Amazon",
    image: "/PortFolio/images/storyset/Business growth-rafiki.png",
    description:
      "Scrapper de prix Amazon avec sauvegarde des variations, développé en Flask",
    tags: ["Flask", "BeautifulSoup"],
  },
  {
    title: "Clone de R/Place",
    image: "/PortFolio/images/storyset/Design community-amico.png",
    description:
      "Toile collaborative où chaque utilisateur peut placer un pixel par minute, avec React et Node.js",
    tags: ["React", "Node.js"],
  },
  {
    title: "Messagerie instantanée",
    image: "/PortFolio/images/storyset/Messages-bro.png",
    description: "Application de chat en temps réel avec React et Node.js",
    tags: ["React", "Node.js", "Express"],
  },
  {
    title: "Logiciel de dessin",
    image: "/PortFolio/images/storyset/Artist-rafiki.png",
    description:
      "Outil de dessin interactif réalisé avec React et le canvas HTML",
    tags: ["JavaScript"],
  },
  {
    title: "Pokeguessr",
    image: "/PortFolio/images/storyset/Mystery box-rafiki.png",
    description:
      "Jeu proposant des indices progressifs pour deviner un Pokémon",
    tags: ["React"],
  },
  {
    title: "Site Portfolio",
    image: "/PortFolio/images/storyset/Portfolio-bro.png",
    description:
      "Développement de ce site portfolio avec React, TailwindCSS et DaisyUI",
    tags: ["React"],
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center my-8">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

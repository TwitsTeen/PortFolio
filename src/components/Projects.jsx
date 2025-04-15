import ProjectCard from "./ProjectCard";

const projectData = [
  {
    title: "VideoTube",
    image: "/PortFolio/images/storyset/Video tutorial.png",
    description:
      "Une application crossplatforme de streaming vidéo utilisant React Native et Laravel",
  },
  {
    title: "Réseau social",
    image: "/PortFolio/images/storyset/Social media-amico.png",
    description:
      "Un réseau social crossplatforme fait avec Flutter et Supabase",
  },
  {
    title: "Site de prise de notes markdown",
    image: "/PortFolio/images/storyset/Notes-bro.png",
    description:
      "Un site web de prise de notes markdown utilisant vueJS en front et Spring en back",
  },
  {
    title: "Bomberman",
    image: "/PortFolio/images/storyset/Gaming-pana.png",
    description: "Un jeu bomberman réalisé en JavaFX",
  },
  {
    title: "Site de recettes",
    image: "/PortFolio/images/storyset/Chef-bro.png",
    description: "Site de recettes réalisé avec Laravel",
  },
  {
    title: "Site de voyage",
    image: "/PortFolio/images/storyset/Traveling-bro.png",
    description: "Un site web de partage de voyage réalisé avec Laravel",
  },
  {
    title: "Vue Flash Cards",
    image: "/PortFolio/images/storyset/Learning languages-cuate.png",
    description: "Un site web de flash cards réalisé avec Vue.js",
  },
  {
    title: "Laravel CRUD generator",
    image: "/PortFolio/images/storyset/Coding-amico.png",
    description:
      "Un outil de génération de système CRUD pour Laravel fait avec NodeJS",
  },
  {
    title: "Symfony image hosting website",
    image: "/PortFolio/images/storyset/Image upload-bro.png",
    description:
      "Un site web de partage d'images réalisé avec Symfony avec un système de login",
  },
  {
    title: "RandomChords",
    image: "/PortFolio/images/storyset/Playing Music-bro.png",
    description:
      "Un site web / application android pour générer des accords aléatoires pour la guitare selon une gamme donnée",
  },
  {
    title: "Juge automatique de programmation",
    image: "/PortFolio/images/storyset/paralympic winners podium-pana.png",
    description:
      "Programme java qui compile et éxecute automatiquement un code donné, puis compare les résultats pour évaluer la précision des solutions proposées.",
  },
  {
    title: "PyMeme",
    image: "/PortFolio/images/storyset/Memory storage-amico.png",
    description: "Un site de création de meme fait avec Flask",
  },
  {
    title: "Un solveur de Wordle",
    image: "/PortFolio/images/storyset/Artificial intelligence-amico.png",
    description:
      "Un site web permettant de trouver les mots possibles pour le jeu Wordle en utilisant Flask et SQLite",
  },
  {
    title: "Flask Amazon price history",
    image: "/PortFolio/images/storyset/Business growth-rafiki.png",
    description:
      "Réalisation d'un scrapper de prix Amazon avec un affichage graphique des prix en utilisant Flask",
  },
  {
    title: "Clone de R/Place",
    image: "/PortFolio/images/storyset/Design community-amico.png",
    description:
      "Un canva commun sur lequel chaque utilisateur peut poser un pixel par minute utilisant React en frontend et Node.js en backend",
  },
  {
    title: "Site de messagerie instantanée",
    image: "/PortFolio/images/storyset/Messages-bro.png",
    description: "Site de messagerie instantannée utilisant React et Node.js",
  },

  {
    title: "Logiciel de dessin",
    image: "/PortFolio/images/storyset/Artist-rafiki.png",
    description:
      "Utilisation de react et des canva JavaScript pour réaliser un logiciel de dessin",
  },
  {
    title: "Pokeguessr",
    image: "/PortFolio/images/storyset/Mystery box-rafiki.png",
    description:
      "Un site donnant des indices progressif pour deviner un pokémon",
  },
  {
    title: "Site Portfolio",
    image: "/PortFolio/images/storyset/Portfolio-bro.png",
    description:
      "Réalisation de ce site portfolio avec React, tailwindcss et DaisyUI",
  },
];

function sortProjectsByTechnology(projects) {
  const sortedProjects = {};

  projects.forEach((project) => {
    const tech = project.image.split("/").pop().split(".")[0];
    if (!sortedProjects[tech]) {
      sortedProjects[tech] = [];
    }
    sortedProjects[tech].push(project);
  });

  return sortedProjects;
}

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
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center my-8">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8">
        <ProjectCard
          title="Symfony image hosting website"
          image="/PortFolio/images/symfony.png"
          description="Un site web de partage d'images réalisé avec Symfony avec un système de login"
        />
        <ProjectCard
          title="RandomChords"
          image="/PortFolio/images/reactnative.png"
          description="Un site web / application android pour générer des accords aléatoires pour la guitare selon une gamme donnée"
        />
        <ProjectCard
          title="Juge automatique de programmation"
          description="Programme java qui compile et éxecute automatiquement un code donné, puis compare les résultats pour évaluer la précision des solutions proposées."
          image="/PortFolio/images/java.png"
        ></ProjectCard>
        <ProjectCard
          title="PyMeme"
          description="Un site de création de meme fait avec Flask"
          image="/PortFolio/images/flask.png"
        />
        <ProjectCard
          title="Un solveur de Wordle"
          description="Un site web permettant de trouver les mots possibles pour le jeu Wordle en utilisant Flask et SQLite"
          image="/PortFolio/images/flask.png"
        />
        <ProjectCard
          title="Flask Amazon price history"
          description="Réalisation d'un scrapper de prix Amazon avec un affichage graphique des prix en utilisant Flask"
          image="/PortFolio/images/flask.png"
        />
        <ProjectCard
          title="Clone de R/Place"
          description="Un canva commun sur lequel chaque utilisateur peut poser un pixel par minute utilisant React en frontend et Node.js en backend"
          image="/PortFolio/images/nodejs.png"
        />
        <ProjectCard
          title="Site de messagerie instantanée"
          description="Site de messagerie instantannée utilisant React et Node.js"
          image="/PortFolio/images/nodejs.png"
        />
        <ProjectCard
          title="Site web static"
          description="Réalisation d'un site web static pour d'une entreprise de l'événementiel dans le cadre d'une formation"
          image="/PortFolio/images/html.png"
        />
        <ProjectCard
          title="Logiciel de gestion d'un cabinet médical"
          description="Réalisation d'un logiciel de gestion de cabinet médical avec JavaFX dans le cadre d'une formation"
          image="/PortFolio/images/java.png"
        />
        <ProjectCard
          title="Logiciel de dessin"
          description="Utilisation de react et des canva JavaScript pour réaliser un logiciel de dessin"
          image="/PortFolio/images/javascript.png"
        />
        <ProjectCard
          title="Pokeguessr"
          description="Un site donnant des indices progressif pour deviner un pokémon"
          image="/PortFolio/images/react.png"
        />
        <ProjectCard
          title="Site Portfolio"
          description="Réalisation de ce site portfolio avec React, tailwindcss et DaisyUI"
          image="/PortFolio/images/react.png"
        />
      </div>
    </>
  );
};

export default Projects;

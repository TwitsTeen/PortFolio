import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center ">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8">
        <ProjectCard
          title="PyMeme"
          description="Un site de création de même fait avec Flask"
          image="./images/php.png"
        />
        <ProjectCard
          title="Un solveur de Wordle"
          description="Un site web permettant de trouver les mots possibles pour le jeu Wordle en utilisant Flask et SQLite"
          image="./images/php.png"
        />
        <ProjectCard
          title="Clone de R/Place"
          description="Un canva commun sur lequel chaque utilisateur peut poser un pixel par minute utilisant React en frontend et Node.js en backend"
          image="./images/php.png"
        />
        <ProjectCard
          title="Site de messagerie instantanée"
          description="Site de messagerie instantannée utilisant React et Node.js"
          image="./images/php.png"
        />
        <ProjectCard
          title="Site web static"
          description="Réalisation d'un site web static pour d'une entreprise de l'événementiel dans le cadre d'une formation"
          image="./images/php.png"
        />
        <ProjectCard
          title="Logiciel de gestion d'un cabinet médical"
          description="Réalisation d'un logiciel de gestion de cabinet médical avec JavaFX dans le cadre d'une formation"
          image="./images/php.png"
        />
        <ProjectCard
          title="Logiciel de dessin"
          description="Utilisation de react et des canva JavaScript pour réaliser un logiciel de dessin"
          image="./images/php.png"
        />
        <ProjectCard
          title="Pokeguessr"
          description="Un site donnant des indices progressif pour deviner un pokémon"
          image="./images/php.png"
        />
      </div>
    </>
  );
};

export default Projects;

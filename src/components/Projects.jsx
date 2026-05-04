import ProjectCard from "../components/Projectcard";
import photoMeteo from "../assets/photoMeteo.webp";
import photoMesri from "../assets/photoMesri.webp";
import photoGestion from "../assets/photoGestion.webp";

const projects = [
  {
    image: photoGestion,
    imageAlt: "Capture du second projet",
    label: "Featured Project",
    title: "App Gestion Stock",
    description:
      "Une plateforme Full-stack de gestion de stock permettant un suivi en temps réel des produits. Développée avec un backend robuste en Go et une base de données PostgreSQL, l'application garantit la persistance des données via une interface moderne et responsive.",
    tags: ["React", "TanStack-Query", "Golang", "Postgres SQL", "Docker"],
    liveUrl: "https://app-gestion-stock-opal.vercel.app/",
    githubUrl: "https://github.com/babader08/app-gestion-stock",
    reversed: false,
  },

  {
    image: photoMeteo,
    imageAlt: "Capture de l'application météo",
    label: "Featured Project",
    title: "Météo App",
    description:
      "Une application météo moderne qui affiche les prévisions en temps réel selon la localisation de l'utilisateur. Données récupérées via une API externe, interface claire et responsive.",
    tags: ["React", "API REST", "Tailwind-CSS", "Vite"],
    liveUrl: "https://app-meteo-gamma.vercel.app/",
    githubUrl: "https://github.com/babader08/app-meteo",
    reversed: true,
  },
  {
    image: photoMesri,
    imageAlt: "Capture du second projet",
    label: "Featured Project",
    title: "site Statique du MESRI",
    description:
      "Site institutionnel statique pour le Ministère de l’Enseignement Supérieur : pages d’information et ressources. Défis : intégration responsive, optimisation des performances et accessibilité pour tous les utilisateurs.",
    tags: ["React", "Tailwind-CSS", "framer-motion"],
    liveUrl: "https://app-mesri.vercel.app/",
    githubUrl: "https://github.com/babader08/app-mesri",
    reversed: false,
  },
];

const Projects = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="mb-8">
        <p className="mb-3 text-xs font-medium tracking-[0.3em] text-purple-400/70 uppercase">
          Réalisations
        </p>
        <div className="flex items-end gap-4">
          <h2 className="fontName text-4xl leading-tight font-bold text-white md:text-5xl">
            Mes{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projets
            </span>
          </h2>
          <div className="mb-2 hidden h-px flex-1 bg-linear-to-r from-purple-500/40 to-transparent sm:block" />
        </div>
      </div>

      <div className="flex flex-col gap-14 md:gap-32">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="animate-fadeInUp"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

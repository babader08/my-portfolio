import ExperienceCard from "../components/Experiencecard";

const experiences = [
  {
    emoji: "🚀",
    title: "Alternance à Volkeno",
    company: "Stage — Dakar",
    period: "2025 — 2026",
    description:
      "Développement de fonctionnalités back-end et front-end sur des projets confiés. Mise en place d'une API REST et optimisation des performances côté client.",
    tags: ["React.js", "Node.js", "tailwind css", "PostgreSQL"],
  },
  {
    emoji: "💡",
    title: "Bakeli Word",
    company: "Projet de Validation — Bakeli",
    period: "2025 — 2026",
    description:
      "Creation et Conception d’un site marketplace permettant d’acheter et vendre des produits en ligne. Réalisation de dashboards dédiés pour l’admin et les vendeurs.",
    tags: ["Html", "Tailwind CSS", "JavaScript", "LocalStorage"],
  },
  {
    emoji: "🛠️",
    title: "Projet Personnel — Portfolio",
    company: "Open Source",
    period: "2025 — 2026",
    description:
      "Conception et développement de mon portfolio from scratch : architecture des composants, animations CSS custom et optimisation des performances Lighthouse.",
    tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
  },
  {
    emoji: "👨‍💻",
    title: "site Restaurant",
    company: "UNCHK",
    period: "2024 — 2025",
    description:
      "Réalisation en équipe d’un site web pour un restaurant : gestion du menu, commandes en ligne, espace admin et intégration responsive avec git et github.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="mx-auto -mt-10 max-w-6xl px-6 py-5 md:mt-0 md:px-10 lg:mt-0"
    >
      <div className="mb-12">
        <p className="mb-3 text-xs font-medium tracking-[0.3em] text-purple-400/70 uppercase">
          Parcours
        </p>
        <div className="flex items-end gap-4">
          <h2 className="fontName text-4xl leading-tight font-bold text-white md:text-5xl">
            Experience{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              de travail
            </span>
          </h2>
          <div className="mb-2 hidden h-px flex-1 bg-linear-to-r from-purple-500/40 to-transparent sm:block" />
        </div>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-gray-500">
          Des expériences qui m'ont forgé une vision complète du développement
          web, du design à la mise en production.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div
            key={exp.title}
            className="animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ExperienceCard {...exp} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;

const ProjectCard = ({
  image,
  imageAlt = "Project screenshot",
  label = "Featured Project",
  title,
  description,
  tags = [],
  liveUrl = "#",
  reversed = false,
}) => {
  return (
    <article
      className={`group relative flex flex-col gap-2 md:items-center md:gap-0 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl shadow-black/50 transition-transform duration-700 group-hover:scale-[1.02] md:w-7/12">
        <div className="bg-bgHeader/90 flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
          <div className="ml-3 h-4 max-w-45 flex-1 rounded-full bg-white/5" />
        </div>

        <img
          src={image}
          alt={imageAlt}
          className="h-55 w-full cursor-pointer object-cover object-top md:h-75"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-purple-900/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div
        className={`bg-bgHeader/80 relative z-10 flex flex-col gap-2 rounded-2xl border border-white/5 p-3 shadow-xl shadow-black/40 backdrop-blur-sm md:-mx-10 md:w-5/12 md:gap-4 lg:gap-4 lg:p-6 ${
          reversed
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        }`}
      >
        <p className="text-[10px] font-semibold tracking-[0.25em] text-purple-400 uppercase lg:text-xs">
          {label}
        </p>

        <h3 className="fontName text-xl leading-tight font-bold text-white md:text-3xl lg:text-2xl">
          {title}
        </h3>

        <p className="text-[12px] leading-relaxed text-gray-400 lg:text-sm">
          {description}
        </p>

        {tags.length > 0 && (
          <div
            className={`flex flex-wrap gap-2 ${reversed ? "justify-end" : "justify-start"}`}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium tracking-wider text-purple-300/70 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div
          className={`mt-1 flex items-center gap-4 ${reversed ? "flex-row-reverse" : ""}`}
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-200 hover:text-white"
            aria-label="Live demo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

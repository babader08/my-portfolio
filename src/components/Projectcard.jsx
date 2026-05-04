const ProjectCard = ({
  image,
  imageAlt = "Project screenshot",
  label = "Featured Project",
  title,
  description,
  tags = [],
  liveUrl = "#",
  githubUrl = "#",
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
          className={`mt-2 flex items-center gap-4 ${
            reversed ? "flex-row-reverse" : ""
          }`}
        >
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live demo"
            className="group flex items-center justify-center rounded-lg bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-300 transition-colors duration-300 group-hover:text-blue-400"
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

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repo"
            className="group flex items-center justify-center rounded-lg bg-white/5 p-2 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gray-800/40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 text-gray-300 transition-colors duration-300 group-hover:text-blue-400"
              fill="currentColor"
            >
              <path d="M12 0.5C5.73 0.5 0.75 5.48 0.75 11.75c0 5.02 3.26 9.27 7.79 10.77.57.1.78-.25.78-.56 0-.27-.01-1.17-.02-2.12-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.53-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.57.23 2.73.11 3.02.73.8 1.18 1.83 1.18 3.08 0 4.4-2.67 5.36-5.21 5.65.41.36.77 1.09.77 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.79.56 4.52-1.5 7.78-5.75 7.78-10.77C23.25 5.48 18.27.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

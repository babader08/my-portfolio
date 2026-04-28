const ExperienceCard = ({
  icon: Icon,
  emoji,
  title,
  company,
  period,
  description,
  tags = [],
}) => {
  return (
    <article className="group relative flex gap-5 overflow-hidden rounded-2xl border border-white/5 bg-white/3 p-3 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:bg-white/6 hover:shadow-xl hover:shadow-purple-900/20 md:p-5 lg:p-6">
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139,92,246,0.08), transparent 70%)",
        }}
      />

      <span className="absolute top-6 left-0 h-10 w-0.5 rounded-r-full bg-linear-to-b from-purple-400 to-pink-500 opacity-0 transition-all duration-500 group-hover:h-16 group-hover:opacity-100" />

      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-900/40 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:border-purple-400/40">
        {emoji && <span>{emoji}</span>}
        {Icon && <Icon className="h-6 w-6 text-purple-300" />}

        <div className="absolute inset-0 rounded-xl bg-purple-500/10 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex min-w-0 flex-col gap-2">
        <div className="flex flex-col flex-wrap items-start justify-between gap-1 lg:flex-row">
          <h3 className="fontName text-md md:text-md leading-tight font-bold text-white transition-colors duration-300 group-hover:text-purple-200 lg:text-lg">
            {title}
          </h3>
          <span className="mt-1 shrink-0 text-[10px] font-medium tracking-widest text-gray-500 uppercase">
            {period}
          </span>
        </div>

        <p className="text-xs font-semibold tracking-wider text-purple-400/80 uppercase">
          {company}
        </p>

        <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-500/20 bg-purple-900/20 px-2 py-0.5 text-[10px] font-medium tracking-wide text-purple-300/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ExperienceCard;

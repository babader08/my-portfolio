import photoProfile from "../assets/photoProfile.webp";

const Accueil = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[90vh] max-w-6xl items-center overflow-hidden px-6 md:px-4"
    >
      <div className="relative z-10 flex flex-1 flex-col justify-center gap-6 md:mt-0 lg:mt-0">
        <div className="animate-fadeInUp flex w-fit items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium tracking-widest text-emerald-400/80 uppercase">
            Disponible pour des projets
          </span>
        </div>

        <h1 className="animate-fadeInUp fontName text-3xl leading-[1.1] font-bold tracking-tight text-gray-100 [animation-delay:100ms] md:text-7xl lg:text-5xl">
          Je suis un <br className="hidden sm:block" />
          <span className="animate-[text-gradient_5s_linear_infinite] bg-linear-to-r from-purple-400 via-pink-400 to-violet-400 bg-size-[200%_auto] bg-clip-text text-transparent">
            Développeur
          </span>
          <span className="ml-1 animate-pulse text-purple-400">_</span>
          <br className="hidden sm:block" />
          <span className="text-gray-300">Web.</span>
        </h1>

        <p className="animate-fadeInUp max-w-md text-base leading-relaxed text-gray-400 [animation-delay:200ms] md:text-lg">
          Je conçois des solutions numériques{" "}
          <span className="font-medium text-gray-200">performantes</span>,
          alliant excellence technique et expérience utilisateur soignée.
        </p>

        <div className="animate-fadeInUp flex items-center gap-3 [animation-delay:300ms]">
          <span className="h-px w-12 bg-linear-to-r from-purple-500 to-transparent" />
          <p className="text-xs font-medium tracking-wider text-gray-500 uppercase">
            Architecture · UX · Performance
          </p>
        </div>

        <div className="animate-fadeInUp lg-80 w-84 [animation-delay:400ms] md:w-full md:px-2 lg:px-2">
          <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-2 overflow-hidden lg:mt-4">
            {[
              "JavaScript",
              "Tailwind CSS",
              "React.js",
              "TanStack Query",
              "Golang",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-[11px] font-semibold whitespace-nowrap text-purple-300 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-white sm:text-xs lg:py-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 hidden w-85 shrink-0 items-center justify-center md:flex lg:w-100">
        <div className="fontPhoto" />

        <div className="absolute h-90 w-90 animate-[spin_25s_linear_infinite] rounded-full border border-purple-500/15" />
        <div className="absolute h-75 w-75 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-pink-500/10" />

        <div className="relative">
          <span className="absolute -top-2 -left-2 h-5 w-5 rounded-tl-sm border-t-2 border-l-2 border-purple-400/60" />
          <span className="absolute -right-2 -bottom-2 h-5 w-5 rounded-br-sm border-r-2 border-b-2 border-pink-400/60" />

          <img
            src={photoProfile}
            alt="Photo de profil développeur"
            className="relative z-10 h-75 w-65 animate-[float_6s_ease-in-out_infinite] rounded-4xl border border-white/5 object-cover shadow-2xl shadow-black/60 lg:h-90 lg:w-75"
          />

          <div className="bg-bgHeader absolute -bottom-4 -left-6 z-20 flex animate-[float_6s_ease-in-out_1s_infinite] items-center gap-2 rounded-xl border border-white/10 px-3 py-2 shadow-xl">
            <span className="text-lg">💻</span>
            <div>
              <p className="text-[10px] font-medium text-gray-400">
                Spécialité
              </p>
              <p className="text-xs font-semibold text-white">Full-Stack Dev</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;

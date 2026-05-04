import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/babader08",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.01 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/babacar-mboup-5a008739b",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.27V1.73C24 .77 23.21 0 22.22 0z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@babsdev0",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        "service_6c56dea",
        "template_4b3bh7h",
        {
          from_name: form.name,
          user_email: form.email,
          subject: `Message de ${form.name}`,
          message: form.message,
        },
        "CD7y-8jxsnceZNtnG",
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500/60 focus:bg-white/[0.07] focus:ring-1 focus:ring-purple-500/30";

  return (
    <footer
      id="contact"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:px-10"
    >
      <div className="pointer-events-none absolute -bottom-20 left-0 h-75 w-75 rounded-full bg-purple-700/10 blur-[100px]" />

      <div className="mb-10 h-px w-full bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />
      <p className="m-3 text-xs font-medium tracking-[0.3em] text-purple-400/70 uppercase">
        Contact
      </p>
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        <div className="w-full md:max-w-md">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-purple-500/20 bg-purple-900/10 p-10 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/20 text-2xl">
                ✓
              </div>
              <h3 className="fontName text-xl font-bold text-white">
                Message envoyé !
              </h3>
              <p className="text-sm text-gray-400">
                Merci pour ton message, je reviens vers toi rapidement.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs text-purple-400 transition-colors hover:text-white"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/3 p-6 backdrop-blur-sm"
            >
              <h3 className="fontName text-lg font-semibold text-white">
                Envoyer un message
              </h3>

              {/* Erreur */}
              {status === "error" && (
                <div className="rounded-xl border border-red-500/20 bg-red-900/10 px-4 py-3 text-sm text-red-400">
                  Une erreur est survenue. Réessaie ou contacte-moi directement
                  par email.
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Babacar Mboup"
                  required
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="toi@example.com"
                  required
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décris votre message..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative mt-1 overflow-hidden rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-700/50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="relative z-10">
                  {status === "loading"
                    ? "Envoi en cours..."
                    : "Envoyer le message →"}
                </span>
                <span className="absolute inset-0 translate-y-full bg-purple-400 transition-transform duration-300 group-hover:translate-y-0" />
              </button>
            </form>
          )}
        </div>

        <div className="flex max-w-sm flex-col gap-7">
          <h2 className="fontName text-4xl leading-tight font-bold text-white md:text-5xl">
            Bugs aujourd'hui,{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              skills demain.
            </span>
          </h2>

          <p className="max-w-md text-base leading-relaxed text-gray-400">
            You don't need to know everything. You need to know how to learn.
          </p>

          <a
            href="mailto:contact@babsdev.tech"
            className="group flex w-fit items-center gap-2 text-sm font-medium text-purple-300 transition-colors duration-300 hover:text-white"
          >
            <span className="h-px w-4 bg-purple-500 transition-all duration-300 group-hover:w-6" />
            contact@babsdev.tech
          </a>

          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transform text-gray-500 transition-colors duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-1 text-gray-600">
            <p className="fontName text-2xl font-bold text-white/10 select-none">
              BabsDev<span className="text-purple-500/20">.</span>
            </p>
            <p className="text-xs tracking-wider">
              © {new Date().getFullYear()} — Tous droits réservés
            </p>
            <p className="text-xs">
              Conçu & développé par{" "}
              <span className="text-purple-400/70">BabsDev</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

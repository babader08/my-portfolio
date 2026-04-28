import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const close = () => setIsOpen(false);

  return (
    <header className="bg-bgHeader/80 fixed top-0 left-0 z-50 w-full border-b border-white/5 backdrop-blur-md">
      <div className="flex-between mx-auto max-w-6xl px-6 py-4 md:px-10">
        <a
          href="#home"
          className="fontName text-xl font-bold tracking-tight text-white transition-colors duration-200 hover:text-purple-300"
        >
          BabsDev<span className="text-purple-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group text-md relative font-medium text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-purple-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black md:inline-flex"
        >
          GitHub
        </a>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le menu"
          className="text-gray-400 transition-colors hover:text-white md:hidden"
        >
          <Menu
            size={33}
            color="white"
            className="rounded-md border border-gray-600"
          />
        </button>
      </div>

      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-60 h-screen bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen
            ? "overlay-noire pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed top-0 right-0 z-70 h-dvh w-64 border-l border-white/5 bg-[#0a0118] p-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={close}
          aria-label="Fermer le menu"
          className="absolute top-5 right-5 text-gray-500 transition-colors hover:text-white"
        >
          <X size={24} />
        </button>

        <p className="fontName text-lg font-bold text-white">
          BabsDev<span className="text-purple-500">.</span>
        </p>

        <nav className="mt-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={close}
              className="fontName text-lg text-gray-300 transition-colors hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}

          <div className="h-px w-full bg-white/5" />

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-purple-500/30 py-3 text-center text-sm font-semibold text-purple-300 transition-colors hover:bg-purple-500/10"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

function Header() {
  return (
    <header className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 px-6 py-20 text-center border-b border-slate-800">
      <p className="mb-3 text-sm font-semibold tracking-widest text-emerald-400 uppercase">
        Cybersecurity • C# &amp; Unity • Python Development
      </p>
      <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
        Ілля <span className="text-emerald-400">Ткаченко</span>
      </h1>
      <p className="mt-5 text-xl text-slate-300 max-w-2xl mx-auto">
        Студент спеціальності «Кібербезпека» | Software &amp; Game Developer
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="inline-block rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition duration-200 hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
        >
          Мої проєкти
        </a>
      </div>
    </header>
  );
}

export default Header;
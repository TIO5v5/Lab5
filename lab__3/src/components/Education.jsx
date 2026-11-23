function Education() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition duration-300 hover:border-emerald-500/60">
      <h2 className="mb-5 text-3xl font-bold text-emerald-400">Освіта</h2>
      <h3 className="text-xl font-semibold text-white">
        Національний університет «Львівська політехніка»
      </h3>
      <p className="mt-2 text-emerald-300/90 font-medium">
        Інститут ІКТА • Спеціальність: Кібербезпека
      </p>
      <p className="mt-1 text-slate-400">Академічна група: КБ-201</p>
      <p className="mt-4 leading-7 text-slate-400">
        Поглиблено вивчаю захист інформації, адміністрування ОС Linux, комп'ютерні мережі,
        алгоритми та структури даних, дискретну математику і сучасні вебтехнології.
      </p>
    </section>
  );
}

export default Education;
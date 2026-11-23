const projects = [
  {
    title: "2D Clicker Game",
    technology: "Unity • C# • Aseprite",
    description:
      "Розробка 2D-гри з кастомними скриптами C#, системою частинок, стадіями прогресії, адаптивним UI та власною піксель-арт графікою.",
  },
  {
    title: "Enterprise Network Topology",
    technology: "Cisco Packet Tracer • RADIUS • VLAN",
    description:
      "Проєктування корпоративної мережі з сегментацією через VLAN, налаштуванням комутаторів, точок доступу та автентифікації WPA2-Enterprise.",
  },
  {
    title: "Python Data & Security Scripts",
    technology: "Python • Rich • JSON • Hashing",
    description:
      "Створення консольних утиліт для хешування паролів, парсингу тексту, симуляції баз даних у форматі JSON та табличного виводу через бібліотеку Rich.",
  },
];

function Experience() {
  return (
    <section id="projects">
      <h2 className="mb-6 text-3xl font-bold text-emerald-400">Мої проєкти</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-500"
          >
            <div>
              <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                {project.technology}
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">
                {project.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-400">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
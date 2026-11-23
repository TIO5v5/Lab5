const skills = [
  "C# (.NET)",
  "Unity 2D",
  "Python",
  "Linux (DNF / RPM)",
  "Cisco Packet Tracer",
  "HTML5 & CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Figma",
  "Aseprite",
  "Git & GitHub",
];

function Skills() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 transition duration-300 hover:border-emerald-500/60">
      <h2 className="mb-5 text-3xl font-bold text-emerald-400">
        Технічні навички
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 transition duration-200 hover:-translate-y-1 hover:bg-emerald-600 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
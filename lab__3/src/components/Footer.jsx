import { useState, useEffect } from "react";

function Footer() {
  const [sysInfo, setSysInfo] = useState({ userAgent: "", platform: "" });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };
    localStorage.setItem("systemInfo", JSON.stringify(info));

    const saved = JSON.parse(localStorage.getItem("systemInfo"));
    if (saved) {
      setSysInfo(saved);
    }
  }, []);

  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-6 py-10 text-center transition-colors duration-300">
      <h2 className="text-2xl font-bold text-emerald-400">Контакти</h2>
      <p className="mt-2 text-slate-400">
        Cybersecurity • GameDev (Unity/C#) • Python & Web Development
      </p>
      <a
        href="https://github.com/TIO5v5"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-emerald-500 focus-visible:outline-2"
      >
        GitHub профіль
      </a>
      <p className="mt-6 text-sm text-slate-500">
        © 2026 Ілля Ткаченко • КБ-201
      </p>

      {/* Системна інформація з localStorage (Лабораторна №4) */}
      <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-slate-800 bg-slate-950 p-3 text-xs text-slate-400">
        <p>
          <span className="font-semibold text-emerald-400">Платформа:</span> {sysInfo.platform}
        </p>
        <p className="mt-1 break-all">
          <span className="font-semibold text-emerald-400">Браузер:</span> {sysInfo.userAgent}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
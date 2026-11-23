import { useState, useEffect } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); // Автоматичне відкриття через 1 хвилину за методичкою

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Маленька плаваюча кнопка збоку (показується, коли вікно закрите) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed right-6 bottom-6 z-40 flex cursor-pointer items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-emerald-500"
        >
          <span>💬</span>
          <span>Зворотний зв'язок</span>
        </button>
      )}

      {/* Модальне вікно */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 cursor-pointer rounded-lg px-2 py-1 text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-100"
            >
              ✖ Закрити
            </button>

            <h3 className="mb-4 text-xl font-bold text-emerald-400">
              Зворотний зв'язок
            </h3>

            <form
              action="https://formspree.io/f/meaapzvv"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-slate-100 focus:border-emerald-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-slate-100 focus:border-emerald-500 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Номер телефону"
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-slate-100 focus:border-emerald-500 focus:outline-none"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Ваше повідомлення..."
                required
                className="rounded-xl border border-slate-700 bg-slate-950 p-3 text-slate-100 focus:border-emerald-500 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-500"
              >
                Надіслати
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
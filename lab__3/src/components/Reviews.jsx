import { useState, useEffect } from "react";

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/24/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка завантаження відгуків:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition-colors duration-300">
      <h2 className="mb-6 text-2xl font-bold text-emerald-400">
        Відгуки роботодавців (Варіант 24)
      </h2>

      {loading ? (
        <p className="text-slate-400">Завантаження коментарів...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-xl border border-slate-800 bg-slate-950 p-4 transition hover:border-emerald-500/50"
            >
              <h3 className="font-semibold text-slate-100">{comment.name}</h3>
              <p className="mt-1 text-xs text-emerald-400">{comment.email}</p>
              <p className="mt-3 text-sm text-slate-300">{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;
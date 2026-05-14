type Book = { id: string; title: string; author: string; year: number };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8080";

async function getBooks(): Promise<Book[]> {
  try {
    const res = await fetch(`${API_BASE}/api/books`, { cache: "no-store" });
    if (!res.ok) return [];
    return (await res.json()) as Book[];
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const books = await getBooks();
  return (
    <main style={{ maxWidth: 720, margin: "40px auto", padding: "0 16px" }}>
      <h1>Catálogo de la Biblioteca</h1>
      {books.length === 0 ? (
        <p>
          No hay libros disponibles. ¿El backend está corriendo en <code>{API_BASE}</code>?
        </p>
      ) : (
        <ul>
          {books.map((b) => (
            <li key={b.id} style={{ marginBottom: 8 }}>
              <strong>{b.title}</strong> — {b.author} <em>({b.year})</em>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

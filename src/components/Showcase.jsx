export default function Showcase() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
      title: 'Penthouse living — Soft beige & charcoal',
    },
    {
      src: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
      title: 'Marble kitchen — Minimalist serif warmth',
    },
    {
      src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop',
      title: 'Reading corner — Cinematic dusk light',
    },
    {
      src: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop',
      title: 'Studio workspace — Urban textures',
    },
  ];

  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl text-zinc-900">Selected renders</h2>
          <p className="mt-2 text-zinc-600 max-w-xl">A quiet collection of spaces, staged with restraint and intention.</p>
        </div>
        <a href="#cta" className="hidden rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-900 md:block">Start your room</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {images.map((img) => (
          <figure key={img.src} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <img src={img.src} alt="Interior" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <figcaption className="p-4 text-sm text-zinc-700">{img.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

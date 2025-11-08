export default function Features() {
  const items = [
    {
      title: 'Cinematic Lighting Engine',
      desc: 'Our model understands daylight, warmth, and specular highlights for imagery that feels editorial and alive.',
    },
    {
      title: 'Tailored Style Palettes',
      desc: 'Choose from modern minimal, Japandi, Brutalist luxe, or craft your own signature palette in minutes.',
    },
    {
      title: 'Spatial Intelligence',
      desc: 'Reads proportions, sight lines, and focal points to stage the room with premium visual hierarchy.',
    },
    {
      title: 'Ecommerce-Ready Output',
      desc: 'Export curated shopping lists and CAD-friendly layouts—ready for procurement and build.',
    },
  ];

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl text-zinc-900">Design intelligence, distilled</h2>
        <p className="mt-3 max-w-2xl text-zinc-600">
          A focused toolkit that brings clarity to every decision. Subtle, powerful, and quietly obsessive.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-medium text-zinc-900">{it.title}</h3>
            <p className="mt-2 text-zinc-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-zinc-200 bg-[#f6f3ee] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,0,0,0.08),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl text-zinc-900">Begin your transformation</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-700">
          Share a photo of your space and select a moodboard. We’ll return refined proposals with curated sourcing.
        </p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-full border border-zinc-300 bg-white/90 px-5 py-3 text-zinc-900 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
          <button
            type="submit"
            className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
          >
            Request access
          </button>
        </form>
        <p className="mt-3 text-xs text-zinc-500">Private beta. No spam, ever.</p>
      </div>
    </section>
  );
}

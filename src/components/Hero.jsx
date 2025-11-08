import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-600">AI Interior Design Studio</p>
          <h1 className="mt-4 text-5xl leading-tight text-zinc-900 md:text-6xl">
            Curate spaces with cinematic harmony
          </h1>
          <p className="mt-5 text-lg text-zinc-700 md:text-xl">
            Transform any room into a refined sanctuary. Upload your space, select a mood, and watch it evolve with photoreal precision.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#cta" className="rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white">
              Start a project
            </a>
            <a href="#work" className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900">
              View results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

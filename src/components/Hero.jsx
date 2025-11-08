import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-6 pb-20 text-white">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/70">Furniture & Interior Design</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Bespoke pieces for modern living
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          We craft refined, timeless furniture that elevates contemporary spaces. Precision-built, sustainably sourced, and designed to live beautifully.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#portfolio" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">View Portfolio</a>
          <a href="#contact" className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/60">Start a Project</a>
        </div>
      </div>
    </section>
  );
}

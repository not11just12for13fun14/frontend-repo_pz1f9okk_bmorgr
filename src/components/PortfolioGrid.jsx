import { useEffect, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Skylight Lounge Set',
    tag: 'Living',
    image:
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Monolith Dining Table',
    tag: 'Dining',
    image:
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Contour Lounge Chair',
    tag: 'Seating',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Atrium Bookshelf',
    tag: 'Storage',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Halo Pendant Series',
    tag: 'Lighting',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Slate Coffee Table',
    tag: 'Living',
    image:
      'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function PortfolioGrid() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="portfolio" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected Works</h2>
            <p className="mt-2 max-w-xl text-white/70">
              A curated selection of residential and hospitality pieces crafted with precision joinery and premium finishes.
            </p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/50 md:inline-block">Request Catalog</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={project.image}
                alt={project.title}
                className={`h-64 w-full object-cover transition duration-700 ${mounted ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-xs uppercase tracking-widest text-white/60">{project.tag}</span>
                <h3 className="mt-1 text-lg font-medium">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

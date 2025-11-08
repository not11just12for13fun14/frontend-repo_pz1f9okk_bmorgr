import { Ruler, Palette, Package, Leaf } from 'lucide-react';

const features = [
  {
    icon: Ruler,
    title: 'Custom Commissions',
    desc: 'Bespoke furniture tailored to your space, usage, and aesthetic goals.'
  },
  {
    icon: Palette,
    title: 'Interior Styling',
    desc: 'Material palettes, textiles, and lighting selections for cohesive spaces.'
  },
  {
    icon: Package,
    title: 'White-Glove Delivery',
    desc: 'End-to-end logistics, installation, and on-site refinements.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    desc: 'Responsibly harvested hardwoods and non-toxic finishes as standard.'
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">What we offer</h2>
          <p className="mt-2 text-white/70">
            From one-off heirloom pieces to complete spaces, we partner with clients to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <f.icon size={20} />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

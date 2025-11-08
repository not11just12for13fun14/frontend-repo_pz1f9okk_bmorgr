import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Start a project</h2>
          <p className="mt-2 text-white/70">
            Share your vision and requirements. We’ll respond within 2 business days with availability and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white/80">
              <Mail size={18} />
              <span>studio@lignestudio.com</span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-white/80">
              <Phone size={18} />
              <span>+1 (415) 555-0172</span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-white/80">
              <MapPin size={18} />
              <span>450 Mission St, San Francisco</span>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Showroom by appointment only. International shipping available.
            </p>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/70">Name</label>
                <input className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-white/30 placeholder:text-white/40 focus:ring-2" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/70">Email</label>
                <input type="email" className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-white/30 placeholder:text-white/40 focus:ring-2" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-white/70">Project details</label>
              <textarea rows={5} className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-white outline-none ring-white/30 placeholder:text-white/40 focus:ring-2" placeholder="Scope, timeline, budget..." />
            </div>
            <button type="button" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90">
              Send inquiry
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

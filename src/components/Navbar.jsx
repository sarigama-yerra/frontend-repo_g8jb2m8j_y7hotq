import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#features', label: 'Features' },
    { href: '#studio', label: 'Studio' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between rounded-full border border-zinc-200/50 bg-white/60 px-5 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm"
          aria-label="Primary"
        >
          <a href="#" className="text-[15px] font-semibold tracking-wide text-zinc-900">
            Atelier AI
          </a>
          <div className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a
              href="#cta"
              className="rounded-full bg-[#e8e2d9] px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:shadow transition-shadow"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 overflow-hidden rounded-2xl border border-zinc-200/70 bg-white/80 p-4 backdrop-blur md:hidden"
            >
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2 text-zinc-800 hover:bg-zinc-100/70"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl bg-[#e8e2d9] px-3 py-2 text-center font-medium text-zinc-900"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Moon, Sun } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export default function Hero() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const gradientVariants = useMemo(
    () => ({
      animate: {
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        transition: { duration: 18, repeat: Infinity, ease: 'linear' },
      },
    }),
    []
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-white dark:bg-[#0a0f1f]">
      {/* Animated gradient backdrop */}
      <motion.div
        variants={gradientVariants}
        animate="animate"
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-70"
        style={{
          background:
            'radial-gradient(1200px 600px at 10% 10%, rgba(56,189,248,0.10), transparent 60%), radial-gradient(1000px 500px at 90% 30%, rgba(56,130,246,0.12), transparent 60%), radial-gradient(900px 600px at 50% 90%, rgba(16,185,129,0.10), transparent 60%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.08]" style={{
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }} />

      {/* Header */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-teal-400 shadow-md">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Azurelytics
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo('portfolio')}
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800 md:block"
          >
            Projects
          </button>
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-10 text-center md:pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-slate-300 md:text-6xl"
        >
          Turning Data into Intelligent Action
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 md:text-lg"
        >
          We craft insightful analytics, predictive models, and beautiful dashboards that help teams move decisively.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => scrollTo('portfolio')}
            className="group inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:bg-sky-500"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sky-700 ring-1 ring-sky-200 transition hover:bg-sky-50 dark:text-sky-300 dark:ring-sky-800 dark:hover:bg-slate-900"
          >
            Contact Us
          </button>
        </motion.div>

        {/* Decorative metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/60 md:grid-cols-4"
        >
          {[
            ['+120', 'Projects'],
            ['98%', 'Client Satisfaction'],
            ['24/7', 'Support'],
            ['~4.9', 'Avg. Rating'],
          ].map(([stat, label]) => (
            <div key={label} className="rounded-xl bg-slate-50 p-4 text-left dark:bg-slate-800/60">
              <div className="text-xl font-semibold text-slate-900 dark:text-white">{stat}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

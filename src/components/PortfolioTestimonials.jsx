import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Retail Demand Forecasting',
    img: 'https://images.unsplash.com/photo-1551281044-8c5f7c5f8f58?q=80&w=1600&auto=format&fit=crop',
    stack: ['Python', 'Prophet', 'BigQuery'],
    desc: 'Weekly sales forecasts with automated pipeline and alerting.',
    link: '#',
  },
  {
    title: 'Executive KPI Dashboard',
    img: 'https://images.unsplash.com/photo-1551281044-3a34a0f0ab1e?q=80&w=1600&auto=format&fit=crop',
    stack: ['React', 'D3', 'Snowflake'],
    desc: 'Company-wide dashboard with role-based access and drilldowns.',
    link: '#',
  },
  {
    title: 'Customer Churn Modeling',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop',
    stack: ['Python', 'XGBoost', 'Airflow'],
    desc: 'Predictive model to identify at-risk users and retention levers.',
    link: '#',
  },
  {
    title: 'Marketing Attribution',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    stack: ['dbt', 'Fivetran', 'Tableau'],
    desc: 'Multi-touch attribution model with channel optimization insights.',
    link: '#',
  },
];

const testimonials = [
  {
    quote:
      'They translated complex data into a crystal-clear dashboard our execs actually use daily. Our decision cycle is weeks faster.',
    author: 'COO, Fintech Scaleup',
  },
  {
    quote:
      'Their churn model paid for itself in the first quarter. A partner who truly understands both data science and product.',
    author: 'Head of Growth, SaaS',
  },
  {
    quote:
      'Flawless delivery. From pipelines to visualization, the stack is scalable and beautifully crafted.',
    author: 'Director of Data, Retail',
  },
];

export default function PortfolioTestimonials() {
  return (
    <section id="portfolio" className="relative bg-white py-20 dark:bg-[#0a0f1f]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-xl font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Portfolio
            </h3>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              Selected projects
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-70" />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100 dark:bg-sky-950/40 dark:text-sky-300 dark:ring-sky-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-20">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">What clients say</p>
          </div>

          <div className="relative mt-8 overflow-hidden">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="flex gap-6"
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <blockquote
                  key={`${t.author}-${i}`}
                  className="min-w-[320px] max-w-[420px] shrink-0 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-sm text-slate-700 dark:text-slate-300">“{t.quote}”</p>
                  <footer className="mt-3 text-xs font-medium text-slate-500 dark:text-slate-400">{t.author}</footer>
                </blockquote>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

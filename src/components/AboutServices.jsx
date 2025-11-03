import { motion } from 'framer-motion';
import { BarChart2, LayoutDashboard, Brain, Cloud } from 'lucide-react';

export default function AboutServices() {
  return (
    <section id="about" className="relative bg-white py-20 dark:bg-[#0b1224]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              About Us
            </h2>
            <p className="mt-4 max-w-prose text-slate-600 dark:text-slate-300">
              We are a team of engineers, analysts, and designers focused on translating raw data into meaningful outcomes. Our mission is to empower organizations to act with clarity through elegant dashboards, predictive models, and scalable cloud data solutions.
            </p>
            <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-300">
              From discovery to deployment, we partner closely with stakeholders to design intuitive analytics experiences that unlock measurable value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-teal-50 shadow-sm dark:border-slate-800 dark:from-slate-800 dark:to-slate-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-sky-500 to-teal-400 opacity-80 blur-2xl" />
                <div className="ml-[-1rem] h-40 w-40 rounded-full bg-gradient-to-br from-sky-300 to-indigo-400 opacity-40 blur-3xl" />
              </div>
              <div className="relative z-10 flex h-full items-center justify-center p-8">
                <div className="rounded-xl bg-white/70 px-6 py-4 text-center backdrop-blur dark:bg-slate-900/60">
                  <p className="text-sm font-medium tracking-tight text-slate-700 dark:text-slate-200">
                    Our team blends strategy, data science, and product design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div id="services" className="mt-16">
          <h3 className="text-xl font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Services
          </h3>
          <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            What we do best
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BarChart2,
                title: 'Data Analytics & Visualization',
                desc: 'Interactive reports and visuals that reveal patterns and drive decisions.',
              },
              {
                icon: LayoutDashboard,
                title: 'Custom Dashboard Development',
                desc: 'Bespoke dashboards with role-based views and alerts for your KPIs.',
              },
              {
                icon: Brain,
                title: 'Predictive Modeling & AI Integration',
                desc: 'Forecasting, segmentation, and intelligent automation built in.',
              },
              {
                icon: Cloud,
                title: 'Cloud Data Solutions',
                desc: 'Pipelines, warehousing, and governance on modern cloud platforms.',
              },
            ].map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-teal-400 text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

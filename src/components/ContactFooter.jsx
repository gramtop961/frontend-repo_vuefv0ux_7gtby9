import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function ContactFooter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    // Simple demo: open mailto with prefilled content
    const mail = `mailto:hello@azurelytics.io?subject=Contact%20from%20${encodeURIComponent(
      data.name || 'Website'
    )}&body=${encodeURIComponent(`${data.message || ''}\n\nFrom: ${data.name || ''} <${data.email || ''}>`)}`;
    window.location.href = mail;
  };

  return (
    <section id="contact" className="relative bg-white py-20 dark:bg-[#0b1224]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Contact
            </h3>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
              Let’s build something data-driven
            </p>
            <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-300">
              Share a bit about your goals. We’ll get back within one business day.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-500/10 placeholder:text-slate-400 focus:ring-4 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-500/10 placeholder:text-slate-400 focus:ring-4 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="jane@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 outline-none ring-sky-500/10 placeholder:text-slate-400 focus:ring-4 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-600/30 transition hover:-translate-y-0.5 hover:bg-sky-500"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Email</div>
                  <a href="mailto:hello@azurelytics.io" className="text-sm text-sky-700 hover:underline dark:text-sky-300">
                    hello@azurelytics.io
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-sky-600" />
                <div>
                  <div className="text-sm font-medium text-slate-900 dark:text-white">Address</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">1200 Data Drive, Suite 42, San Francisco, CA</div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 p-4 text-sm text-slate-700 ring-1 ring-slate-200 dark:from-slate-800 dark:to-slate-900 dark:text-slate-300 dark:ring-slate-800">
                We respond within one business day. NDA-friendly.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Azurelytics. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">About</a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Services</a>
              <a href="#portfolio" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Angle } from "@/data/angles";
import { track } from "@/lib/tracking";
import { SiteHeader, SiteFooter } from "./SiteHeader";

export function AngleLanding({ angle }: { angle: Angle }) {
  const quizHref = `/quiz?angle=${angle.slug}`;
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${angle.heroGradient} text-cream`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-cream/15 px-3 py-1 text-xs uppercase tracking-widest text-cream/90 backdrop-blur">
              {angle.badge}
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              {angle.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base text-cream/85 md:text-lg">
              {angle.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/quiz"
                search={{ angle: angle.slug } as never}
                onClick={() => track("cta_click", { angle: angle.slug, location: "hero" })}
                className="inline-flex items-center justify-center rounded-full bg-coral px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/10 transition hover:scale-[1.02]"
              >
                {angle.ctaLabel} →
              </Link>
              <span className="text-xs text-cream/70">⏱ 60 segundos · sin tarjeta</span>
            </div>
            <div className="mt-8 flex items-center gap-5 text-xs text-cream/70">
              <span>★★★★★ 4.9/5</span>
              <span>+12.000 chilenos</span>
              <span>Envío en 48h</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-cream/10 blur-3xl" />
            <div className="relative grid h-full place-items-center rounded-[2rem] border border-cream/20 bg-cream/5 p-8 backdrop-blur">
              <div className="text-center">
                <div className="text-[7rem] leading-none">{angle.painPoints[0].icon}</div>
                <div className="mt-4 font-display text-2xl">Kore · {angle.badge}</div>
                <div className="mt-1 text-sm text-cream/70">{angle.heroAlt}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="mx-auto max-w-2xl text-center font-display text-3xl md:text-4xl">
          ¿Te suena familiar?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Lo que la mayoría está haciendo mal — y cómo Kore lo resuelve.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {angle.painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-4 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-center font-display text-3xl md:text-4xl">Lo que dicen quienes ya probaron</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {angle.testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="text-coral">★★★★★</div>
                <p className="mt-3 text-foreground/90">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Tu plan personalizado, en 60 segundos.</h2>
        <p className="mt-4 text-muted-foreground">
          Responde 6 preguntas. Recibe la combinación exacta de productos Kore para tu cuerpo, edad y objetivo.
        </p>
        <Link
          to="/quiz"
          search={{ angle: angle.slug } as never}
          onClick={() => track("cta_click", { angle: angle.slug, location: "footer" })}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:opacity-90"
        >
          {angle.ctaLabel} →
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { products, formatCLP } from "@/data/products";
import { angles } from "@/data/angles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kore Nutrition — Nutrición inteligente, hecha en Chile" },
      {
        name: "description",
        content:
          "Suplementación premium con dosis efectivas. Quiz de 60s para tu plan personalizado. Envío en 48h.",
      },
      { property: "og:title", content: "Kore Nutrition" },
      { property: "og:description", content: "Tu plan de suplementos personalizado en 60 segundos." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[oklch(0.38_0.07_158)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 text-cream md:grid-cols-2 md:items-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-cream/15 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur">
              Nutrición · Hecho en Chile
            </span>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] md:text-7xl">
              Suplementos que <em className="text-coral not-italic">sí funcionan</em>.
            </h1>
            <p className="mt-5 max-w-lg text-base text-cream/85 md:text-lg">
              Materias primas trazables. Dosis clínicas. Cero relleno.
              Responde 6 preguntas y arma tu plan en 60 segundos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/quiz"
                className="inline-flex items-center rounded-full bg-coral px-6 py-3.5 text-sm font-medium text-white shadow-lg hover:scale-[1.02] transition"
              >
                Empezar quiz · 60s →
              </Link>
              <a
                href="#productos"
                className="inline-flex items-center rounded-full border border-cream/30 px-6 py-3.5 text-sm font-medium hover:bg-cream/10"
              >
                Ver productos
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-cream/70">
              <span>★★★★★ 4.9/5</span>
              <span>+12.000 chilenos</span>
              <span>Envío 48h</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-full bg-coral/30 blur-3xl" />
            <div className="relative grid h-full grid-cols-2 gap-3 p-4">
              {products.slice(0, 4).map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`grid place-items-center rounded-2xl ${p.color} text-5xl shadow-xl`}
                >
                  {p.emoji}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CIENCIA */}
      <section id="ciencia" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { t: "Dosis efectivas", d: "Cantidades respaldadas por estudios clínicos, no greenwashing." },
            { t: "Materias primas trazables", d: "Sabemos de dónde viene cada gramo de cada producto." },
            { t: "Sin relleno", d: "Cero estearato de magnesio, colorantes ni edulcorantes artificiales." },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-7">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground font-display">
                {i + 1}
              </div>
              <h3 className="mt-5 font-display text-2xl">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">Catálogo</h2>
              <p className="mt-2 text-muted-foreground">8 fórmulas. Una para cada objetivo.</p>
            </div>
            <Link to="/quiz" className="hidden text-sm underline md:inline">
              No sabes cuál? Toma el quiz →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className={`grid h-40 place-items-center text-6xl ${p.color}`}>{p.emoji}</div>
                <div className="p-5">
                  <div className="font-display text-xl">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.tagline}</div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-medium">{formatCLP(p.priceCLP)}</span>
                    <span className="text-xs text-coral">Ver →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANGLES (internal — para preview rápido de landings) */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl">Encuentra tu Kore</h2>
        <p className="mt-2 text-muted-foreground">¿Por dónde empezar? Elige tu situación.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.values(angles).map((a) => (
            <Link
              key={a.slug}
              to="/a/$slug"
              params={{ slug: a.slug }}
              className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary"
            >
              <div className="text-xs uppercase tracking-widest text-coral">{a.badge}</div>
              <div className="mt-2 font-display text-xl group-hover:underline">{a.headline}</div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

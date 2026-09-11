import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Clock3,
  Droplets,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
} from "lucide-react";

const CHECKOUT_URL =
  "https://www.aseomira.cl/checkouts/cn/hWNGi5vR8sRdUKISxpMZCUHR/es-cl?_r=AQABxJPnZFjhCemwvdL8s2xoOglfZE-H9HPkpP0nxlblyxs&preview_theme_id=188814131496";
const LOGO = "/aseo-mira-logo.png";
const PRODUCT_IMAGE = "/astonish-product.png";

export const Route = createFileRoute("/astonish")({
  head: () => ({
    meta: [
      { title: "Astonish Antihongos Extra Fuerte 750 ml | Aseo Mira" },
      {
        name: "description",
        content:
          "Elimina moho, hongos y manchas negras de juntas, duchas y paredes. Compra Astonish Antihongos 750 ml en Aseo Mira.",
      },
      { property: "og:title", content: "El moho no tiene por qué quedarse" },
      {
        property: "og:description",
        content:
          "Astonish Antihongos Extra Fuerte: rocías, esperas y limpias. Compra online en Aseo Mira.",
      },
    ],
  }),
  component: AstonishPage,
});

function CheckoutButton({
  label = "Comprar ahora",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-base font-bold transition duration-200 active:scale-[0.98] ${
        light
          ? "bg-[#A7E548] text-[#10234D] shadow-[0_14px_30px_-14px_rgba(167,229,72,0.8)] hover:bg-[#b6f05b]"
          : "bg-[#10234D] text-white shadow-[0_14px_30px_-14px_rgba(16,35,77,0.65)] hover:bg-[#1a3268]"
      }`}
    >
      {label}
      <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function Stars({ large = false }: { large?: boolean }) {
  return (
    <span className="flex items-center gap-1 text-[#A7E548]" aria-label="5 de 5 estrellas">
      {[0, 1, 2, 3, 4].map((star) => (
        <Star
          key={star}
          className={large ? "size-6" : "size-4"}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </span>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const benefits = [
  {
    icon: Sparkles,
    title: "Actúa rápido",
    body: "Va directo contra el moho negro, los hongos y las bacterias.",
  },
  {
    icon: Droplets,
    title: "Sin refregar fuerte",
    body: "Rocías, esperas unos minutos y limpias. Menos esfuerzo para ti.",
  },
  {
    icon: ShieldCheck,
    title: "Deja la superficie limpia",
    body: "Ayuda a recuperar el aspecto de juntas, cerámicas y sellos.",
  },
  {
    icon: Wind,
    title: "Rinde 750 ml",
    body: "Alcanza para tratar varias zonas húmedas de tu casa.",
  },
];

const useCases = ["Juntas de cerámica", "Ducha y tina", "Silicona y cortinas", "Paredes y techos"];

const reviews = [
  { quote: "Me dejó el baño impecable. Los hongos salieron altiro.", name: "Cliente Aseo Mira" },
  {
    quote: "Lo apliqué, esperé unos minutos y limpié. Me ahorró bastante trabajo.",
    name: "Paola R.",
  },
  { quote: "Desaparece en segundos después de la aplicación sin dejar rastros.", name: "Karla" },
];

function AstonishPage() {
  return (
    <main className="astonish-page min-h-screen overflow-hidden bg-[#f7fbfc] text-[#10234D]">
      <div className="bg-[#27A9A1] px-5 py-2.5 text-center text-sm font-semibold text-white">
        Despacho a todo Chile · Compra segura en Aseo Mira
      </div>

      <header className="border-b border-[#10234D]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <a href="#inicio" aria-label="Astonish por Aseo Mira">
            <img src={LOGO} alt="Aseo Mira" className="h-12 w-auto rounded-md" />
          </a>
          <div className="hidden items-center gap-4 text-sm font-semibold text-[#10234D]/65 md:flex">
            <span>Producto especialista</span>
            <span className="size-1.5 rounded-full bg-[#A7E548]" />
            <span>750 ml</span>
          </div>
          <a
            href={CHECKOUT_URL}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#10234D] px-5 text-sm font-bold text-white transition hover:bg-[#1a3268] active:scale-[0.98]"
          >
            Comprar ahora
          </a>
        </div>
      </header>

      <section id="inicio" className="relative isolate bg-[#10234D] text-white">
        <div className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full bg-[#27A9A1]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/3 size-[30rem] rounded-full bg-[#A7E548]/10 blur-3xl" />
        <div className="relative mx-auto flex min-h-[min(820px,calc(100dvh-104px))] max-w-4xl flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-14 md:py-16">
          <Reveal className="flex max-w-2xl flex-col items-center">
            <h1 className="max-w-2xl text-[2.75rem] font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">
              El moho no tiene <span className="text-[#A7E548]">por qué quedarse.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/78 sm:text-xl">
              Ataca hongos, moho negro y manchas de humedad en juntas, duchas y paredes. Rocías,
              esperas y limpias.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <CheckoutButton label="Comprar Astonish" light />
              <span className="text-sm font-medium text-white/65">
                Compra directa · Checkout seguro
              </span>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-white/78">
              <span className="flex items-center gap-2">
                <Stars />
                <strong className="text-white">5,0/5</strong>
              </span>
              <span>21 testimonios</span>
              <span>750 ml</span>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto mt-10 w-full max-w-[510px] sm:mt-12">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#27A9A1]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-[#27A9A1] p-4 shadow-[0_30px_70px_-34px_rgba(0,0,0,0.85)] sm:p-6">
              <div className="absolute -right-10 top-9 rotate-12 rounded-full bg-[#A7E548] px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#10234D] shadow-lg">
                Extra fuerte
              </div>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#eaf8f6]">
                <div className="absolute inset-x-8 top-8 h-32 rounded-full bg-white/80 blur-2xl" />
                <img
                  src={PRODUCT_IMAGE}
                  alt="Astonish Specialist Mould & Mildew Blast 750 ml"
                  className="relative mx-auto block aspect-square w-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-2 pb-1 pt-5 text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                    Línea antihongos
                  </p>
                  <p className="mt-1 text-xl font-black">Antihongos · 750 ml</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/70">Precio online</p>
                  <p className="text-2xl font-black">$8.990</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[#10234D]/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-0 sm:grid-cols-3">
          {[
            [ShieldCheck, "Potencia especialista", "Para moho y hongos difíciles"],
            [Clock3, "Menos esfuerzo", "Actúa sin refregar fuerte"],
            [Check, "Compra simple", "Directo al checkout de Aseo Mira"],
          ].map(([Icon, title, body]) => (
            <div
              key={title as string}
              className="flex items-center gap-4 border-b border-[#10234D]/10 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:py-6 sm:last:border-r-0"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#e6f7f5] text-[#17857f]">
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-bold">{title as string}</p>
                <p className="mt-0.5 text-sm text-[#10234D]/60">{body as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
        <Reveal>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#17857f]">
            Limpieza que se nota
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Limpia la mancha. <span className="text-[#27A9A1]">No tu tarde.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#10234D]/70">
            El moho vuelve una y otra vez cuando solo limpias por encima. Astonish entra en la zona
            difícil y te ayuda a dejarla limpia sin convertir el baño en una batalla.
          </p>
          <ul className="mt-7 grid gap-4 text-base font-semibold">
            {[
              "Ayuda a eliminar moho negro y hongos",
              "Devuelve el aspecto limpio de las juntas",
              "Ideal para zonas con humedad continua",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#A7E548] text-[#10234D]">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2.25rem] bg-[#e6f7f5] p-7 sm:p-10">
            <div className="absolute -right-12 -top-12 size-48 rounded-full border-[24px] border-[#27A9A1]/15" />
            <div className="absolute -bottom-16 -left-10 size-48 rounded-full border-[24px] border-[#A7E548]/45" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-[0_18px_45px_-30px_rgba(16,35,77,0.65)] sm:translate-y-7">
                <p className="text-5xl font-black tracking-[-0.06em] text-[#27A9A1]">5,0</p>
                <div className="mt-3">
                  <Stars />
                </div>
                <p className="mt-3 text-sm font-semibold text-[#10234D]/60">
                  Calificación del producto
                </p>
              </div>
              <div className="rounded-3xl bg-[#10234D] p-6 text-white shadow-[0_18px_45px_-30px_rgba(16,35,77,0.9)]">
                <p className="text-5xl font-black tracking-[-0.06em] text-[#A7E548]">750</p>
                <p className="mt-2 text-lg font-bold">ml para varias zonas</p>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Juntas, cerámicas, duchas, tinas y más.
                </p>
              </div>
              <div className="rounded-3xl border border-[#10234D]/10 bg-white/70 p-6 sm:col-span-2">
                <p className="text-2xl font-black leading-tight">“Los hongos salieron altiro.”</p>
                <p className="mt-2 text-sm font-semibold text-[#10234D]/55">
                  Una experiencia real de clientes Aseo Mira
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#e6f7f5] px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              Potencia especialista para una casa que se siente limpia.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#10234D]/70">
              Astonish fue hecho para la parte más difícil de la limpieza: cuando la humedad ya dejó
              huella.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Reveal key={benefit.title} className="h-full">
                <article className="h-full rounded-3xl border border-[#10234D]/10 bg-white p-6 shadow-[0_12px_35px_-30px_rgba(16,35,77,0.7)]">
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#10234D] text-[#A7E548]">
                    <benefit.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-black">{benefit.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-[#10234D]/65">{benefit.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#10234D] px-5 py-20 text-white sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#A7E548]">
              Fácil de usar
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
              Tres pasos y listo.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              No necesitas ser experto. Sigue el envase y deja que Astonish haga el trabajo pesado.
            </p>
            <div className="mt-8">
              <CheckoutButton label="Quiero limpiar el moho" light />
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["01", "Rocía", "Cubre la mancha y la zona cercana."],
              ["02", "Espera", "Deja actuar unos minutos."],
              ["03", "Limpia", "Pasa un paño y disfruta el cambio."],
            ].map(([number, title, body], index) => (
              <Reveal key={number} className="h-full">
                <article className="relative h-full rounded-3xl border border-white/15 bg-white/7 p-6">
                  <span className="text-5xl font-black tracking-[-0.06em] text-[#A7E548]">
                    {number}
                  </span>
                  <h3 className="mt-8 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/65">{body}</p>
                  {index < 2 ? (
                    <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden size-6 text-[#A7E548] sm:block" />
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
        <Reveal>
          <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
            Donde aparece el moho, Astonish entra en acción.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#10234D]/70">
            Úsalo en las zonas que más sufren con la humedad.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase, index) => (
              <div
                key={useCase}
                className="flex items-center gap-3 rounded-2xl border border-[#10234D]/10 bg-white px-4 py-4 shadow-[0_12px_30px_-28px_rgba(16,35,77,0.9)]"
              >
                <span className="grid size-8 place-items-center rounded-full bg-[#A7E548] text-sm font-black text-[#10234D]">
                  {index + 1}
                </span>
                <span className="font-bold">{useCase}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-[2.25rem] border border-[#27A9A1]/20 bg-[#e6f7f5] p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-[#27A9A1] px-3 py-1.5 text-xs font-black uppercase tracking-[0.15em] text-white">
                Producto especialista
              </span>
              <Sparkles className="size-6 text-[#17857f]" />
            </div>
            <img
              src={PRODUCT_IMAGE}
              alt="Botella Astonish Antihongos"
              className="mx-auto mt-5 h-56 w-full object-contain mix-blend-multiply"
            />
            <div className="mt-4 border-t border-[#10234D]/10 pt-5">
              <h3 className="text-2xl font-black">Astonish Antihongos</h3>
              <p className="mt-1 text-base text-[#10234D]/60">Extra fuerte · 750 ml</p>
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-[#10234D]/55">Precio online</p>
                  <p className="text-3xl font-black">$8.990</p>
                </div>
                <CheckoutButton />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-[#f0faf9] px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#17857f]">
                Opiniones reales
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">
                El cambio se nota.
              </h2>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-[#10234D]/10 bg-white px-4 py-3">
              <Stars />
              <span className="font-black">5,0/5</span>
              <span className="text-sm text-[#10234D]/55">· 21 testimonios</span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <Reveal key={review.name} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-[#10234D]/10 bg-white p-6">
                  <div>
                    <Stars />
                    <blockquote className="mt-5 text-xl font-bold leading-snug">
                      “{review.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="mt-8 text-sm font-semibold text-[#10234D]/55">
                    {review.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#27A9A1] px-5 py-20 text-white sm:px-8 md:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full border-[34px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full border-[34px] border-[#A7E548]/25" />
        <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <Reveal>
            <img src={LOGO} alt="Aseo Mira" className="h-14 w-auto rounded-md" />
            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Que el baño vuelva a verse limpio.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Lleva Astonish Antihongos Extra Fuerte 750 ml y ataca esas manchas que ya te cansaron.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CheckoutButton label="Comprar por $8.990" light />
              <span className="text-sm font-semibold text-white/75">Directo al checkout</span>
            </div>
          </Reveal>
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] bg-white/90 p-4 shadow-[0_28px_50px_-32px_rgba(16,35,77,0.8)]">
              <img
                src={PRODUCT_IMAGE}
                alt="Astonish Antihongos Extra Fuerte"
                className="mx-auto aspect-square w-full object-contain mix-blend-multiply"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-[#10234D]/60 sm:px-8 md:flex-row md:items-start md:justify-between">
        <p className="max-w-xl">
          Antes de usar: lee y sigue las instrucciones del envase. No mezcles productos y ventila la
          zona.
        </p>
        <p className="font-semibold">Aseo Mira · Limpieza que sí ayuda</p>
      </section>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#10234D]/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <a
          href={CHECKOUT_URL}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#10234D] px-5 text-sm font-black text-white shadow-lg"
        >
          Comprar Astonish · $8.990 <ArrowRight className="size-4" />
        </a>
      </div>
    </main>
  );
}

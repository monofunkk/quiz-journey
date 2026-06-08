import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { track } from "@/lib/tracking";
import { recommendProducts, formatCLP, type QuizAnswers } from "@/data/products";
import { getAngle } from "@/data/angles";
import { SiteHeader } from "./SiteHeader";

type Option = { value: string; label: string; emoji?: string };
type Step = {
  key: keyof QuizAnswers;
  question: string;
  hint?: string;
  options?: Option[];
  type: "choice" | "lead";
};

const steps: Step[] = [
  {
    key: "gender",
    question: "¿Cuál es tu género?",
    type: "choice",
    options: [
      { value: "hombre", label: "Hombre", emoji: "👨" },
      { value: "mujer", label: "Mujer", emoji: "👩" },
      { value: "otro", label: "Prefiero no decir", emoji: "🌀" },
    ],
  },
  {
    key: "age",
    question: "¿Cuántos años tienes?",
    type: "choice",
    options: [
      { value: "18-29", label: "18 – 29" },
      { value: "30-39", label: "30 – 39" },
      { value: "40-49", label: "40 – 49" },
      { value: "50+", label: "50 o más" },
    ],
  },
  {
    key: "goal",
    question: "¿Cuál es tu objetivo principal?",
    type: "choice",
    options: [
      { value: "energia", label: "Más energía y foco", emoji: "⚡" },
      { value: "peso", label: "Bajar de peso", emoji: "🌱" },
      { value: "musculo", label: "Ganar músculo / recovery", emoji: "💪" },
      { value: "sueño", label: "Mejorar mi sueño", emoji: "🌙" },
      { value: "inmunidad", label: "Reforzar inmunidad", emoji: "🛡️" },
    ],
  },
  {
    key: "activity",
    question: "¿Qué tan activa es tu vida?",
    type: "choice",
    options: [
      { value: "sedentario", label: "Sedentaria — casi no entreno" },
      { value: "moderado", label: "Moderada — 1-2 veces/semana" },
      { value: "activo", label: "Activa — 3-4 veces/semana" },
      { value: "atleta", label: "Atleta — 5+ veces/semana" },
    ],
  },
  {
    key: "diet",
    question: "¿Cómo es tu alimentación?",
    type: "choice",
    options: [
      { value: "omnivoro", label: "Omnívora", emoji: "🍖" },
      { value: "vegetariano", label: "Vegetariana", emoji: "🥗" },
      { value: "vegano", label: "Vegana", emoji: "🌿" },
      { value: "keto", label: "Keto / baja en carbos", emoji: "🥑" },
    ],
  },
  {
    key: "email",
    question: "Tu plan está listo.",
    hint: "Déjanos tu email y nombre para enviarte tu plan + un 15% de descuento.",
    type: "lead",
  },
];

export function QuizFlow({ initialAngle }: { initialAngle?: string | null }) {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [done, setDone] = useState(false);
  const angle = useMemo(() => getAngle(initialAngle ?? undefined), [initialAngle]);

  useEffect(() => {
    track("quiz_start", { angle: initialAngle ?? null });
  }, [initialAngle]);

  const step = steps[stepIdx];
  const progress = ((stepIdx + (done ? 1 : 0)) / steps.length) * 100;

  const selectChoice = (val: string) => {
    const next = { ...answers, [step.key]: val };
    setAnswers(next);
    track(`quiz_step_${stepIdx + 1}`, { angle: initialAngle, key: step.key, value: val });
    setTimeout(() => advance(next), 200);
  };

  const advance = (curr: QuizAnswers = answers) => {
    if (stepIdx >= steps.length - 1) {
      track("quiz_complete", { angle: initialAngle, answers: curr });
      setDone(true);
    } else {
      setStepIdx(stepIdx + 1);
    }
  };

  const back = () => stepIdx > 0 && setStepIdx(stepIdx - 1);

  if (done) {
    const recs = recommendProducts(answers, angle?.productTags ?? []);
    const total = recs.reduce((s, p) => s + p.priceCLP, 0);
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="mx-auto max-w-3xl px-5 py-14">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block rounded-full bg-coral/15 px-3 py-1 text-xs uppercase tracking-widest text-coral">
              Tu plan Kore
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl">
              {answers.name ? `${answers.name}, ` : ""}
              esto es lo que tu cuerpo necesita.
            </h1>
            <p className="mt-3 text-muted-foreground">
              {angle
                ? `Basado en tu objetivo (${angle.badge.toLowerCase()}) y tus respuestas, esta es tu combinación óptima.`
                : "Basado en tus respuestas, esta es tu combinación óptima."}
            </p>
          </motion.div>

          <div className="mt-10 space-y-4">
            {recs.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5"
              >
                <div className={`grid h-20 w-20 shrink-0 place-items-center rounded-xl text-4xl ${p.color}`}>
                  {p.emoji}
                </div>
                <div className="flex-1">
                  <div className="font-display text-xl">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.tagline}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.benefits.map((b) => (
                      <span key={b} className="rounded-full bg-secondary px-2 py-0.5 text-[11px]">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg">{formatCLP(p.priceCLP)}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-primary p-6 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/70">Pack completo</div>
                <div className="font-display text-3xl">{formatCLP(Math.round(total * 0.85))}</div>
                <div className="text-xs text-primary-foreground/60 line-through">
                  {formatCLP(total)} · 15% off por completar el quiz
                </div>
              </div>
              <button
                onClick={() => track("cta_click", { location: "quiz_result", angle: initialAngle })}
                className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Comprar ahora →
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Envío gratis sobre $30.000 · Devolución 30 días · Hecho en Chile
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-5 py-10">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-muted-foreground">
            <button onClick={back} disabled={stepIdx === 0} className="disabled:opacity-30">
              ← Atrás
            </button>
            <span>Paso {stepIdx + 1} de {steps.length}</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={stepIdx}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className="font-display text-3xl md:text-4xl">{step.question}</h2>
            {step.hint && <p className="mt-2 text-muted-foreground">{step.hint}</p>}

            {step.type === "choice" && (
              <div className="mt-8 grid gap-3">
                {step.options!.map((opt) => {
                  const selected = answers[step.key] === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => selectChoice(opt.value)}
                      className={`flex items-center gap-3 rounded-xl border-2 px-5 py-4 text-left transition ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {opt.emoji && <span className="text-2xl">{opt.emoji}</span>}
                      <span className="font-medium">{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {step.type === "lead" && (
              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!answers.email || !answers.name) return;
                  track(`quiz_step_${stepIdx + 1}`, { angle: initialAngle, key: "lead" });
                  advance();
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={answers.name ?? ""}
                  onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                  className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-base focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="tu@email.cl"
                  value={answers.email ?? ""}
                  onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                  className="w-full rounded-xl border-2 border-border bg-card px-5 py-4 text-base focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-4 text-base font-medium text-primary-foreground hover:opacity-90"
                >
                  Ver mi plan personalizado →
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No compartimos tu información. Sin spam, lo prometemos.
                </p>
              </form>
            )}
          </motion.div>
        </AnimatePresence>

        {angle && (
          <div className="mt-12 rounded-xl bg-secondary/60 p-4 text-center text-xs text-muted-foreground">
            Personalizando tu plan para: <strong className="text-foreground">{angle.badge}</strong>{" "}
            · <Link to="/quiz" className="underline">cambiar</Link>
          </div>
        )}
      </div>
    </div>
  );
}

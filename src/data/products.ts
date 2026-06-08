export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  priceCLP: number;
  emoji: string; // placeholder visual
  color: string; // tailwind bg class
  tags: string[];
};

export const products: Product[] = [
  {
    id: "kore-energy",
    name: "Kore Energy",
    tagline: "Energía limpia, foco real",
    description: "Aminoácidos, B12 metilada, L-teanina y cafeína natural de té verde.",
    benefits: ["Foco de 8 horas", "Sin crash", "Sin jitter"],
    priceCLP: 24990,
    emoji: "⚡",
    color: "bg-[oklch(0.85_0.12_85)]",
    tags: ["energia", "foco", "atletas", "performance"],
  },
  {
    id: "kore-her",
    name: "Kore Her 40+",
    tagline: "Diseñado para tu nueva etapa",
    description: "Maca, ashwagandha, hierro quelado, D3+K2 y magnesio bisglicinato.",
    benefits: ["Balance hormonal", "Energía sostenida", "Huesos fuertes"],
    priceCLP: 29990,
    emoji: "🌿",
    color: "bg-[oklch(0.85_0.1_30)]",
    tags: ["mujeres40", "hormonas", "metabolismo"],
  },
  {
    id: "kore-recover",
    name: "Kore Recover",
    tagline: "Recovery sin compromisos",
    description: "Proteína whey aislada + colágeno hidrolizado + electrolitos completos.",
    benefits: ["Recuperación 2x", "Sin DOMS", "25g proteína"],
    priceCLP: 34990,
    emoji: "💪",
    color: "bg-[oklch(0.4_0.06_158)] text-cream",
    tags: ["atletas", "recovery", "performance"],
  },
  {
    id: "kore-lean",
    name: "Kore Lean",
    tagline: "Saciedad y metabolismo",
    description: "Glucomanano, fibra prebiótica, té verde y cromo. Sin estimulantes agresivos.",
    benefits: ["Cero antojos", "Metabolismo activo", "Sin temblor"],
    priceCLP: 22990,
    emoji: "🌱",
    color: "bg-[oklch(0.8_0.12_140)]",
    tags: ["peso", "saciedad", "metabolismo"],
  },
  {
    id: "kore-shield",
    name: "Kore Shield",
    tagline: "Inmunidad todo el año",
    description: "Zinc, vitamina C liposomal, D3, saúco y reishi.",
    benefits: ["Defensas arriba", "Menos resfriados", "Antiox potente"],
    priceCLP: 21990,
    emoji: "🛡️",
    color: "bg-[oklch(0.82_0.13_55)]",
    tags: ["inmunidad", "wellness"],
  },
  {
    id: "kore-sleep",
    name: "Kore Sleep",
    tagline: "Duerme profundo, despierta entero",
    description: "Magnesio bisglicinato, glicina, melatonina micro-dosis y l-teanina.",
    benefits: ["Te duermes rápido", "Sueño profundo", "Sin resaca"],
    priceCLP: 19990,
    emoji: "🌙",
    color: "bg-[oklch(0.4_0.08_260)] text-cream",
    tags: ["sueño", "wellness", "recovery", "mujeres40"],
  },
  {
    id: "kore-gut",
    name: "Kore Gut",
    tagline: "Tu segundo cerebro, en forma",
    description: "Probióticos multicepa 50B CFU + prebióticos + L-glutamina.",
    benefits: ["Digestión liviana", "Inmunidad", "Menos hinchazón"],
    priceCLP: 26990,
    emoji: "🦠",
    color: "bg-[oklch(0.85_0.08_180)]",
    tags: ["wellness", "inmunidad", "peso", "mujeres40"],
  },
  {
    id: "kore-protein-veg",
    name: "Kore Plant Protein",
    tagline: "Proteína vegetal completa",
    description: "Arveja + arroz + cáñamo. 24g proteína, perfil completo de aminoácidos.",
    benefits: ["100% vegana", "Sin gluten", "Sabor cacao"],
    priceCLP: 28990,
    emoji: "🌾",
    color: "bg-[oklch(0.75_0.1_100)]",
    tags: ["atletas", "performance", "recovery", "peso"],
  },
];

export type QuizAnswers = {
  gender?: string;
  age?: string;
  goal?: string;
  activity?: string;
  diet?: string;
  email?: string;
  name?: string;
};

export function recommendProducts(answers: QuizAnswers, angleTags: string[] = []): Product[] {
  const goalMap: Record<string, string[]> = {
    energia: ["energia", "foco"],
    peso: ["peso", "saciedad", "metabolismo"],
    musculo: ["atletas", "recovery", "performance"],
    sueño: ["sueño", "wellness"],
    inmunidad: ["inmunidad", "wellness"],
  };
  const activityMap: Record<string, string[]> = {
    atleta: ["atletas", "performance", "recovery"],
    activo: ["recovery", "energia"],
    moderado: ["wellness"],
    sedentario: ["wellness", "metabolismo"],
  };
  const ageBoost = answers.age === "40-49" || answers.age === "50+" ? ["mujeres40", "wellness"] : [];
  const dietFilter = (p: Product) => {
    if (answers.diet === "vegano" && p.id === "kore-recover") return false;
    return true;
  };

  const tagWeights: Record<string, number> = {};
  const add = (tags: string[], w: number) => tags.forEach((t) => (tagWeights[t] = (tagWeights[t] || 0) + w));
  add(angleTags, 3);
  if (answers.goal) add(goalMap[answers.goal] || [], 4);
  if (answers.activity) add(activityMap[answers.activity] || [], 2);
  add(ageBoost, 2);
  if (answers.gender === "mujer" && (answers.age === "40-49" || answers.age === "50+")) add(["mujeres40"], 3);

  const scored = products
    .filter(dietFilter)
    .map((p) => ({
      product: p,
      score: p.tags.reduce((sum, t) => sum + (tagWeights[t] || 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  const top = scored.filter((s) => s.score > 0).slice(0, 3).map((s) => s.product);
  return top.length >= 2 ? top : products.slice(0, 3);
}

export const formatCLP = (n: number) => `$${n.toLocaleString("es-CL")}`;

export type Angle = {
  slug: string;
  badge: string;
  headline: string;
  subheadline: string;
  heroAlt: string;
  heroGradient: string; // tailwind classes for hero bg accent
  painPoints: { title: string; body: string; icon: string }[];
  testimonials: { name: string; role: string; quote: string }[];
  ctaLabel: string;
  productTags: string[]; // priority tags for recommendations
};

export const angles: Record<string, Angle> = {
  energia: {
    slug: "energia",
    badge: "Energía sin crash",
    headline: "La energía que tu día exige, sin el bajón de las 3 PM.",
    subheadline:
      "Diseñado para profesionales que no pueden permitirse fallar. Energía limpia, foco sostenido, cero jitter.",
    heroAlt: "Profesional concentrado con energía",
    heroGradient: "from-forest via-forest to-[oklch(0.4_0.08_158)]",
    painPoints: [
      { title: "Adiós al café #4", body: "Aminoácidos y adaptógenos que sostienen sin sobre-estimular.", icon: "⚡" },
      { title: "Foco de 8 horas", body: "L-teanina + B12 metilada para claridad mental real.", icon: "🧠" },
      { title: "Sin crash", body: "Liberación gradual: estás encendido cuando lo necesitas.", icon: "📈" },
    ],
    testimonials: [
      { name: "Camila R.", role: "Consultora, Santiago", quote: "Dejé el tercer café. Termino el día con energía para el gym." },
      { name: "Diego M.", role: "Founder, Providencia", quote: "Mi productividad cambió. Las 4 PM ya no me destruyen." },
      { name: "Antonia P.", role: "Médica", quote: "Por fin algo que funciona sin que tiemble." },
    ],
    ctaLabel: "Descubre tu plan de energía",
    productTags: ["energia", "foco"],
  },
  "mujeres-40": {
    slug: "mujeres-40",
    badge: "Mujeres 40+",
    headline: "Tu cuerpo cambió. Tu nutrición también debería.",
    subheadline:
      "Fórmulas pensadas para el metabolismo y las hormonas después de los 40. Sin promesas vacías, con ciencia.",
    heroAlt: "Mujer 40+ activa y radiante",
    heroGradient: "from-[oklch(0.45_0.08_30)] via-coral to-[oklch(0.7_0.12_50)]",
    painPoints: [
      { title: "Metabolismo más lento", body: "Soporte tiroideo y termogénicos naturales sin estimulantes agresivos.", icon: "🔥" },
      { title: "Balance hormonal", body: "Maca, ashwagandha y magnesio para acompañar la perimenopausia.", icon: "🌿" },
      { title: "Huesos y energía", body: "Calcio quelado, vitamina D3 + K2, hierro biodisponible.", icon: "💪" },
    ],
    testimonials: [
      { name: "Paula V., 47", role: "Ñuñoa", quote: "Recuperé energía y dormí mejor en 3 semanas." },
      { name: "Marcela T., 52", role: "Las Condes", quote: "Por primera vez algo pensado para nosotras." },
      { name: "Ingrid S., 44", role: "Concepción", quote: "Dejé de hincharme y bajé 4 kilos sin sufrir." },
    ],
    ctaLabel: "Ver mi plan personalizado",
    productTags: ["mujeres40", "metabolismo", "hormonas"],
  },
  atletas: {
    slug: "atletas",
    badge: "Rendimiento atlético",
    headline: "Entrena duro. Recupera más rápido. Compite mejor.",
    subheadline:
      "Suplementación deportiva con dosis efectivas y materias primas trazables. Sin sellos de Achs porque no los necesita.",
    heroAlt: "Atleta entrenando",
    heroGradient: "from-charcoal via-forest to-charcoal",
    painPoints: [
      { title: "Recovery real", body: "Creatina monohidrato 5g + electrolitos completos por dosis.", icon: "🔋" },
      { title: "Más output", body: "Beta-alanina y citrulina malato en dosis clínicas.", icon: "🚀" },
      { title: "Sin dolor al día siguiente", body: "Proteína whey aislada + colágeno hidrolizado.", icon: "🏃" },
    ],
    testimonials: [
      { name: "Tomás A.", role: "Triatleta", quote: "Mis tiempos bajaron y no termino destruido." },
      { name: "Javiera L.", role: "CrossFit L2", quote: "Sin DOMS brutales. Puedo entrenar 5x semana." },
      { name: "Cristóbal F.", role: "Ciclista", quote: "Mejor recovery que con marcas internacionales." },
    ],
    ctaLabel: "Arma mi stack de performance",
    productTags: ["atletas", "performance", "recovery"],
  },
  "perdida-peso": {
    slug: "perdida-peso",
    badge: "Control de peso",
    headline: "Bajar de peso sin pasar hambre ni odiar tu vida.",
    subheadline:
      "Saciedad real, metabolismo activo, antojos bajo control. Sin dietas imposibles ni quemadores agresivos.",
    heroAlt: "Persona saludable y satisfecha",
    heroGradient: "from-[oklch(0.5_0.1_140)] via-forest to-[oklch(0.45_0.09_180)]",
    painPoints: [
      { title: "Saciedad de verdad", body: "Glucomanano + fibra prebiótica: 0 antojos de tarde.", icon: "🥗" },
      { title: "Metabolismo activo", body: "Té verde, L-carnitina y cromo en dosis efectivas.", icon: "🔥" },
      { title: "Sin perder músculo", body: "Proteína de calidad para mantener tu metabolismo basal.", icon: "💪" },
    ],
    testimonials: [
      { name: "Carolina B.", role: "Maipú", quote: "8 kilos en 3 meses, sin pasar hambre." },
      { name: "Ricardo H.", role: "La Florida", quote: "Por fin algo que no me hace temblar." },
      { name: "Sofía D.", role: "Viña del Mar", quote: "Lo mejor: dejé de picotear en la noche." },
    ],
    ctaLabel: "Descubre tu plan de control de peso",
    productTags: ["peso", "metabolismo", "saciedad"],
  },
  inmunidad: {
    slug: "inmunidad",
    badge: "Inmunidad & Wellness",
    headline: "Deja de resfriarte cada cambio de estación.",
    subheadline:
      "Sistema inmune fuerte todo el año. Vitaminas, minerales y adaptógenos en dosis que sí funcionan.",
    heroAlt: "Persona saludable al aire libre",
    heroGradient: "from-[oklch(0.55_0.15_60)] via-coral to-[oklch(0.5_0.12_40)]",
    painPoints: [
      { title: "Defensas arriba", body: "Zinc, vitamina C liposomal y D3 en dosis terapéuticas.", icon: "🛡️" },
      { title: "Gut health", body: "Probióticos multicepa: 80% de tu inmunidad vive ahí.", icon: "🦠" },
      { title: "Adaptógenos", body: "Reishi, astrágalo y saúco: tu cuerpo responde mejor al estrés.", icon: "🍄" },
    ],
    testimonials: [
      { name: "Andrea G.", role: "Profesora", quote: "Primer invierno sin enfermarme en años." },
      { name: "Felipe O.", role: "Padre de 3", quote: "Los virus pasan por la casa, yo no caigo." },
      { name: "Valentina N.", role: "Enfermera", quote: "Trabajo en hospital y no me he resfriado." },
    ],
    ctaLabel: "Refuerza tu inmunidad",
    productTags: ["inmunidad", "wellness"],
  },
};

export const getAngle = (slug?: string): Angle | null =>
  slug && angles[slug] ? angles[slug] : null;

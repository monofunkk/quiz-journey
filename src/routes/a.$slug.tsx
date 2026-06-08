import { createFileRoute, notFound } from "@tanstack/react-router";
import { AngleLanding } from "@/components/AngleLanding";
import { getAngle } from "@/data/angles";

export const Route = createFileRoute("/a/$slug")({
  loader: ({ params }) => {
    const angle = getAngle(params.slug);
    if (!angle) throw notFound();
    return { angle };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.angle;
    if (!a) return { meta: [{ title: "Kore Nutrition" }] };
    return {
      meta: [
        { title: `${a.headline} — Kore Nutrition` },
        { name: "description", content: a.subheadline },
        { property: "og:title", content: a.headline },
        { property: "og:description", content: a.subheadline },
      ],
    };
  },
  component: AnglePage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-4xl">Ángulo no encontrado</h1>
        <p className="mt-2 text-muted-foreground">Revisa la URL o vuelve al inicio.</p>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-3xl">Algo salió mal</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-4 rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">
          Reintentar
        </button>
      </div>
    </div>
  ),
});

function AnglePage() {
  const { angle } = Route.useLoaderData();
  return <AngleLanding angle={angle} />;
}

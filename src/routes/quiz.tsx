import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { QuizFlow } from "@/components/QuizFlow";

const searchSchema = z.object({
  angle: z.string().optional(),
});

export const Route = createFileRoute("/quiz")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Tu plan Kore en 60 segundos" },
      { name: "description", content: "Quiz personalizado para encontrar tu combinación ideal de suplementos." },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { angle } = Route.useSearch();
  return <QuizFlow initialAngle={angle ?? null} />;
}

import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
            K
          </div>
          <span className="font-display text-xl tracking-tight">Kore Nutrition</span>
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="/#productos" className="text-foreground/70 hover:text-foreground">Productos</a>
          <a href="/#ciencia" className="text-foreground/70 hover:text-foreground">Ciencia</a>
          <Link to="/quiz" className="text-foreground/70 hover:text-foreground">Quiz</Link>
        </nav>
        <Link
          to="/quiz"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90"
        >
          Empezar quiz
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="font-display text-2xl">Kore Nutrition</div>
          <p className="text-primary-foreground/70">© {new Date().getFullYear()} Kore. Hecho en Chile.</p>
        </div>
      </div>
    </footer>
  );
}

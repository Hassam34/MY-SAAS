import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of projects delivered by MIRSSA TECH LTD.",
};
export default function PortfolioPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Portfolio</h1>
      <p className="text-black/70 dark:text-white/70 mb-8">A selection of projects we have delivered.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <div key={id} className="rounded-lg border border-black/[.08] dark:border-white/[.145] p-4">
            <div className="h-32 rounded-md bg-black/[.04] dark:bg-white/[.06] mb-3" />
            <h3 className="font-semibold mb-1">Project {id}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">Short description of the project and outcomes.</p>
          </div>
        ))}
      </div>
    </section>
  );
}


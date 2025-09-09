export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Build your product with MySaaS</h1>
      <p className="text-black/70 dark:text-white/70 max-w-2xl mb-8">
        We design and develop web apps for startups and enterprises. Explore our portfolio and get in touch to start your project.
      </p>
      <div className="flex gap-4">
        <a className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90" href="/portfolio">
          View portfolio
        </a>
        <a className="inline-flex items-center rounded-md border border-black/[.08] dark:border-white/[.145] px-4 py-2 text-sm font-medium hover:bg-black/[.03] dark:hover:bg-white/[.06]" href="/contact">
          Contact us
        </a>
      </div>
    </section>
  );
}

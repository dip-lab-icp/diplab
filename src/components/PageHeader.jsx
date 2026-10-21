export default function PageHeader({ kicker, title, description, children }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {kicker && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-ember">
            {kicker}
          </p>
        )}
        <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
      <div className="h-px bg-gradient-to-r from-brand via-ember to-transparent" />
    </section>
  )
}

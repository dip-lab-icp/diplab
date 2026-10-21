export default function NewsCard({ news }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
      <div className="flex flex-wrap items-center gap-3">
        <time className="text-xs font-semibold uppercase tracking-[0.16em] text-ember">
          {formatDate(news.date)}
        </time>
        {news.category && (
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-navy">
            {news.category}
          </span>
        )}
      </div>
      <h3 className="mt-3 font-heading text-xl font-bold text-navy">{news.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/80">{news.description}</p>
    </article>
  )
}

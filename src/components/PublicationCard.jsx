import { ExternalLink } from 'lucide-react'

export default function PublicationCard({ publication }) {
  return (
    <article className="rounded-2xl border border-navy/10 border-l-4 border-l-ember bg-white p-6 shadow-card">
      <h3 className="font-heading text-lg font-bold leading-snug text-navy">
        {publication.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{publication.authors}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-navy">
          {publication.venue}
        </span>
        <span className="rounded-full bg-navy/5 px-3 py-1 text-xs font-medium text-brand">
          {publication.year}
        </span>
      </div>

      {publication.description && (
        <p className="mt-4 text-sm leading-relaxed text-ink/80">
          {publication.description}
        </p>
      )}

      {publication.pdfUrl && (
        <a
          href={publication.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-navy"
        >
          <span>View publication</span>
          <ExternalLink size={14} />
        </a>
      )}
    </article>
  )
}

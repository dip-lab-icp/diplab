import { ExternalLink } from 'lucide-react'

export default function PublicationCard({ publication }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-teal">
      {/* Title */}
      <h3 className="font-heading font-bold text-lg text-navy mb-2 line-clamp-2">
        {publication.title}
      </h3>

      {/* Authors */}
      <p className="text-sm text-gray-600 mb-3">
        {publication.authors}
      </p>

      {/* Venue and Year */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-block bg-light-gray text-navy px-3 py-1 rounded text-xs font-medium">
          {publication.venue}
        </span>
        <span className="inline-block bg-teal bg-opacity-10 text-teal px-3 py-1 rounded text-xs font-medium">
          {publication.year}
        </span>
      </div>

      {/* Description */}
      {publication.description && (
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {publication.description}
        </p>
      )}

      {/* PDF Link */}
      {publication.pdfUrl && (
        <a
          href={publication.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-teal hover:text-navy font-medium text-sm mt-2"
        >
          <span>View PDF</span>
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  )
}

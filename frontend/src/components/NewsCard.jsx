export default function NewsCard({ news }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        {/* Date */}
        <p className="text-xs text-teal font-semibold uppercase tracking-wide mb-2">
          {formatDate(news.date)}
        </p>

        {/* Title */}
        <h3 className="font-heading font-bold text-lg text-navy mb-3">
          {news.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {news.description}
        </p>

        {/* Category Badge */}
        {news.category && (
          <div className="mt-4">
            <span className="inline-block bg-light-gray text-navy px-3 py-1 rounded-full text-xs font-medium">
              {news.category}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

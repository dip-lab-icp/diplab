import { useEffect, useState } from 'react'
import { Search, FileText, Building2, Calendar } from 'lucide-react'
import PublicationCard from '../components/PublicationCard'
import PageHeader from '../components/PageHeader'
import { asset } from '../lib/site'

export default function Publications() {
  const [publications, setPublications] = useState([])
  const [filteredPublications, setFilteredPublications] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedYear, setSelectedYear] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPublications()
  }, [])

  const fetchPublications = async () => {
    try {
      const response = await fetch(asset('data/publications.json'))
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      const sorted = Array.isArray(data) ? data.sort((a, b) => b.year - a.year) : []
      setPublications(sorted)
      setFilteredPublications(sorted)
    } catch (error) {
      console.error('Error fetching publications:', error)
      setPublications([])
      setFilteredPublications([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let filtered = publications

    if (selectedYear !== 'all') {
      filtered = filtered.filter((pub) => pub.year.toString() === selectedYear)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (pub) =>
          pub.title.toLowerCase().includes(query) ||
          pub.authors.toLowerCase().includes(query) ||
          pub.venue.toLowerCase().includes(query)
      )
    }

    setFilteredPublications(filtered)
  }, [searchQuery, selectedYear, publications])

  const years = ['all', ...new Set(publications.map((pub) => pub.year.toString()))].sort(
    (a, b) => (a === 'all' ? -1 : b === 'all' ? 1 : b.localeCompare(a))
  )

  return (
    <div>
      <PageHeader
        kicker="Research"
        title="Publications"
        description="Selected research contributions from DIP Lab in computer vision, intelligent systems, and related fields."
      >
        {publications.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} />
              Latest: {publications[0].year}
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText size={16} />
              {publications.length} publication{publications.length !== 1 ? 's' : ''}
            </span>
          </div>
        )}
      </PageHeader>

      <section className="sticky top-[4.25rem] z-40 border-b border-navy/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="relative md:col-span-2">
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="search"
                placeholder="Search by title, authors, or venue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-navy/15 bg-white py-3 pl-11 pr-4 text-sm focus:border-brand"
              />
            </div>
            {years.length > 1 && (
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-full border border-navy/15 bg-white px-4 py-3 text-sm font-medium focus:border-brand"
                aria-label="Filter by year"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All years' : year}
                  </option>
                ))}
              </select>
            )}
          </div>
          {filteredPublications.length > 0 && (
            <p className="mt-3 text-sm text-muted">
              Showing {filteredPublications.length} of {publications.length} publication
              {publications.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {loading ? (
          <div className="py-20 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-navy/15 border-t-navy" />
            <p className="mt-4 text-sm text-muted">Loading publications…</p>
          </div>
        ) : filteredPublications.length > 0 ? (
          <div className="grid gap-5">
            {filteredPublications.map((pub) => (
              <PublicationCard key={`${pub.title}-${pub.year}`} publication={pub} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-navy/10 bg-white px-6 py-16 text-center">
            <FileText className="mx-auto mb-4 text-muted" size={40} />
            <p className="font-heading text-lg font-bold text-navy">
              {publications.length === 0
                ? 'No publications available yet'
                : 'No publications match your search'}
            </p>
            <p className="mt-2 text-sm text-muted">
              {searchQuery || selectedYear !== 'all'
                ? 'Try adjusting the title, author, or year filters.'
                : 'Check back soon for the latest research papers.'}
            </p>
            {(searchQuery || selectedYear !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedYear('all')
                }}
                className="btn-navy mt-6"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </section>

      {publications.length > 0 && (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-navy">
              Publication overview
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-navy/10 p-6 text-center">
                <FileText className="mx-auto mb-3 text-brand" size={28} />
                <p className="font-heading text-3xl font-bold text-navy">{publications.length}</p>
                <p className="mt-1 text-sm text-muted">Total publications</p>
              </div>
              <div className="rounded-2xl border border-navy/10 p-6 text-center">
                <Calendar className="mx-auto mb-3 text-brand" size={28} />
                <p className="font-heading text-3xl font-bold text-navy">
                  {Math.max(...publications.map((p) => p.year))}
                </p>
                <p className="mt-1 text-sm text-muted">Latest year</p>
              </div>
              <div className="rounded-2xl border border-navy/10 p-6 text-center">
                <Building2 className="mx-auto mb-3 text-brand" size={28} />
                <p className="font-heading text-3xl font-bold text-navy">
                  {new Set(publications.map((p) => p.venue)).size}
                </p>
                <p className="mt-1 text-sm text-muted">Unique venues</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

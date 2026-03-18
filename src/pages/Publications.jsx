import { useState, useEffect } from 'react'
import { Search, FileText, Users, Building2, Calendar } from 'lucide-react'
import PublicationCard from '../components/PublicationCard'

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
      const response = await fetch(import.meta.env.BASE_URL + 'data/publications.json')
      if (!response.ok) throw new Error('Failed to fetch')
      const data = await response.json()
      // Sort by year descending
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
      filtered = filtered.filter(
        (pub) =>
          pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
          pub.venue.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    setFilteredPublications(filtered)
  }, [searchQuery, selectedYear, publications])

  const years = ['all', ...new Set(publications.map((pub) => pub.year.toString()))].sort(
    (a, b) => (a === 'all' ? -1 : b === 'all' ? 1 : b.localeCompare(a))
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-teal py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <FileText className="text-white" size={40} />
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white">
                Publications
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-100 max-w-3xl">
            Explore our research contributions and academic publications across diverse fields of digital image processing and computer science.
          </p>
          {publications.length > 0 && (
            <div className="mt-6 flex gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span className="text-sm">Latest: {publications[0].year}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText size={18} />
                <span className="text-sm">{publications.length} Publication{publications.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="bg-light-gray py-6 px-4 sm:px-6 lg:px-8 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2 relative">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search publications by title, authors, or venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal focus:ring-opacity-50 transition"
              />
            </div>

            {/* Year Filter */}
            {years.length > 1 && (
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal focus:ring-opacity-50 transition font-medium"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : `Year ${year}`}
                  </option>
                ))}
              </select>
            )}
          </div>

          {filteredPublications.length > 0 && (
            <p className="mt-4 text-sm text-gray-600 font-medium">
              📚 Showing {filteredPublications.length} of {publications.length} publication{publications.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal"></div>
              </div>
              <p className="text-gray-600 mt-4 font-medium">Loading publications...</p>
            </div>
          ) : filteredPublications.length > 0 ? (
            <div className="grid gap-6">
              {filteredPublications.map((pub, idx) => (
                <PublicationCard key={idx} publication={pub} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-light-gray rounded-lg">
              <FileText className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 text-lg font-medium mb-2">
                {publications.length === 0
                  ? 'No publications available yet'
                  : 'No publications match your search'}
              </p>
              <p className="text-gray-500 text-sm mb-6">
                {searchQuery || selectedYear !== 'all'
                  ? 'Try adjusting your search criteria'
                  : 'Check back soon for our latest research papers'}
              </p>
              {(searchQuery || selectedYear !== 'all') && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedYear('all')
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-teal text-white rounded-lg hover:bg-navy transition font-medium"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {publications.length > 0 && (
        <section className="bg-light-gray py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-2xl text-navy mb-8 text-center">
              Publication Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
                <FileText className="text-teal mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-navy mb-2">{publications.length}</p>
                <p className="text-gray-600 font-medium">Total Publications</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
                <Calendar className="text-teal mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-navy mb-2">
                  {Math.max(...publications.map((p) => p.year))}
                </p>
                <p className="text-gray-600 font-medium">Latest Year</p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
                <Building2 className="text-teal mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-navy mb-2">
                  {new Set(publications.map((p) => p.venue)).size}
                </p>
                <p className="text-gray-600 font-medium">Unique Venues</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

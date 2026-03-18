import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch(import.meta.env.BASE_URL + 'data/news.json')
      const data = await response.json()
      setNews(data.sort((a, b) => new Date(b.date) - new Date(a.date)))
    } catch (error) {
      console.error('Error fetching news:', error)
      setNews([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-teal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Lab News & Updates
          </h1>
          <p className="text-lg text-gray-100">
            Latest announcements and achievements from DIP Lab
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-600">Loading news...</p>
          ) : news.length > 0 ? (
            <div className="grid gap-6">
              {news.map((newsItem, idx) => (
                <NewsCard key={idx} news={newsItem} />
              ))}
            </div>
          ) : (
            <div className="bg-light-gray rounded-lg p-12 text-center">
              <p className="text-gray-600 text-lg">No news items available yet</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl text-navy mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest news and announcements from DIP Lab directly in your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
            />
            <button className="bg-teal text-white font-bold px-8 py-3 rounded hover:bg-navy transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

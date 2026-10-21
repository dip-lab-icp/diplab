import { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import PageHeader from '../components/PageHeader'
import { asset } from '../lib/site'

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(asset('data/news.json'))
      .then((response) => response.json())
      .then((data) => {
        const list = Array.isArray(data)
          ? data.sort((a, b) => new Date(b.date) - new Date(a.date))
          : []
        setNews(list)
      })
      .catch((error) => {
        console.error('Error fetching news:', error)
        setNews([])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <PageHeader
        kicker="Updates"
        title="Lab news"
        description="Announcements and notes from the Digital Image Processing Laboratory."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {loading ? (
          <p className="text-center text-muted">Loading news…</p>
        ) : news.length > 0 ? (
          <div className="grid gap-5">
            {news.map((newsItem) => (
              <NewsCard key={`${newsItem.title}-${newsItem.date}`} news={newsItem} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-navy/10 bg-white px-6 py-16 text-center">
            <p className="text-lg text-muted">No news items available yet.</p>
          </div>
        )}
      </section>
    </div>
  )
}

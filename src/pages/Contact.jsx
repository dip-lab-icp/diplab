import { useState } from 'react'
import { MapPin, ExternalLink } from 'lucide-react'
import emailjs from '@emailjs/browser'
import PageHeader from '../components/PageHeader'
import { OrgProfileCards } from '../components/OrgLinks'
import { MAPS_EMBED, MAPS_URL, SCHOLAR_URL } from '../lib/site'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: '201350@icp.edu.pk',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      alert('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <PageHeader
        kicker="Contact"
        title="Get in touch"
        description="Write to the laboratory, visit the campus, or follow DIP Lab on GitHub and Hugging Face."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-heading text-2xl font-bold text-navy">Send a message</h2>
            <p className="mt-2 text-sm text-muted">
              Inquiries about research, collaboration, and visiting the lab are welcome.
            </p>

            {submitted && (
              <div className="mt-6 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800" role="status">
                Thank you for your message. We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm focus:border-brand"
                  placeholder="Muhammad Ali"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-navy/15 px-4 py-3 text-sm focus:border-brand"
                  placeholder="ali@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-y rounded-xl border border-navy/15 px-4 py-3 text-sm focus:border-brand"
                  placeholder="Tell us about your inquiry"
                />
              </div>
              <button type="submit" disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:bg-muted">
                {loading ? 'Sending…' : 'Submit'}
              </button>
            </form>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-navy/10 bg-white p-6">
            <div className="mb-3 flex items-start gap-3">
              <MapPin className="mt-0.5 text-brand" size={20} />
              <div>
                <h2 className="font-heading text-lg font-bold text-navy">Address</h2>
                <address className="mt-2 not-italic text-sm leading-relaxed text-ink/80">
                  Academic Block
                  <br />
                  Islamia College Peshawar
                  <br />
                  25120, Khyber Pakhtunkhwa
                  <br />
                  Pakistan
                </address>
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-navy"
            >
              Open in Maps
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-6">
            <h2 className="font-heading text-lg font-bold text-navy">Lab details</h2>
            <dl className="mt-3 space-y-2 text-sm text-ink/80">
              <div>
                <dt className="font-semibold text-navy">Department</dt>
                <dd>Computer Science</dd>
              </div>
              <div>
                <dt className="font-semibold text-navy">University</dt>
                <dd>Islamia College Peshawar</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-6">
            <h2 className="font-heading text-lg font-bold text-navy">Scholar</h2>
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-navy"
            >
              Google Scholar
              <ExternalLink size={14} />
            </a>
          </div>
        </aside>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-navy">Organization profiles</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            The laboratory’s official GitHub and Hugging Face organizations.
          </p>
          <div className="mt-6">
            <OrgProfileCards />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-heading text-2xl font-bold text-navy">Location</h2>
        <div className="aspect-video w-full overflow-hidden rounded-3xl border border-navy/10 shadow-card">
          <iframe
            src={MAPS_EMBED}
            title="Map of Academic Block, Islamia College Peshawar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}

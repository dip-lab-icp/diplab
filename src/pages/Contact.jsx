import { useState } from 'react'
import { MapPin, Mail, ExternalLink } from 'lucide-react'
import emailjs from '@emailjs/browser'

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
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-teal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-100">
            We'd love to hear from you. Send us a message or visit our lab
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="font-heading font-bold text-2xl text-navy mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                    placeholder="Muhammad Ali"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                    placeholder="ali@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal resize-none"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-teal text-white font-bold px-6 py-3 rounded hover:bg-navy transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-light-gray rounded-lg p-6">
              <div className="flex items-start space-x-3 mb-3">
                <MapPin className="text-teal mt-1" size={24} />
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-2">Address</h3>
                  <p className="text-sm text-gray-700">Academic Block</p>
                  <p className="text-sm text-gray-700">Islamia College Peshawar</p>
                  <p className="text-sm text-gray-700">25120, Khyber Pakhtunkhwa</p>
                  <p className="text-sm text-gray-700">Pakistan</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/Academic+Block,+Islamia+College+Peshawar/@33.9996942,71.4734493,17z/data=!4m14!1m7!3m6!1s0x38d910d324a9cf0d:0xf2df847901c6501!2sIslamia+College+University+Peshawar!8m2!3d33.9996942!4d71.4760242!16zL20vMDNfZF9q!3m5!1s0x38d911371d17fd6d:0x30ea1849152c699e!8m2!3d34.0005011!4d71.4747474!16s%2Fg%2F11ffv262ky?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-teal hover:text-navy font-medium text-sm mt-3"
              >
                <span>Open in Maps</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Academic Info */}
            <div className="bg-light-gray rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg text-navy mb-3">Lab Details</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>Department:</strong> Computer Science
                </p>
                <p>
                  <strong>University:</strong> Islamia College Peshawar
                </p>
              </div>
            </div>

            {/* Connect */}
            <div className="bg-light-gray rounded-lg p-6">
              <h3 className="font-heading font-bold text-lg text-navy mb-3">Connect</h3>
              <a
                href="https://scholar.google.com/citations?user=E4-dElIAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-teal hover:text-navy font-medium"
              >
                <span>Google Scholar</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-navy mb-8 text-center">
            Our Location
          </h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d292.3618177254085!2d71.47450203827478!3d34.0003316207537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d911371d17fd6d%3A0x30ea1849152c699e!2sAcademic%20Block%2C%20Islamia%20College%20Peshawar!5e0!3m2!1sen!2s!4v1773642199323!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

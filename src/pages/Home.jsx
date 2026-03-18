import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const researchAreas = [
    {
      title: 'Computer Vision',
      description: 'Advanced techniques for image understanding and analysis',
      icon: '👁️',
    },
    {
      title: 'Deep Learning',
      description: 'Neural networks for complex pattern recognition',
      icon: '🧠',
    },
    {
      title: 'Autonomous Navigation',
      description: 'Navigation systems for autonomous vehicles and robots',
      icon: '🚗',
    },
    {
      title: 'Violence & Anomaly Detection',
      description: 'Detection systems for surveillance and security',
      icon: '🔍',
    },
    {
      title: 'Multimodal AI',
      description: 'Fusion of multiple data modalities for advanced AI',
      icon: '🔗',
    },
    {
      title: 'Video Surveillance',
      description: 'Intelligent monitoring and analysis systems',
      icon: '📹',
    },
  ]

  const impactStats = [
    { label: 'Established', value: '2015' },
    { label: 'Alumni', value: '50+' },
    { label: 'Countries', value: '7+' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy via-navy to-teal py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl text-white mb-4">
              Digital Image Processing Laboratory
            </h1>
            <p className="text-xl text-gray-100 mb-6 leading-relaxed">
              Advancing Vision Through Research
            </p>
            <p className="text-gray-200 text-lg mb-8">
              Leading research in computer vision, deep learning, and autonomous systems since 2015.
            </p>
            <Link
              to="/research"
              className="inline-flex items-center space-x-2 bg-teal text-navy font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors"
            >
              <span>Explore Research</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/dip_lab_logo.webp"
              alt="DIP Lab Logo"
              className="w-64 h-64 rounded-full shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-light-gray py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="font-heading font-bold text-3xl text-navy mb-1">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-4xl text-navy mb-8 text-center">
            About DIP Lab
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            The Digital Image Processing Laboratory at Islamia College Peshawar is dedicated to
            advancing research in computer vision, deep learning, and image processing. Since our
            establishment in 2015, we have fostered a culture of innovation and academic excellence,
            producing researchers who are now pursuing studies and careers at leading institutions
            worldwide.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-4xl text-navy mb-12 text-center">
            Research Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="font-heading font-bold text-lg text-navy mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/research"
              className="inline-block bg-teal text-white font-bold px-8 py-3 rounded-lg hover:bg-navy transition-colors"
            >
              View All Research Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl mb-4">
            Collaborate With Us
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our dynamic research team or explore collaboration opportunities
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal text-navy font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

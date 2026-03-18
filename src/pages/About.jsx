import { ExternalLink } from 'lucide-react'
import MemberCard from '../components/MemberCard'

export default function About() {
  const piProfile = {
    name: 'Dr. Muhammad Sajjad',
    role: 'Associate Professor & Principal Investigator',
    scholarUrl: 'https://scholar.google.com/citations?user=E4-dElIAAAAJ&hl=en&oi=ao',
    personalWebsite: 'https://qazimsajjad.github.io/',
  }

  const countries = [
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'Spain', flag: '🇪🇸' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-teal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            About DIP Lab
          </h1>
          <p className="text-lg text-gray-100">
            Understanding our mission, history, and global impact
          </p>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-3xl text-navy mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The Digital Image Processing (DIP) Laboratory is a state-of-the-art and well-established research laboratory of 
              Islamia College Peshawar (Public Sector University) based in Peshawar, Pakistan. The DIP Lab was founded in 2015 
              and since its inception, it has had a strong track record of publications in cutting-edge research areas of Artificial 
              Intelligence (AI) and computer vision, including medical imaging, autonomous navigation and surveillance 
              systems.  
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The lab also has a strong alumni network throughout the world, working in both academia and industry.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-3xl text-navy mb-4">
              Our Achievements
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-teal font-bold text-xl">✓</span>
                <span>
                  <strong>50+ Alumni</strong> pursuing or having completed higher studies at leading
                  universities worldwide
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal font-bold text-xl">✓</span>
                <span>
                  <strong>Fully funded scholarships</strong> for graduates to top institutions
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal font-bold text-xl">✓</span>
                <span>
                  <strong>International presence</strong> across 7 countries
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-teal font-bold text-xl">✓</span>
                <span>
                  <strong>Active research collaboration</strong> with universities globally
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PI Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-navy mb-12 text-center">
            Principal Investigator
          </h2>
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="w-32 h-32 bg-navy rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-5xl">👨‍🎓</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-navy mb-2">
              {piProfile.name}
            </h3>
            <p className="text-teal font-semibold mb-6">{piProfile.role}</p>
            <p className="text-gray-600 text-sm mb-6">
              Leading research initiatives in computer vision, deep learning, and image processing
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href={piProfile.personalWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-navy text-white font-bold px-6 py-2 rounded-lg hover:bg-teal transition-colors"
              >
                <span>Personal Website</span>
                <ExternalLink size={18} />
              </a>
              <a
                href={piProfile.scholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-teal text-white font-bold px-6 py-2 rounded-lg hover:bg-navy transition-colors"
              >
                <span>Google Scholar</span>
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Alumni Network */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-navy mb-4 text-center">
            Our Global Alumni Network
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our alumni have established themselves at leading institutions across the world
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {countries.map((country, idx) => (
              <div
                key={idx}
                className="bg-light-gray rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-3">{country.flag}</div>
                <p className="font-semibold text-navy text-sm">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-8">
            Visit Our Lab
          </h2>
          <div className="space-y-4 text-lg mb-8">
            <p className="font-semibold">Academic Block</p>
            <p>Islamia College Peshawar</p>
            <p>25120, Khyber Pakhtunkhwa</p>
            <p>Pakistan</p>
          </div>
          <a
            href="https://maps.google.com/?q=Islamia+College+Peshawar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal text-navy font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  )
}

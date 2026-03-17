import { useState, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import MemberCard from '../components/MemberCard'

export default function Members() {
  const [members, setMembers] = useState({
    pi: {
      name: 'Dr. Muhammad Sajjad',
      role: 'Associate Professor & Principal Investigator',
      website: 'https://qazimsajjad.github.io/'
    },
    phd_researchers: [],
    st_researchers: [
      {
        name: 'Bilal Ahmad',
        role: 'Research Assistant',
        thesis: 'Weakly Supervised Multimodal Fusion for Violence Detection using Bottleneck Transformer',
      },
      {
        name: 'Imran Nawar',
        role: 'Research Assistant',
        thesis: 'Deep Learning Assisted Autonomous Navigation Over Economical Hardware',
        github: 'https://github.com/ImranNawar',
        website: 'https://imrannawar.vercel.app/'
      },
      {
        name: 'Muhammad Saqib',
        role: 'Research Assistant',
        thesis: 'Multimodal Anomaly Detection',
      },
      {
        name: 'Muhammad Farooq',
        role: 'Research Assistant',
        thesis: 'Deepfake Detection',
      },
      {
        name: 'Asad Khan',
        role: 'Research Assistant',
        thesis: 'Research in Deep Learning',
      },
      {
        name: 'Assad Ullah',
        role: 'Research Assistant',
        thesis: 'Deep Learning-Based Mosquito Breeding Site Detection and Segmentation Using YOLO Architectures',
      },
      {
        name: 'Abdul Haq',
        role: 'Research Assistant',
        thesis: 'Automated Epileptic Seizure Detection using AI and Electroencephalogram (EEG) Signal Analysis',
      },
      { name: 'Zaqeem Khan', role: 'Research Assistant' },
      { name: 'Muhammad Irfan', role: 'Research Assistant' },
    ],
  })

  return (
    <div className="min-h-screen">

      <section className="bg-gradient-to-r from-navy to-teal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Lab Members
          </h1>
          <p className="text-lg text-gray-100">Meet our research team and collaborators</p>
        </div>
      </section>

      {/* PI Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-navy mb-12 text-center">
            Principal Investigator
          </h2>
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-teal">
              <div className="w-32 h-32 bg-light-gray rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl">👨‍🎓</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">
                {members.pi.name}
              </h3>
              <p className="text-teal font-semibold mb-6">{members.pi.role}</p>
              {members.pi.website && (
                <a
                  href={members.pi.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-navy text-white font-bold px-6 py-2 rounded-lg hover:bg-teal transition-colors"
                >
                  <span>Personal Website</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {members.st_researchers.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-navy mb-12 text-center">
              Research Assistant
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.st_researchers.map((member, idx) => (
                <MemberCard key={idx} member={member} showThesis={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We are always looking for motivated researchers and students interested in artificial intelligence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal text-navy font-bold px-8 py-3 rounded-lg hover:bg-white transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

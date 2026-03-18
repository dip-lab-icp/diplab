export default function Research() {
  const researchAreas = [
    {
      title: 'Computer Vision',
      icon: '👁️',
      description:
        'Developing advanced techniques for image understanding, object detection, segmentation, and scene analysis using traditional and deep learning approaches.',
      technologies: ['ViT', 'Image Segmentation', 'Object Detection'],
    },
    {
      title: 'Deep Learning & Neural Networks',
      icon: '🧠',
      description:
        'Designing and training deep neural networks for complex pattern recognition, classification, and feature extraction tasks.',
      technologies: ['Transformers', 'LLMs', 'VLMs'],
    },
    {
      title: 'Autonomous Navigation',
      icon: '🚗',
      description:
        'Creating navigation systems for autonomous vehicles and robots using computer vision and sensor fusion on economical hardware.',
      technologies: ['SLAM', 'Path Planning', 'Sensor Fusion'],
    },
    {
      title: 'Violence & Anomaly Detection',
      icon: '🔍',
      description:
        'Developing intelligent systems for detecting violent activities and anomalies in video streams for surveillance applications.',
      technologies: ['Weakly Supervised Learning', 'Video Analysis', 'Action Recognition'],
    },
    {
      title: 'Multimodal AI & Fusion',
      icon: '🔗',
      description:
        'Integrating multiple data modalities (vision, audio, text) for enhanced understanding and more robust AI systems.',
      technologies: ['Bottleneck Transformers', 'Feature Fusion', 'Cross-modal Learning'],
    },
    {
      title: 'Video Surveillance',
      icon: '📹',
      description:
        'Building intelligent monitoring systems for real-time analysis, event detection, and security applications.',
      technologies: ['Real-time Processing', 'Event Detection', 'Tracking'],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-navy to-teal py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Research Areas
          </h1>
          <p className="text-lg text-gray-100">
            Cutting-edge research in computer vision and deep learning
          </p>
        </div>
      </section>

      {/* Research Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border-t-4 border-teal group"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {area.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.technologies.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="text-xs bg-light-gray text-navy px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl text-navy mb-8">
            Collaborative Research
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
            We actively collaborate with research groups and institutions worldwide to advance
            knowledge in computer vision and deep learning. Our research outputs contribute to both
            academic literature and practical applications in industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading font-bold text-xl text-navy mb-3">
                International Partnerships
              </h3>
              <p className="text-gray-600">
                Collaborations with universities and research centers in multiple countries
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="font-heading font-bold text-xl text-navy mb-3">
                Industry Projects
              </h3>
              <p className="text-gray-600">
                Applied research addressing real-world challenges in surveillance and autonomous systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

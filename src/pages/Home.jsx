import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cpu,
  Eye,
  Layers,
  Navigation,
  Shield,
  Video,
} from 'lucide-react'
import { asset } from '../lib/site'
import { principalInvestigator, researchAssistants } from '../data/members'

export default function Home() {
  const [featuredPublication, setFeaturedPublication] = useState(null)

  useEffect(() => {
    fetch(asset('data/publications.json'))
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        const list = Array.isArray(data) ? [...data].sort((a, b) => b.year - a.year) : []
        setFeaturedPublication(list[0] || null)
      })
      .catch(() => setFeaturedPublication(null))
  }, [])

  const researchAreas = [
    {
      title: 'Computer Vision',
      description: 'Image understanding, visual recognition, and analysis for real-world scenes.',
      icon: Eye,
    },
    {
      title: 'Deep Learning',
      description: 'Neural architectures for pattern recognition across images, video, and signals.',
      icon: Cpu,
    },
    {
      title: 'Autonomous Navigation',
      description: 'Perception and navigation systems for autonomous vehicles and robots.',
      icon: Navigation,
    },
    {
      title: 'Violence & Anomaly Detection',
      description: 'Intelligent detection systems for surveillance and public safety.',
      icon: Shield,
    },
    {
      title: 'Multimodal AI',
      description: 'Fusion of vision, language, and complementary modalities for richer models.',
      icon: Layers,
    },
    {
      title: 'Video Surveillance',
      description: 'Temporal analysis and intelligent monitoring of video streams.',
      icon: Video,
    },
  ]

  const impactStats = [
    { label: 'Established', value: '2015' },
    { label: 'Alumni', value: '50+' },
    { label: 'Countries', value: '7+' },
  ]

  return (
    <div>
      <section className="relative overflow-hidden bg-navy text-white">
        <img
          src={asset('images/islamia_college_peshawar.webp')}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/70" />
        <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:px-8">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-ember">
              Islamia College Peshawar · Since 2015
            </p>
            <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
              Digital Image Processing Laboratory
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              An AI and computer vision research group working on medical imaging,
              autonomous navigation, surveillance, and multimodal vision-language systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/publications" className="btn-primary">
                Explore research
                <ArrowRight size={16} />
              </Link>
              <Link to="/members" className="btn-secondary">
                Meet the team
              </Link>
              <Link to="/contact" className="btn-secondary">
                Collaborate
              </Link>
            </div>
          </div>

          <div className="justify-self-center">
            <div className="rounded-3xl border border-white/15 bg-white p-5 shadow-card">
              <img
                src={asset('images/dip_lab_logo.webp')}
                alt="DIP Lab logo"
                className="h-56 w-56 object-contain md:h-64 md:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-card">
          {impactStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-4 py-6 text-center ${idx > 0 ? 'border-l border-navy/10' : ''}`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </p>
              <p className="mt-2 font-heading text-2xl font-bold text-navy md:text-3xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="section-kicker">The laboratory</p>
            <h2 className="section-heading">Research with international reach</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink/80 md:text-lg">
            <p>
              The Digital Image Processing Laboratory at Islamia College Peshawar advances
              research in computer vision, deep learning, and image processing. Since 2015
              the lab has built a culture of careful experimental work and academic
              collaboration.
            </p>
            <p>
              Alumni from the group now continue their studies and careers at institutions
              across multiple countries, while current researchers work on medical image
              analysis, video understanding, and multimodal AI.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-navy">
              About the lab
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Focus</p>
          <h2 className="section-heading">Research areas</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => {
              const Icon = area.icon
              return (
                <article
                  key={area.title}
                  className="rounded-2xl border border-navy/10 bg-paper p-6 transition-colors hover:border-brand/40 hover:bg-white"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <article className="rounded-3xl bg-navy p-8 text-white md:p-10">
          <p className="section-kicker">Principal investigator</p>
          <h2 className="font-heading text-3xl font-bold">{principalInvestigator.name}</h2>
          <p className="mt-2 text-sm text-white/70">{principalInvestigator.role}</p>
          <p className="mt-2 text-sm text-white/70">{principalInvestigator.affiliation}</p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
            Founder of DIP Lab, with research in medical image analysis, video summarization,
            content-based retrieval, and multimodal vision-language models, and active
            collaborations with Sejong University and NTNU.
          </p>
          <Link to="/about" className="btn-primary mt-8">
            Read the full profile
            <ArrowRight size={16} />
          </Link>
        </article>

        <article className="flex flex-col justify-between rounded-3xl border border-navy/10 bg-white p-8 shadow-card">
          <div>
            <p className="section-kicker">Selected publication</p>
            {featuredPublication ? (
              <>
                <h2 className="font-heading text-2xl font-bold leading-snug text-navy">
                  {featuredPublication.title}
                </h2>
                <p className="mt-3 text-sm text-muted">
                  {featuredPublication.venue} · {featuredPublication.year}
                </p>
              </>
            ) : (
              <p className="text-sm text-muted">Recent publications are listed on the research page.</p>
            )}
          </div>
          <Link
            to="/publications"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-navy"
          >
            All publications
            <ArrowRight size={16} />
          </Link>
        </article>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-kicker">People</p>
              <h2 className="section-heading">Current researchers</h2>
            </div>
            <Link to="/members" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-navy">
              View all members
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchAssistants.slice(0, 6).map((member) => (
              <div key={member.name} className="rounded-2xl border border-navy/10 p-5">
                <p className="font-heading font-bold text-navy">{member.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {member.thesis || member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="section-kicker">Collaborate</p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Work with DIP Lab
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            Students, researchers, and partners are welcome to get in touch about
            supervision, collaboration, and visits to the laboratory.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

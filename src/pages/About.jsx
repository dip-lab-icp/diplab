import { ExternalLink } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { OrgProfileCards } from '../components/OrgLinks'
import { asset, MAPS_URL } from '../lib/site'
import { principalInvestigator } from '../data/members'

export default function About() {
  const countries = [
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'USA', flag: '🇺🇸' },
    { name: 'UK', flag: '🇬🇧' },
    { name: 'UAE', flag: '🇦🇪' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Spain', flag: '🇪🇸' },
  ]

  const achievements = [
    {
      title: '50+ alumni',
      text: 'Pursuing or having completed higher studies at leading universities worldwide.',
    },
    {
      title: 'Fully funded scholarships',
      text: 'Graduates have moved on to top institutions with fully funded opportunities.',
    },
    {
      title: 'International presence',
      text: 'An alumni network spanning more than seven countries.',
    },
    {
      title: 'Active collaboration',
      text: 'Ongoing research partnerships with universities internationally.',
    },
  ]

  return (
    <div>
      <PageHeader
        kicker="About"
        title="A computer vision laboratory at Islamia College Peshawar"
        description="Founded in 2015, DIP Lab conducts research in artificial intelligence, image processing, and visual understanding."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-20">
        <div>
          <p className="section-kicker">Mission</p>
          <h2 className="section-heading">What we work on</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
            <p>
              The Digital Image Processing Laboratory is a research laboratory of
              Islamia College Peshawar, a public-sector university based in Peshawar,
              Pakistan. Since its founding in 2015, the lab has published in artificial
              intelligence and computer vision, including medical imaging, autonomous
              navigation, and surveillance systems.
            </p>
            <p>
              The laboratory also maintains a strong alumni network, with graduates
              working in academia and industry around the world.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-navy/10 shadow-card">
          <img
            src={asset('images/islamia_college_peshawar.webp')}
            alt="Islamia College Peshawar campus"
            className="h-full min-h-[240px] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Impact</p>
          <h2 className="section-heading">Our achievements</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {achievements.map((item) => (
              <article key={item.title} className="rounded-2xl border border-navy/10 bg-paper p-6">
                <h3 className="font-heading text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Leadership</p>
          <h2 className="section-heading">Principal investigator</h2>

          <div className="mt-10 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-card">
            <div className="grid md:grid-cols-[minmax(240px,320px)_1fr]">
              <div className="bg-navy/5">
                <img
                  src={asset(principalInvestigator.image)}
                  alt={`Portrait of ${principalInvestigator.name}`}
                  width="640"
                  height="800"
                  className="h-72 w-full object-cover object-[center_18%] sm:h-96 md:h-full md:min-h-[28rem]"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <h3 className="font-heading text-2xl font-bold text-navy md:text-3xl">
                  {principalInvestigator.name}
                </h3>
                <p className="mt-2 font-medium text-brand">{principalInvestigator.role}</p>
                <p className="mt-1 text-sm text-muted">{principalInvestigator.affiliation}</p>
                <p className="mt-6 text-base leading-relaxed text-ink/80">
                  {principalInvestigator.biography}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={principalInvestigator.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-navy"
                  >
                    Personal website
                    <ExternalLink size={15} />
                  </a>
                  <a
                    href={principalInvestigator.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy hover:border-brand hover:text-brand"
                  >
                    Google Scholar
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="section-kicker">Open research</p>
        <h2 className="section-heading">Code and models</h2>
        <p className="mt-4 max-w-2xl text-ink/75">
          Follow the laboratory on GitHub and Hugging Face for organizational repositories
          and shared models.
        </p>
        <div className="mt-8">
          <OrgProfileCards />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Alumni</p>
          <h2 className="section-heading">A global network</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Alumni from DIP Lab have gone on to institutions across the world.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {countries.map((country) => (
              <div
                key={country.name}
                className="rounded-2xl border border-navy/10 bg-paper px-3 py-5 text-center"
              >
                <div className="text-3xl" aria-hidden="true">
                  {country.flag}
                </div>
                <p className="mt-2 text-sm font-semibold text-navy">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

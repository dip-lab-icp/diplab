import { ExternalLink } from 'lucide-react'
import MemberCard from '../components/MemberCard'
import PageHeader from '../components/PageHeader'
import { asset } from '../lib/site'
import { principalInvestigator, researchAssistants } from '../data/members'

export default function Members() {
  return (
    <div>
      <PageHeader
        kicker="People"
        title="Lab members"
        description="Researchers working on computer vision, deep learning, and intelligent visual systems at DIP Lab."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="section-kicker">Leadership</p>
        <h2 className="section-heading">Principal investigator</h2>
        <div className="mt-8 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-card">
          <div className="grid items-center md:grid-cols-[220px_1fr]">
            <img
              src={asset(principalInvestigator.image)}
              alt={`Portrait of ${principalInvestigator.name}`}
              width="640"
              height="800"
              className="h-64 w-full object-cover object-[center_18%] md:h-full"
            />
            <div className="p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-navy">
                {principalInvestigator.name}
              </h3>
              <p className="mt-1 font-medium text-brand">{principalInvestigator.role}</p>
              <p className="mt-1 text-sm text-muted">{principalInvestigator.affiliation}</p>
              {principalInvestigator.website && (
                <a
                  href={principalInvestigator.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy mt-6"
                >
                  Personal website
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="section-kicker">Team</p>
          <h2 className="section-heading">Research assistants</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {researchAssistants.map((member) => (
              <MemberCard key={member.name} member={member} showThesis={true} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold">Join the team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/75">
            We welcome motivated researchers and students interested in artificial
            intelligence and computer vision.
          </p>
          <a href="mailto:muhammad.sajjad@icp.edu.pk" className="btn-primary mt-8">
            Contact us
          </a>
        </div>
      </section>
    </div>
  )
}

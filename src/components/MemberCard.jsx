import { ExternalLink, Github } from 'lucide-react'

function initials(name) {
  return name
    .split(' ')
    .filter((part) => part && !['Dr.', 'Dr'].includes(part))
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default function MemberCard({ member, showThesis = false }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-card">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy text-lg font-heading font-bold text-white">
        {initials(member.name)}
      </div>

      <h3 className="break-words text-center font-heading text-lg font-bold text-navy">
        {member.name}
      </h3>
      <p className="mt-1 text-center text-sm font-medium text-brand">{member.role}</p>

      {showThesis && member.thesis && (
        <div className="mt-4 flex-1 border-t border-navy/10 pt-4">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            Research topic
          </p>
          <p className="text-sm leading-relaxed text-ink/80">{member.thesis}</p>
        </div>
      )}

      {(member.github || member.website) && (
        <div className="mt-4 flex justify-center gap-3 border-t border-navy/10 pt-4">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-navy hover:text-brand"
            >
              <Github size={13} />
              <span>GitHub</span>
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-navy hover:text-brand"
            >
              <span>Website</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      )}
    </article>
  )
}

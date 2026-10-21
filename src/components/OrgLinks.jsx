import { Github } from 'lucide-react'
import HuggingFaceIcon from './HuggingFaceIcon'
import { GITHUB_ORG, HUGGINGFACE_ORG } from '../lib/site'

const orgs = [
  {
    name: 'GitHub',
    href: GITHUB_ORG,
    label: 'DIP Lab on GitHub',
    Icon: Github,
  },
  {
    name: 'Hugging Face',
    href: HUGGINGFACE_ORG,
    label: 'DIP Lab on Hugging Face',
    Icon: HuggingFaceIcon,
  },
]

export function OrgIconLinks({ variant = 'dark', className = '' }) {
  const tone =
    variant === 'light'
      ? 'text-white/80 hover:text-white hover:bg-white/10'
      : 'text-navy/70 hover:text-navy hover:bg-navy/5'

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {orgs.map(({ name, href, label, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${tone} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2`}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

export function OrgProfileCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {orgs.map(({ name, href, label, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group flex items-center gap-4 rounded-2xl border border-navy/10 bg-white p-5 transition-colors hover:border-brand/40 hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white">
            <Icon size={22} />
          </span>
          <span className="min-w-0">
            <span className="block font-heading text-base font-bold text-navy">
              {name}
            </span>
            <span className="block truncate text-sm text-muted group-hover:text-brand">
              dip-lab-icp
            </span>
          </span>
        </a>
      ))}
    </div>
  )
}

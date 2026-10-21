import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { OrgIconLinks } from './OrgLinks'
import {
  asset,
  GITHUB_ORG,
  GITHUB_REPO,
  HUGGINGFACE_ORG,
  ICP_URL,
  SCHOLAR_URL,
} from '../lib/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const explore = [
    { name: 'About', path: '/about' },
    { name: 'Publications', path: '/publications' },
    { name: 'Members', path: '/members' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src={asset('images/dip_lab_logo.webp')}
              alt=""
              className="h-10 w-10 rounded-full bg-white object-cover"
            />
            <p className="font-heading text-lg font-bold">DIP Lab</p>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Digital Image Processing Laboratory at Islamia College Peshawar.
          </p>
          <OrgIconLinks variant="light" className="mt-4" />
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Explore
          </h2>
          <ul className="space-y-2 text-sm">
            {explore.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-white/75 hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Connect
          </h2>
          <ul className="space-y-2 text-sm text-white/75">
            <li>
              <a href={GITHUB_ORG} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub organization
              </a>
            </li>
            <li>
              <a href={HUGGINGFACE_ORG} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Hugging Face organization
              </a>
            </li>
            <li>
              <a href={SCHOLAR_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Google Scholar
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Visit
          </h2>
          <div className="flex items-start gap-2 text-sm text-white/75">
            <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <address className="not-italic leading-relaxed">
              Academic Block
              <br />
              Islamia College Peshawar
              <br />
              25120, Khyber Pakhtunkhwa
              <br />
              Pakistan
            </address>
          </div>
          <a
            href={ICP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-lg bg-white p-1 transition-opacity hover:opacity-80"
          >
            <img
              src={asset('images/icp_logo.webp')}
              alt="Islamia College Peshawar"
              className="h-12 w-auto"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Digital Image Processing Laboratory. All rights reserved.</p>
          <p>Department of Computer Science, Islamia College Peshawar</p>
        </div>
      </div>
    </footer>
  )
}

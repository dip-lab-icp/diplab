import { ExternalLink, Mail, MapPin } from 'lucide-react'
import { OrgIconLinks } from './OrgLinks'
import { asset, ICP_URL, MAPS_URL } from '../lib/site'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
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
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            Open in Maps
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.16em] text-white/50">
            Contact
          </h2>
          <a
            href="mailto:muhammad.sajjad@icp.edu.pk"
            className="inline-flex items-start gap-2 break-all text-sm text-white/75 transition-colors hover:text-white"
          >
            <Mail size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            muhammad.sajjad@icp.edu.pk
          </a>
          <a
            href="tel:+923339319519"
            className="mt-3 block text-sm text-white/75 transition-colors hover:text-white"
          >
            +92 333 9319519
          </a>
                    <a
            href={ICP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-lg bg-white p-1 transition-opacity hover:opacity-80"
            aria-label="Islamia College Peshawar"
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
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Digital Image Processing Laboratory. All rights reserved.</p>
          <p>
            Website developed by{' '}
            <a
              href="https://github.com/ImranNawar"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Imran Nawar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

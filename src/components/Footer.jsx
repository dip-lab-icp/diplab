import { MapPin, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">DIP Lab</h3>
            <p className="text-gray-300 text-sm">
              Digital Image Processing Laboratory, Islamia College Peshawar.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Academic Block</p>
                  <p>Islamia College Peshawar</p>
                  <p>25120, Khyber Pakhtunkhwa</p>
                  <p>Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logos Section */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Affiliated With</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://icp.edu.pk/icp/index.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={import.meta.env.BASE_URL + 'images/icp_logo.webp'}
                  alt="Islamia College Peshawar"
                  className="h-12 w-auto transition-opacity duration-200 hover:opacity-75"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>&copy; {currentYear} Digital Image Processing Laboratory. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://scholar.google.com/citations?user=E4-dElIAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal transition-colors flex items-center space-x-1"
              >
                <span>Google Scholar</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

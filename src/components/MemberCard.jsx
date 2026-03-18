import { ExternalLink } from 'lucide-react'

export default function MemberCard({ member, showThesis = false }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center">
      {/* Avatar Placeholder */}
      <div className="w-24 h-24 bg-light-gray rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-3xl text-gray-400">👤</span>
      </div>

      {/* Name */}
      <h3 className="font-heading font-bold text-lg text-navy mb-2">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-sm text-teal font-medium mb-3">
        {member.role}
      </p>

      {/* Thesis (if applicable) */}
      {showThesis && member.thesis && (
        <div className="mt-4 pt-4 border-t border-light-gray">
          <p className="text-xs text-gray-600 mb-2 font-semibold">Thesis Title:</p>
          <p className="text-sm text-gray-700 line-clamp-3">
            {member.thesis}
          </p>
        </div>
      )}

      {/* Links (if available) */}
      {(member.github || member.website) && (
        <div className="mt-4 pt-4 border-t border-light-gray flex justify-center gap-2">
          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-navy hover:text-teal font-medium text-xs"
            >
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-navy hover:text-teal font-medium text-xs"
            >
              <span>Website</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

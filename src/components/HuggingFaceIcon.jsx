export default function HuggingFaceIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10.5" r="1.15" fill="currentColor" />
      <circle cx="15" cy="10.5" r="1.15" fill="currentColor" />
      <path
        d="M8.2 14.4c.9 1.6 2.2 2.4 3.8 2.4s2.9-.8 3.8-2.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

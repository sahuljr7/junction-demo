import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
      <span className="text-xl font-bold text-gray-800">Junction</span>
    </Link>
  )
}

export default Logo


import { useState } from 'react'
import Link from 'next/link'
import Dropdown from './Dropdown'

const DesktopMenu = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false)

  const exploreItems = [
    { label: 'All Events', href: '/events' },
    { label: 'Hackathons', href: '/events/hackathons' },
    { label: 'Meetups', href: '/events/meetups' },
    { label: 'Conferences', href: '/events/conferences' },
    { label: 'Workshops', href: '/events/workshops' },
  ]

  return (
    <ul className="flex items-center space-x-4">
      <li>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
      </li>
      <li className="relative">
        <button
          onClick={() => setIsExploreOpen(!isExploreOpen)}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-expanded={isExploreOpen}
        >
          Explore
          <svg
            className="w-4 h-4 ml-1 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <Dropdown isOpen={isExploreOpen} items={exploreItems} onClose={() => setIsExploreOpen(false)} />
      </li>
      <li>
        <Link href="/about" className="text-gray-600 hover:text-gray-900">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default DesktopMenu


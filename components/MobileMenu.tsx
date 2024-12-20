import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div
      ref={menuRef}
      className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center justify-between text-gray-600 hover:text-gray-900 cursor-pointer">
                Explore
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-open:rotate-180"
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
              </summary>
              <ul className="mt-2 space-y-2 pl-4">
                <li>
                  <Link href="/events" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                    All Events
                  </Link>
                </li>
                <li>
                  <Link href="/events/hackathons" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Hackathons
                  </Link>
                </li>
                <li>
                  <Link href="/events/meetups" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link href="/events/conferences" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Conferences
                  </Link>
                </li>
                <li>
                  <Link href="/events/workshops" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
                    Workshops
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/about" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-6">
          <Button variant="default" size="sm" className="w-full">
            Join Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu


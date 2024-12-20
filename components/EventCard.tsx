import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EventCardProps {
  id: string
  title: string
  description: string
  date: string
  location: string
  attendees: number
  image: string
  category: string
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  date,
  location,
  attendees,
  image,
  category
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPinIcon className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <UsersIcon className="w-4 h-4 mr-1" />
          <span>{attendees} attendees</span>
        </div>
        <Button asChild className="w-full">
          <Link href={`/events/${id}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  )
}

export default EventCard


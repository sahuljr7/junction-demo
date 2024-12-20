import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const featuredEvents = [
  {
    id: 1,
    title: 'TechCon 2024',
    description: 'The biggest tech conference of the year',
    image: '/event-1.jpg',
    date: 'June 15-17, 2024',
    location: 'San Francisco, CA',
  },
  {
    id: 2,
    title: 'AI Hackathon',
    description: 'Build the future of AI in 48 hours',
    image: '/event-2.jpg',
    date: 'August 5-7, 2024',
    location: 'Online',
  },
  {
    id: 3,
    title: 'Web3 Workshop',
    description: 'Learn the basics of blockchain and Web3',
    image: '/event-3.jpg',
    date: 'July 22, 2024',
    location: 'New York, NY',
  },
]

const FeaturedEvents = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {featuredEvents.map((event) => (
        <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <p className="text-sm text-gray-500 mb-4">{event.location}</p>
            <Button asChild>
              <Link href={`/events/${event.id}`}>Learn More</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturedEvents


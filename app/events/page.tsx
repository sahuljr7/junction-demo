import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import EventCard from '../../components/EventCard'

const events = [
  {
    id: '1',
    title: 'TechCon 2024',
    description: 'Join us for the biggest tech conference of the year, featuring keynotes from industry leaders and hands-on workshops.',
    date: 'June 15-17, 2024',
    location: 'San Francisco, CA',
    attendees: 5000,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Conference'
  },
  {
    id: '2',
    title: 'AI Hackathon',
    description: 'Build the future of AI in 48 hours. Compete with teams from around the world and showcase your innovation.',
    date: 'August 5-7, 2024',
    location: 'Online',
    attendees: 1000,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Hackathon'
  },
  {
    id: '3',
    title: 'Web3 Workshop',
    description: 'Learn the basics of blockchain and Web3 technologies in this intensive, hands-on workshop.',
    date: 'July 22, 2024',
    location: 'New York, NY',
    attendees: 100,
    image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Workshop'
  },
  {
    id: '4',
    title: 'Data Science Meetup',
    description: 'Network with fellow data scientists and learn about the latest trends in machine learning and big data.',
    date: 'May 10, 2024',
    location: 'London, UK',
    attendees: 150,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Meetup'
  },
  {
    id: '5',
    title: 'Startup Pitch Night',
    description: 'Watch innovative startups pitch their ideas to investors and industry experts. Who will be the next unicorn?',
    date: 'September 1, 2024',
    location: 'Berlin, Germany',
    attendees: 300,
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Meetup'
  },
  {
    id: '6',
    title: 'Cybersecurity Summit',
    description: 'Stay ahead of the latest threats and learn cutting-edge security techniques from world-renowned experts.',
    date: 'October 12-14, 2024',
    location: 'Tokyo, Japan',
    attendees: 2000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Conference'
  }
]

export default function AllEventsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">All Events</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}


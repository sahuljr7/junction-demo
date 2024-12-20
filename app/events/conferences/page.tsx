import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import EventCard from '../../../components/EventCard'

const conferences = [
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
    id: '6',
    title: 'Cybersecurity Summit',
    description: 'Stay ahead of the latest threats and learn cutting-edge security techniques from world-renowned experts.',
    date: 'October 12-14, 2024',
    location: 'Tokyo, Japan',
    attendees: 2000,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Conference'
  },
  {
    id: '10',
    title: 'Future of Work Conference',
    description: 'Explore how technology is reshaping the workplace and prepare for the jobs of tomorrow.',
    date: 'November 8-10, 2024',
    location: 'Singapore',
    attendees: 3000,
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
    category: 'Conference'
  }
]

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Conferences</h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xl text-gray-600">
            Immerse yourself in cutting-edge ideas, connect with industry leaders, and stay ahead of the curve at our 
            world-class conferences. From emerging technologies to industry trends, these events are your gateway to the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferences.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}


import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar } from 'lucide-react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import EventCard from '../../../components/EventCard'

const meetups = [
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
    id: '9',
    title: 'UX/UI Design Showcase',
    description: 'Explore the latest trends in user experience and interface design with live demonstrations and Q&A sessions.',
    date: 'July 5, 2024',
    location: 'Amsterdam, Netherlands',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Meetup'
  }
]

export default function MeetupsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Tech Meetups</h1>
        
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Connect, Learn, and Grow</h2>
            <p className="mb-6">
              Join our vibrant community of tech enthusiasts! Attend local meetups to network with peers,
              learn from industry experts, and stay up-to-date with the latest trends in technology.
            </p>
            <Button size="lg" variant="secondary">Find a Meetup Near You</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Upcoming Meetups</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meetups.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import EventCard from '../../../components/EventCard'

const hackathons = [
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
    id: '7',
    title: 'Blockchain Buildathon',
    description: 'Create decentralized applications and smart contracts in this exciting blockchain hackathon.',
    date: 'September 15-17, 2024',
    location: 'Miami, FL',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1621579429200-caa13d3b8cf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    category: 'Hackathon'
  },
  {
    id: '8',
    title: 'Green Tech Challenge',
    description: 'Develop innovative solutions to combat climate change and promote sustainability.',
    date: 'October 1-3, 2024',
    location: 'Stockholm, Sweden',
    attendees: 300,
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80',
    category: 'Hackathon'
  }
]

export default function HackathonsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Hackathons</h1>
        
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4">Why Participate in Hackathons?</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Boost your coding skills in a high-energy environment</li>
              <li>Network with industry professionals and like-minded peers</li>
              <li>Solve real-world problems and make a difference</li>
              <li>Win prizes and gain recognition for your innovations</li>
            </ul>
            <Button size="lg" variant="secondary">Find Your Next Hackathon</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Upcoming Hackathons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hackathons.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


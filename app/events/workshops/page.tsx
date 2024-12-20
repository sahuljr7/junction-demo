import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import EventCard from '../../../components/EventCard'

const workshops = [
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
    id: '11',
    title: 'Machine Learning Masterclass',
    description: 'Dive deep into machine learning algorithms and techniques with hands-on projects and expert guidance.',
    date: 'August 18-20, 2024',
    location: 'Boston, MA',
    attendees: 75,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Workshop'
  },
  {
    id: '12',
    title: 'DevOps Bootcamp',
    description: 'Master the tools and practices of modern DevOps in this intensive, three-day bootcamp.',
    date: 'September 25-27, 2024',
    location: 'Austin, TX',
    attendees: 50,
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'Workshop'
  }
]

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Workshops</h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xl text-gray-600">
            Enhance your skills and gain hands-on experience with our intensive workshops. Led by industry experts, 
            these sessions offer deep dives into specific technologies and practices, helping you level up your expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}


import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Navbar from '../components/Navbar'
import FeaturedEvents from '../components/FeaturedEvents'
import CommunityHighlights from '../components/CommunityHighlights'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Tech community collaborating"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Tech Adventure</h1>
          <p className="text-xl md:text-2xl mb-8">Find local meetups, explore global hackathons, and connect with like-minded individuals.</p>
          <Button size="lg" asChild>
            <Link href="/events">Explore Events Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Events/Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
          <FeaturedEvents />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Hackathons', 'Meetups', 'Conferences', 'Workshops'].map((category) => (
              <Link
                key={category}
                href={`/events/${category.toLowerCase()}`}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Community Highlights</h2>
          <CommunityHighlights />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">About Junction</h2>
          <p className="text-lg mb-8">
            Junction is a platform dedicated to connecting tech enthusiasts, fostering innovation, and promoting 
            knowledge sharing within the global tech community. Our mission is to empower individuals and 
            organizations to create, learn, and grow together.
          </p>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}


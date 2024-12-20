import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  const teamMembers = [
    { name: 'Jane Doe', role: 'CEO & Co-founder', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80' },
    { name: 'John Smith', role: 'CTO & Co-founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { name: 'Emily Chen', role: 'Head of Community', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
  ]
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">About Junction</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Junction, our mission is to connect tech enthusiasts, foster innovation, and promote knowledge 
            sharing within the global tech community. We believe in the power of collaboration and the 
            transformative impact of bringing diverse minds together.
          </p>
          <p className="text-lg mb-4">
            Through our platform, we aim to break down barriers, facilitate meaningful connections, and 
            create opportunities for learning and growth in the ever-evolving world of technology.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <p className="text-lg mb-4">
                Junction was born out of a shared passion for technology and a vision to create a more 
                connected tech ecosystem. Founded in 2020 by a group of tech enthusiasts, our platform 
                has grown from a small community to a global network of innovators, learners, and industry leaders.
              </p>
              <p className="text-lg">
                Today, we're proud to host thousands of events annually, ranging from local meetups to 
                international hackathons, all aimed at pushing the boundaries of what's possible in tech.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Junction team collaborating"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">
            Be part of our growing network of tech enthusiasts and innovators. 
            Discover events, connect with like-minded individuals, and take your skills to the next level.
          </p>
          <Button size="lg" asChild>
            <a href="/signup">Join Junction Today</a>
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  )
}


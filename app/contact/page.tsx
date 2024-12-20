import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-8 text-center">
            Have questions or suggestions? We'd love to hear from you. Fill out the form below, 
            and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What is your message about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Your message here..."
              />
            </div>
            <div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
            <div className="space-y-2">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@junction.com" className="text-blue-600 hover:underline">
                  contact@junction.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Tech Street, Innovation City, TC 12345
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


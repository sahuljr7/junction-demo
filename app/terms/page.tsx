import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using the Junction platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>Junction is a platform that connects tech enthusiasts with various events, including hackathons, meetups, conferences, and workshops. We provide a space for users to discover, join, and organize tech-related events.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p>To access certain features of the platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
            <p>You agree to use the Junction platform in compliance with all applicable laws and regulations. You will not use the service to post, transmit, or share inappropriate, illegal, or harmful content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
            <p>All content and materials available on Junction, including but not limited to text, graphics, website name, code, images, and logos, are the intellectual property of Junction and are protected by applicable copyright and trademark law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>Junction shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, the service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. We will provide notice of any material changes by posting the new Terms of Service on the platform. Your continued use of Junction after any such changes constitutes your acceptance of the new Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at legal@junction.com.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}


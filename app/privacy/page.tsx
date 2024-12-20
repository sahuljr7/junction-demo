import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you create an account, participate in events, or communicate with us. This may include your name, email address, profile information, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience on Junction. This includes recommending events that may interest you and connecting you with other users.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing and Disclosure</h2>
            <p>We do not share your personal information with third parties except as described in this policy. We may share information with event organizers when you register for an event, or with service providers who perform services on our behalf.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or email transmission is ever fully secure or error-free.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Choices</h2>
            <p>You can access, update, or delete your account information at any time by logging into your Junction account. You can also opt-out of receiving promotional communications from us by following the instructions in those messages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Similar Technologies</h2>
            <p>We use cookies and similar technologies to collect information about your browsing activities and to personalize your experience on our platform. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p>If you have any questions about this privacy policy, please contact us at privacy@junction.com.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}


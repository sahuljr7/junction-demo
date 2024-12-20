import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    quote: 'Junction has been an incredible platform for finding and participating in tech events. It\'s helped me grow my network and skills!',
    avatar: '/avatar-1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'UX Designer',
    quote: 'The diversity of events on Junction is amazing. I\'ve attended workshops and conferences that have truly inspired my work.',
    avatar: '/avatar-2.jpg',
  },
]

const CommunityHighlights = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">What Our Community Says</h3>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="mb-4 last:mb-0">
            <div className="flex items-center mb-2">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Community Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">10,000+</p>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">500+</p>
            <p className="text-gray-600">Events Listed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">50+</p>
            <p className="text-gray-600">Countries Represented</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-indigo-600">1,000+</p>
            <p className="text-gray-600">Communities Connected</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityHighlights


import React from 'react'
    import { Swiper, SwiperSlide } from 'swiper/react'
    import { Autoplay, Pagination } from 'swiper/modules'
    import 'swiper/css'
    import 'swiper/css/pagination'
    import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

    export default function Home() {
      const heroImages = [
        '/images/hero/hero1.jpg',
        '/images/hero/hero2.jpg',
        '/images/hero/hero3.jpg'
      ]

      const features = [
        {
          icon: '🏆',
          title: 'Create and Join Missions',
          description: 'Connect with others through shared activities'
        },
        {
          icon: '🎖️',
          title: 'Skill-Based Badges',
          description: 'Showcase expertise and skills'
        },
        {
          icon: '⭐',
          title: 'Reputation System',
          description: 'Build trust within the community'
        },
        {
          icon: '🤝',
          title: 'Partnerships',
          description: 'Collaborate with businesses for events'
        }
      ]

      const testimonials = [
        {
          quote: 'DECKBROS helped me find my tribe!',
          author: 'Sarah M.'
        },
        {
          quote: 'Best way to learn new skills and meet people!',
          author: 'John D.'
        }
      ]

      return (
        <div className="bg-gray-50">
          {/* Hero Section */}
          <section className="relative h-[80vh]">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 20000 }}
              pagination={{ clickable: true }}
              loop={true}
              className="h-full"
            >
              {heroImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">
                        Building Connections Through Shared Experiences
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Join a Mission
              </button>
              <button className="bg-white text-gray-800 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Post a Mission
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-800 transition-colors">
                Become a Partner
              </button>
            </div>
          </section>

          {/* Intro Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Welcome to DECKBROS</h2>
              <p className="text-lg text-gray-600 mb-8">
                We foster connections through shared activities, helping people build friendships,
                learn new skills, and support mental well-being.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Build Friendships</h3>
                  <p className="text-gray-600">Through shared hobbies and interests</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Learn New Skills</h3>
                  <p className="text-gray-600">Via group activities and workshops</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Support Well-being</h3>
                  <p className="text-gray-600">By promoting social connections</p>
                </div>
              </div>
              <a
                href="/about"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="max-w-2xl mx-auto"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center">
                      <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
                      <p className="text-gray-600">- {testimonial.author}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">DECKBROS</h3>
                  <p className="text-gray-400">Building connections through shared experiences</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-gray-400">Terms of Use</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-400"><FaFacebook size={24} /></a>
                    <a href="#" className="hover:text-gray-400"><FaInstagram size={24} /></a>
                    <a href="#" className="hover:text-gray-400"><FaYoutube size={24} /></a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Newsletter</h4>
                  <form>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full p-2 rounded text-gray-800"
                    />
                    <button
                      type="submit"
                      className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )
    }

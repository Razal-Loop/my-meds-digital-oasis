
import { Users, Award, MapPin, Clock } from 'lucide-react'

export const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: Users },
    { label: 'Years of Service', value: '15+', icon: Award },
    { label: 'Locations', value: '50+', icon: MapPin },
    { label: 'Average Response Time', value: '< 5 min', icon: Clock },
  ]

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About MyMeds Digital Oasis
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We're revolutionizing pharmacy services by combining traditional healthcare 
              with cutting-edge digital technology. Our mission is to make healthcare 
              more accessible, convenient, and personalized for everyone.
            </p>
            <div className="mt-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="mt-2">
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pharmacist helping customer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Pill, Calendar, FileText, MessageCircle, Truck, CreditCard } from 'lucide-react'

export const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Prescription Management",
      description: "Easily manage all your prescriptions in one secure place with automatic refill reminders."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Book appointments with healthcare providers and pharmacists at your convenience."
    },
    {
      icon: FileText,
      title: "Health Records",
      description: "Access your complete health history and medication records anytime, anywhere."
    },
    {
      icon: MessageCircle,
      title: "24/7 Chat Support",
      description: "Get instant answers to your health questions from qualified pharmacists."
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Free delivery of your medications right to your doorstep within 24 hours."
    },
    {
      icon: CreditCard,
      title: "Insurance Integration",
      description: "Seamlessly process insurance claims and manage your healthcare expenses."
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive healthcare solutions designed to make your life easier and healthier.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="relative group bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-primary text-white">
                    <service.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

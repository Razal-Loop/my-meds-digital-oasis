
import { ArrowRight, Shield, Clock, Heart } from 'lucide-react'

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-green-50 pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-primary">
                Welcome to MyMeds Digital Oasis
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Your Trusted</span>
                <span className="block text-primary">Digital Pharmacy</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Experience healthcare reimagined with our comprehensive digital pharmacy services. 
              From prescription management to health consultations, we're here for your wellness journey.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center transition-colors duration-200">
                Get Started Today
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full h-64 object-cover"
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern pharmacy interior"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Secure & Safe</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your health data is protected with enterprise-grade security
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                <Clock className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">24/7 Available</h3>
                <p className="mt-2 text-base text-gray-500">
                  Access your medications and health services anytime
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Personalized Care</h3>
                <p className="mt-2 text-base text-gray-500">
                  Tailored health solutions just for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


import { Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">MyMeds Digital Oasis</h3>
            <p className="text-gray-300 mb-4">
              Your trusted digital pharmacy partner, providing comprehensive healthcare 
              solutions with a personal touch. We're committed to making healthcare 
              accessible and convenient for everyone.
            </p>
            <div className="flex items-center text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500" />
              <span>for your health</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Prescription Management</span></li>
              <li><span className="text-gray-300">Health Consultations</span></li>
              <li><span className="text-gray-300">Home Delivery</span></li>
              <li><span className="text-gray-300">24/7 Support</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 MyMeds Digital Oasis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

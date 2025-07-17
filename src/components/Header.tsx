
import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">MyMeds Digital Oasis</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span>123 Health St</span>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

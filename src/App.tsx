import { ChevronRight, Flame, Menu, MessageCircle, Shield, Star, X, Zap } from 'lucide-react';
import { useState } from 'react';
import ProductCard from './components/ProductCard';
import products from './data/products.ts';
import testimonials from './data/testmonials.ts';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const nextImage = (productId: number) => {
    setCurrentImageIndex((prev) => {
      const product = products.find(p => p.id === productId);
      const currentIndex = prev[productId] || 0;
      return {
        ...prev,
        [productId]: product ? (currentIndex + 1) % product.images.length : 0
      };
    });
  };

  const prevImage = (productId: number) => {
    setCurrentImageIndex((prev) => {
      const product = products.find(p => p.id === productId);
      const currentIndex = prev[productId] || 0;
      return {
        ...prev,
        [productId]: product ? (currentIndex - 1 + product.images.length) % product.images.length : 0
      };
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">ASACHI</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-700 hover:text-gray-900">Products</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#products" className="block px-3 py-2 text-gray-700">Products</a>
              <a href="#features" className="block px-3 py-2 text-gray-700">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/landing-img.webp" 
            alt="Luxury Kitchen"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-black/50 z-20"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Precision Engineered for
              <span className="block text-[#D4B460] mt-2">Culinary Excellence</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto">
              Experience the perfect blend of power, precision, and elegance with Asachi's premium cooking stoves.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a 
                href="https://wa.me/+919495030107?text=Hello, I'm interested in Asachi products" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#B18A3D] hover:bg-[#8F6E2F]"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Asachi</h2>
            <p className="mt-4 text-gray-600">Engineered for performance, designed for excellence</p>
          </div>

          <div className="flex justify-center items-center mx-16 mt-4">
            <img src="./images/gas-labeled.webp" alt="Asachi" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white rounded-xl shadow-sm">
              <div className="absolute top-6 right-6">
                <Flame className="h-6 w-6 text-[#B18A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Superior Heat Control</h3>
              <p className="mt-4 text-gray-600">Precise temperature regulation for perfect cooking results every time.</p>
            </div>

            <div className="relative p-6 bg-white rounded-xl shadow-sm">
              <div className="absolute top-6 right-6">
                <Shield className="h-6 w-6 text-[#B18A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Built to Last</h3>
              <p className="mt-4 text-gray-600">Premium materials and craftsmanship ensure years of reliable performance.</p>
            </div>

            <div className="relative p-6 bg-white rounded-xl shadow-sm">
              <div className="absolute top-6 right-6">
                <Zap className="h-6 w-6 text-[#B18A3D]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Energy Efficient</h3>
              <p className="mt-4 text-gray-600">Advanced technology for optimal fuel consumption and performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Premium Collection</h2>
          
          <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:gap-x-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                nextImage={nextImage}
                prevImage={prevImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">What Our Customers Say</h2>
          
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center">Get in Touch</h2>
            <p className="mt-4 text-center text-gray-600">
              Have questions? Our team is here to help.
            </p>
            
            <div className="mt-8 flex items-center justify-center">
              <a 
                href="https://wa.me/+919495030107?text=Hello, I need assistance with Asachi products" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#B18A3D] hover:bg-[#8F6E2F]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold">ASACHI</h3>
              <p className="mt-4 text-gray-400">Crafting premium cooking experiences since 2010.</p>
            </div>
            <div>
              <h4 className="font-semibold">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-400">1-800-ASACHI</li>
                <li className="text-gray-400">support@asachi.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Asachi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
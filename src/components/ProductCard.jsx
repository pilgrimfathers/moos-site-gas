import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
function ProductCard({ product, currentImageIndex, setCurrentImageIndex, nextImage, prevImage }) {
    return (
        <div key={product.id} className="group flex flex-col h-full">
            <div className="relative rounded-lg overflow-hidden bg-gray-100" style={{ aspectRatio: '16/9' }}>
                <div className="absolute inset-0">
                    <img
                        src={product.images[currentImageIndex[product.id] || 0]}
                        alt={product.name}
                        className="object-cover object-center w-full h-full transition-opacity duration-300"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            prevImage(product.id);
                        }}
                        className="bg-white/70 hover:bg-white rounded-full p-1 shadow-md text-gray-800 hover:text-gray-900 transition-colors z-10"
                        aria-label="Previous image"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            nextImage(product.id);
                        }}
                        className="bg-white/70 hover:bg-white rounded-full p-1 shadow-md text-gray-800 hover:text-gray-900 transition-colors z-10"
                        aria-label="Next image"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1 z-10">
                    {product.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [product.id]: idx }))}
                            className={`h-2 w-2 rounded-full ${(currentImageIndex[product.id] || 0) === idx
                                ? 'bg-white'
                                : 'bg-white/50'
                                }`}
                            aria-label={`View image ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
            <div className="mt-4 flex items-center justify-between space-x-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                </div>
                <p className="text-xl font-bold text-gray-900">${product.price}</p>
            </div>
            <div className="mt-auto pt-4">
                <button className="w-full bg-[#1B4D3E] text-white px-6 py-3 rounded-md hover:bg-[#163c30] transition-colors">
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default ProductCard
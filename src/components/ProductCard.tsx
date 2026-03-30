'use client';

import { Product } from '@/types/product';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${product.name} added to cart!`, {
      style: {
        borderRadius: '20px',
        background: '#1e293b',
        color: '#fff',
        padding: '16px 24px',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    });
  };

  return (
    <Link href={`/product/${product.id}`} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-50">
      <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-gray-900 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h3>
          <span className="text-xl font-black text-gray-900">${product.price}</span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        <button 
          onClick={handleAddToCart}
          className="w-full py-3 px-4 rounded-xl bg-gray-50 text-gray-900 text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;

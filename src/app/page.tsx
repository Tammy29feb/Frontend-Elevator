import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('http://localhost:5000/api/products', { cache: 'no-store' });
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 animate-fade-in">
            New Arrival 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            Elevate Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Lifestyle.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Discover our curated collection of premium gadgets and accessories designed for the modern professional.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-200">
              Shop Collection
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300">
              View Categories
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-2">Featured Products</p>
              <h2 className="text-4xl font-black text-gray-900">Our Bestsellers</h2>
            </div>
            <button className="hidden sm:block text-gray-500 hover:text-blue-600 font-bold transition-colors duration-200">
              View All Products &rarr;
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                <p className="text-gray-500 text-lg">No products found. Start the backend to see products.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full"></div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 relative z-10">Join our newsletter</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Get exclusive early access to new drops and amazing deals delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <button className="px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-blue-50 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-400 text-sm">
        <p>&copy; 2024 EcoStore. All rights reserved.</p>
      </footer>
    </main>
  );
}

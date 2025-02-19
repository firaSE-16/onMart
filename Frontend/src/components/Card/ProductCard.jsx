import React, { useState } from 'react';
import data from '../../assets/Product/airforce.png';
import { Star, Plus, Heart, ShoppingCart } from 'lucide-react';




const ProductCard = ({product}) => {
  
  const [sproduct,setSproduct] =useState({})


  return (
    <div className='relative mb-10 mt-2 ml-10 h-[450px] w-76 bg-[#f2ede645] hover:bg-white flex flex-col items-center 
                   transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 
                   group overflow-hidden rounded-lg border border-gray-100'>

      {/* Wishlist Icon */}
      <div className='absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer
                      hover:bg-red-50 transition-all z-10'>
        <Heart size={20} className='text-gray-600 hover:text-red-500' />
      </div>

      {/* Image Section */}
      <div className='h-60 w-full relative overflow-hidden flex justify-center items-center'>
        {/* Badges */}
        <div className='absolute top-4 left-4 flex flex-col gap-2 z-10'>
          <span className='bg-[#F59E0B] text-white text-sm py-1 px-3 rounded-full transition-transform hover:scale-105'>
            Best Seller
          </span>
          <span className='bg-[#10B981] text-white text-sm py-1 px-3 rounded-full transition-transform hover:scale-105'>
            New
          </span>
        </div>

        {/* Product Image */}
        <img 
          src={product.variations[0].image} 
          alt='Nike Air Man' 
          className='transition-transform duration-500 group-hover:scale-110 w-[80%] object-cover'
        />
      </div>

      {/* Product Details */}
      <div className='px-10 flex flex-col gap-3 justify-center py-5 w-full relative'>
        
        {/* Quick Add to Cart Button (Hover Effect) */}
        <div className='absolute inset-0  bg-white/90 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 flex flex-col items-center justify-center'>
          <button className='bg-[#F4A950] w-48 flex justify-center items-center text-white px-4 py-2 rounded-lg 
                             hover:bg-[#D18A40] transition-colors'>
            <ShoppingCart size={18} className='mr-2'/> Add to Cart
          </button>
          <button className='mt-3 text-gray-600 underline hover:text-black transition'>
            Quick Review
          </button>
        </div>

        <p className='text-gray-500 '>{product.category.name}</p>
          <h2 className='font-semibold text-2xl'>{product.name}</h2>
          <div className='flex justify-between items-center'>
            <div className='flex text-yellow-200'>
            <Star size={16} color="gold" fill="gold" />
            <Star size={16} color="gold" fill="gold" />
            <Star size={16} color="gold" fill="gold" />
            <Star size={16} color="gold" fill="gold" />
            <Star size={16} color="gray" fill="none" />
             </div>
            <p className='text-gray-500'>23 reviews</p>
          </div>
          <h1 className='font-bold text-3xl'>${product.price}</h1>
       
      </div>
    </div>
  );
};

export default ProductCard;
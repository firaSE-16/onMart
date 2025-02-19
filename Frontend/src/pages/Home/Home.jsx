import React from 'react';
import Banner from '../../components/Home/Banner';
import ProductCard from '../../components/Card/ProductCard';
import productData from '../../data/product.json';

const Home = () => {
    return(
      <div>
        <Banner/>
        <div className='w-full'>        
        <h1 className='font-bold text-3xl text-[#292929d8] mt-10 ml-14'>Trending Now</h1>
        <hr className='h-[0.2px] w-[90%] mx-auto bg-[#b8b4b43b] mt-7'/>
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 p-4">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            {productData.map((item, index) => (
              <ProductCard key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
      </div>
    );
};

export default Home;
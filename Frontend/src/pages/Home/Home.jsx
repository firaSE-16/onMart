import React from 'react';
import Banner from '../../components/Home/Banner';
import ProductCard from '../../components/Card/ProductCard';
import productData from '../../data/product.json';
import Advertisement from '../../components/Home/Advertisement';
import Review from '../../components/Review/Review';

const Home = () => {
    return(
      <div>
        <Banner/>
        <div className="w-full">
      <h1 className="font-bold text-3xl text-[#292929d8] mt-10 ml-14">Trending Now</h1>
      <hr className="h-[0.2px] w-[90%] mx-auto bg-[#b8b4b43b] mt-7" />
      
      {/* Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-4 p-4 no-scrollbar">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          {productData.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>

      {/* Custom CSS to Hide Scrollbar */}
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, and Edge */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for Firefox */
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>
        <Advertisement/>

        <div className="w-full">
      <h1 className="font-bold text-3xl text-[#292929d8] mt-10 ml-14">New arrived</h1>
      <hr className="h-[0.2px] w-[90%] mx-auto bg-[#b8b4b43b] mt-7" />
      
      {/* Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-4 p-4 no-scrollbar">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          {productData.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>

      
      <style>
        {`
          
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
       
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>

        <div className="w-full">
      <h1 className="font-bold text-3xl text-[#292929d8] mt-10 ml-14">Customer Review</h1>
      <hr className="h-[0.2px] w-[90%] mx-auto bg-[#b8b4b43b] mt-7" />
      
      {/* Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-4 p-4 no-scrollbar">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
         <Review/>
         <Review/>
         <Review/>
         <Review/>
         <Review/>
         <Review/>
        </div>
      </div>

      {/* Custom CSS to Hide Scrollbar */}
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari, and Edge */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar for Firefox */
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </div>

    

        
      </div>
    );
};

export default Home;
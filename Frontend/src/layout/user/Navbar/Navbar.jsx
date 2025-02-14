import React, { useState } from 'react';
import logo from '../../../assets/icon/logo.png';
import searchblack from '../../../assets/icon/searchblack.png';
import searchprimary from '../../../assets/icon/searchprimary.png';
import wishlist from '../../../assets/icon/wishlist.png';
import compare from '../../../assets/icon/compare.png';
import profile from '../../../assets/icon/profile.png';
import cart from '../../../assets/icon/cart.png';

 



const Header = () => {

  const [search,setSearch] = useState('false');
  let searchStyle;

if(search){
  searchStyle ='flex'
}

  return (
    <div className='flex flex-col items-center font-sans'>
      {/* Header Top Bar */}
      <div className='flex bg-[#24242c] w-full h-10 sm:h-8 items-center justify-around text-white font-medium text-[13px]'>
        <div className='hidden sm:flex'>
          <div>SHOP EVENTS & SAVE UP TO 65% OFF!</div>
          <div>Call Us: 001-1234-88888</div>
          <div>Customer Service</div>
        </div>
        <div className='flex gap-1 items-center'>
          <div>Track Order</div>
          <p className='text-[12px] px-1'>|</p>
          <select>
            <option value='usd'>USD</option>
            <option value='eur'>EUR</option>
            <option value='birr'>Birr</option>
          </select>
          <p className='text-[12px] px-1'>|</p>
          <select>
            <option value='usd'>English</option>
            <option value='eur'>Amharic</option>
          </select>
          <p className='text-[12px] px-1'>|</p>
          <div>Become a Seller</div>
        </div>
      </div>

      {/* Logo, Search, and Icons */}
      <div className='flex gap-3 items-center w-full justify-between px-4 py-3'>
        <img src={logo} className='w-20 h-18' alt='onMart' />
        <div className='flex '>
          <select className='invisible w-36 sm:visible'>
            <option value='all'>All Categories</option>
            <option value='electronics'>Electronics</option>
            <option value='clothing'>Clothing</option>
            <option value='accessories'>Accessories</option>
            <option value='home'>Home & Garden</option>
            <option value='sports'>Sports & Outdoors</option>
            <option value='beauty'>Beauty & Health</option>
            <option value='kids'>Kids & Babies</option>
          </select>
          <p className='hidden sm:flex'>Search</p>
          <button>
            <img className='w-8 h-8' src={searchblack} alt='' />
          </button>
        </div>
        <div className='flex gap-1 justify-end'>
          <img className='w-6 h-6' src={compare} alt='' />
          <img className='w-6 h-6' src={wishlist} alt='' />
          <img className='w-6 h-6' src={cart} alt='' />
          <div className='bg-[#e3dfdf] hidden sm:flex border-2 border-solid border-[#837e7e] w-11 rounded-2xl h-4 items-center relative'>
            <div className='w-6 h-6 rounded-full bg-[#FF6F61] absolute'></div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className='flex invisible md:visible'>
        <select>
          <option value='all'>All Categories</option>
          <option value='electronics'>Electronics</option>
          <option value='clothing'>Clothing</option>
          <option value='accessories'>Accessories</option>
          <option value='home'>Home & Garden</option>
          <option value='sports'>Sports & Outdoors</option>
          <option value='beauty'>Beauty & Health</option>
          <option value='kids'>Kids & Babies</option>
        </select>
        <div>Best Sellers</div>
        <div>New Arrivals</div>
        <div>Hot Deals</div>
        <div>Exclusive Brands</div>
        <div>Nearby Vendors</div>
        <div>Payment Methods</div>
        <div>Profile Icon</div>
      </div>
    </div>
  );
};

export default Header;

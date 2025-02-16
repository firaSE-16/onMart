import React, { useState } from "react";
import logo from "../../../assets/icon/logo.png";
import { Menu, X, ShoppingCart, Heart, RefreshCw } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("All Categories");
  const [open, setOpen] = useState(false);

  const options = [
    "All Categories",
    "Electronics",
    "Clothing",
    "Accessories",
    "Home & Garden",
    "Sports & Outdoors",
    "Beauty & Health",
    "Kids & Babies",
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      {/* Top Header */}
      <div className="bg-gray-900 text-gray-300 text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="hidden sm:flex gap-4">
            <span>🎉 SHOP EVENTS & SAVE UP TO 65% OFF!</span>
            <span>📞 Call Us: 001-1234-88888</span>
            <span>💬 Customer Service</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hover:text-[#E9B808] cursor-pointer">Track Order</span>
            <span className="text-gray-500">|</span>
            <select className="bg-gray-900 text-gray-300 focus:outline-none">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="birr">Birr</option>
            </select>
            <span className="text-gray-500">|</span>
            <select className="bg-gray-900 text-gray-300 focus:outline-none">
              <option value="en">English</option>
              <option value="am">Amharic</option>
            </select>
            <span className="text-gray-500">|</span>
            <button className="hover:text-[#E9B808]">Become a Seller</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col w-full px-4 sm:px-10 py-3">
        <div className="flex items-center justify-between w-full">
          <img 
            src={logo} 
            className="w-20 h-20 object-contain hover:scale-105 transition-transform" 
            alt="onMart Logo" 
          />

          {/* Categories Dropdown */}
          

          {/* Search Bar */}
          <div className="relative hidden sm:block flex-1 max-w-xl mx-4">
            <div className="flex items-center bg-white border-2 border-gray-100 focus-within:border-[#E9B808] transition-all">
              <select className="w-48 px-4 py-2 bg-transparent border-r border-gray-100 focus:outline-none">
                {options.map((option) => (
                  <option key={option} value={option.toLowerCase()}>{option}</option>
                ))}
              </select>
              <input 
                type="text" 
                placeholder="Search products..." 
                className="w-full px-4 py-2 focus:outline-none" 
              />
              <button className="px-6 py-3 bg-[#E9B808] hover:bg-[#d6a308] transition-colors">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5">
            <button className="sm:hidden p-2" onClick={() => setSearch(!search)}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            <div className="hidden sm:flex gap-6">
              {[{ Icon: RefreshCw, label: "Compare" }, { Icon: Heart, label: "Wishlist" }, { Icon: ShoppingCart, label: "Cart" }].map(({ Icon, label }) => (
                <button 
                  key={label} 
                  className="relative group flex flex-col items-center"
                >
                  <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Icon className="h-6 w-6 text-gray-600 group-hover:text-[#E9B808]" />
                  </div>
                  {label === 'Cart' && (
                    <span className="absolute -top-1 -right-1 bg-[#FF6F61] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                  )}
                </button>
              ))}
            </div>
            
            <button 
              className="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center w-full mt-4 border-t border-gray-100 pt-3">
          <div className="relative hidden sm:block flex-1 max-w-xs ">
            <div 
              className="flex justify-between items-center px-6 py-3 bg-[#E9B808] text-white cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <span className="font-medium">{selected}</span>
              {open ? <X size={20} /> : <Menu size={20} />}
            </div>
            {open && (
              <div className="absolute left-0 w-full bg-white shadow-xl border border-gray-100 z-20">
                {options.map((option) => (
                  <div
                    key={option}
                    className="px-6 py-3 hover:bg-[#FFF5F2] cursor-pointer border-b border-gray-100"
                    onClick={() => {
                      setSelected(option);
                      setOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-6">
            {["Best Sellers", "New Arrivals", "Hot Deals", "Exclusive Brands", "Nearby Vendors"].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="text-gray-600 hover:text-[#E9B808] font-medium px-2 py-1 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
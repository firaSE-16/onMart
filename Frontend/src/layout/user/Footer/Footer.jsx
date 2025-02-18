import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white left-0 right-0  padding-10">
      <div className="container mx-auto px-4 py-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Electronics</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Clothing</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Home & Garden</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Beauty & Health</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Sports & Outdoors</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Affiliates</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#F4A950] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F4A950] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#F4A950] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#F4A950] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-[#F4A950] transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} onMart. All rights reserved.</p>
          <p className="text-sm mt-2">Designed with ❤️ by Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
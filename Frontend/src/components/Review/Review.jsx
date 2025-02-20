import React from 'react';
import profile from '/assets/Person/profile.jpg';
import { Star } from 'lucide-react';

const Review = () => {
  const rating = 4; // Dynamic rating

  return (
    <div className="flex flex-col py-10 px-6 gap-4 w-[300px] h-[350px] shadow-lg  border border-gray-200">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img className="rounded-full w-16 h-16 object-cover" src={profile} alt="User Profile" />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">Kevin Smith</h1>
          <p className="text-gray-500 text-sm">Customer</p>
        </div>
      </div>

      {/* Review Text (Fix for Wrapping) */}
      <p className="text-gray-700 text-sm leading-relaxed break-words whitespace-normal max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facere aliquam impedit quidem, 
        quasi mollitia esse molestiae debitis doloribus quos ducimus optio ea inventore, eveniet 
        tenetur consectetur ipsum cum pariatur.
      </p>

      {/* Rating Section */}
      <div className="flex items-center gap-2">
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} color={index < rating ? 'gold' : 'gray'} />
          ))}
        </div>
        <p className="text-gray-600 text-sm">{rating}.0</p>
      </div>
    </div>
  );
};

export default Review;

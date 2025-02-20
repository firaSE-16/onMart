import React, { useEffect, useState } from "react";
import data from "../../data/advertisement.json";

const Advertisement = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setBanner(data);
    }
  }, []);

  return (
    <div className="relative overflow-x-auto p-4">
   
      <div className="flex gap-4 whitespace-nowrap overflow-x-scroll no-scrollbar">
        {banner.length > 0 ? (
          banner.map((item, index) => (
            <div key={index} className="h-[400px] w-[700px] flex-shrink-0">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full  object-cover shadow-md"
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No advertisements available.</p>
        )}
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
  );
};

export default Advertisement;

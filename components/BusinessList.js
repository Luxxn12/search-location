import React, { useState } from "react";
import BusinessItem from "./BusinessItem";

function BusinessList() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-[17px] mt-3 font-bold mb-3 flex items-center justify-between">
        Top Nearby Places
        <span className="flex">
          {count > 0 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setCount(count - 1)}
              className="w-10 h-10 p-2 text-gray-400 hover:text-white hover:bg-gray-900 cursor-pointer rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          ) : null}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={() => setCount(count + 1)}
            className="w-10 h-10 p-2 text-gray-400 hover:text-white hover:bg-gray-900 cursor-pointer rounded-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </h2>
      {/* Business Item */}
      <div>
        <BusinessItem />
      </div>
    </div>
  );
}

export default BusinessList;

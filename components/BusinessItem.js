import Image from "next/image";
import React from "react";

function BusinessItem() {
  return (
    <div className="flex ">
      <Image
        src="/placeholder.jpg"
        alt="placeholder"
        width={90}
        height={90}
        className="rounded-xl object-cover h-[100px] w-[100px]"
      />
      <div >
        <h2>Business Name</h2>
        <h2>Address</h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <h2>4.5</h2>
        </div>
      </div>
    </div>
  );
}

export default BusinessItem;

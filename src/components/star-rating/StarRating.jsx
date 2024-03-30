// import React from 'react'
// // install icons help of npm i react-icons
// import FaStar from 'react-icons/fa/FaStar';

// const handelMouseMove=()=>{}
// const handelMouseLeave=()=>{}
// const handelClick=()=>{}
// function StarRating(noOfStars = 5) {
//   return (
//     <div>
//         {
//             [...Array(noOfStars)].map((_,index)=> {
//                 return <FaStar 
//                     key={index}
//                     onclick={handelClick}
//                     onMouseMove={handelMouseMove}
//                     onMouseLeave={handelMouseLeave}
//                 />
//             })
//         }
//     </div>
//   )
// }

// export default StarRating


import React, { useState } from 'react';
// Take images from Fant Awesome

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };
  
  return (
    <div className=" flex justify-center items-center font-bold h-screen bg-blue-500">
      {[...Array(5)].map((_, index) => (
        <div
        key={index}
        onClick={() => handleClick(index + 1)}
        onMouseEnter={() => handleMouseEnter(index + 1)}
        onMouseLeave={handleMouseLeave}
        className={`w-6 h-6 fill-current ${
          index < (hoverRating || rating) ? 'text-yellow-300' : 'text-gray-900'
        } cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        >
          ❁
          {/* ॐ */}
        </div>
      ))}
      <p className="ml-2">{hoverRating || rating}/5</p>
    </div>
  );
}

export default StarRating;
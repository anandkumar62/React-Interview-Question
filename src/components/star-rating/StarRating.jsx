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
    <div className=" flex justify-center items-center h-screen bg-blue-500">
      {[...Array(5)].map((_, index) => (
        <svg
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
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2L9.31 8.19 3.1 9.29 7.46 14.1 6.36 20 12 17.77 17.64 20l-1.1-5.9L20.9 9.29 14.69 8.19z" />
        </svg>
      ))}
      <p className="ml-2">{hoverRating || rating}/5</p>
    </div>
  );
}

export default StarRating;
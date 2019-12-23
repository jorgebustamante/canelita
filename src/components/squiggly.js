import React from 'react';

const Squiggly = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 4'
      className='SVGLINE'
      // height='10'
      // width="50"
    >
      <path
        fill='none'
        stroke='#7F9CF5'
        strokeWidth='.2'
        className='SVGPATH'
        d='M0,3.5 c 5,0, 5, -3, 10, -3 s 5,3, 10, 3 c 5,0, 5, -3, 10, -3 s 5,3, 10, 3'
      />
    </svg>
  );
};

export default Squiggly;

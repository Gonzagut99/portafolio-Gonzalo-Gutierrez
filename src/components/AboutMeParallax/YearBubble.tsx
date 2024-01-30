import React from 'react'
type BubbleProps={
    year:string
}

function YearBubble({year}:BubbleProps) {
  return (
    <div
      className={`flex flex-col gap-3 justify-center items-center font-extralight text-lg rounded-lg text-gray-200/90 w-full relative h-fit`}
    >
      <img
        className="opacity-85 absolute inset-0"
        src="/parallaxImages/bubble.png"
        alt={`${year} burbúja`}
      />
      <img
        className="opacity-0"
        src="/parallaxImages/bubble.png"
        alt={`${year} burbúja`}
      />
      <div className='h-full w-full flex justify-center items-center absolute inset-0'>
          <p className="text-lg sm:text-xl md:text-2xl">{year}</p>
      </div>
    </div>
  );
}

export default YearBubble
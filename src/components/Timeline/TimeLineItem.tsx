import React from 'react'
import {type TimelineItem} from './TimeLineTypes'
interface TimelineItemProps extends TimelineItem{
}

function TimeLineItem({title, description, link, date, place}:TimelineItemProps) {
  return (
    <>
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-200"></div>
      <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-yellow-200/70 mt-2">
        {title}
      </h3>
      {
        place && <h4 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300/50 text-pretty">
        {place}
      </h4>
      }
      <p className="mt-1 mb-4 text-sm sm:text-base font-extralight text-gray-500 dark:text-gray-200/75 text-pretty">
        {description}
      </p>
      {link && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none dark:bg-transparent border border-gray-200/80 dark:text-gray-200/80 dark:hover:text-yellow-200/80 dark:hover:bg-transparent dark:hover:border-yellow-200/80 dark:focus:bg-gray-100/10"
        >
          Saber más ...{" "}
          <svg
            className="w-3 h-3 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      )}
    </>
  );
}

export default TimeLineItem
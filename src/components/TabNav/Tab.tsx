import React from 'react'

function Tab() {
  return (
    <li className="w-full">
      <a
        href="#"
        className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
        aria-current="page"
      >
        Profile
      </a>
    </li>
  );
}

export default Tab
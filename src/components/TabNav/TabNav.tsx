
// function TabNav() {
//   return (
//     <ul className="lg:w-[740px] mx-auto flex w-full mb-4 text-sm font-medium text-center text-gray-500 rounded-lg shadow-md sm:flex dark:divide-[#1d1d2b] dark:text-gray-400">
//       <li className="w-full">
//         <a
//           href="#"
//           className="inline-block w-full p-2 bg-white border-s-0 border-gray-200 dark:border-[#1d1d2b] rounded-s-lg hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-gray-200 dark:bg-transparent dark:hover:bg-[#1d1d2b]"
//         >
//           Habilidades
//         </a>
//       </li>
//       <li className="w-full">
//         <a
//           href="#"
//           className="inline-block w-full p-2 bg-white border-s-0 border-gray-200 dark:border-[#1d1d2b] rounded-e-lg hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-gray-200 dark:bg-transparent dark:hover:bg-[#1d1d2b]"
//         >
//           Educación
//         </a>
//       </li>
//     </ul>
//   );
// }
type TabNavProps = {
    activeTab: string;
    setActiveTab: (value: string) => void;
  };
  
  function TabNav({ activeTab, setActiveTab }: TabNavProps) {
    return (
      <ul className="lg:w-[740px] mx-auto flex w-full mb-4 text-sm font-medium text-center text-gray-500 rounded-lg shadow-md sm:flex dark:divide-[#1d1d2b] dark:text-gray-400">
        <li className="flex-1">
          <button
            onClick={() => setActiveTab('habilidades')}
            className={`inline-block w-full p-2 bg-white border-s-0 border-gray-200 dark:border-[#1d1d2b] rounded-s-lg hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-gray-200 dark:bg-transparent dark:hover:bg-[#1d1d2b] h-full ${activeTab === 'habilidades' ? 'bg-gray-50 dark:!bg-[#1d1d2b]' : ''}`}
          >
            Habilidades y tecnologías
          </button>
        </li>
        <li className="flex-1">
          <button
            onClick={() => setActiveTab('educacion')}
            className={`inline-block w-full p-2 bg-white border-s-0 border-gray-200 dark:border-[#1d1d2b] rounded-e-lg hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-gray-200 dark:bg-transparent dark:hover:bg-[#1d1d2b] h-full ${activeTab === 'educacion' ? 'bg-gray-50 dark:!bg-[#1d1d2b]' : ''}`}
          >
            Educación
          </button>
        </li>
      </ul>
    );
  }

export default TabNav
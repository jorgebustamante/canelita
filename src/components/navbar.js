import React from 'react';

const burgerClick = () => {

let target = document.getElementById('main-nav');
        // Toggle the class on "main-nav"
        target.classList.toggle('hidden');
};

const Navbar = () => {
  return (
    
      <nav className="flex items-center justify-between flex-wrap mx-auto pt-4 pb-4 bg-red-500">
        <div className="flex items-center flex-no-shrink text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span className="font-semibold text-2xl tracking-tight text-gray-800 canela">CANELITA</span>
        </div>
        <div className="block sm:hidden">
          <button className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={burgerClick}
>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div id="main-nav" className="w-full flex-grow sm:flex items-center sm:w-auto hidden">
          <div className="text-lg text-gray-800 sm:flex-grow">
            <a href="#" className="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 text-grey-lighter hover:text-grey-light mr-4">
              About
            </a>
            <a href="#" className="no-underline font-bold block mt-4 sm:inline-block sm:mt-0 text-grey-lighter hover:text-grey-light mr-4">
              Link Two
            </a>
          </div>
         
        </div>
      </nav>
   
  );
};
export default Navbar;

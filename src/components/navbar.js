import React from 'react';
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";


const burgerClick = () => {

let target = document.getElementById('main-nav');
        // Toggle the class on "main-nav"
        target.classList.toggle('hidden');
};

const Navbar = () => {
  return (
    
      <nav className="flex items-center justify-between flex-wrap mx-auto py-2 lg:py-4  bg-red-500">
        <div className="flex items-center flex-no-shrink text-white mr-6 px-4">
          <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <AniLink fade to='/' className="font-semibold text-3xl tracking-tight text-gray-800 canela">CANELITA</AniLink>
        </div>
        <div className="block sm:hidden px-4">
          <button className="navbar-burger flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={burgerClick}
>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div id="main-nav" className="w-full flex-grow sm:flex items-center sm:w-auto hidden">
          <div className="text-lg text-gray-800 sm:flex-grow">
            <AniLink fade to="/about" className="no-underline font-medium block mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-grey-light mr-4">
              About
            </AniLink>
            <AniLink fade to="/contact" className="no-underline font-medium block mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-grey-light mr-4">
              Contact
            </AniLink>
          </div>
         
        </div>
      </nav>
   
  );
};
export default Navbar;

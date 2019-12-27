import React from 'react';
// import { Link } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { HamburgerSqueeze } from 'react-animated-burgers';



class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    });
    let target = document.getElementById('main-nav');
    // Toggle the class on "main-nav"
    target.classList.toggle("hidden");
    // target.classList.toggle('h-40');

  };
  render() {
    return( <nav className='flex items-center justify-between flex-wrap mx-auto py-2 lg:py-4  bg-red-500'>
      <div className='flex items-center flex-no-shrink text-white mr-6 px-4'>
        <svg
          className='fill-current h-8 w-8 mr-2'
          width={54}
          height={54}
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
        </svg>
        <AniLink
          fade
          to='/'
          className='font-semibold text-3xl tracking-tight text-gray-800 canela'
        >
          CANELITA
        </AniLink>
      </div>
      <div className='block sm:hidden pr-4'>
        <HamburgerSqueeze className='text-white hover:text-white flex'
          isActive={this.state.isActive}
          toggleButton={this.toggleButton}
          buttonWidth={30}
          barColor='white'
        />
       
      </div>
      <div
        id='main-nav'
        className='w-full flex-grow sm:flex items-center sm:w-auto dropdown hidden'
      >
        <div className='text-lg text-gray-800 sm:flex-grow'>
          <AniLink
            fade
            to='/about'
            className='no-underline font-medium block mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-grey-light mr-4'
          >
            About
          </AniLink>
          <AniLink
            fade
            to='/contact'
            className='no-underline font-medium block mt-4 sm:inline-block sm:mt-0 text-gray-800 hover:text-grey-light mr-4'
          >
            Contact
          </AniLink>
        </div>
      </div>
    </nav>
    );}
}
export default Navbar;

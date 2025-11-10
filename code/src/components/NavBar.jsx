import React, { useEffect, useState } from 'react'

import cookifyLogo from '/logo.png';

import {NavLink} from 'react-router-dom'

const NavBar = () => {

    const [isOppened, setisOppened] = useState(false);

    const toggleMenu = () => {
        setisOppened(!isOppened);
    }

     const closeMenu = () => {
    setisOppened(false);
  };

  



    return (
        <div>
            <nav>
                <div className='flex justify-between items-center px-3 md:px-4 lg:px-10 lg:py-4'>
                    <div className='w-20 lg:w-24'>
                        <img src={cookifyLogo} alt="" className='w-full h-full object-cover' />
                    </div>

                    <div className='hidden md:text-lg md:flex md:justify-center items-center gap-4 md:gap-8 lg:gap-10'>
                        <NavLink to='/' >Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/recipes'  >Recipes</NavLink>
                        <NavLink to='/create-recipes'   className='md:border px-3 rounded-xl py-1 text-green-800 hover:bg-green-800 hover:text-white'>Create Recipes</NavLink>
                    </div>


                    <i onClick={toggleMenu} className="ri-menu-line md:hidden"></i>
                </div>


                <div className={`bg-[#F9F8F6] w-full  text-lg px-2 flex flex-col gap-2 py-2 transition-all   ${isOppened ? "opacity-100 absolute z-20" : "opacity-0 hidden"}`}>
                    <NavLink to='/' onClick={closeMenu}>Home</NavLink>
                    <NavLink to='/about' onClick={closeMenu} >About</NavLink>
                    <NavLink to='/recipes'  onClick={closeMenu}>Recipes</NavLink>
                    <NavLink to='/create-recipes' onClick={closeMenu} >Create Recipes</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
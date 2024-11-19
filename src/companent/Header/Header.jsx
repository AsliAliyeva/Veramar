import React from 'react'
import logo from '../../img/logo.webp'
import veramar from '../../img/veramar.png'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'

import { useState } from "react";
import { IoMdClose } from 'react-icons/io'

 

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className='relative'>
        <div className='flex justify-between items-center w-[90%] mx-auto my-4 laptop:w-[75%]'>
            <a href='#'><img className='w-[70px] max-h-[70px] tablet:max-h-[90px] tablet:w-[90px]' src={logo} alt="" /></a>
            <div ><img className='m-auto max-h-[60px] tablet:w-[300px] tablet:max-h-[100px] ' src={veramar} alt="" /></div>
            <div></div>
        </div>
        <div className=' mob:w-[80%] tablet:w-[60%]  flex-col tablet:flex-row mx-auto mt-8 flex justify-between items-center'>
            <div className=' w-[50%] mb-5 tablet:mb-0 items-center tablet:gap-x-10 laptop:w-[20%] flex flex-wrap justify-between '>
              <button className='bg-[#d0c5ad] font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>Tienda</button>
              <div 
                  className='bg-[#f2f2f2] flex laptop:hidden  border rounded cursor-pointer'
                  onClick={toggleMenu}
                  >
                  <FaBars className={` ${isOpen ? "hidden" : "block"} text-[22px] m-2 ` } />
                  <IoMdClose className={` ${isOpen ? "block" : "hidden"}  text-[35px] p-1` }  />
              </div>

            </div>
            <ul className='hidden laptop:flex justify-center  w-[60%]'>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-[4px] px-4 py-2 mx-2 hover:border-[#d0c5ad] transition duration-200 text-[17px] '><a href='#'>Veramar</a></li>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-[4px] px-4 py-2 mx-2 hover:border-[#d0c5ad] transition duration-200 text-[17px]'><a href='#'>Blog</a></li>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-[4px] px-4 py-2 mx-2 hover:border-[#d0c5ad] transition duration-200 text-[17px]'><a href='#'>Contacto</a></li>
            </ul>
            
            <div className='flex items-center gap-[25px]'>
              <FaRegUser className='w-[30px] h-[25px] cursor-pointer ' />
              <div className='relative'>
                <MdOutlineShoppingBag className='w-[30px] h-[29px] cursor-pointer hover:text-[#8e959d]'  />
                <div className='absolute top-[-5px] right-0 bg-[#748371] border rounded-[50%] px-1 text-[12px] text-white'>0</div>
              </div>
            </div>
        </div>
        <div 
              className={`${isOpen ? "max-h-[30vh]" : "max-h-0 "} flex overflow-hidden  absolute mt-1 w-[100vw] top-[100%] flex-col bg-[#748371] text-[#f7edde] transition-all duration-500 ease-in-out  `}
              >
                <a href="#" className='hover:bg-[#d0c5ad] hover:text-[#748371] pl-4 py-2 text-[20px] font-semibold transition duration-200'>Veramar</a>
                <a href="#"  className='hover:bg-[#d0c5ad] hover:text-[#748371] pl-4 py-2 text-[20px] font-semibold transition duration-200'>Blog</a>
                <a href="#"  className='hover:bg-[#d0c5ad] hover:text-[#748371] pl-4 py-2 text-[20px] font-semibold transition duration-200'>Contacto</a>
              </div>
    </div>
  )
}

export default Header
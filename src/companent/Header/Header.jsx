import React from 'react'
import logo from '../../img/logo.webp'
import veramar from '../../img/veramar.png'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { MdOutlineShoppingBag } from 'react-icons/md'

function Header() {
  return (
    <div>
        <div className='flex justify-between items-center w-[90%] mx-auto my-4 laptop:w-[75%]'>
            <a href='#'><img className='w-[70px] max-h-[70px] tablet:max-h-[90px] tablet:w-[90px]' src={logo} alt="" /></a>
            <div ><img className='m-auto max-h-[60px] tablet:w-[300px] tablet:max-h-[100px] ' src={veramar} alt="" /></div>
            <div></div>
        </div>
        <div className=' mob:w-[80%] tablet:w-[60%] flex-col tablet:flex-row mx-auto mt-8 flex justify-between items-center'>
            <div className=' w-[50%] items-center tablet:gap-x-10 laptop:w-[20%] flex justify-between '>
              <button className='bg-[#d0c5ad] font-bold px-6 py-2 rounded-[5px] border hover:bg-[#748371] hover:text-white transition duration-200'>Tienda</button>
              <div className='bg-[#f2f2f2] flex laptop:hidden p-1 border rounded text-[22px] '><FaBars /></div>
            </div>
            <ul className='hidden laptop:flex justify-center gap-[30px] w-[60%]'>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-2 hover:border-[#d0c5ad] transition duration-200'><a href='#'>Veramar</a></li>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-2 hover:border-[#d0c5ad] transition duration-200'><a href='#'>Blog</a></li>
              <li className='font-semibold hover:text-[#7A7A7A] border-transparent  border-b-2 hover:border-[#d0c5ad] transition duration-200'><a href='#'>Contacto</a></li>
            </ul>
            
            <div className='flex items-center gap-[25px]'>
              <FaRegUser className='w-[30px] h-[25px] cursor-pointer ' />
              <div className='relative'>
                <MdOutlineShoppingBag className='w-[30px] h-[29px] cursor-pointer'  />
                <div className='absolute top-[-5px] right-0 bg-[#748371] border rounded-[50%] px-1 text-[12px] text-white'>0</div>
              </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Header
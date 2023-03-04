import React from 'react'
import Image from "next/image"
import {Bars4Icon, MagnifyingGlassCircleIcon, ShoppingCartIcon, SignalIcon} from '@heroicons/react/24/outline'
function Header() {
  return (
    <header>
        {/* TopNav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image 
            src={'https://links.papareact.com/f90'}
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
            /> 
          </div>
           
           {/* Search */}
           <div className=' hidden sm:flex items-center h-10 flex-grow rounded-md cursor-pointer bg-yellow-300 hover:bg-yellow-400'>
            <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' />
            <MagnifyingGlassCircleIcon className='h-12 p-4'/>
           </div>

           {/* Right Infos */}
           <div className='text-white flex items-center text-xs space-x-6 mx-6'>
  {/* User info */}
           <div className='link'>
            <p>Welcome back, Nghi</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
           </div>

<div className='link'>
  <p>Returns</p>
  <p className='font-extrabold md:text-sm'>& Orders</p>
</div>

<div className='link relative flex items-center'>
  <span className='absolute top-0 right-0 md:right-12 bg-yellow-400 w-4 h-4 text-center text-black font-bold rounded-full'>0</span>
  <ShoppingCartIcon className='h-10'/>
  <p className='font-extrabold md:text-sm md:inline hidden mt-2'>Basket</p>
</div>
           </div>
         
        </div>
        {/* Bottom Nav */}
        <div className='flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm'>
          <p className='link flex items-center'>
            <Bars4Icon className='h-6 my-1 mr-1'/>
            All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon's business</p>
          <p className='link'>Today's Deals</p>
          <p className='link hidden md:inline-flex'>Accessories</p>
          <p className='link hidden md:inline-flex'>Buy Again</p>
          <p className='link hidden md:inline-flex'>Electronics</p>
        </div>
    </header>
  )
}

export default Header
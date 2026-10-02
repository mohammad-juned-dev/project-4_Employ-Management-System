import React from 'react'


const Header = () => {
  return (
    <div className='w-full py-8 flex items-center justify-between'>
  <h1 className=' text-xl font-semibold'>Hello <br /> <span className='text-2xl font-semibold'>Name 👋</span></h1>
 <button className='text-md px-3 py-1 transition-all active:scale-95 border-2  border-red-700 rounded-lg'>LogOut</button>
    </div>
  )
}

export default Header
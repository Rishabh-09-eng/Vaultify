import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center gap-5  justify-center bg-slate-800 text-white p-2 mt-10'>
      <div className="logo font-bold text-lg  md:text-2xl cursor-pointer">
          <span className='text-green-700'>&lt;</span>
          Vault
          <span className='text-green-700'>ify/ &gt;</span>
        </div>
        <div className='flex items-center font-bold text-sm md:text-lg gap-5 text-white'>
            Created with <img className='w-5 md:w-10' src="icons/heart.svg" alt="" />
        </div>
    </div>
  )
}

export default Footer

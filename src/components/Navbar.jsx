import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white px-4 py-4'>
      <div className='max-w-6xl mx-auto flex flex-col gap-1 md:flex-row justify-between items-center'>

        <div className="logo font-bold text-lg md:text-2xl cursor-pointer">
          <span className='text-green-700'>&lt;</span>
          Vault
          <span className='text-green-700'>ify/ &gt;</span>
          
        </div>
        <ul className='flex gap-4'>
          <a href="/" className='hover:font-bold'><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/contact"><li>Contact</li></a>
        </ul>

        <button>
          <img className='w-5 md:w-10 invert cursor-pointer' src="/icons/github.svg" alt="github logo" />
        </button>

      </div>
    </nav>
  )
}

export default Navbar

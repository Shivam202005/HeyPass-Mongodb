import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-2 h-14 items-center bg-orange-300 '>
      <div className="logo font-bold text-2xl  text-blue-900 rounded-3xl" >
        <span className='text-red-500'>&lt;</span>
        Hey
        <span className='text-red-500'>Pass &gt;</span>
      </div>
      {/* <ul>
        <li className='gap-2 flex'>
          <a className='  hover:font-bold ' href="">Home</a>
          <a className=' hover:font-bold ' href="">About</a>
          <a className=' hover:font-bold ' href="">Contact</a>

        </li>
      </ul> */}
      <button className='text-white bg-green-700 my-5 mx-2 flex justify-between  items-center rounded-full cursor-pointer ring-white ring-1'>
        <img className='invert w-10 p-1' src="public/github.svg" alt="Github" /> 
        <span className='font-bold px-2'>Github</span>
      </button>
    </nav>
  )
}

export default Navbar

import Logo from './Logo'
import MenuIcon from './MenuIcon'
import NavLinks from './NavLinks'
import SearchIcon from './SearchIcon'
import UserIcon from './UserIcon'
import { useState } from 'react'

function Navigation() {
  const [navbar, setNavbar] = useState(true)

  return (
    <nav className='fixed top-0 left-0 right-0 flex justify-center items-center w-full h-[65px] bg-gradient-to-r from-slate-800 to-slate-500 z-10'>
      <div className='w-full h-full flex justify-between items-center mx-10 text-white'>
        <div className='flex justify-center items-center w-50 h-50 p-2 h-full'>
          <Logo />
        </div>
        <div className='flex justify-start items-center w-[75%] h-full pl-3'>
          <button onClick={() => setNavbar(!navbar)}>
            <MenuIcon />
          </button>
        </div>
        <div className='flex justify-end items-center gap-5 w-[25%] h-full'>
          <SearchIcon />
          <UserIcon />
        </div>
      </div>
      {navbar ? '' : <NavLinks navbar={navbar} setNavbar={setNavbar} />}
    </nav>
  )
}

export default Navigation

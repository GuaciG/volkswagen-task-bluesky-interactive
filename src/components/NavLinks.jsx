import CloseMenuIcon from './CloseMenuIcon'
import LinksExtra from './LinksExtra'
import LinksPrimary from './LinksPrimary'
import LinksSecondary from './LinksSecondary'

function NavLinks({ navbar, setNavbar }) {
  return (
    <div className='w-full h-full fixed top-0 left-0 right-0 p-8 flex flex-col text-white gap-8 justify-start items-start bg-gradient-to-r from-slate-800 to-slate-500 z-10 overflow-auto'>
      <CloseMenuIcon navbar={navbar} setNavbar={setNavbar} />
      <div className='w-full flex flex-col justify-start items-start lg:flex-row lg:justify-center lg:items-center lg:px-10'>
        <LinksPrimary />
        <LinksSecondary />
        <LinksExtra />
      </div>
    </div>
  )
}

export default NavLinks

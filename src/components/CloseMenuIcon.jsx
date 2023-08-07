function CloseMenuIcon({ navbar, setNavbar }) {
  return (
    <button onClick={() => setNavbar(!navbar)} className='w-[10%] border-0'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='w-12 h-12'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </button>
  )
}

export default CloseMenuIcon

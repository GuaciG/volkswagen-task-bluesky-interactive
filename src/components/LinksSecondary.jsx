function LinksSecondary() {
  return (
    <div className='flex flex-col justify-start items-start w-full lg:w-1/3 lg:pl-10 border-x-0 lg:border-x-2 lg:border-white mb-16 lg:mb-0'>
      <ul className='flex flex-col justify-start items-start text-sm w-full [&>li]:w-full [&>li]:flex [&>li]:items-center [&>li]:justify-between [&>li>a]:inline-block [&>li>a]:my-3'>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Find a retailer
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Book a service
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Request a quote
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Contact me
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Login to myVolkswagen
          </a>
        </li>
        <li>
          <a href='#'>
            <img
              src='/assets/cost_of_ownership.jpg'
              alt='cost of ownership'
              className='w-[150px] h-auto object-fit'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LinksSecondary

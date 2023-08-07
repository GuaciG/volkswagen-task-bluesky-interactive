function LinksPrimary() {
  return (
    <div className='flex flex-col justify-start items-start w-full lg:w-1/3 mb-16 lg:mb-0'>
      <ul className='flex flex-col justify-start items-start text-xl w-full [&>li]:w-full lg:[&>li]:w-[80%] [&>li]:flex [&>li]:items-center [&>li]:justify-start [&>li>a]:inline-block [&>li>a]:w-full [&>li>a>span]:float-right [&>li>a]:my-3'>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            New models and configurator
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Electric and Hybrid cars
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Used cars
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Finance offers and fleet
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Connected services
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Owners and services
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
        <li>
          <a href='#' className='hover:text-cyan-500'>
            Volkswagen Life
            <span className="after:content-['⟶']"></span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LinksPrimary

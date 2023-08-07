function NewsletterSection() {
  return (
    <section className='w-full flex justify-center items-center my-8 pb-12 lg:pb-0'>
      <div className='w-full bg-sky-800 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:mx-28 lg:py-14'>
        <div className='w-full lg:w-[40%] h-auto flex flex-col justify-start items-start px-6 pt-9 pb-5 lg:px-12 lg:py-0'>
          <h5 className='text-base text-white font-medium'>Newsletter</h5>
          <h3 className='text-5xl text-white font-light pb-8'>
            Get the <span className='font-bold'>latest news</span>
          </h3>
          <p className='text-base font-medium text-white leading-snug pb-8'>
            Sign up and we&apos;ll deliver updates and news straight to your
            inbox.
          </p>

          <div className='flex flex-col w-full text-white'>
            <div className='flex justify-start items-center w-full mb-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-10 h-10 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                />
              </svg>
              <p className='text-sm font-medium'>
                Find out more about the latest car launches, products and
                innovations
              </p>
            </div>
            <div className='flex justify-start items-center w-full mb-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1'
                stroke='currentColor'
                className='w-8 h-8 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12'
                />
              </svg>

              <p className='text-sm font-medium'>
                Tips to help you to get the most out of your car
              </p>
            </div>
            <div className='flex justify-start items-center w-full mb-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1'
                stroke='currentColor'
                className='w-8 h-8 mr-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                />
              </svg>

              <p className='text-sm font-medium'>
                Events, promotions and special offers
              </p>
            </div>
          </div>

          <button className='my-8 lg:mb-0 py-[12px] px-[30px] border-0 rounded-[100px] bg-white text-slate-900 font-bold transition-all duration-300 hover:bg-slate-200 hover:scale-110 hover:shadow-xl'>
            Subscribe now
          </button>
        </div>
        <div className='w-full lg:w-[60%] h-full relative'>
          <img
            src='/assets/connected_services-hero-arteon_shooting_brake.webp'
            className='w-full h-auto absolute lg:-right-12 lg:top-0'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection

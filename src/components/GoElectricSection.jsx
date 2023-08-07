function GoElectricSection() {
  return (
    <section className='w-full flex flex-col justify-center items-center mt-40 pb-12 lg:my-16 px-3'>
      <div className='w-full m-auto'>
        <h2 className='text-4xl text-center lg:text-left py-4 lg:ml-36 text-sky-800'>
          Five reasons to <span className='font-bold'>go electric</span>
        </h2>
      </div>
      <div className='w-[90%] flex flex-wrap justify-center items-center mt-12 px-3'>
        <div className='flex flex-wrap gap-2 justify-center items-start'>
          <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700 w-[300px] h-[180px] lg:w-[250px] lg:h-[200px]'>
            <h5 className='mb-4 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50'>
              Economical to run
            </h5>
            <p className='mb-4 text-base font-medium text-neutral-600 dark:text-neutral-200'>
              The e-Golf costs 4p per mile versus 14p petrol equivalent.
            </p>
          </div>

          <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700 w-[300px] h-[180px] lg:w-[250px] lg:h-[200px]'>
            <h5 className='mb-4 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50'>
              Brilliant to drive
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Quiet and spacious, with electric acceleration.
            </p>
          </div>
          <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700 w-[300px] h-[180px] lg:w-[250px] lg:h-[200px]'>
            <h5 className='mb-4 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50'>
              Plenty of range
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              144 miles WLTP tested range. That&apos;s London to Brighton and
              back.
            </p>
          </div>
          <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700 w-[300px] h-[180px] lg:w-[250px] lg:h-[200px]'>
            <h5 className='mb-4 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50'>
              Easy to maintain
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Simple. Clean. Dependable. Servicing at all Volkswagen garages.
            </p>
          </div>
          <div className='block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-sky-700 w-[300px] h-[180px] lg:w-[250px] lg:h-[200px]'>
            <h5 className='mb-4 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50'>
              Built by Volkswagen
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              New technology, same pedigree. Quality you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GoElectricSection

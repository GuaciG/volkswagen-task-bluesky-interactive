function WhereStartSection() {
  return (
    <section className='w-full flex flex-col justify-center items-center px-3 py-3 lg:px-12 lg:py-12'>
      <div className='w-full flex justify-center lg:justify-start items-center'>
        <h2 className='text-4xl py-4 px-3 lg:pl-36 text-sky-800 text-center lg:text-left'>
          Where would you <span className='font-bold'>like to start?</span>
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center pt-10 pb-5 lg:py-10 gap-6'>
        <div className='flex flex-col justify-center items-center w-full lg:w-1/3 py-5 px-3 lg:px-7'>
          <div className='flex justify-center items-center p-4 mb-6 rounded-full border border-slate-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-20 h-20 fill-sky-800'
            >
              <path
                fillRule='evenodd'
                d='M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className=' pb-4'>
              Get a closer look at the e-Golf&apos;s technology, features, and
              connected services.
            </p>
            <a className=' text-sky-800' href='#e-golf-features'>
              Explore e-Golf features
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full lg:w-1/3 py-5 px-3 lg:px-7'>
          <div className='flex justify-center items-center p-4 mb-6 rounded-full border border-slate-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-20 h-20 fill-sky-800'
            >
              <path
                fillRule='evenodd'
                d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className=' pb-4'>
              Find your own Approved Used Volkswagen using our used car locator.
            </p>
            <a className=' text-sky-800' href='#'>
              Search for used e-Golf&apos;s
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center w-full lg:w-1/3 py-5 px-3 lg:px-7'>
          <div className='flex justify-center items-center p-4 mb-6 rounded-full border border-slate-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-20 h-20 fill-sky-800'
            >
              <path d='M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z' />
              <path
                fillRule='evenodd'
                d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <p className=' pb-4'>
              Explore our electric and plug-in hybrid Volkswagens.
            </p>
            <a className=' text-sky-800' href='#'>
              Next steps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhereStartSection

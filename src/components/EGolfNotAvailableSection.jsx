function EGolfNotAvailableSection() {
  return (
    <section className='flex justify-center items-center my-16'>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className='w-full lg:w-1/2 flex justify-center items-center'>
          <img
            src='/assets/go_ultra_low-4.webp'
            className='w-full h-auto bg-cover bg-center flex justify-center items-center'
            alt=''
          />
        </div>
        <div className='w-full lg:w-1/2 lg:h-[400px] flex flex-col justify-center items-center text-center bg-sky-800 px-3 lg:px-16 py-5 lg:py-0'>
          <h3 className='text-5xl py-4 text-white font-light'>
            The <span className='font-bold'>e-Golf</span> is no longer available
            to order
          </h3>
          <p className='text-base py-4 px-3 lg:px-8 text-white font-medium'>
            With a range of used car stock available across the UK, why not
            request a call back from your prefered Volkswagen Retailer today.
          </p>

          <button className='my-5 py-[12px] px-[30px] border-0 rounded-[100px] bg-white text-slate-900 font-bold transition-all duration-300 hover:bg-slate-200 hover:scale-110 hover:shadow-xl'>
            Request a call back
          </button>
        </div>
      </div>
    </section>
  )
}

export default EGolfNotAvailableSection

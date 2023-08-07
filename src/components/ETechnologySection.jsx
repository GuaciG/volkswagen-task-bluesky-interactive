function ETechnologySection() {
  return (
    <section className='w-full flex flex-col items-center pt-12 mb-20'>
      <div className='w-full flex justify-center lg:justify-start items-center pb-16'>
        <h2 className='text-4xl  lg:ml-48 font-bold text-sky-800'>
          e-Technology
        </h2>
      </div>
      <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:items-start'>
        <div className='w-full lg:w-[60%] h-full'>
          <img
            src='/assets/new_cars-e_golf-driver_assistance-4.webp'
            className='w-full h-auto'
            alt=''
          />
        </div>
        <div className='w-full lg:w-[40%] h-auto flex flex-col justify-center lg:justify-start items-start py-12 px-6 lg:px-12 border-b-2'>
          <h5 className='text-base text-black font-medium'>
            Driver assistance
          </h5>
          <h3 className='text-5xl text-black font-light pb-8'>
            There when <span className='font-bold'>you need it</span>
          </h3>
          <p className='text-base font-medium text-black leading-snug pb-5'>
            The e-Golf features the full suite of Volkswagen driver assistance,
            including Adaptive Cruise Control, Front Assist, Blind Spot Sensor,
            Park Assist, Traffic Jam Assist and Emergency Assist to bring the
            car to a controlled stop if you are unable to.
          </p>

          <button className='mt-8 py-[12px] px-[30px] border-0 rounded-[100px] bg-sky-700 text-white font-bold transition-all duration-300 hover:bg-sky-600 hover:scale-110 hover:shadow-xl'>
            Subscribe now
          </button>
        </div>
      </div>
    </section>
  )
}

export default ETechnologySection

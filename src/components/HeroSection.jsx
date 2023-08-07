function HeroSection() {
  return (
    <div className='bg-hero-pattern relative overflow-hidden h-screen w-screen bg-cover bg-[position:40%_50%] lg:bg-[position:0%_50%]'>
      <div className='absolute top-20 left-6 lg:top-28 lg:left-24 text-white'>
        <h1 className='text-7xl font-extrabold'>e-Golf</h1>
        <h2 className='text-4xl'>The Future Is Today</h2>
        <button className='mt-14 py-[12px] px-[30px] border-0 rounded-[100px] bg-white text-slate-900 font-bold transition-all duration-300 hover:bg-slate-200 hover:scale-110 hover:shadow-xl'>
          Register now!
        </button>
      </div>
    </div>
  )
}

export default HeroSection

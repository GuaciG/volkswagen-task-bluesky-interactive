import CarouselFeatures from './CarouselFeatures'

function FeaturesSection() {
  return (
    <section
      id='e-golf-features'
      className='w-full flex flex-col justify-center items-start lg:my-16 pb-80 lg:pb-0 px-3 lg:px-0'
    >
      <div className='w-full m-auto px-3 lg:px-0 animate-fade-right animate-once animate-duration-500 animate-delay-500 animate-ease-in animate-normal animate-fill-forwards'>
        <h2 className='text-4xl py-2 text-center lg:text-left lg:ml-36 text-sky-800'>
          <span className='font-bold'>Explore</span> the e-Golf&apos;s features
        </h2>
        <p className='lg:ml-56 text-base font-medium text-center lg:text-left'>
          Get to know the e-Golf&apos;s standard features before you choose your
          preferred trim.
        </p>
      </div>
      <div className='w-full m-auto px-3 lg:px-0 mt-20 animate-fade-left animate-once animate-duration-500 animate-delay-500 animate-ease-in animate-normal animate-fill-forwards'>
        <h2 className='text-4xl py-2 text-center lg:text-left lg:ml-36 font-bold text-sky-800'>
          Design
        </h2>
        <p className='lg:ml-56 text-base font-medium text-center lg:text-left'>
          Everything you love about the Golf on the outside. Everything
          you&apos;ll love about the e-Golf on the inside.
        </p>
      </div>
      <CarouselFeatures />
    </section>
  )
}

export default FeaturesSection

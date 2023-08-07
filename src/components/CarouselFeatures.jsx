import { useState } from 'react'

function CarouselFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      url: '/assets/new_cars-e_golf-exterior.webp',
      feature: 'Exterior',
      title: {
        important: 'Instantly',
        info: 'recognisable'
      },
      description:
        'The e-Golf retains the classic styling of the Golf, with its own electric twist. LED headlights, C-shaped running lights and signature blue flash across the front grille.'
    },
    {
      url: '/assets/new_cars-e_golf-interior.webp',
      feature: 'Interior',
      title: {
        important: 'Comfortably',
        info: 'roomy'
      },
      description:
        'The surprisingly spacious interior of the e-Golf combines style, practicality and comfort with unique touches like the electric blue stitching on the leather-wrapped steering wheel.'
    },
    {
      url: '/assets/new_cars-e_golf-lights.webp',
      feature: 'Lights',
      title: {
        important: 'Less energy',
        info: 'more power'
      },
      description:
        'The e-Golf retains the classic styling of the Golf, with its own electric twist. LED headlights, C-shaped running lights and signature blue flash across the front grille.'
    },
    {
      url: '/assets/new_cars-e_golf-wheels.webp',
      feature: 'Wheels',
      title: {
        important: 'Aerodynamic',
        info: 'alloys'
      },
      description:
        'The 16-inch Tileve alloy wheels have been specially built to be extra-aerodynamic. The reduced drag means they actually help the car save energy.'
    }
  ]

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className='w-full h-[400px] lg:w-[60%] lg:h-[750px] m-auto pt-10 pb-20 lg:py-20 relative'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
      >
        <div className='absolute -bottom-[370px] lg:bottom-0 left-0 p-5 text-xl text-white h-[300px] lg:h-[185px] w-full bg-black/70 rounded-2xl lg:rounded-t-none'>
          <h4 className='text-base font-medium'>{`${slides[currentIndex].feature}`}</h4>
          <p className='text-4xl font-light'>
            <span className='font-bold text-sky-800'>{`${slides[currentIndex].title.important}`}</span>{' '}
            {`${slides[currentIndex].title.info}`}
          </p>
          <p className='my-4 text-base font-medium'>{`${slides[currentIndex].description}`}</p>
        </div>
      </div>
      <div
        className='absolute top-1/2 -translate-x-0 translate-y-[-50%] left-1 lg:left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        onClick={prevSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-8 h-8 lg:w-12 lg:h-12'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </div>
      <div
        className='absolute top-1/2 -translate-x-0 translate-y-[-50%] right-1 lg:right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        onClick={nextSlide}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-8 h-8 lg:w-12 lg:h-12'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className='mx-1 cursor-pointer'
            onClick={() => goToSlide(slideIndex)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='sky-800'
              viewBox='0 0 24 24'
              strokeWidth='5'
              stroke='currentColor'
              className='w-8 h-8 text-sky-800'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 12h-15'
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselFeatures

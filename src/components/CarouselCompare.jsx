import { useState } from 'react'

function CarouselCompare() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const compareSlides = [
    {
      url: '/assets/new_cars-e_golf-makes_a_buzz-carousel1.webp',
      compare: 'e-Golf makes a buzz.',
      description:
        'But only in the motoring press. Volkswagens new pure electric hatchback has been receiving the sort of reviews you might expect for a Volkswagen.'
    },
    {
      url: '/assets/new_cars-e_golf-carousel-2.webp',
      compare: 'Easy as 1, 2, 3.',
      description:
        'The e-Golf is much simpler to maintain than a petrol or diesel car. There are just three components in the entire drivetrain and far fewer moving parts. Electric servicing is already available at all Volkswagen retailers.'
    },
    {
      url: '/assets/new_cars-e_golf-carousel-3.webp',
      compare: '0-80% in 45 mins.',
      description:
        'That is how long it takes to charge your new e-Golf using a rapid charger. And unlike petrol and diesel cars, you do not have to be there while it fills up, so you can go and do something more interesting instead.'
    },
    {
      url: '/assets/new_cars-e_golf-charging_everywhere-carousel-4.webp',
      compare: 'Charging everywhere',
      description:
        'ZapMaps recently confirmed there are now more charging stations in the UK than filling stations. Charging your e-Golf will be like charging your smartphone. Just plug in to top up your charge wherever you are. Easy.'
    },
    {
      url: '/assets/new_cars-e_golf-fill_up_for_a_fiver-carousel-5.webp',
      compare: 'Fill up for a fiver.',
      description:
        'This is how much it costs to fill up your new e-Golf, all the way from empty to full. (Home charging based on a typical cost of 14p/KWh.)'
    },
    {
      url: '/assets/new_cars-e_golf-london_to_brighton-carousel-6.webp',
      compare: 'London to Brighton. And back.',
      description:
        'This is how far you can go without recharging your new e-Golf. That is one charge every 5 days for the average driver doing 25 miles a day. (144 miles WLTP tested range.)'
    },
    {
      url: '/assets/new_cars-e_golf-cleaner_getaway-carousel-7.webp',
      compare: 'Cleaner getaway.',
      description:
        'Your new e-Golf does not produce tailpipe emissions. In fact, it does not even have a tailpipe.'
    },
    {
      url: '/assets/new_cars-e_golf-the_wait_is_over-carousel-8.webp',
      compare: 'The wait is over.',
      description:
        'Unlike petrol and diesel, there is no lag between pressing the accelerator of your new e-Golf and actually accelerating. Experience the thrill of electric. Drive the e-Golf.'
    }
  ]

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? compareSlides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === compareSlides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <section className='w-full flex justify-center items-center my-5 pt-0 pb-32 lg:py-16'>
      <div className='w-[85%] lg:w-[50%] h-[200px] lg:h-[400px] m-auto top-0 left-0 right-0 relative'>
        <div
          style={{ backgroundImage: `url(${compareSlides[currentIndex].url})` }}
          className='w-full h-full bg-center bg-cover duration-500 relative top-0 left-0 right-0'
        >
          <div className='absolute -bottom-60 lg:-bottom-40 left-0 p-5 w-full'>
            <h4 className='text-2xl font-bold'>{`${compareSlides[currentIndex].compare}`}</h4>
            <p className='my-2 text-base font-medium'>{`${compareSlides[currentIndex].description}`}</p>
          </div>
        </div>
        <div
          className='absolute top-1/2 -translate-x-10 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          onClick={prevSlide}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5 lg:w-12 lg:h-12'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 19.5L8.25 12l7.5-7.5'
            />
          </svg>
        </div>
        <div
          className='absolute top-1/2 translate-x-10 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          onClick={nextSlide}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='w-5 h-5 lg:w-12 lg:h-12'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </div>
        <div className='flex top-8 justify-center pb-44 pt-60 lg:py-40'>
          {compareSlides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className='mx-1 cursor-pointer'
              onClick={() => goToSlide(slideIndex)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
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
    </section>
  )
}

export default CarouselCompare

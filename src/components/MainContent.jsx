import CarouselCompare from './CarouselCompare'
import EGolfNotAvailableSection from './EGolfNotAvailableSection'
import ETechnologySection from './ETechnologySection'
import FeaturesSection from './FeaturesSection'
import Footer from './Footer'
import GoElectricSection from './GoElectricSection'
import NewsletterSection from './NewsletterSection'
import WhereStartSection from './WhereStartSection'

function MainContent() {
  return (
    <section className='flex flex-col justify-center items-center max-w-[1920px] mt-3 lg:mt-10 mx-auto'>
      <WhereStartSection />
      <EGolfNotAvailableSection />
      <FeaturesSection />
      <NewsletterSection />
      <GoElectricSection />
      <ETechnologySection />
      <CarouselCompare />
      <Footer />
    </section>
  )
}

export default MainContent

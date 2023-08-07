import './App.css'
import HeroSection from './components/HeroSection'
import MainContent from './components/MainContent'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Navigation />
      <HeroSection />
      <MainContent />
    </div>
  )
}

export default App

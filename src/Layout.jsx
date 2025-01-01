
import Hero from './components/hero/Hero'
import Navbar from './components/nav/Navbar'
import Service from './components/service/Service'
import VideoSection from './components/videoSection/VideoSection'

function Layout() {

  return (
    <>
      <div className='mx-auto'>
        <div className=' bg-gray-800'>
          <Navbar></Navbar>
        </div>
        <Hero></Hero>
        <VideoSection></VideoSection>
        <Service></Service>
      </div>
    </>
  )
}

export default Layout

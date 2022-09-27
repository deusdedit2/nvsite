import type { NextPage } from 'next'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'


const Home: NextPage = () => {


  return (
    <>

      <main>

        <Hero />

        <div className='container-inner relative'>

          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>


      </main>

    </>
  )
}

export default Home

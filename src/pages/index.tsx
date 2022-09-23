import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'


const Home: NextPage = () => {

  const hero = useRef(null)
  useEffect(() => {
    const scrollSpy = () => {
      var top = window.pageYOffset || document.documentElement.scrollTop;
      // @ts-ignore
      hero.current!.style.transform = `translate3d(0px, ${top / 4.5}px, 0px)`
    }
    document.addEventListener('scroll',scrollSpy)

    return removeEventListener("scroll",scrollSpy)
  }, [hero])
  return (
    <>

      <main>

        {/* <div className='cont grid w-full items-center'>
          
          <div className="grid lg:grid-cols-2 gap-4 lg:py-20 h-screen items-center">

            <div className='lg:px-5 lg:pt-0 pt-28'>
              <h1 className='text-6xl font-normal capitalize leading-snug'>Levando seu conceito para realidade</h1>
            </div>

            <div>
              <img src={"./const.png"} alt="" />
            </div>

          </div>
        </div> */}

        <section>
          <div className="h-screen bg-fixed bg-center bg-cover custom-img relative" ref={hero} id='hero'>

            <div className='cont flex items-center h-full'>

              <div className='z-[9] lg:max-w-2xl max-w-xl space-y-4'>
                <h1 className='lg:text-6xl md:text-6xl text-4xl text-left leading-snug text-white font-medium capitalize'>Os melhores serviços de construção sempre</h1>

                <p className='text-white lg:text-base md:text-sm'>Nós da NV sempre prezamos por qualidade e confiança. Por isso, procuramos oferecer os melhores serviços de construção para suprir o que você precisa a qualquer hora. Quer saber mais?</p>

                <div className='text-white flex flex-wrap space-x-3'>
                  <a className='p-3 bg-blue-500 hover:bg-blue-700 transition-colors duration-[.5s]' href="">Nossos Serviços</a>
                  <a className='p-3 bg-blue-500 hover:bg-blue-700 transition-colors duration-[.5s]' href="#">Nossos Serviços</a>
                </div>
              </div>

            </div>
          </div>

        </section>

        <div className='container-inner relative'>

          <About />
          <Services />
          <Projects />
          <Contact />
        </div>

        <footer>
          <div className='cont py-10'>
            <a href="">asdasd</a>
          </div>
        </footer>

      </main>

    </>
  )
}

export default Home

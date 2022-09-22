import type { NextPage } from 'next'
import Projects from '../components/sections/Projects'
import Services from '../components/sections/Services'


const Home: NextPage = () => {
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

        <section
          className="h-screen mb-12 bg-fixed bg-center bg-cover custom-img relative">
          <div className='cont flex items-center h-full'>

            <div className='z-[9] lg:max-w-2xl max-w-xl space-y-4'>
              <h1 className='lg:text-6xl md:text-6xl text-4xl text-left leading-snug text-white'>Providing Good Quality Building Services</h1>

              <p className='text-white lg:text-base md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusamus, ut libero, temporibus dolorem consequatur ipsa hic ex asperiores neque consequuntur aperiam dolores enim fuga magni beatae inventore velit soluta?</p>

              <div className='text-white'>
                <a href="#">Nossos Serviços</a>
              </div>
            </div>
          
          </div>
        
        </section>

        <Services />
        <Projects />
      </main>

    </>
  )
}

export default Home

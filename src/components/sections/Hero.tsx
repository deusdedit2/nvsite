import { useEffect, useRef } from "react";

export default function Hero() {
    const hero = useRef(null)
    useEffect(() => {
        const scrollSpy = () => {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            // @ts-ignore
            hero.current!.style.transform = `translate3d(0px, ${top / 4.5}px, 0px)`
        }
        document.addEventListener('scroll', scrollSpy)

        return removeEventListener("scroll", scrollSpy)
    }, [hero])
    return (
        <section id='hero'>
            <div className="h-screen bg-fixed bg-center bg-cover custom-img relative" ref={hero}>

                <div className='cont flex items-center h-full'>

                    <div className='z-[9] lg:max-w-2xl max-w-xl space-y-6'>
                        <h1 className='lg:text-6xl md:text-6xl text-4xl text-left leading-snug text-white font-medium capitalize'>Os melhores serviços de construção sempre</h1>

                        <p className='text-white lg:text-base md:text-sm'>Nós da NV sempre prezamos por qualidade e confiança. Por isso, procuramos oferecer os melhores serviços de construção para suprir o que você precisa a qualquer hora. Quer saber mais?</p>

                        <div className='text-white flex flex-wrap space-x-3'>
                            <a className='p-3 bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-[.5s] cursor-pointer'>Nossos Serviços</a>
                            <a className='p-3 bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-[.5s]' href="#">Nossos Serviços</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
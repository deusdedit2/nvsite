import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {

    const [active, setActive] = useState(false)
    const [menuShow, setMenuShow] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            top > 10 ? setActive(true) : setActive(false)
        }
    }, [])

    return (
        <header className={`fixed w-full top-0 transition-all duration-300 bg-opacity-[.12] z-50 uppercase ${active ? 'bg-white backdrop-blur-lg text-black' : 'bg-transparent backdrop-blur-0 text-white'}`}>
            <div className={`cont flex justify-between py-4 items-center`}>

                <div>
                    <Logo className='w-[4rem]' />
                </div>

                <div className="hidden lg:block">
                    <ul className='h-full flex items-center space-x-4 capitalize'>
                        <li>Home</li>
                        <li><a href="">Sobre</a></li>
                        <li>Serviços</li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <div className='h-full space-x-4 hidden lg:block'>
                        <button>Services</button>
                    </div>

                    <div>
                        <div className="block lg:hidden">
                            <div className="burguer-wrapper flex" id="burguer-wrapper">

                                <input className="appearance-none opacity-0" onClick={() => setMenuShow(!menuShow)} type="checkbox" id="burger-toggle" />
                                <label htmlFor="burger-toggle" className="burger-menu">
                                    <div className="line after:bg-black after:bg-opacity-70 top-[30%]"></div>
                                    <div className="line after:bg-black after:bg-opacity-70 after:delay-[0.1s] top-[50%]"></div>
                                    <div className="line after:bg-black after:bg-opacity-70 after:delay-[0.2s] top-[70%]"></div>
                                </label>
                            </div>
                        </div>

                        <aside className={`lg:hidden flex fixed w-[70vw] h-screen top-0 right-0 transition-transform duration-[1s] bg-white text-black bg-opacity-[.95] backdrop-blur-lg -z-10 ${menuShow ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
                            <nav className="w-full h-full flex justify-center p-20">
                                <a href="#">CU</a>
                            </nav>
                        </aside>
                    </div>
                </div>

            </div>
        </header>
    )
}
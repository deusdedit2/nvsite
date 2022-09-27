import React, { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Header() {

    const [active, setActive] = useState(false)
    const [menuShow, setMenuShow] = useState(false)
    const input = useRef(null)

    useEffect(() => {
        window.onscroll = () => {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            top > 10 ? setActive(true) : setActive(false)
        }
    }, [])

    function handleOffset(event: React.MouseEvent<HTMLAnchorElement>) {
        // @ts-ignore
        const node = document.getElementById(event.target.className.split(" ")[0])
        const Offset = node!.id === 'about' ? 80 : -20;
        const Coordinates = node!.getBoundingClientRect().top + window.pageYOffset + Offset;
        window.scrollTo({ top: Coordinates, behavior: 'smooth' });
        setMenuShow(false)
        // @ts-ignore
        input.current!.checked = false
    }

    return (
        <header className={`fixed w-full top-0 transition-all duration-300 !bg-opacity-[.12] z-50 uppercase ${active ? '!bg-white !backdrop-blur-lg text-black' : 'bg-transparent backdrop-blur-0 text-white'}`}>
            <div className={`cont flex justify-between !py-4 items-center`}>

                <div>
                    <Logo className='w-[4rem]' />
                </div>

                <div className="hidden lg:block">
                    <ul className='h-full flex items-center space-x-4 capitalize'>
                        {/* <li>Home</li>
                        <li><a href="">Sobre</a></li>
                        <li>Serviços</li> */}
                        <li><a onClick={handleOffset} className="hero cursor-pointer">Home</a></li>
                        <li><a onClick={handleOffset} className="about cursor-pointer">Sobre</a></li>
                        <li><a onClick={handleOffset} className="services cursor-pointer">Serviços</a></li>
                        <li><a onClick={handleOffset} className="projects cursor-pointer">Projetos</a></li>
                        <li><a onClick={handleOffset} className="contact cursor-pointer">Contato</a></li>
                    </ul>
                </div>

                <div className="flex items-center lg:hidden">
                    {/* <div className='h-full space-x-4 hidden lg:block'>
                        <button className="p-[.7rem] rounded text-white bg-blue-700">Contato</button>
                    </div> */}

                    <div>
                        <div className="block lg:hidden">
                            <div className="burguer-wrapper flex" id="burguer-wrapper">

                                <input ref={input} className="appearance-none opacity-0" onClick={() => setMenuShow(!menuShow)} type="checkbox" id="burger-toggle" />
                                <label htmlFor="burger-toggle" className="burger-menu">
                                    <div className="line after:bg-black after:bg-opacity-70 top-[30%]"></div>
                                    <div className="line after:bg-black after:bg-opacity-70 after:delay-[0.1s] top-[50%]"></div>
                                    <div className="line after:bg-black after:bg-opacity-70 after:delay-[0.2s] top-[70%]"></div>
                                </label>
                            </div>
                        </div>

                        <aside className={`lg:hidden flex fixed w-[70vw] h-screen top-0 right-0 transition-transform duration-[1s] bg-white text-black bg-opacity-[.95] backdrop-blur-lg -z-10 ${menuShow ? 'translate-x-0' : 'translate-x-[100vw]'}`}>
                            <nav className="w-full h-full flex justify-center p-20">
                                <ul className='h-full flex items-center capitalize flex-col gap-8 text-2xl'>
                                    {/* <li>Home</li>
                        <li><a href="">Sobre</a></li>
                        <li>Serviços</li> */}
                                    <li className="relative"><a onClick={handleOffset} className="hero hover:after:w-full after:absolute after:h-[1px] after:left-0 after:bottom-0 after:bg-black after:transition-all after:w-0 cursor-pointer">Home</a></li>
                                    <li className="relative"><a onClick={handleOffset} className="about hover:after:w-full after:absolute after:h-[1px] after:left-0 after:bottom-0 after:bg-black after:transition-all after:w-0 cursor-pointer">Sobre</a></li>
                                    <li className="relative"><a onClick={handleOffset} className="services hover:after:w-full after:absolute after:h-[1px] after:left-0 after:bottom-0 after:bg-black after:transition-all after:w-0 cursor-pointer">Serviços</a></li>
                                    <li className="relative"><a onClick={handleOffset} className="projects hover:after:w-full after:absolute after:h-[1px] after:left-0 after:bottom-0 after:bg-black after:transition-all after:w-0 cursor-pointer">Projetos</a></li>
                                    <li className="relative"><a onClick={handleOffset} className="contact hover:after:w-full after:absolute after:h-[1px] after:left-0 after:bottom-0 after:bg-black after:transition-all after:w-0 cursor-pointer">Contato</a></li>
                                </ul>
                            </nav>
                        </aside>
                    </div>
                </div>

            </div>
        </header>
    )
}
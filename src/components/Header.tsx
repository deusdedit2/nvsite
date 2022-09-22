import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {

    const [active, setActive] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            var top = window.pageYOffset || document.documentElement.scrollTop;
            top > 10 ? setActive(true) : setActive(false)
        }
    }, [])

    return (
        <header className={`fixed w-full top-0 transition-all duration-300 bg-opacity-[.12] z-50 uppercase ${active ? 'bg-white backdrop-blur-lg text-black' : 'bg-transparent backdrop-blur-0 text-white'}`}>
            <div className={`cont flex justify-between py-4`}>

                <div>
                    <Logo className='w-[4rem]' />
                </div>

                <div>
                    <ul className='h-full flex items-center space-x-4 '>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                    </ul>
                </div>

                <div>
                    <ul className='h-full flex items-center space-x-4 '>
                        <li>Services</li>
                    </ul>
                </div>

            </div>
        </header>
    )
}
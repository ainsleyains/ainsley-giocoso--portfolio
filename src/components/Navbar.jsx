import { Menu, X, Linkedin, GitHub } from 'react-feather';
import logo from '../assets/giocoso.png';
import { useState } from 'react';
import { Link } from 'react-scroll';
export default function Navbar() {
    const internalLinks = [
        {
            url: 'home',
            component: <span>Home</span>,
            img: 'https://images.unsplash.com/3/doctype-hi-res.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc2lnbmVyfGVufDB8MHwwfHx8MA%3D%3D',
        },
        {
            url: 'about',
            component: <span>About</span>,
            img: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },

        {
            url: 'works',
            component: <span>Projects</span>,
            img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            url: 'contact',
            component: <span>Contact</span>,
            img: 'https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    const externalLinks = [
        {
            url: 'https://www.linkedin.com/in/jyl-ainsley',
            component: <Linkedin />,
        },
        {
            url: 'https://github.com/ainsleyains',
            component: <GitHub />,
        },
    ];

    const [nav, setNav] = useState(false);

    function handleClick() {
        setNav(!nav);
    }
    return (
        <div className='fixed top-0 w-full  bg-white h-[80px] flex justify-between  items-center pl-[30px] pr-[20px] md:pr-[80px]  z-50 '>
            <div
                onClick={handleClick}
                className='z-10  '
            >
                {!nav ? (
                    <Menu size={30} />
                ) : (
                    <X
                        size={30}
                        className='text-white'
                    />
                )}
            </div>
            <div
                className={
                    !nav
                        ? 'invisible'
                        : ' fixed top-0 left-0 w-full h-screen  bg-[#111] text-white transition ease-in-out duration-500'
                }
            >
                <div className='relative left-[100px] md:left-[220px] top-[100px] overflow-hidden w-[calc(90vw - 260px)]  '>
                    <ul>
                        {internalLinks.map((link) => (
                            <li
                                key={link.url}
                                className='mb-[20px] group '
                            >
                                <Link
                                    className='text-[32px] md:text-[4vw] lg:text-[52px] leading-[1.1em] hover:cursor-pointer hover:font-extrabold  '
                                    to={link.url}
                                    smooth={true}
                                    duration={500}
                                    onClick={handleClick}
                                >
                                    {link.component}
                                </Link>
                                <img
                                    className='pointer-events-none aspect-video block opacity-0 w-[30vw] absolute top-[50%] right-[20%] object-cover translate-y-[-50%] translate-x-[-30px] transition-transform brightness-125 grayscale-[0.54] contrast-[.8] saturate-[1.2] sepia-[.21] hover:opacity-100 group-hover:opacity-100'
                                    src={link.img}
                                    alt='menu'
                                />
                            </li>
                        ))}
                    </ul>

                    <ul className='mt-[100px] flex flex-wrap'>
                        {externalLinks.map((link) => (
                            <li
                                className='mr-[10px] md:mr-[30px] '
                                key={link.url}
                            >
                                <a href={link.url}>{link.component}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <img
                    className='absolute top-[15%] right-[8%] lg:right-[5%]'
                    style={{ width: '150px' }}
                    src={logo}
                    alt='giocoso logo'
                />
            </div>
        </div>
    );
}

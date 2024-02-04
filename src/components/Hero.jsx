import { Plus } from 'react-feather';
import { Link } from 'react-scroll';
import { FlapDisplay, Presets } from 'react-split-flap-effect';
import 'react-split-flap-effect/extras/themes.css';
export default function Hero() {
    return (
        <div
            name='home'
            className=' h-screen w-[calc(100vw-30px)] flex flex-col items-start mx-auto md:ml-[80px] '
        >
            <h1 className='text-[20vw] md:text-[16vw] lg:text-[11vw] font-medium font-[Anton] md:max-w-[70vw] uppercase leading-[7rem] md:leading-[11rem] text-[#111] mt-[220px] md:mt-[110px] lg:mt-[100px]  relative'>
                Ainsley
            </h1>
            <div className='flex flex-col justify-between absolute top-[21rem] md:top-[17rem]  '>
                <FlapDisplay
                    className='myClassName '
                    chars={Presets.ALPHANUM + ''}
                    length={9}
                    value={'frontend'}
                />
                <FlapDisplay
                    className='myClassName '
                    chars={Presets.ALPHANUM + ''}
                    length={9}
                    value={'developer'}
                />
            </div>

            <button className='bg-[#111] absolute right-[10vw] bottom-[3vh]  md:right-[11vw] md:bottom-[5vh] lg:right-[5vw] border border-solid border-[#111] text-white p-[12px] md:p-[20px]  hover:bg-white hover:text-[#111] '>
                <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                    className='md:uppercase flex justify-center items-center tracking-[2px] '
                >
                    <span className=' mr-[10px]'>Reach out</span>
                    <Plus className='animate-bounce w-6 h-6' />
                </Link>
            </button>
        </div>
    );
}

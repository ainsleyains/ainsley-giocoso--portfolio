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
            <h1 className='text-[135px] md:text-[11vw] lg:text-[13vw] font-medium font-[Anton] md:max-w-[70vw] uppercase leading-[7rem] md:leading-[11rem] text-[#111] mt-[160px] md:mt-[120px] relative'>
                Ainsley
            </h1>
            <div className='flex flex-col justify-between absolute top-[19rem] md:top-[19rem] '>
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

            <button className='bg-[#111] absolute right-[6vw] bottom-[2vh]  md:right-[10vw] md:bottom-[10vh] border border-solid border-[#111] text-white p-[12px] md:p-[20px]  hover:bg-white hover:text-[#111] '>
                <Link
                    to='contact'
                    smooth={true}
                    duration={500}
                    className='uppercase flex justify-center items-center tracking-[2px] '
                >
                    <span className='mr-[10px]'>Reach out</span>
                    <Plus className='animate-bounce w-6 h-6' />
                </Link>
            </button>
        </div>
    );
}

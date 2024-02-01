import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
export default function Skills() {
    return (
        <div
            name='skills'
            className='w-full h-screen'
        >
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='mb-8'>
                    <p className='text-4xl  font-bold inline border-b-8 border-[#FFCB0A] uppercase'>
                        My Abilities
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 text-xl md:text-2xl'>
                    <div className=' hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={html}
                            alt='html icon'
                        />
                        <p className='font-[Anton] my-4 uppercase '>html</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={css}
                            alt='css icon'
                        />
                        <p className='font-[Anton] my-4 uppercase'>css</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={js}
                            alt='javascript icon'
                        />
                        <p className='font-[Anton] my-4 uppercase'>javascript</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img
                            className='w-20  mx-auto'
                            src={react}
                            alt='javascript icon'
                        />
                        <p className='font-[Anton] my-4 uppercase'>react</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img
                            className='w-20 mx-auto'
                            src={tailwind}
                            alt='javascript icon'
                        />
                        <p className='font-[Anton] my-4 uppercase'>tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div
            name='about'
            className='w-full h-full bg-[#111] text-white py-8 my-4'
        >
            <div className='flex flex-col justify-center w-full h-full items-center '>
                <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 t-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-2xl font-bold inline border-b-4 border-white uppercase font-[Anton] tracking-wider'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='flex flex-col justify-start sm:text-right '>
                        <div className=' text-8xl font-bold  '>
                            <p>Ainsley</p>
                        </div>
                        <div className='text-2xl pt-8'>
                            <p>Developer + Nerd</p>
                        </div>
                    </div>

                    <div className='relative p-4 w-full h-full bg-white/15 rounded-[16px] shadow-[0_4px_60px_-15px_rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-md border border-solid border-white/40'>
                        <p className='text-xl leading-8 pb-4'>
                            Love for design and user-friendly interfaces. Beyond coding, I'm a big
                            fan of Formula 1, drawn to the speed and strategy of the sport.
                        </p>
                        <p className='text-xl leading-8 pb-4'>
                            Outside the digital realm, I'm also an ardent baker, consistently
                            exploring and perfecting various recipes to create delectable treats.
                        </p>
                        <p className='text-xl leading-8 '>
                            My profile blends technical skills, sports enthusiasm, and culinary
                            creativity, reflecting my diverse and dynamic character.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

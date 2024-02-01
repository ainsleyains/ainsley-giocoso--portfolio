import aria from '../assets/aria.png';
import baker from '../assets/bakers.png';

export default function Works() {
    return (
        <div
            name='works'
            className='w-full md:h-full]'
        >
            <div className='max-w-[1256px] mx-auto p-8 flex flex-col justify-center w-full h-full '>
                <div className='p-8'>
                    <p className='text-2xl font-bold uppercase inline border-b-4 border-black font-[Anton] tracking-wider'>
                        Selected Works
                    </p>
                </div>
                <div className='grid md:grid-cols-2 gap-4 my-10 md:my-[120px]  ml-8 justify-center '>
                    <div className='content '>
                        <p className='w-[300px] md:w-[400px] text-xl'>
                            Create a responsive design and craft content for an interior design
                            company with the aim of conveying the organization's culture, ensuring
                            it is easily discernible through the website.
                        </p>

                        <div
                            className='cover '
                            style={{ backgroundImage: `url(${aria})` }}
                        ></div>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <div className='text-left mb-16'>
                            <p className='inline border-b-2 border-[#111]'>01</p>
                            <p className='uppercase text-4xl md:text-6xl font-bold my-8 hover:text-[#d6ac67]'>
                                aria & co.
                            </p>
                            <p className=' md:text-[1.1rem] '>
                                Web developement & Content creation
                            </p>
                            <br />
                            <p>Tech:&nbsp;React Router&nbsp;& Tailwind</p>
                        </div>

                        <div className=' my-8 md:mt-10'>
                            <a href=' https://ariaandco.netlify.app/'>
                                <button className='text-center rounded-full px-6 mr-8 py-3m-2 border border-[#111] hover:scale-125 hover:bg-[#d6ac67] hover:text-white hover:border-[#d6ac67] '>
                                    Visit Site
                                </button>
                            </a>
                            <a href='https://github.com/ainsleyains/ariaco'>
                                <button className='text-center rounded-full px-6 py-3m-2 border border-[#111] hover:scale-125 hover:bg-[#d6ac67] hover:text-white hover:border-[#d6ac67]'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className='grid md:grid-cols-2 gap-4 my-10 md:my-[120px]  ml-8 justify-center '>
                    <div className='content '>
                        <p className='w-[300px] md:w-[400px] text-xl'>
                            Create a responsive design and craft content for an interior design
                            company with the aim of conveying the organization's culture, ensuring
                            it is easily discernible through the website.
                            <br />
                            Tech:&nbsp;React Router&nbsp;& Tailwind
                        </p>

                        <div
                            className='cover '
                            style={{ backgroundImage: `url(${aria})` }}
                        ></div>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <div className='text-left mb-16'>
                            <p className='inline border-b-2 border-[#111]'>01</p>
                            <p className='uppercase text-4xl md:text-6xl font-bold my-8 hover:text-[#d6ac67]'>
                                aria & co.
                            </p>
                            <p className=' md:text-[1.1rem] '>
                                Web developement & Content creation
                            </p>
                        </div>

                        <div className=' my-8 md:mt-10'>
                            <a href='/'>
                                <button className='text-center rounded-full px-6 mr-8 py-3m-2 border border-[#111] hover:scale-125 hover:bg-[#d6ac67] hover:text-white hover:border-[#d6ac67] '>
                                    Visit Site
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-full px-6 py-3m-2 border border-[#111] hover:scale-125 hover:bg-[#d6ac67] hover:text-white hover:border-[#d6ac67]'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}

                {/* <div className='grid md:grid-cols-3 gap-8 my-12 md:mt-8 md:my-24 '>
                    <div
                        style={{ backgroundImage: `url(${baker})` }}
                        className='shadow-lg shadow-black/[75%] col-span-2 group container rounded-md flex justify-center items-center mx-auto content-div md:ml-[-60px] '
                    >
                        <div className='opacity-0 group-hover:opacity-100 w-[350px] md:w-[500px] mx-auto leading-5 '>
                            <span className='text-xl text-white tracking-wide'>
                                Create a responsive design and craft content for an interior design
                                company with the aim of conveying the organization's culture,
                                ensuring it is easily discernible through the website.
                            </span>
                            <p className='text-xl text-white tracking-wide pt-8 space-x-2.5'>
                                Tech:&nbsp;React Router&nbsp;& Tailwind
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-left mb-16'>
                            <p className='inline border-b-2 border-[#111]'>02</p>
                            <p className='uppercase text-4xl md:text-6xl font-bold my-8 hover:text-[#d6ac67]'>
                                fly+Izy
                            </p>
                            <p className=' md:text-[1.1rem] '>
                                Web developement & Content creation
                            </p>
                        </div>

                        <div className=' my-8 md:mt-10'>
                            <a href='/'>
                                <button className='text-center rounded-full px-6 mr-8 py-3m-2 border border-[#111] hover:scale-125 hover:bg-[#d6ac67] hover:text-white hover:border-[#d6ac67] '>
                                    Visit Site
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-full px-6 py-3m-2 border border-[#111] hover:scale-125 hover:bg-[#d6ac67] hover:text-white hover:border-[#d6ac67]'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div> */}
                <div className='flex justify-center items-center '>
                    <p className='uppercase text-center font-bold  w-[250px] text-xl '>
                        More Coming soon
                    </p>
                    <div class='flex justify-center'>
                        <span class='circle animate-loader'></span>
                        <span class='circle animate-loader animation-delay-200'></span>
                        <span class='circle animate-loader animation-delay-400'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

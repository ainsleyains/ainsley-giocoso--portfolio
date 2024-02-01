export default function Contact() {
    return (
        <div
            name='contact'
            className='w-full h-full bg-[#111] text-white mt-8 p-24 '
        >
            <form
                action='https://getform.io/f/17340ee6-98d1-4d53-91de-9de82da573f6'
                method='POST'
                className='flex flex-col max-w-[1000px] w-full mx-auto '
            >
                <div className='pb-2 '>
                    <p className='font-[Anton] tracking-wider uppercase font-bold text-2xl  inline border-b-4 border-white  '>
                        Contact
                    </p>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-3xl py-12'>
                                Have a project you’d like to discuss? Let's talk!
                            </p>
                            <p className='pb-8 text-xl'>
                                Alternatively, feel free to email me directly at
                                giocosodesign@gmail.com
                            </p>
                        </div>
                        <div className='flex flex-col justify-start items-start '>
                            <input
                                type='text'
                                placeholder='NAME'
                                name='name'
                                className='p-2 w-full bg-[#111] text-gray-400 border-b border-gray-400'
                            />
                            <input
                                type='email'
                                placeholder='EMAIL'
                                name='email'
                                className='my-8 p-2 w-full bg-[#111] text-gray-400 border-b border-gray-400'
                            />
                            <textarea
                                name='message'
                                rows='10'
                                placeholder='TELL ME ABOUT YOUR PROJECT'
                                className='p-2 mt-8 w-full bg-[#111] text-gray-400 border border-gray-400'
                            ></textarea>
                            <button className='px-4 py-3 my-8 mx-auto  flex items-center  text-gray-400 border border-gray-400 rounded-lg hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white'>
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

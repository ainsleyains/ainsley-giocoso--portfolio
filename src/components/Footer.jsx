export default function Footer() {
    return (
        <div className='bg-[#111] mx-auto text-center text-white text-[14px]'>
            <p className='py-2 '>
                Copyright &copy; {new Date().getFullYear()}
                &nbsp;GIOCOSO&nbsp;All rights reserved
            </p>
        </div>
    );
}

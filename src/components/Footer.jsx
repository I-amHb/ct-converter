import React from 'react'
const Footer = () => {
    return (
        <footer className='w-full h-auto bg-black text-white flex flex-col justify-center items-center
         p-3 md:px-mid space-y-5 mt-mid lg:px-lar' >
            <div className='md:w-full'>
                <div><h1 className=' text-[20px] font-bold'>CT-Converter</h1></div>
                <div className=''>
                    <ul className='flex flex-col items-center md:list-none md:flex md:flex-row  md:space-x-[150px] md:gap-1.5'>
                        <li>About</li>
                        <li>Support</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-1'>
                <img src="/assets/socials/facebook.png" alt="" />
                <img src="/assets/socials/github.png" alt="" />
                <img src="/assets/socials/linkedin.png" alt="" />
                <img src="/assets/socials/instagram.png" alt="" />
            </div>
            <div>
                <p className='text-center text-[0.8rem]' > &#169; 2025 CT-Converter. All rights Reserved.</p>
            </div>
            <div>
                <p className='text-[14px]'>Coded By Habib</p>
            </div>
        </footer>
    )
}

export default Footer
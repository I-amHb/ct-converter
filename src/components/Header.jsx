

const Header = () => {
    return (
        <header className='w-full h-[75px] flex justify-between items-center px-small md:px-mid lg:px-lar shadow-sm '>
            <h1 className='text-xl font-bold'>CT-Converter</h1>
            <nav className='hidden lg:block '>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav className='lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </nav>
        </header>
    )
}
export default Header
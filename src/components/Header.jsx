import { useEffect, useRef, useState } from "react";


const Header = () => {

    const menuRef = useRef(null);

    const [toggleNavBar, setToggleNavBar] = useState(false);

    useEffect(() => {

        function handleClickOutsideEvent(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setToggleNavBar(false);
            }
        }

        function handleScrollEvent() {
            if(toggleNavBar) {
                setToggleNavBar(false);
            };
        }

        document.addEventListener('mousedown', handleClickOutsideEvent);
        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideEvent);
            window.removeEventListener('scroll', handleScrollEvent);

        };

    }, [toggleNavBar])

    return (
        <header className='w-full h-header flex justify-between items-center px-small md:px-mid lg:px-lar '>
            <a href="#" className='text-2xl font-extrabold'>CT-Converter</a>
            <nav className='flex justify-center items-center ' ref={menuRef}>
                <ul

                    className={`transition-all duration-300 ease-in-out
                flex flex-col fixed w-1/2 h-full top-header text-white bg-secondaryHvr text-center
                    ${!toggleNavBar ? '-right-full ' : 'right-0'}
                 lg:static lg:bg-inherit lg:text-black lg:flex lg:flex-row lg:w-full
                 `}
                >
                    <li className="py-small lg:px-small">
                        <a href="#" className="nav"
                            onClick={() => toggleNavBar && setToggleNavBar(false)}>
                            Home</a>
                    </li>
                    <li className="py-small lg:px-small">
                        <a href="#" className="nav"
                            onClick={() => toggleNavBar && setToggleNavBar(false)}>
                            About</a>
                    </li>
                    <li className="py-small lg:pl-small">
                        <a href="#" className="nav"
                            onClick={() => toggleNavBar && setToggleNavBar(false)}>
                            Contact</a>
                    </li>
                </ul>
                <button className='lg:hidden' onClick={() => setToggleNavBar(prev => !prev)}>
                    {!toggleNavBar ?
                        (<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>) :
                        (<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>)}
                </button>
            </nav>

        </header>
    )
}
export default Header
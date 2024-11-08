import { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaPhoneAlt, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SideBar from '../partial/SideBar';
import logo from '../../assets/logo-dark-retina.webp';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('sidebar-open', !isOpen);
    };

    return (
        <div className={`flex transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
            {/* Sidebar menu */}
            <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className={`flex-1 transition-all duration-300`}>
                <div className="container shadow-[0_1px_3px_rgba(0,0,0,0.09)]">
                    <div className="md:px-40 px-5 flex items-center justify-between py-3">
                        {/* Icon mở menu */}
                        <div className="cursor-pointer w-[10%] md:hidden" onClick={toggleMenu}>
                            <FaBars className="text-[#333] text-2xl" />
                        </div>

                        <div className="md:flex w-1/3 items-center hidden">
                            <a href="tel:0373357405" className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-[#333] flex items-center">
                                    <FaPhoneAlt className="m-auto text-white" />
                                </div>
                                <span className="text-[#333] font-semibold ms-3">0373357405.</span>
                            </a>
                        </div>

                        {/* Logo */}
                        <div className="flex w-[70%] md:w-1/3 items-center py-3 justify-center">
                            <img src={logo} alt="Logo" className="h-[100px]" />
                        </div>

                        {/* Icons bên phải */}
                        <div className="w-[20%] md:w-1/3 flex items-center justify-end text-[#333] text-2xl">
                            <div className="cursor-pointer">
                                <FaSearch />
                            </div>
                            <Link to="/user" className="cursor-pointer mx-4 md:mx-6 ">
                                <FaUser />
                            </Link>
                            <Link to="/cart" className="cursor-pointer">
                                <FaShoppingCart />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Menu bình thường trên desktop */}
                <nav className="hidden md:block md:sticky md:top-0  md:z-10">
                    <ul className="flex items-center justify-center">
                        <li className="p-4">
                            <Link to="/" className="hover:text-[#666666]">HOME</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/shop" className="hover:text-[#666666]">SHOP</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/blog" className="hover:text-[#666666]">BLOG</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/about" className="hover:text-[#666666]">ABOUT</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/contact" className="hover:text-[#666666]">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;

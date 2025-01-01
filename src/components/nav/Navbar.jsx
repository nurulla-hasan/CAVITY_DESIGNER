import { useState } from "react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleBar = () => setIsMenuOpen(!isMenuOpen);
    const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

    const menuVariants = {
        hidden: { x: "-10%" },
        visible: { x: 0, transition: { duration: 0.3 } },
    };

    const submenuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    };

    return (
        <>
            <div>
                {/* Desktop Navbar */}
                <div className="p-5 flex justify-between items-center">
                    <div className="flex gap-2">
                        <img className="lg:w-[150px] lg:h-[40px] w-[100px] h-[30px]" src="logo.png" alt="Company Logo" />
                    </div>
                    <ul className="hidden lg:flex gap-16 justify-center items-center relative *:text-white">
                        <li className="hover:text-gray-400"><a href="">Home</a></li>
                        <li className="hover:text-gray-400"><a href="">About</a></li>
                        <li className="relative group z-50">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <a href="" className="hover:text-gray-400">Services</a>
                                <span>&#9662;</span>
                            </div>
                            <ul className="absolute left-0 top-full bg-gray-800 shadow-lg p-3 rounded hidden group-hover:block w-56">
                                <li className="py-2 px-3 hover:bg-gray-700 rounded text-sm">
                                    <a href="">Residential Interior</a>
                                </li>
                                <li className="py-2 px-3 hover:bg-gray-700 rounded text-sm">
                                    <a href="">Commercial Interior</a>
                                </li>
                                <li className="py-2 px-3 hover:bg-gray-700 rounded text-sm">
                                    <a href="">Architectural Consultancy</a>
                                </li>
                            </ul>
                        </li>
                        <li className="hover:text-gray-400"><a href="">Portfolio</a></li>
                        <li className="hover:text-gray-400"><a href="">Blog</a></li>
                        <li className="hover:text-gray-400"><a href="">Contact</a></li>
                    </ul>
                </div>

                {/* Mobile Navbar */}
                {
                    isMenuOpen && (
                        <motion.div
                            className="shadow-lg lg:hidden"
                            initial="hidden"
                            animate={isMenuOpen ? "visible" : "hidden"}
                            variants={menuVariants}
                        >
                            <div className="p-5">
                                <ul className="flex flex-col gap-2 text-white *:text-sm">
                                    <li className="p-2 rounded hover:bg-gray-700"><a href="">Home</a></li>
                                    <li className="p-2 rounded hover:bg-gray-700"><a href="">About</a></li>
                                    <li className="relative p-2 rounded hover:bg-gray-700">
                                        <div
                                            onClick={toggleSubMenu}
                                            className="flex items-center gap-1 cursor-pointer  rounded hover:bg-gray-700"
                                        >
                                            <span>Services</span>
                                            <span>{isSubMenuOpen ? <p>&#9652;</p> : <p>&#9662;</p>}</span>
                                        </div>
                                        <motion.ul
                                            initial="hidden"
                                            animate={isSubMenuOpen ? "visible" : "hidden"}
                                            variants={submenuVariants}
                                            className="mt-2 flex flex-col gap-2 pl-5"
                                        >
                                            <li className="py-2 px-3  rounded hover:bg-gray-800">
                                                <a href="">Residential Interior</a>
                                            </li>
                                            <li className="py-2 px-3  rounded hover:bg-gray-800">
                                                <a href="">Commercial Interior</a>
                                            </li>
                                            <li className="py-2 px-3  rounded hover:bg-gray-800">
                                                <a href="">Architectural Consultancy</a>
                                            </li>
                                        </motion.ul>
                                    </li>
                                    <li className="p-2 rounded hover:bg-gray-700"><a href="">Portfolio</a></li>
                                    <li className="p-2 rounded hover:bg-gray-700"><a href="">Blog</a></li>
                                    <li className="p-2 rounded hover:bg-gray-700"><a href="">Contact</a></li>
                                </ul>
                            </div>
                        </motion.div>
                    )
                }

                {/* Menu Toggle Icon */}
                <div onClick={toggleBar} className=" text-white lg:hidden absolute top-5 right-5 z-50">
                    {isMenuOpen ? <IoMdClose size={25} /> : <IoMenu size={25} />}
                </div>
            </div>
        </>
    );
};

export default Navbar;

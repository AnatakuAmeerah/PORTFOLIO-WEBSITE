import "./navBar.css";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };
    const hideNavbar = () => {
        navRef.current.classList.remove(
            "responsive_nav"
        );
    };
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const handleImageClick = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };
    return (
        <>
            <nav>
                <div className="name-logo">
                    <img className="butterfly" src="./pngfind.com-black-and-white-butterfly-4620125.png" alt="" />
                    <p className="Ameerah">AMEERAH</p>
                </div>
                <div className=" nav-list-box" ref={navRef}>
                    {isImageEnlarged ? (
                        <img
                            src={'./IMG_4681-Edit.jpg'}
                            alt="Profile Picture"
                            className="enlarged"
                            onClick={handleImageClick}
                        />
                    ) : (
                        <img
                            src={'./IMG_4681-Edit.jpg'}
                            alt="Profile Picture"
                            onClick={handleImageClick}
                        />
                    )}

                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Education
                        </li>
                        <li>
                            Projects
                        </li>
                        <li>
                            Contact
                        </li>
                    </ul>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </div>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>
        </>
    )
}

export default Navbar
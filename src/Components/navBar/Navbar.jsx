import "./navBar.css";
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import { GiButterfly } from "react-icons/gi";

function Navbar() {
    const navRef = useRef();
    const [activeSection, setActiveSection] = useState(""); // Add a state to track the active section

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const handleImageClick = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

    // Add an event listener to the window scroll event
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveSection(section.id); // Update the active section state
            }
        });
    });

    return (
        <>
            <nav>
                <div className="name-logo">
                    {/* <img className="butterfly" src="./pngfind.com-black-and-white-butterfly-4620125.png" alt="" /> */}
                    <GiButterfly fontSize={'2rem'}/>
                    <p className="Ameerah">AMEERAH</p>
                </div>
                <div className="nav-list-box" ref={navRef}>
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
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="about"
                                spy = {true}
                                smooth="true"
                                offset={-70}
                                duration={500}
                                className={activeSection === "about" ? "active" : ""}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="project"
                                spy = {true}
                                smooth="true"
                                offset={-70}
                                duration={500}
                                className={activeSection === "project" ? "active" : ""}
                            >
                                Projects
                            </Link>

                        </li>
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="education"
                                spy = {true}
                                smooth="true"
                                offset={-70}
                                duration={500}
                                className={activeSection === "education" ? "active" : ""}
                            >
                                Education
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="contact"
                                spy = {true}
                                smooth="true"
                                offset={-70}
                                duration={500}
                                className={activeSection === "contact" ? "active" : ""}
                            >
                                Contact
                            </Link>
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

export default Navbar;
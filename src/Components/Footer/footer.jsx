import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';
import { FaXTwitter } from 'react-icons/fa6';
import { CgCopyright } from 'react-icons/cg';
import { BiCopyright } from 'react-icons/bi';
function Footer(){
    return (
        <>
            <section className="footer-cont">
                <p className='name-footer'>AMEERAH</p>
                <div className="logo-conts">
                    <div className='icon-cont'>
                        <div > <a className='icon' href="https://www.linkedin.com/in/ameerah-anataku/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a> </div>
                        <div ><a className='icon' href="https://x.com/AAnataku85696" target="_blank" rel="noopener noreferrer"> <FaXTwitter/> </a></div>
                        <div><a className='icon' href="https://github.com/AnatakuAmeerah" target="_blank" rel="noopener noreferrer"> <FaGithub /> </a></div>

                    </div>
                </div>
                <p className='rights-reserved'> ©2025 Ameerah's Portfolio Website. All rights reserved.</p>

            </section>
        </>
    )
}
export default Footer;
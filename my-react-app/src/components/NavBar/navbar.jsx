import './NavBar.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LOGO from '../../assets/Logo.png';

import { LuPhoneCall } from "react-icons/lu";
import { MdOutgoingMail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`navcontainer ${scrolled ? 'scrolled' : ''}`} id='navbar'>

            <div className='nav-lower-bar'>
                <div className='lower-bar-text'>

                    <div className='mail-text'>
                        <a href='mailto:xyz@gmail.com' target='_blank' rel="noreferrer">
                            <p>
                                <MdOutgoingMail className='mail-text-icon' />
                                xyz@gmail.com
                            </p>
                        </a>
                    </div>

                    <div className='addr-text'>
                        <a href="https://www.google.com/maps?q=Ranchi" target="_blank" rel="noreferrer">
                            <p>
                                <FaMapLocationDot className='addr-text-icon' />
                                Street, City, District, State - PINCODE
                            </p>
                        </a>
                    </div>

                </div>
            </div>

            <div className='container'>
                <nav className='nav-bar'>
                    <div className='navbar-contents'>

                        <div className='nav-logo'>
                            <a href="https://wa.me/+911234567890" target="_blank" rel="noreferrer">
                                <img src={LOGO} alt='Company Logo' />
                            </a>
                        </div>

                        <div className='nav-links'>
                            <div className='nav-link1'>
                                <a href='/'>Home</a>
                            </div>
                            <div className='nav-link2'>
                                <a href='#about-us'>About Us</a>
                            </div>
                            <div className='nav-link3'>
                                <a href='#our-products'>Products</a>
                            </div>
                        </div>

                        <div className='nav-contact'>
                            <div className='phone-icon'>
                                <LuPhoneCall />
                            </div>
                            <div className='phone-no'>
                                <span>Phone Number</span>
                                <span>
                                    <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'>
                                        12345 67890
                                    </a>
                                </span>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

        </section>
    );
};

export default NavBar;

import './Footer.css'

import LOGO from '../../assets/Logo.png'

import { FaArrowRight, FaPhoneVolume, FaLocationDot, FaClock, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content container'>
                <div className="row1">
                    <div className='footer-logo'>
                        <img src={LOGO} alt="Robust Glass Private Limited logo" loading='lazy' />
                    </div>
                    <div className='footer-about-us'>
                        <p>Robust Glass Pvt. Ltd. offers premium toughened glass solutions for buildings, interiors, and industrial use — ensuring clarity, strength, and safety in every panel.</p>
                    </div>
                    <div className='footer-socials'>
                        <a href="https://www.facebook.com/RobustPvtLtd" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://wa.me/+911234567890" target="_blank" rel="noreferrer">
                            <IoLogoWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/RobustPvtLtd" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/channel/RobustPvtLtd" target="_blank" rel="noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="row2">
                    <div>
                        <h4>Quick Link</h4>
                    </div>
                    <div className='footer-lists'>
                        <ul>
                            <li><a href='#about-us'>About Us <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#form-section'>Our Team <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#form-section'>Updates <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#our-work-section'>Our Projects <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#form-section'>Contact <FaArrowRight className='footer-arrow' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row3">
                    <div>
                        <h4>Industries</h4>
                    </div>
                    <div className='footer-lists'>
                        <ul>
                            <li><a href='#architecture-design'>Architecture & Design  <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#industrial-infrastructure'>Industrial Infrastructure <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#real-estate-and-interiors'>Real Estate & Interiors <FaArrowRight className='footer-arrow' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row4">
                    <div>
                        <h4>Products</h4>
                    </div>
                    <div className='footer-lists'>
                        <ul>
                            <li><a href='#5mm-glass'>5mm Toughened Glass < FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#6mm-glass'>6mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#8mm-glass'>8mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#10mm-glass'>10mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                            <li><a href='#12mm-glass'>12mm Toughened Glass <FaArrowRight className='footer-arrow' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row5">
                    <div>
                        <h4>Contact Us</h4>
                    </div>
                    <div className='footer-contact'>
                        <div className='contact-no'>
                            <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer">
                                <FaPhoneVolume className='call-icon' /> +91 12345 67890 <FaArrowRight className='footer-arrow' />
                            </a>
                        </div>
                        <div className='contact-mail'>
                            <a href="mailto:xyz@gmail.com">
                                <IoMail className='email-icon' /> xyz@gmail.com <FaArrowRight className='footer-arrow' />
                            </a>
                        </div>
                        <div className='contact-address'>
                            <div><FaLocationDot /> </div>
                            <div> XYZ Street, City, State, Pin</div>

                        </div>
                        <div className='open-hours'>
                            <span><FaClock /></span>
                            Mon-Sat: 9:00 AM - 8:00 PM
                        </div>
                        <div className='map'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=..."
                                width="100%"
                                height="100"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
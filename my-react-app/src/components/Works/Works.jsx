import './Works.css';

import React, { useState, useEffect, useRef } from 'react';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import creation1 from '../../assets/creation1.jpg';
import creation2 from '../../assets/creation2.jpg';
import creation3 from '../../assets/creation3.jpg';

import callicon from '../../assets/call-sup.png';
import mailicon from '../../assets/email.png';
import locicon from '../../assets/loc-add.png';

const Works = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select Your Industry");
    const dropdownRef = useRef(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const industries = [
        "Select Your Industry",
        "Architecture &  Design",
        "Industrial Infrastructure",
        "Real Estate & Interiors",
        "Automotive & Transport",
        "Healthcare & Laboratories"
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <section className="our-work-section " id="our-work-section">
            <div className="container">
                <div className="work-container ">
                    <div className='work-heading-content'>
                        <div className="work-section-title">
                            <h2 >Our Creations</h2>
                        </div>
                        <div className='work-heading-info'>
                            <div className='work-heading'><h3>Where Every Glass Project Reflects Our Excellence</h3></div>
                            <div className='work-heading-desc'>
                                <p>Our portfolio showcases a wide array of completed works — from office facades to customized interior glass installations. With every project, Robust Glass Pvt. Ltd. focuses on quality craftsmanship, on-time delivery, and complete customer satisfaction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="work-cards">
                        <div className="work-card">
                            <img src={creation1} alt="Office Glass Facade" />
                            <h3>Office Glass Facade</h3>
                            <p>Bangalore | 12mm Toughened Glass</p>
                            <span>Modern & high-durability facade for a commercial building.</span>
                            <div className="client-feedback">
                                <p>"Robust Glass delivered exactly what we envisioned. Excellent clarity and strength!"</p>
                                <h4>- Anjali Mehta</h4>
                            </div>
                        </div>

                        <div className="work-card">
                            <img src={creation2} alt="Interior Glass Partition" />
                            <h3>Interior Glass Partition</h3>
                            <p>Mumbai | 8mm Toughened Glass</p>
                            <span>Stylish workspace glass dividers with sound insulation.</span>
                            <div className="client-feedback">
                                <p>"The partitions elevated our office interior — sleek, functional, and durable."</p>
                                <h4>- Rahul Verma</h4>
                            </div>
                        </div>

                        <div className="work-card">
                            <img src={creation3} alt="Retail Glass Doors" />
                            <h3>Retail Glass Doors</h3>
                            <p>Kolkata | 6mm Toughened Glass</p>
                            <span>Elegant sliding doors for a boutique retail space.</span>
                            <div className="client-feedback">
                                <p>"Our customers love the new look. The glass quality is top-notch and reliable, sleek, durable."</p>
                                <h4>- Sneha Kapoor</h4>
                            </div>
                        </div>
                    </div>

                    <div id='form-section'>
                        <div className="form-left">
                            <div className='left-heading'>
                                <h3>Get Every Updates!</h3>
                            </div>
                            <div className='left-info'>
                                <p>
                                    Robust Glass Pvt. Ltd. is an industry-focused glass processing and manufacturing service provider, catering to factories, construction, architecture, engineering, and all related industrial sectors.
                                </p>
                            </div>
                            <hr />
                            <div className='ques-heading'>
                                <h4>Do You Have Any Questions!</h4>
                            </div>

                            <div className="contact-details">
                                <div className='call-support'>
                                    <div className='icon-bg'></div>
                                    <div className='call-icon'>
                                        <img src={callicon} alt='Contact Support Icon' />
                                    </div>
                                    <div>
                                        <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'>
                                            <p>+91 12345 6790</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='mail-support' >
                                    <div className='icon-bg'></div>
                                    <div className='mail-icon'>
                                        <img src={mailicon} alt='Mail Support Icon' />
                                    </div>
                                    <div>
                                        <a href='mailto:xyz@gmail.com'>
                                            <p>xyz@gmail.com</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='add-support'>
                                    <div className='icon-bg'></div>
                                    <div className='add-icon'>
                                        <img src={locicon} alt='Address Support Icon' />
                                    </div>
                                    <div>
                                        <a href="https://www.google.com/maps?q=Ranchi" target="_blank" rel="noreferrer">
                                            <p>
                                                Street, City, District, State - PINCODE
                                            </p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="form-right">
                            <form>
                                <div className="form-row">
                                    <input id="name" type="text" placeholder="Name" required />
                                    <input id="email" type="email" placeholder="Email" required />
                                </div>

                                <div className="form-row">
                                    <div className="custom-select-wrapper" ref={dropdownRef}>
                                        <div
                                            className={`custom-select ${isDropdownOpen ? 'active' : ''}`}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            aria-label="Industry Selector"
                                        >
                                            <div className="selected-option">
                                                <span className={`selected-text ${selectedOption === "Select Your Industry" ? 'highlight' : ''}`}>
                                                    {selectedOption}
                                                </span>

                                                <span className="chevron-icon">
                                                    {isDropdownOpen ? <FaChevronUp color="#93bce7" /> : <FaChevronDown color="black" />}
                                                </span>
                                            </div>

                                            {isDropdownOpen && (
                                                <ul className="options">
                                                    {industries.map((industry) => (
                                                        <li
                                                            key={industry}
                                                            className={selectedOption === industry ? "selected" : ""}
                                                            onClick={() => handleSelect(industry)}
                                                        >
                                                            {industry}
                                                        </li>
                                                    ))}

                                                </ul>
                                            )}
                                        </div>
                                    </div>



                                    <input id="phone" type="tel" placeholder="Phone" required />
                                </div>



                                <textarea id="message" placeholder="Message Details!" rows="5" required></textarea>

                                <div className='form-btn'>
                                    <button type="submit">Submit Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;

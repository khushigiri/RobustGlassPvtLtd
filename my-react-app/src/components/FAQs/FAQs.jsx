import './FAQs.css';

import React, { useState } from 'react';

import { MdOutlineWarehouse } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const faqsData = [
    {
        question: "What types of glass do you offer?",
        answer: "We offer tempered, laminated, insulated, frosted, and mirror glass in various thicknesses from 5mm to 12mm."
    },
    {
        question: "Can I customize the glass size or shape?",
        answer: "Yes, our facility supports custom cutting, edge polishing, and fabrication as per your project needs."
    },
    {
        question: "Where do you deliver or install?",
        answer: "We deliver pan-India and also provide installation assistance for bulk and commercial orders."
    }
];

const FAQs = () => {
    const [openFAQs, setOpenFAQs] = useState([0]);

    const toggleFAQ = (index) => {
        if (openFAQs.includes(index)) {
            setOpenFAQs(openFAQs.filter((i) => i !== index));
        } else {
            setOpenFAQs([...openFAQs, index]);
        }
    };
    return (
        <section className="faqs-head container">
            <div className="faqs-wrapper">

                <div className="faqs-left">
                    <div>
                        <p className="faqs-subheading">Trusted Glass Solutions</p>
                    </div>
                    <div>
                        <h1 className="faqs-title">
                            Answering Your Questions About Glass Products & Services
                        </h1>
                    </div>

                    <div className="faqs-buttons">
                        <button className='faq-btn-1' aria-label="Download our brochure">
                            <a href='/'>Our Brochure</a>
                        </button>
                        <button className='faq-btn-2' aria-label="Talk to our team">
                            <a href='#form-section'>Talk to Us</a>
                        </button>
                    </div>
                    <hr />
                    <div className="faqs-experience">
                        <div className="icon-house">
                            <MdOutlineWarehouse />
                        </div>
                        <div>
                            <p>
                                Backed by 10+ years of expertise in processing quality glass solutions across industries.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faqs-right">
                    {faqsData.map((faq, index) => (
                        <div key={index} className="faq-box">
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <h4 className="faq-question">{faq.question}</h4>
                                <IoIosArrowForward className={`faq-icon ${openFAQs.includes(index) ? 'rotated' : ''}`} />
                            </div>

                            {openFAQs.includes(index) && (
                                <>
                                    <hr />
                                    <p className="faq-answer" style={{ fontWeight: index === 0 ? 600 : 'normal' }}>{faq.answer}</p>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default FAQs;

import './Products.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BG from '../../assets/we-offer-bg.jpg';

import { GiWoodCabin } from "react-icons/gi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { MdWindow } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import { useEffect, useRef, useState } from 'react';

const Products = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    const products = [
        {
            icons: <GiWoodCabin />,
            title: "5mm Glass",
            desc: "Lightweight and ideal for picture frames, small cabinet doors, and low-impact interior applications."
        },
        {
            icons: <HiOutlineAdjustments />,
            title: "6mm Glass",
            desc: "Perfect for indoor partitions, tabletops, and windows requiring moderate strength and clarity."
        },
        {
            icons: <MdWindow />,
            title: "8mm Glass",
            desc: "Used for shower enclosures, large windows, and doors where added thickness provides better safety."
        },
        {
            icons: <FaRulerCombined />,
            title: "10mm Glass",
            desc: "Heavy-duty glass commonly used in commercial partitions, railings, and structural glazing systems."
        },
        {
            icons: <HiOutlineBuildingOffice2 />,
            title: "12mm Glass",
            desc: "High-strength glass for staircases, balconies, canopies, and frameless use."
        },
    ];

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        beforeChange: (_, nextIndex) => {
            setCurrentSlide(nextIndex % products.length);
        }
    };

    const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
        const goToIndex = isMobile ? index : index === 0 ? 0 : 2;
        sliderRef.current?.slickGoTo(goToIndex);
    };

    const indicatorCount = isMobile ? products.length : 2;

    const getIndicatorClass = (index) => {
        if (isMobile) {
            return currentSlide === index ? "bar active" : "bar";
        } else {
            if (index === 0 && currentSlide < 2) return "bar active";
            if (index === 1 && currentSlide >= 2) return "bar active";
            return "bar";
        }
    };

    return (
        <section className="our-products" id='our-products' style={{ backgroundImage: `url(${BG})` }}>
            <div className="container product-container">
                <div className='product-heading-content'>
                    <div className="product-section-title">
                        <h2>Our Range of Glass Thicknesses</h2>
                    </div>
                    <div className='product-heading-info'>
                        <div className='product-heading'><h3>Engineered to Meet Diverse Industry Demands</h3></div>
                        <div className='product-heading-desc'>
                            <p>At Robust Glass Pvt. Ltd., we offer a tailored range of toughened glass thicknesses — from 5mm to 12mm — to suit a variety of structural, functional, and aesthetic needs. Each panel is crafted for optimal performance, safety, and clarity.</p>
                        </div>
                    </div>
                </div>

                <div className="product-carousel">
                    <Slider ref={sliderRef} {...settings}>
                        {products.map((service, index) => (
                            <div
                                key={index}
                                className="product-card"
                                role="group"
                                aria-label={`Product: ${service.title}`}
                                id={service.title.toLowerCase().replace(/\s+/g, '-')}
                            >
                                <div className='card-icons-bg'>
                                    <span className='card-icons'>{service.icons}</span></div>
                                <div><h4 className='card-title'>{service.title}</h4></div>
                                <div><p className='card-desc'>{service.desc}</p></div>
                                <div className='card-btns'>
                                    <button>
                                        <p className='btn-text'>
                                            Need Product Support?
                                        </p>
                                        <a
                                            href='#form-section'
                                            role="button"
                                        >
                                            <p className='btn-hover-text'>
                                                Get in Touch With Us!
                                            </p>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="custom-indicator">
                        {Array.from({ length: indicatorCount }).map((_, index) => (
                            <div
                                key={index}
                                className={getIndicatorClass(index)}
                                onClick={() => handleIndicatorClick(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;

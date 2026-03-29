import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import slide1 from '../../assets/hero-section-slide1.jpg';
import slide2 from '../../assets/hero-section-slide2.jpg';
import slide3 from '../../assets/hero-section-slide3.jpg';

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Go to Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Go to Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Go to Slide 3"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">

                        <div className=' slide-contents' style={{ backgroundImage: `url(${slide1})` }}>
                            <div className='container'>
                                <div className=" slide-container" >
                                    <div className='quote'>Ready to transform your space?</div>
                                    <div className='slide-heading'>Premium Toughened Glass</div>
                                    <div className='slide-info'>Robust Glass Pvt. Ltd. delivers precision-crafted toughened glass solutions for architecture, interiors, and industrial needs — combining safety, durability, and elegance in every panel.</div>
                                    <div>
                                        <ul>
                                            <li>
                                                <i className="slide-points fa-regular fa-circle-check" aria-label="checkmark icon"></i> High Durability & Thermal Resistance
                                            </li>
                                            <li>
                                                <i className="slide-points fa-regular fa-circle-check" aria-label="checkmark icon"></i> Strict Quality & Processing Standards
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='slide-btns'>
                                        <button className='hero-btn-1' aria-label="Get in touch via WhatsApp">
                                            <a href='#form-section'>Get in Touch With Us</a>
                                        </button>
                                        <button className='hero-btn-2'>
                                            <a href='#our-products'>
                                                Explore Products
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="carousel-item">

                        <div className=' slide-contents' style={{ backgroundImage: `url(${slide2})` }}>
                            <div className='container'>
                                <div className=" slide-container" >
                                    <div className='quote'>Looking for tailor-made precision?</div>
                                    <div className='slide-heading'>Customized Glass Solutions</div>
                                    <div className='slide-info'>We specialize in crafting custom-sized, finely finished glass solutions to meet the specific needs of architects, interior designers, and project developers — with precise cuts, finishes, and edge treatments.</div>
                                    <div className='slide-btns'>
                                        <button className="hero-btn-1" style={{ marginTop: '20px' }}>
                                            <a href='#about-us'>
                                                About Us
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="carousel-item">

                        <div className=' slide-contents ' style={{ backgroundImage: `url(${slide3})` }}>
                            <div className='container'>
                                <div className=" slide-container" >
                                    <div className='quote'>Need dependable supply for your projects?</div>
                                    <div className='slide-heading'>Reliable Delivery &  Support</div>
                                    <div className='slide-info'>
                                        Robust Glass Pvt. Ltd. ensures safe packaging, timely nationwide delivery, and reliable support for our dealers and distributors. We’re committed to delivering top-quality glass products without compromise.
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <i className="slide-points fa-regular fa-circle-check " aria-label="checkmark icon"></i> Timely Delivery with Secure Packaging
                                            </li>
                                            <li>
                                                <i className="slide-points fa-regular fa-circle-check" aria-label="checkmark icon"></i> Dealer Partnerships & Regional Distribution
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='slide-btns'>
                                        <button className="hero-btn-1" aria-label="Contact Support via WhatsApp">
                                            <a href='https://wa.me/1234567890' target='_blank' rel='noopener noreferrer'>Contact Support</a>
                                        </button>
                                        <button className="hero-btn-2">
                                            <a href='#what-we-offer'>
                                                View Services
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

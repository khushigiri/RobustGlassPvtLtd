import './Offer.css'

import archImg from '../../assets/arch-deg.jpg';
import infraImg from '../../assets/inds.jpg';
import realestateImg from '../../assets/est&intr.jpg';

import { FaRegStarHalfStroke } from "react-icons/fa6";


const Offer = () => {
    return (
        <div id="what-we-offer">
            <div className="container">
                <div className='offer-heading-content'>
                    <h2 className="offer-section-title">Services We Offer</h2>
                    <div className='offer-heading'>
                        <div className='heading'>
                            <h3>High Quality Glass Services For Every Industry</h3>
                        </div>
                        <div className='offer-heading-info'>
                            <p>
                                Robust Glass Pvt. Ltd. is a leading processor of premium quality glass solutions.
                                We serve industries including architecture, construction, interior design, retail, and commercial establishments — ensuring safety, precision, and durability in every product.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='services-cards'>
                    <div className="card" id='architecture-design'>
                        <div className='card-content'>
                            <svg className="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>
                            <img src={archImg} alt='Architecture and Design' /><hr />
                            <button type="button" className='card-btn' aria-label='View Architecture and Design services'>
                                Architecture & Design
                            </button>
                            <div className="overlay"></div>
                            <div className='hover-actions'>
                                <div className='hover-heading'>
                                    <div className='star-icon-1'>
                                        <FaRegStarHalfStroke aria-label="Star rating for design service" />
                                    </div>
                                    <div>
                                        <h5>Innovative Glass for Creative Spaces</h5>
                                    </div>
                                </div>
                                <p>Our bespoke glass solutions are ideal for architectural features, designer partitions, and custom installations that prioritize aesthetics and safety.</p>
                                <div className="wrapper">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card" id='industrial-infrastructure'>
                        <div className='card-content'>
                            <svg className="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>
                            <img src={infraImg} alt='Industrial Infrastructure' />
                            <hr />
                            <button type="button" className='card-btn'>
                                Industrial Infrastructure
                            </button>
                            <div className="overlay"></div>
                            <div className='hover-actions'>
                                <div className='hover-heading'>
                                    <div className='star-icon-2'>
                                        <FaRegStarHalfStroke aria-label="Star rating for design service" />
                                    </div>
                                    <div>
                                        <h5>Durable Solutions for Heavy-Duty Use</h5>
                                    </div>
                                </div>
                                <p>Engineered glass used in factories, warehouses, and production setups — offering resilience, thermal resistance, and safety.</p>
                                <div className="wrapper">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card" id='real-estate-and-interiors'>
                        <div className='card-content'>
                            <svg className="check" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                            </svg>
                            <img src={realestateImg} alt='Real Estate and Interiors' /><hr />
                            <button type="button" className='card-btn'>
                                Real Estate & Interiors
                            </button>
                            <div className="overlay"></div>
                            <div className='hover-actions'>
                                <div className='hover-heading'>
                                    <div className='star-icon-3'>
                                        <FaRegStarHalfStroke aria-label="Star rating for design service" />
                                    </div>
                                    <div>
                                        <h5>Elegant Glass for Functional Living</h5>
                                    </div>
                                </div>
                                <p>From glass railings to balcony panels and wardrobe doors — we elevate interiors and enhance real estate with modern glass applications.</p>
                                <div className="wrapper">
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="circle"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                    <div className="shadow"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offer;

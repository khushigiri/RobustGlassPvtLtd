
import './AboutUs.css';

import AboutUsjpg from '../../assets/about-us.jpg'

const AboutUs = () => {

    return (
        <section className="about-us container" id='about-us' aria-label="About Robust Glass Section">

            <div className="img-content">
                <img src={AboutUsjpg} alt="Worker handling glass panel in factory" aria-label="Worker handling glass panel in factory" />
            </div>

            <div className="text-content">
                <div><h2>Welcome To The Best Glass Processing Unit</h2></div>
                <div><h3>Advanced Glass Processing Unit</h3></div>
                <div className='info'><p>Founded in [Year], Robust Glass Pvt. Ltd. has grown into a trusted name in the glass industry. With a modern processing facility, we convert raw float glass into strong, heat-resistant, and precisely cut toughened glass — ideal for both interiors and infrastructure projects.

                </p></div>
                <div>
                    <div className='lists'>
                        <div className='lists-heading'>We Deliver Excellence Through:</div>
                        <div>
                            <ul aria-label="List of processing capabilities">

                                <li> <i className="fa-solid fa-square-check" aria-label="Checkmark Icon"></i> <h4>Heat Treatment for Toughened Safety</h4>   </li>
                                <li> <i className="fa-solid fa-square-check" aria-label="Checkmark Icon"></i>  <h4>Precision Cutting & Edge Polishing</h4></li>
                                <li> <i className="fa-solid fa-square-check" aria-label="Checkmark Icon"></i> <h4>Quality Inspection at Every Stage</h4></li>
                                <li><i className="fa-solid fa-square-check" aria-label="Checkmark Icon"></i> <h4>Thickness Range: 5mm, 6mm, 8mm, 10mm, 12mm</h4></li>
                            </ul>
                        </div>
                    </div>
                    <div></div>
                </div>

                <div className='mission-vision-cards'>
                    <div className='card1'>
                        <div className="ag-courses_item">
                            <div className="ag-courses-item_link" >

                                <div className="ag-courses-item_bg"></div>
                                <div className="ag-courses-item_title">Mission</div>
                                <div className="ag-courses-item_date-box">
                                    At Robust Glass Pvt. Ltd., our mission is to provide high-quality toughened glass solutions that ensure safety, durability, and design — meeting the needs of architectural, industrial, and interior applications. </div>
                            </div>
                        </div>
                    </div>

                    <div className='card2'>
                        <div className="ag-courses_item">

                            <div className="ag-courses-item_link" >
                                <div className="ag-courses-item_bg"></div>
                                <div className="ag-courses-item_title">Vision</div>
                                <div className="ag-courses-item_date-box">
                                    Our vision is to be a trusted leader in the glass processing industry, recognized for innovation, consistent quality, and a strong commitment to customer satisfaction across every project we serve.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutUs;

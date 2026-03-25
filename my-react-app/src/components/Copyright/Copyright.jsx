
import './Copyright.css';
const Copyright = () => {
    return (
        <div className="copyright-container">
            <div className="copyright-content container">
                <div className='cp-row1'>
                    <p>
                        © {new Date().getFullYear()} Robust Pvt. Ltd. Developed and Maintained by <a href='/'>XYZ</a>.
                    </p>
                </div>
                <div className='cp-row2'>
                    <ul>
                        <li>
                            <a href='/' aria-label="Terms and Conditions">Terms & Conditions</a>
                        </li>
                        <li>
                            <a href='/' aria-label="Privacy Policy">Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Copyright;
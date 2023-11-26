import './MapNavbar.css';
import { Link } from 'react-router-dom';

const MapNavbar = () => {
    return (
        <div className='map-navbar'>
            <Link to='/' className='map-navbar-button'>
                <img src='/images/arrow-right.svg' alt='arrow icon'></img>
            </Link>
            <div className='map-navbar-title'>
                <img src='/images/pin-white.svg' alt='pin icon'></img>
                <span>turBin Spots</span>
            </div>
        </div>
    );
};

export default MapNavbar;

import './MapNavbar.css';
import { Link } from 'react-router-dom';

const MapNavbar = ({ searchbarClickHandler }) => {
    return (
        <div className='map-navbar'>
            <div>
                <Link to='/' className='map-navbar-button'>
                    <img
                        src='/images/arrow-right-white.svg'
                        alt='arrow icon'
                    ></img>
                </Link>
            </div>

            <div className='map-search' onClick={searchbarClickHandler}>
                <img src='/images/menu.svg'></img>
                <span>Search by address...</span>
                <img src='/images/mic-icon.svg'></img>
            </div>
        </div>
    );
};

export default MapNavbar;

import { Link } from 'react-router-dom';

import './InfoNavbar.css';
const dateFormat = require('../../util/DateFormat');

const InfoNavbar = ({ title, lastUpdated }) => {
    const date = dateFormat(new Date(lastUpdated));

    return (
        <div className='info-navbar'>
            <Link to='/map' className='info-navbar-button'>
                <img src='/images/arrow-right.svg' alt=''></img>
            </Link>
            <div className='info-navbar-text'>
                <div className='navbar-text-top'>
                    <span className='font-semibold'>{title}</span>
                </div>
                <div className='navbar-text-bottom'>
                    <span className='font-medium'>{date} updated</span>
                </div>
            </div>
        </div>
    );
};

export default InfoNavbar;

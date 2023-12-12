import './MainNavbar.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const SERVER_URL =
    'https://port-0-turbin-server-cn1vmr2clpfb98ea.sel5.cloudtype.app/';

const MainNavbar = () => {
    const enableQrScan = async () => {
        axios.post(SERVER_URL + 'qrcode', { id: 'qr', qrStatus: 1 });
        alert('qr enabled');
    };

    return (
        <nav className='index-nav'>
            <span onClick={enableQrScan} className='nav-logo font-semibold'>
                TurBin
            </span>
            <div className='nav-menu'>
                <img
                    src='/images/coupon.svg'
                    className='nav-menu-item'
                    alt=''
                />

                <img src='/images/bell.svg' className='nav-menu-item' alt='' />
                <img src='/images/menu.svg' className='nav-menu-item' alt='' />
            </div>
        </nav>
    );
};

export default MainNavbar;

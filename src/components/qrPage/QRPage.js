import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Html5QrcodePlugin from './Html5QrcodePlugin';

import './QRPage.css';

const QRPage = (props) => {
    const [data, setData] = useState('No result');

    const onNewScanResult = (decodedText, decodedResult) => {
        console.log(decodedText);
    };
    return (
        <div className='qrcode-main'>
            <nav className='qrcode-nav'>
                <Link to='/' className='cancel-button'>
                    <img src='images/cancel.svg' alt='' />
                </Link>
                <div>
                    <span className='code-scan-text'>코드스캔</span>
                </div>
                <div />
            </nav>
            <Html5QrcodePlugin />
        </div>
    );
};

export default QRPage;

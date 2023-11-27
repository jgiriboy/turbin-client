import React, { Component } from 'react';
import { QrReader } from 'react-qr-reader';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './QRPage.css';

const QRPage = (props) => {
    const [data, setData] = useState('No result');

    return (
        <div className='qr-page'>
            <div className='qr-page-nav'>
                <Link to='/'>
                    <img src='/images/cancel.svg' />
                </Link>
            </div>
            <div className='qr-text'>코드 스캔</div>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%', height: '100%' }}
                constraints={{ facingMode: 'environment' }}
            />
        </div>
    );
};

export default QRPage;

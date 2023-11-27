import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import { Link } from 'react-router-dom';

import './QRPage.css';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delay: 100,
            result: 'No result',
        };

        this.handleScan = this.handleScan.bind(this);
    }
    // 여기서 스캔 성공했을 때 동작 정의하면 됨.
    handleScan(data) {
        if (data) {
            console.log(data);
        }
    }
    handleError(err) {
        console.error(err);
    }
    render() {
        const previewStyle = {
            height: '100%',
            width: '100%',
        };

        return (
            <div className='qr-page'>
                <div className='qr-page-nav'>
                    <Link to='/' className='qr-back-btn'>
                        <img src='/images/cancel.svg' />
                    </Link>
                    <span>코드 스캔</span>
                </div>
                <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    constraints={{
                        facingMode: 'environment',
                    }}
                    onError={this.handleError}
                    onScan={this.handleScan}
                />
            </div>
        );
    }
}

export default Test;

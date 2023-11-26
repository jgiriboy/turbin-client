import './MainService.css';
import { Link } from 'react-router-dom';

const MainService = () => {
    return (
        <div className='index-service'>
            <Link to='/map' className='index-parkingStation index-service-box'>
                <span className='font-semibold'>TurBin 찾기</span>
                <span>
                    현 위치에서 가까운
                    <br />
                    TurBin을
                    <br />
                    찾아요
                </span>
                <img
                    src='/images/turbin-icon.svg'
                    className='service-img-PS'
                    alt=''
                />
            </Link>
            <Link to='/' className='index-QRcode index-service-box'>
                <span className='font-semibold'>리워드 받기</span>
                <span>
                    QR 찍고
                    <br />
                    리워드 받아요
                </span>
                <img
                    src='/images/qrcode.svg'
                    className='service-img-QR'
                    alt=''
                />
            </Link>
        </div>
    );
};

export default MainService;

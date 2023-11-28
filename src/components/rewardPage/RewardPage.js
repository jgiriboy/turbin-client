import './RewardPage.css';
import { Link } from 'react-router-dom';

const RewardPage = () => {
    return (
        <div className='reward-page'>
            <div className='reward-nav'>
                <div className='reward-back-btn'>
                    <Link to='/'>
                        <img
                            src='images/arrow-right.svg'
                            className='reward-back-btn-img'
                        />
                    </Link>
                </div>
                <div className='reward-nav-title'>
                    <span>TurBin</span>
                    <span> 리워드 내역</span>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default RewardPage;

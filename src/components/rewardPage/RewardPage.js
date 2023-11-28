import './RewardPage.css';
import { Link } from 'react-router-dom';
import SavedBudget from '../infoPage/SavedBudget';
import RewardLog from './RewardLog';

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
            <SavedBudget
                budget={1595}
                title={'이달'}
                noSpec={false}
                description='모은 리워드'
                pointUnits='포인트'
            />
            <RewardLog
                totalBudget={1595}
                newBudget={495}
                newDate='2023. 11. 28. 10:29:49'
                newTitle='하이테크센터'
            />
            <RewardLog
                totalBudget={1100}
                newBudget={600}
                newDate='2023. 11. 28. 10:29:49'
                newTitle='하이테크센터'
            />
            <RewardLog
                totalBudget={500}
                newBudget={500}
                newDate='2023. 11. 28. 10:29:49'
                newTitle='하이테크센터'
            />
        </div>
    );
};

export default RewardPage;

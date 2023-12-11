import './RewardPage.css';
import { Link } from 'react-router-dom';
import SavedBudget from '../infoPage/SavedBudget';
import RewardLog from './RewardLog';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SERVER_URL =
    'https://port-0-turbin-server-cn1vmr2clpfb98ea.sel5.cloudtype.app/';

const RewardPage = () => {
    const [rewardHistory, setRewardHistory] = useState([
        { totalReward: 0, reward: 0, last_updated: '', turbinName: '' },
    ]);

    const fetchHistory = async () => {
        const response = await axios.get(SERVER_URL + 'new-reward');
        setRewardHistory(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        fetchHistory();
    }, []);

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
                budget={rewardHistory[rewardHistory.length - 1].totalReward}
                title={'이달'}
                noSpec={false}
                description='모은 리워드'
                pointUnits='포인트'
            />
            {rewardHistory.reverse().map((currentData) => {
                return (
                    <RewardLog
                        key={Math.floor(Math.random() * 1000)}
                        totalBudget={currentData.totalReward}
                        newBudget={currentData.reward}
                        newDate={currentData.last_updated}
                        newTitle={currentData.turbinName}
                    />
                );
            })}
            {/* <RewardLog
                totalBudget={1595}
                newBudget={495}
                newDate='2023. 11. 28. 10:29:49'
                newTitle='인하아리스타'
            />
            <RewardLog
                totalBudget={1100}
                newBudget={600}
                newDate='2023. 11. 26. 13:39:10'
                newTitle='기은 하우스'
            />
            <RewardLog
                totalBudget={500}
                newBudget={500}
                newDate='2023. 11. 25. 13:49:35'
                newTitle='하이테크센터'
            /> */}
        </div>
    );
};

export default RewardPage;

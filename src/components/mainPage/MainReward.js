import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './MainReward.css';

const SERVER_URL =
    'https://port-0-turbin-server-cn1vmr2clpfb98ea.sel5.cloudtype.app';

const MainReward = () => {
    const [rewardInfo, setRewardInfo] = useState({
        id: 1,
        username: 'Gieun Jeong',
        reward: 0,
    });

    const fetchRewardInfo = async () => {
        const response = await axios.get(SERVER_URL + '/reward');
        setRewardInfo((rewardInfo) => response.data);
    };

    // 컴포넌트가 렌더링 될 때, state 변경되면 함수를 실행함.
    useEffect(() => {
        fetchRewardInfo();
    }, []);

    return (
        <div className='index-user-reward'>
            <div className='user-reward-text'>
                <div className='user-reward-left'>
                    <span className='font-semibold'>모은 리워드</span>
                    <span className='font-regular'>
                        {rewardInfo.username} 님
                    </span>
                </div>
                <div className='user-reward-right'>
                    <span className='font-regular'>
                        {rewardInfo.reward} 포인트
                    </span>
                </div>
            </div>
            <Link to='/reward-page' className='user-reward-button'>
                <span>리워드 적립 내역</span>
            </Link>
        </div>
    );
};

export default MainReward;

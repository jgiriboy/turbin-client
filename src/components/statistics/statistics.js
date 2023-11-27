import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './statistics.css';
import StatPie from './statPie';
import SavedBudget from '../infoPage/SavedBudget';
import BarGraph from './BarGraph';

const Statistics = () => {
    const { state } = useLocation();
    const statdata = [
        {
            id: '캔',
            value: 23,
        },
        {
            id: '플라스틱',
            value: 41,
        },
        {
            id: '유리',
            value: 15,
        },
        {
            id: '일반',
            value: 21,
        },
    ];

    const bardata = [
        {
            month: '7월',
            can: 10,
            plastic: 41,
            glass: 10,
            general: 36,
        },
        {
            month: '8월',
            can: 20,
            plastic: 43,
            glass: 15,
            general: 48,
        },
        {
            month: '9월',
            can: 40,
            plastic: 61,
            glass: 21,
            general: 67,
        },
        {
            month: '10월',
            can: 29,
            plastic: 38,
            glass: 22,
            general: 23,
        },
        {
            month: '11월',
            can: 30,
            plastic: 33,
            glass: 12,
            general: 27,
        },
    ];

    const colorScale = ['#F4AE8E', '#43C5F5', '#A68CE3', '#666666'];
    return (
        <div className='stat-page'>
            <div className='stat-nav'>
                <div className='stat-back-btn'>
                    <Link to='/'>
                        <img
                            src='images/arrow-right.svg'
                            className='stat-back-btn-img'
                        />
                    </Link>
                </div>
                <div className='stat-nav-title'>
                    <span>TurBin</span>
                    <span> 월간 데이터</span>
                </div>
                <div></div>
            </div>
            <div className='stat-pie-box'>
                <div style={{ width: '100%', height: '40vh' }}>
                    <StatPie statData={statdata} />
                </div>
                <div className='stat-pie-description'>
                    <span>11월 배출량</span>
                    <span>102.4L</span>
                </div>
            </div>

            <div className='stat-budget'>
                <SavedBudget budget={3141} title={'이달'} />
            </div>
            <div style={{ width: '100%', height: '40vh' }}>
                <BarGraph data={bardata} chartColor={colorScale} />
            </div>
        </div>
    );
};

export default Statistics;

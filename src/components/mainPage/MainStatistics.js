import './MainStatistics.css';

const MainStatistics = () => {
    return (
        <div className='index-get-reward'>
            <div className='get-reward-text'>
                <span className='font-semibold'>TurBin 통계</span>
                <span>TurBin의 월간 통계를 확인해요</span>
            </div>
            <a href='/'>
                <span>통계 확인</span>
            </a>
        </div>
    );
};

export default MainStatistics;

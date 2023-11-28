import './RewardLog.css';

const RewardPage = ({ totalBudget, newBudget, newDate, newTitle }) => {
    const editTotal = totalBudget.toLocaleString('en-US');
    const editNew = newBudget.toLocaleString('en-US');
    return (
        <div className='reward-page'>
            <div className='reward-page-nav'></div>
            <div className='reward-page-date'>
                <span>{newDate}</span>
            </div>
            <div className='reward-page-title'>
                <span>{newTitle}</span>
            </div>
            <div className='reward-page-log'>
                <div className='reward-log-new'>
                    <span>+ </span>
                    <span>{editNew}</span>
                    <span> 포인트</span>
                </div>
                <span className='reward-total-reward'>
                    총 {editTotal} 포인트
                </span>
            </div>
        </div>
    );
};

export default RewardPage;

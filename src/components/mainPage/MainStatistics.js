import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MainStatistics.css';

const MainStatistics = () => {
    const navigate = useNavigate();

    // const navigateToStatPage = () => {
    //     navigate('/search', { state:  });
    // };

    return (
        <div className='index-get-reward'>
            <div className='get-reward-text'>
                <span className='font-semibold'>TurBin 통계</span>
                <span>TurBin의 월간 통계를 확인해요</span>
            </div>
            <Link to='/stat'>
                <span>통계 확인</span>
            </Link>
        </div>
    );
};

export default MainStatistics;

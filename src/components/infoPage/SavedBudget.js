import './SavedBudget.css';
import { Link } from 'react-router-dom';

const SavedBudget = ({ budget, title }) => {
    const saved = budget.toLocaleString('en-US');

    return (
        <div className='saved-budget'>
            <div className='budget-left'>
                <span>{title} 절감한 환경 비용</span>
                <span>{saved} 원</span>
            </div>
            <Link to='/stat' className='spec-button'>
                <span>자세히</span>
            </Link>
        </div>
    );
};

export default SavedBudget;

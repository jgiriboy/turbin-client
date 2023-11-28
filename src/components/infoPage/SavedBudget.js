import './SavedBudget.css';
import { Link } from 'react-router-dom';

const SavedBudget = ({ budget, title, noSpec, description, pointUnits }) => {
    const saved = budget.toLocaleString('en-US');

    if (noSpec)
        return (
            <div className='saved-budget'>
                <div className='budget-left'>
                    <span>
                        {title} {description}
                    </span>
                    <span>
                        {saved} {pointUnits}
                    </span>
                </div>
                <Link to='/stat' className='spec-button'>
                    <span>자세히</span>
                </Link>
            </div>
        );
    else
        return (
            <div className='saved-budget'>
                <div className='budget-left'>
                    <span>
                        {title} {description}
                    </span>
                    <span>
                        {saved} {pointUnits}
                    </span>
                </div>
            </div>
        );
};

export default SavedBudget;

import { useLocation } from 'react-router-dom';

import './InfoPage.css';
import InfoNavbar from './InfoNavbar';
import ChartPage from './ChartPage';
import SavedBudget from './SavedBudget';

const InfoPage = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <main className='info-main'>
            <InfoNavbar title={state.title} lastUpdated={state.last_updated} />
            <ChartPage pinInfo={state} />
            <SavedBudget budget={state.saved_budget} title={'이달'} />
            <SavedBudget budget={state.saved_budget} title={'올해'} />
        </main>
    );
};

export default InfoPage;

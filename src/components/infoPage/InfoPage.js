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
            <SavedBudget
                budget={state.saved_budget}
                title={'이달'}
                noSpec={true}
                description='절감한 환경 비용'
                pointUnits='원'
            />
            <SavedBudget
                budget={state.saved_budget}
                title={'올해'}
                noSpec={true}
                description='절감한 환경 비용'
                pointUnits='원'
            />
        </main>
    );
};

export default InfoPage;

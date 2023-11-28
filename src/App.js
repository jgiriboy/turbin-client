import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import TurBinMap from './components/turbinMap/TurBinMap';
import InfoPage from './components/infoPage/InfoPage';
import AddressSearch from './components/turbinMap/AddressSearch';
import QRPage from './components/qrPage/QRPage';
import Statistics from './components/statistics/statistics';
import RewardPage from './components/rewardPage/RewardPage';

const router = createBrowserRouter([
    { path: '/', element: <MainPage /> },
    {
        path: '/map',
        element: <TurBinMap />,
    },
    {
        path: '/info',
        element: <InfoPage />,
    },
    {
        path: '/search',
        element: <AddressSearch />,
    },
    {
        path: '/qrpage',
        element: <QRPage />,
    },
    {
        path: '/stat',
        element: <Statistics />,
    },
    {
        path: '/reward-page',
        element: <RewardPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

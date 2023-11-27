import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import TurBinMap from './components/turbinMap/TurBinMap';
import InfoPage from './components/infoPage/InfoPage';
import AddressSearch from './components/turbinMap/AddressSearch';
import QRPage from './components/qrPage/QRPage';

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

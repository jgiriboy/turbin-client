import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import TurBinMap from './components/turbinMap/TurBinMap';
import InfoPage from './components/infoPage/InfoPage';
import AddressSearch from './components/turbinMap/AddressSearch';

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

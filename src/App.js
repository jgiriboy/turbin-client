import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import TurBinMap from './components/turbinMap/TurBinMap';
import InfoPage from './components/infoPage/InfoPage';

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

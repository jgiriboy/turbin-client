import './MainPage.css';
import MainNavbar from './MainNavbar';
import MainBanner from './MainBanner';
import MainNote from './MainNote';
import MainService from './MainService';
import MainStatistics from './MainStatistics';
import MainReward from './MainReward';

const MainPage = () => {
    return (
        <main className='index-main'>
            <MainNavbar />
            <MainBanner />
            <MainNote />
            <div className='index-boxes'>
                <MainService />
                <MainStatistics />
                <MainReward />
            </div>
        </main>
    );
};

export default MainPage;

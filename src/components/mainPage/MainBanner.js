import './MainBanner.css';

const MainBanner = () => {
    return (
        <div className='index-my'>
            <div className='my-text'>
                <span className='font-regular'>TurBin</span>
                <span className='font-bold'>
                    쓰레기를 버리기만 해도
                    <br />
                    리워드가
                    <br />
                    쌓인다!
                </span>
                <div className='my-text-box font-bold'>
                    <span>Get reward</span>
                </div>
            </div>
            <img src='/images/trashcan.svg' className='my-image' alt='' />
        </div>
    );
};

export default MainBanner;

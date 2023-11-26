import './BottomPopup.css';

const BottomPopup = () => {
    return (
        <div className='bottom-popup'>
            <div className='popup-body'>
                <div className='map-serach-upperline'></div>
                <input
                    type='text'
                    className='popup-search-bar'
                    placeholder='hello'
                />
                <div className='turbin-list'>
                    <div className='turbin-list-item'>
                        {/* TODO: to fill here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomPopup;

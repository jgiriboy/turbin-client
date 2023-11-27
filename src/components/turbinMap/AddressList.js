import './AddressList.css';

const AddressList = () => {
    return (
        <div className='address-list'>
            <div className='address-list-first'>
                <div className='list-first-first'>
                    <img src='/images/pin.svg'></img>
                </div>
                <div className='list-first-second'>
                    <span>1생활관</span>
                    <span>인천시 미추홀구 소성로 40</span>
                </div>
            </div>
            <div className='address-list-second'>
                <span>22m</span>
            </div>
        </div>
    );
};

export default AddressList;

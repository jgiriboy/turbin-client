import './AddressList.css';
import { useNavigate } from 'react-router-dom';

const AddressList = (props) => {
    const navigate = useNavigate();

    const navigateToMap = () => {
        navigate('/map', { state: props });
    };

    return (
        <div className='address-list'>
            <div className='address-list-first' onClick={navigateToMap}>
                <div className='list-first-first'>
                    <img src='/images/pin.svg'></img>
                </div>
                <div className='list-first-second'>
                    <span>{props.title}</span>
                    <span>{props.addr}</span>
                </div>
            </div>
            <div className='address-list-second'>
                <span>{props.distance}m</span>
            </div>
        </div>
    );
};

export default AddressList;

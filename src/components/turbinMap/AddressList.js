import './AddressList.css';
import { useNavigate } from 'react-router-dom';

const AddressList = (props) => {
    const navigate = useNavigate();

    const navigateToMap = () => {
        navigate('/map', { state: props });
    };
    let newDistance;
    if (props.distance >= 1000) {
        newDistance = (props.distance * 0.001).toFixed(1).toString() + 'k';
    } else {
        newDistance = props.distance.toLocaleString('en-US');
    }

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
                <span>{newDistance}m</span>
            </div>
        </div>
    );
};

export default AddressList;

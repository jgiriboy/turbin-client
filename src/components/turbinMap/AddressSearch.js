import { Link } from 'react-router-dom';

import './AddressSearch.css';
import AddressList from './AddressList';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const getDistance = require('../../util/distance');

const { kakao } = window;

const AddressSearch = () => {
    const { state } = useLocation();
    const geocoder = new kakao.maps.services.Geocoder();
    const [entered, setEntered] = useState('');
    const [coords, setCoords] = useState({});
    // useState로 input에 있는 밸류를 관리해야 함.
    // todo: useState 사용해서 가까운 순서대로 정렬해서 관리해야 함.
    // 그리고 map 써서 렌더링해주면 됨.
    // 클릭했을 때 지도로 다시 이동해야 하며, 해당 핀이 가운데 오도록 하기.
    // 엔터 인식하게하기.

    geocoder.coord2Address(state[0].longitude, state[0].latitude, (result) => {
        // console.log(result[0].road_address.address_name);
    });

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            geocoder.addressSearch(entered, (result, status) => {
                if (status === kakao.maps.services.Status.OK) {
                    setCoords(
                        (t) => new kakao.maps.LatLng(result[0].y, result[0].x)
                    );
                }
            });
            setEntered('');
        }
    };

    useEffect(() => {
        console.log(coords);
    }, [coords]);

    const typeHandler = (e) => {
        setEntered(e.target.value);
    };

    return (
        <div className='address-search'>
            <div className='search-nav'>
                <Link to='/map'>
                    <img
                        src='/images/arrow-right.svg'
                        className='search-nav-btn'
                    ></img>
                </Link>
                <input
                    className='address-search-bar'
                    placeholder='Search by address...'
                    onKeyDown={handleOnKeyDown}
                    onChange={typeHandler}
                    value={entered}
                ></input>

                <img src='/images/mic-icon.svg'></img>
            </div>
            <div className='search-bar-dummy'>
                <div className='dummy'>
                    <img src='/images/threecircle.svg'></img>
                    <span>See all spots</span>
                </div>
                <div className='dummy'>
                    <img src='/images/pin.svg'></img>
                    <span>5 min.</span>
                </div>
                <div className='dummy'>
                    <img src='/images/pin.svg'></img>
                    <span>10 min.</span>
                </div>
            </div>
            <div className='near-text'>
                <span>NEAR</span>
            </div>
            <AddressList />
            <AddressList />
            <AddressList />
        </div>
    );
};

export default AddressSearch;

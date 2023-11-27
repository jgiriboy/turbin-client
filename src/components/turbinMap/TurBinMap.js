import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import './TurBinMap.css';
import MapNavbar from './MapNavbar';
import BottomPopup from './BottomPopup';

const { kakao } = window;

const SERVER_URL =
    'https://port-0-turbin-server-cn1vmr2clpfb98ea.sel5.cloudtype.app';

const TurBinMap = () => {
    const navigate = useNavigate();

    const { state } = useLocation();

    const [pinInfo, setPinInfo] = useState([]);
    const [markers, setMarkers] = useState([]);
    const [myPosition, setMyPosition] = useState({});

    const fetchTurBinInfo = async () => {
        const response = await axios.get(SERVER_URL + '/info');
        setPinInfo((pinInfo) => response.data);
    };

    const getPinInfo = (title) => {
        for (let i = 0; i < pinInfo.length; i++) {
            if (pinInfo[i].title === title) {
                return pinInfo[i];
            }
        }
    };

    const navigateToInfoPage = (curPin) => {
        navigate('/info', { state: curPin });
    };

    const navigateToSearchPage = () => {
        navigate('/search', { state: pinInfo });
    };

    useEffect(() => {
        fetchTurBinInfo();
        console.log('State', state);
    }, []);

    // kakao map rendering
    useEffect(() => {
        const container = document.getElementById('map');
        const lat = state ? state.latitude : 37.450699;
        const lng = state ? state.longitude : 126.656855;

        const options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        kakao.maps.event.addListener(map, 'click', function (e) {});

        const pinXLen = 46;
        const pinYLen = 46;
        const imageSrc = 'images/pin.svg';
        const imageSize = new kakao.maps.Size(pinXLen, pinYLen);

        // 마커의 좌표와 일치시킬 이미지 안에서의 좌표. 꼭짓점 위치.
        const imageOption = {
            offset: new kakao.maps.Point(pinXLen / 2, pinYLen),
        };
        // 마커 이미지 생성
        const markerImage = new kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
        );

        const positions = [];

        for (let i = 0; i < pinInfo.length; i++) {
            const pos = {
                title: pinInfo[i].title,
                latlng: new kakao.maps.LatLng(
                    pinInfo[i].latitude,
                    pinInfo[i].longitude
                ),
            };
            positions.push(pos);
        }

        for (let i = 0; i < positions.length; i++) {
            const markerPosition = positions[i].latlng;

            const marker = new kakao.maps.Marker({
                title: positions[i].title,
                position: markerPosition,
                image: markerImage,
            });

            setMarkers((markers) => [...markers, marker]);
            marker.setMap(map);

            kakao.maps.event.addListener(marker, 'click', function () {
                const curPin = getPinInfo(this.getTitle());
                navigateToInfoPage(curPin);
                // distanceFromPS = getDistanceFromLatLon(
                //     myPosition.lat,
                //     myPosition.lng,
                //     curPin.latlng.x,
                //     curPin.latlng.y
                // );
                // console.log(distanceFromPS);
            });

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    setMyPosition((e) => {
                        return {
                            latitude: latitude,
                            longitude: longitude,
                        };
                    });

                    const locPosition = new kakao.maps.LatLng(
                        latitude,
                        longitude
                    );
                    const marker = new kakao.maps.Marker({
                        position: locPosition,
                    });
                    marker.setMap(map);
                });
            }
        }
    }, [pinInfo]);

    return (
        <main className='map-main'>
            <div id='map' />
            <MapNavbar searchbarClickHandler={navigateToSearchPage} />
        </main>
    );
};

export default TurBinMap;

import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react';
import axios from 'axios';

const SERVER_URL =
    'https://port-0-turbin-server-cn1vmr2clpfb98ea.sel5.cloudtype.app/';
// const SERVER_URL = 'http://localhost:8000/';

const Html5QrcodePlugin = () => {
    let TOTAL_REWARD;
    axios.get(SERVER_URL + 'reward').then((res) => {
        TOTAL_REWARD = res.data.reward;
    });

    let scanning = false;
    let html5Qrcode;

    let qrboxFunction = function (viewfinderWidth, viewfinderHeight) {
        let minEdgePercentage = 0.8; // 80%
        let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
        let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
        return {
            width: qrboxSize,
            height: qrboxSize,
        };
    };

    function init() {
        html5Qrcode = new Html5Qrcode('reader');
    }

    function start() {
        html5Qrcode.start(
            { facingMode: 'environment' },
            {
                fps: 10,
                qrbox: qrboxFunction,
            },
            onScanSuccess,
            onScanFailure
        );
        scanning = true;
    }

    async function onScanSuccess(decodedText, decodedResult) {
        if (decodedText == 'reward') {
            const userReward = Math.floor(Math.random() * 100);
            const response = await axios.post(SERVER_URL + decodedText, {
                userid: 1,
                value: userReward,
            });
            const namelist = [
                '인하아리스타',
                '기은 하우스',
                '하이테크센터',
                '인하대 후문',
                '인하대 정문',
                '인하대학교본관',
                '인하대역헤리움오피스텔',
                '힐스테이트학익',
                '하이테크센터',
                '인하대학교1생활관',
            ];
            await axios.post(SERVER_URL + 'new-reward', {
                userid: 1,
                reward: userReward,
                username: 'gieun jeong',
                turbinName: namelist[Math.floor(Math.random() * 10)],
                totalReward: TOTAL_REWARD + userReward,
            });
            alert('리워드 적립!');
            window.location.href = '/';
        } else {
            alert('유효한 QR이 아닙니다');
            window.location.href = '/';
        }
        scanning = false;
    }

    function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`);
    }

    useEffect(() => {
        init();
        start();
    }, []);

    return <div id='reader'></div>;
};

export default Html5QrcodePlugin;

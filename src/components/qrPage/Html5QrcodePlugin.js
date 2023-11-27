import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react';

const Html5QrcodePlugin = () => {
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
        console.log(decodedText);
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

import PieChart from './PieChart';
import './ChartPage.css';

const ChartPage = ({ pinInfo }) => {
    const generaldata = [
        {
            id: '일반',
            value: pinInfo.h_general,
        },
        {
            id: '',
            value: 100 - pinInfo.h_general,
        },
    ];
    const candata = [
        {
            id: '캔',
            value: pinInfo.h_can,
        },
        {
            id: '',
            value: 100 - pinInfo.h_can,
        },
    ];
    const plasticdata = [
        {
            id: '플라스틱',
            value: pinInfo.h_plastic,
        },
        {
            id: '',
            value: 100 - pinInfo.h_plastic,
        },
    ];
    const glassdata = [
        {
            id: '유리',
            value: pinInfo.h_glass,
        },
        {
            id: '',
            value: 100 - pinInfo.h_glass,
        },
    ];
    const totaldata = [
        {
            id: '전체 쓰레기',
            value:
                pinInfo.h_general +
                pinInfo.h_can +
                pinInfo.h_glass +
                pinInfo.h_plastic,
        },
        {
            id: '',
            value:
                400 -
                (pinInfo.h_general +
                    pinInfo.h_can +
                    pinInfo.h_glass +
                    pinInfo.h_plastic),
        },
    ];
    const generalColor = ['#666666', '#f8f8f8'];
    const canColor = ['#F4AE8E', '#f8f8f8'];
    const plasticColor = ['#43C5F5', '#f8f8f8'];
    const glassColor = ['#A68CE3', '#f8f8f8'];
    const totalColor = ['#214C9F', '#f8f8f8'];

    return (
        <div className='info-chart-box'>
            <div
                className='four-chart-box'
                style={{ width: '40vw', height: '20vh' }}
            >
                <PieChart
                    data={totaldata}
                    chartColor={totalColor}
                    fontsize={0}
                    symbolsize={0}
                    marginbottom={10}
                />
                <div className='charts-description'>
                    <span>{totaldata[0].id}</span>
                    <span>{(totaldata[0].value / 400) * 100}%</span>
                </div>
            </div>

            <div className='info-charts'>
                <div className='four-chart-box'>
                    <PieChart
                        data={generaldata}
                        chartColor={generalColor}
                        fontsize={0}
                        symbolsize={0}
                        marginbottom={10}
                    />
                    <div className='charts-description'>
                        <span>{generaldata[0].id}</span>
                        <span>{generaldata[0].value}%</span>
                    </div>
                </div>
                <div className='four-chart-box'>
                    <PieChart
                        data={candata}
                        chartColor={canColor}
                        fontsize={0}
                        symbolsize={0}
                        marginbottom={10}
                    />
                    <div className='charts-description'>
                        <span>{candata[0].id}</span>
                        <span>{candata[0].value}%</span>
                    </div>
                </div>
            </div>
            <div className='info-charts'>
                <div className='four-chart-box'>
                    <PieChart
                        data={plasticdata}
                        chartColor={plasticColor}
                        fontsize={0}
                        symbolsize={0}
                        marginbottom={10}
                    />
                    <div className='charts-description'>
                        <span>{plasticdata[0].id}</span>
                        <span>{plasticdata[0].value}%</span>
                    </div>
                </div>
                <div className='four-chart-box'>
                    <PieChart
                        data={glassdata}
                        chartColor={glassColor}
                        fontsize={0}
                        symbolsize={0}
                        marginbottom={10}
                    />
                    <div className='charts-description'>
                        <span>{glassdata[0].id}</span>
                        <span>{glassdata[0].value}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartPage;

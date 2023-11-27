// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from '@nivo/pie';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChart = ({ data, chartColor, fontsize, symbolsize, marginbottom }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 10, bottom: marginbottom, left: 10, right: 10 }}
        innerRadius={0.93}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        borderColor={{
            from: 'color',
            modifiers: [['darker', '0.2']],
        }}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor='#333333'
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [['darker', 2]],
        }}
        colors={chartColor}
        theme={{
            /**
             * label style (pad에 표현되는 글씨)
             */
            labels: {
                text: {
                    fontSize: 0,
                    fill: '#000000',
                },
            },
            /**
             * legend style (default로 하단에 있는 색상별 key 표시)
             */
            legends: {
                text: {
                    fontSize: fontsize,
                    fill: '#000000',
                },
            },
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                itemsSpacing: 0,
                translateY: 30,
                translateX: 30,
                itemWidth: 80,
                itemHeight: 18,
                itemTextColor: '#666',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: symbolsize,
                symbolShape: 'square',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000',
                        },
                    },
                ],
            },
        ]}
    />
);

export default PieChart;

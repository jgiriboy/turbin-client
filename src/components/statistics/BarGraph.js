// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from '@nivo/bar';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const BarGraph = ({ data, chartColor }) => (
    <ResponsiveBar
        data={data}
        keys={['can', 'plastic', 'glass', 'general']}
        indexBy='month'
        margin={{ top: 10, right: 30, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        enableGridX={true}
        enableGridY={false}
        colors={chartColor}
        fill={[
            {
                match: {
                    id: 'fries',
                },
                id: 'dots',
            },
            {
                match: {
                    id: 'sandwich',
                },
                id: 'lines',
            },
        ]}
        borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
            tickSize: 0,
            tickPadding: 0,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
        }}
        role='application'
        ariaLabel='Nivo bar chart demo'
        barAriaLabel={(e) =>
            e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }
    />
);

export default BarGraph;

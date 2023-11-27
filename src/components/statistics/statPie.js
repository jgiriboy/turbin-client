import PieChart from '../infoPage/PieChart';

const StatPie = ({ statData }) => {
    const colorScale = ['#F4AE8E', '#43C5F5', '#A68CE3', '#666666'];

    return (
        <PieChart data={statData} chartColor={colorScale} marginbottom={40} />
    );
};
export default StatPie;

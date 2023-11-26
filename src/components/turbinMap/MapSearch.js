import './MapSearch.css';

const MapSearch = (props) => {
    return (
        <div className='map-search' onClick={props.clickHandler}>
            <div className='map-serach-upperline'></div>
            <input
                type='text'
                className='map-search-text'
                placeholder='Search by address...'
            />
            <img src='/images/mic-icon.svg' alt=''></img>
        </div>
    );
};

export default MapSearch;

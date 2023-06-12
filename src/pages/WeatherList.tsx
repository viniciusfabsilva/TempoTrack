import React from 'react';
import WeatherPageList from '../components/WeatherPageList/WeatherPageList';

interface WeatherListProps {
    cityList: string[];
    handleRemoveCity: (city: string) => void;
}

const WeatherList = ({cityList, handleRemoveCity}: WeatherListProps) => {
    return (
        <>
            <WeatherPageList cityList={cityList} onRemoveCity={handleRemoveCity}/>
        </>
    )
}

export default WeatherList

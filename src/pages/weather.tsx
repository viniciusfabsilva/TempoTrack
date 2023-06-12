import React from 'react';
import WeatherPage from '../components/WeatherPage/WeatherPage';

interface WeatherProps {
    handleAddCity: (city: string) => void;
}


const Weather = ({handleAddCity}: WeatherProps) => {
    return (
        <>
            <WeatherPage onAddCity={handleAddCity}/>
        </>
    )
}

export default Weather
// src/components/MyCitiesPage/MyCitiesPage.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';
import styles from './WeatherPageList.module.scss';

interface WeatherData {
    name: string;
    main: {
        temp: number;
    };
    weather: [
        {
            description: string;
            icon: string;
        }
    ];
}

interface WeatherPageListProps {
    cityList: string[];
    onRemoveCity: (city: string) => void;
}

const WeatherPageList: React.FC<WeatherPageListProps> = ({ cityList, onRemoveCity }) => {
    const [weatherDataList, setWeatherDataList] = useState<WeatherData[]>([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const dataList = await Promise.all(
                cityList.map((city) =>
                    axios.get('http://api.openweathermap.org/data/2.5/weather', {
                        params: {
                            q: city,
                            appid: process.env.VITE_OPEN_WHEATER_API_KEY,
                            units: 'metric',
                            lang: 'pt_br',
                        },
                    }).then(response => response.data)
                )
            );

            setWeatherDataList(dataList);
        };

        fetchWeatherData();
    }, [cityList]);

    console.log(cityList);

    return (
        <div className={styles.weatherPageList}>
            <h1>Minhas Cidades</h1>
            <div className={styles.cityList}>
                {weatherDataList.map((weatherData) => (
                    <WeatherCard
                        key={weatherData.name}
                        city={weatherData.name}
                        temperature={weatherData.main.temp}
                        description={weatherData.weather[0].description}
                        icon={weatherData.weather[0].icon}
                        onRemoveCity={() => onRemoveCity(weatherData.name)}
                    />
                ))}
            </div>
        </div>
    );
};

export default WeatherPageList;

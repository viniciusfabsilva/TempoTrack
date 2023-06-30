import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';
import WeatherForm from '../WeatherForm/WeatherForm';
import styles from './WeatherPage.module.scss';

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

interface WeatherPageProps {
  onAddCity: (city: string) => void;
}

const WeatherPage: React.FC<WeatherPageProps> = ({onAddCity}) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (city: string) => {
    const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: process.env.VITE_OPEN_WHEATER_API_KEY,
        units: 'metric',
        lang: 'pt_br',
      },
    });

    setWeatherData(response.data);
  };

  useEffect(() => {
    fetchWeatherData('Piquete');
  }, []);

  return (
    <div className={styles.weatherPage}>
      <h1>Previsão do tempo</h1>
      <WeatherForm onSearch={fetchWeatherData} />
      {weatherData ? (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          description={weatherData.weather[0].description}
          icon={weatherData.weather[0].icon}
          onAddCity={() => onAddCity(weatherData.name)}
        />
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default WeatherPage;

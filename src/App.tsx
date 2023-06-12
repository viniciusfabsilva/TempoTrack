// src/App.tsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WeatherNav from './components/WeatherNav/WeatherNav';
import Weather from './pages/weather';
import WeatherList from './pages/WeatherList';
import { useLocalStorage } from './hooks/useLocalStorage';

const App: React.FC = () => {
  const [cityList, setCityList] = useLocalStorage('cityList', []);

  const handleAddCity = (city: string) => {
    setCityList((prevCityList: string[]) => [...prevCityList, city]);
  };

  const handleRemoveCity = (city: string) => {
    setCityList((prevCityList: string[]) => prevCityList.filter(c => c !== city));
  };

  return (
    <BrowserRouter>
      <WeatherNav />
      <Routes>
        <Route path="/search" element={<Weather handleAddCity={handleAddCity}/>}/>
        <Route path="/list" element={<WeatherList cityList={cityList} handleRemoveCity={handleRemoveCity}/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

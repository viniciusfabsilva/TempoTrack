// src/components/weatherForm/WeatherForm.tsx
import styles from './WeatherForm.module.scss';
import React, { useState } from 'react';

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <form className={styles.weatherForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Digite o nome da cidade"
      />
      <button type="submit">Pesquisar</button>
    </form>
  );
};

export default WeatherForm;

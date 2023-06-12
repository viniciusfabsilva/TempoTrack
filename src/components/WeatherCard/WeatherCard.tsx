// src/components/WeatherCard/WeatherCard.tsx
import styles from './WeatherCard.module.scss';

interface WeatherCardProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  onAddCity?: () => void;
  onRemoveCity?: () => void;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ city, temperature, description, icon, onAddCity, onRemoveCity }) => {
  return (
    <div className={styles.weatherCard}>
      <h2>{city}</h2>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt={description} />
      <p>{description}</p>
      <p>{temperature}°C</p>
      {onAddCity && <button onClick={onAddCity}>Adicionar à lista</button>}
      {onRemoveCity && <button onClick={onRemoveCity}>Remover da lista</button>}
    </div>
  );
};

export default WeatherCard;
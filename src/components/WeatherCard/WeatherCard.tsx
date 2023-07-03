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

  const getIcon = () => {
    const getIconObj: {[key: string]: string} = {
      '01d': '/assets/sol.png',
      '01n': '/assets/lua-crescente.png',
      '04n': '/assets/nublado.png',
    }
    return getIconObj[icon] || '../assets/default.png'; 
  }
  
  return (
    <div className={styles.weatherCard}>
      <div className={styles.items}>
        <img src={getIcon()} alt={description} />
      </div>
      <div className={styles.CityDescription}>
        <h2>{city}</h2>
        <p>{description}</p>
        <p>{Math.round(temperature)}°C</p>
        {onAddCity && <button className={styles.addButton} onClick={onAddCity}>Adicionar</button>}
        {onRemoveCity && <button className={styles.removeButton} onClick={onRemoveCity}>Remover</button>}
      </div>

    </div>
  );
};

export default WeatherCard;
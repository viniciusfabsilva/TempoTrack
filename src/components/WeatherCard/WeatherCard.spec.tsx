import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

describe('WeatherCard', () => {
  it('renders the weather data', () => {
    render(
      <WeatherCard
        city="Piquete"
        temperature={22}
        description="Ensolarado"
        icon="01d"
      />
    );

    expect(screen.getByText('Piquete')).toBeInTheDocument();
    expect(screen.getByText('Ensolarado')).toBeInTheDocument();
    expect(screen.getByText('22°C')).toBeInTheDocument();
    expect(screen.getByAltText('Ensolarado')).toHaveAttribute('src', 'http://openweathermap.org/img/w/01d.png');
  });
});

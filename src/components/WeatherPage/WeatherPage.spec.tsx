import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import WeatherPage from './WeatherPage';

require('dotenv').config();
describe('WeatherPage', () => {
  it('fetches and displays weather data', async () => {
    const mock = new MockAdapter(axios);
    const mockData = {
      name: 'Piquete',
      main: {
        temp: 20,
      },
      weather: [
        {
          description: 'clear sky',
          icon: '01d',
        },
      ],
    };

    mock.onGet('http://api.openweathermap.org/data/2.5/weather').reply(200, mockData);

    render(<WeatherPage />);

    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    await waitFor(() => screen.getByText('Piquete'));

    expect(screen.getByText('Piquete')).toBeInTheDocument();
    expect(screen.getByText('clear sky')).toBeInTheDocument();
    expect(screen.getByText('20°C')).toBeInTheDocument();
  });
});

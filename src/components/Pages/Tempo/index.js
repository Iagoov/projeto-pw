import React, { useState } from 'react';
import './style.css';
import axios from 'axios';

function Tempo () {
  const [location, setLocation] = useState('');
  const [forecast, setForecast] = useState(null);

  const apiKey = '7f52d0170c594b0a94043329231106';
  const apiUrl = 'http://api.weatherapi.com/v1/forecast.json';
  const days = 3;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(apiUrl, {
        params: {
          key: apiKey,
          q: location,
          days: days,
          aqi: 'no',
          alerts: 'no'
        }
      });

      setForecast(response.data);
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '80vh' }}>
      <h1>Previsão do tempo</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Localidade:
          <input type="text" value={location} placeholder='Insira o zip code ou a cidade' onChange={(e) => setLocation(e.target.value)} required />
        </label>
        <button type="submit">Obter previsão</button>
      </form>
      {forecast && (
        <div>
          <h2>{forecast.location.name}</h2>
          <ul>
            {forecast.forecast.forecastday.map((forecastDay) => (
              <li key={forecastDay.date}>
                {forecastDay.date}: {forecastDay.day.condition.text}, {forecastDay.day.avgtemp_c}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tempo;
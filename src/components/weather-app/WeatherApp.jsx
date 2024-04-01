import React, { useState } from 'react';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1fa9ff4126d95b8db54f3897a208e91c`
      );
      const data = await response.json();

      if (data.cod && data.cod !== 200) {
        setError('Location not found');
        setWeather(null);
        console.log(data.cod);
      } else {
        setWeather(data);
        console.log(data);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
      setWeather(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setLocation(" ");
  };

  return (
    <div className="text-center mt-8 h-full flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location..."
          className="border border-gray-300 rounded-md px-2 py-1 mr-2 "
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Weather
        </button>
      </form>

      {error && <div className="text-red-500 font-bold">This {error} or incorrect spelling</div>}

      {weather && weather.name ? (
        <div>
          <div className='capitalize flex flex-col justify-center items-center'>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
            <h1 className="text-4xl font-semibold mb-4">{weather.name}</h1>
            <div className="text-2xl">{Math.round(weather.main.temp - 273.15)}°C</div>
            <div className="text-lg">{weather.weather[0].description}</div>
            <div className="text-lg">Humidity: {weather.main.humidity}%</div>
            <div className="text-lg">Sun rise: {weather.sys.sunrise}%</div>
            <div className="text-lg">sun set: {weather.sys.sunset}%</div>
          </div>
        </div>
      ) : (
        <div>No weather</div>
      )}
    </div>
  );
};

export default Weather;

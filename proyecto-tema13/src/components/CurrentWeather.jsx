const CurrentWeather = ({ weather }) => {
  return (
    <div className="flex justify-between items-center mt-4 p-4 bg-white rounded-lg shadow">
      <div className="text-center">
        <span className="text-4xl font-bold">{weather.temp}°</span>
        <span className="text-gray-500">C</span>
      </div>
      <div>
        <p>
          Precipitaciones: <span className="font-semibold">0%</span>
        </p>
        <p>
          Humedad: <span className="font-semibold">{weather.humidity}%</span>
        </p>
        <p>
          Viento: <span className="font-semibold">{weather.wind}m/s</span>
        </p>
      </div>
      <div className="text-right">
        <p className="font-bold">Tiempo</p>
        <p>{weather.condition}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;

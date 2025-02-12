const forecastData = [
    { day: "mié", temp: "14° - 1°", icon: "☀️" },
    { day: "jue", temp: "13° - 1°", icon: "☀️" },
    { day: "vie", temp: "8° - 2°", icon: "🌥️" },
    { day: "sáb", temp: "12° - 0°", icon: "🌦️" },
    { day: "dom", temp: "13° - 4°", icon: "🌧️" },
    { day: "lun", temp: "13° - 4°", icon: "🌧️" },
    { day: "mar", temp: "13° - 3°", icon: "☁️" },
  ];
  
  const WeatherForecast = ({ selectedDay, setSelectedDay }) => {
    return (
      <div className="mt-4 grid grid-cols-7 gap-2 text-center">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg shadow cursor-pointer ${
              selectedDay === day.day ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() => setSelectedDay(day.day)}
          >
            <p className="font-semibold">{day.day}</p>
            <p className="text-lg">{day.icon}</p>
            <p className="text-sm">{day.temp}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default WeatherForecast;
  
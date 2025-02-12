import { useState } from "react";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import WeatherGraph from "./WeatherGraph";
import WeatherForecast from "./WeatherForecast";

// Datos del clima para cada día
const weatherData = {
  mié: { temp: 14, condition: "Soleado", humidity: 39, wind: 3.1 },
  jue: { temp: 13, condition: "Soleado", humidity: 42, wind: 2.8 },
  vie: { temp: 8, condition: "Parcialmente Nublado", humidity: 50, wind: 4.2 },
  sáb: { temp: 12, condition: "Lluvia Ligera", humidity: 60, wind: 3.8 },
  dom: { temp: 13, condition: "Lluvia", humidity: 70, wind: 4.5 },
  lun: { temp: 13, condition: "Lluvia", humidity: 68, wind: 4.0 },
  mar: { temp: 13, condition: "Nublado", humidity: 55, wind: 3.5 },
};

const WeatherApp = () => {
  // Estado para el día seleccionado
  const [selectedDay, setSelectedDay] = useState("mié");

  // Estado para la información del clima actual
  const [currentWeather, setCurrentWeather] = useState(weatherData["mié"]);

  // Manejar el cambio de día y actualizar el clima
  const handleDayChange = (day) => {
    setSelectedDay(day);
    setCurrentWeather(weatherData[day]); // Actualiza el clima
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-black-100 rounded-lg shadow-md">
      <Header />
      <CurrentWeather weather={currentWeather} /> {/* Pasa el clima actual */}
      <WeatherGraph selectedDay={selectedDay} />
      <WeatherForecast selectedDay={selectedDay} setSelectedDay={handleDayChange} />
    </div>
  );
};

export default WeatherApp;

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const temperatureData = {
    mié: [
      { name: "14:00", temp: 14 },
      { name: "15:00", temp: 13 },
      { name: "16:00", temp: 12 },
      { name: "17:00", temp: 11 },
      { name: "18:00", temp: 10 },
    ],
    jue: [
      { name: "14:00", temp: 13 },
      { name: "15:00", temp: 12 },
      { name: "16:00", temp: 11 },
      { name: "17:00", temp: 10 },
      { name: "18:00", temp: 9 },
    ],
    vie: [
      { name: "14:00", temp: 8 },
      { name: "15:00", temp: 7 },
      { name: "16:00", temp: 6 },
      { name: "17:00", temp: 5 },
      { name: "18:00", temp: 4 },
    ],
    sáb: [
      { name: "14:00", temp: 12 },
      { name: "15:00", temp: 11 },
      { name: "16:00", temp: 10 },
      { name: "17:00", temp: 9 },
      { name: "18:00", temp: 8 },
    ],
    dom: [
      { name: "14:00", temp: 13 },
      { name: "15:00", temp: 12 },
      { name: "16:00", temp: 11 },
      { name: "17:00", temp: 10 },
      { name: "18:00", temp: 9 },
    ],
    lun: [
      { name: "14:00", temp: 13 },
      { name: "15:00", temp: 12 },
      { name: "16:00", temp: 11 },
      { name: "17:00", temp: 10 },
      { name: "18:00", temp: 9 },
    ],
    mar: [
      { name: "14:00", temp: 13 },
      { name: "15:00", temp: 12 },
      { name: "16:00", temp: 11 },
      { name: "17:00", temp: 10 },
      { name: "18:00", temp: 9 },
    ],
  };
  
  const WeatherGraph = ({ selectedDay }) => {
    const data = temperatureData[selectedDay] || [];
  
    return (
      <div className="mt-4 p-4 bg-white rounded-lg shadow">
        <p className="text-sm text-gray-600 mb-2">Temperatura - {selectedDay}</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 20]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="#ff7300"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default WeatherGraph;
  
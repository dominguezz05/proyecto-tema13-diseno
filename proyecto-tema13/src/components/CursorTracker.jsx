import { useState, useEffect } from "react";

const CursorTracker = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen bg-gray-100">
      <div
        className="absolute bg-red-900 text-yellow text-sm px-2 py-1 rounded-lg pointer-events-none"
        style={{
          left: `${coordinates.x + 10}px`,
          top: `${coordinates.y - 30}px`,
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
        }}
      >
        X: {coordinates.x}, Y: {coordinates.y}
      </div>
    </div>
  );
};

export default CursorTracker;

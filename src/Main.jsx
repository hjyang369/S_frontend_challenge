import { useEffect, useState } from "react";
import "./main.css";

export default function Main() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : `${time}`;
  };

  const hours = formatTime(Math.floor(totalSeconds / 3600));
  const minutes = formatTime(Math.floor((totalSeconds % 3600) / 60));
  const seconds = formatTime(totalSeconds % 60);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };
  const handleStop = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setTotalSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="container">
      <div className="time">
        {hours} : {minutes} : {seconds}
      </div>
      <div className="buttons">
        <button className="button" onClick={handleStart}>
          start
        </button>
        <button className="button" onClick={handleStop}>
          stop
        </button>
        <button className="button" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
}

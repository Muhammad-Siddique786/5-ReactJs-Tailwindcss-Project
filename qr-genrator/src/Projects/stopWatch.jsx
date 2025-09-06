import React, { useState, useRef, useEffect } from 'react';
import { CircleStop, RotateCcw, Play } from 'lucide-react';
import { Button } from 'antd';

const StopWatch = () => {
  const [time, setTime] = useState(0);            // milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // start / stop logic
  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 100);
      setIsRunning(true);
    }
  };

  // reset logic
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // format ms to hh:mm:ss
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-[90vh] flex flex-col items-center bg-[#fafaf9]">
      <h1 className="text-3xl font-bold mt-6 mb-5">Project No.4</h1>
      <h1 className="text-3xl font-bold mt-6 mb-5 text-gray-800">Stop Watch</h1>

      <div className="bg-[#64748b] w-full max-w-sm min-h-[400px] flex flex-col justify-center items-center rounded-lg shadow-lg relative">
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-6xl font-mono text-white">{formatTime(time)}</span>

          <div className="mt-8 space-x-4">
            <Button
              onClick={handleStartStop}
              icon={
                isRunning ? <CircleStop size={18} /> : <Play size={18} />
              }
              className={`px-4 py-2 rounded-md text-white transition ${
                isRunning
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isRunning ? 'Stop' : 'Start'}
            </Button>

            <Button
              onClick={handleReset}
              icon={<RotateCcw size={18} />}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;

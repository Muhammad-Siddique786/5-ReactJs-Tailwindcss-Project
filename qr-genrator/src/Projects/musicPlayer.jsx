import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, Menu, SkipBack, Play, StepForward, Pause } from 'lucide-react';
import img from '../assets/468-thumbnail.png';
import audio from '../assets/naat.mp3';

const MusicPlayer = ({
  title = "Naat",
  artist = "Atif Aslam",
  image = img,
  src = audio
}) => {
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // update progress bar every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const percent =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent || 0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // toggle play / pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // handle manual seek
  const handleSeek = (e) => {
    if (audioRef.current) {
      const time = (audioRef.current.duration / 100) * e.target.value;
      audioRef.current.currentTime = time;
      setProgress(e.target.value);
    }
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700">
      <h1 className="text-white text-3xl font-bold mt-6 mb-5">Project No.3</h1>

      <div className="bg-pink-200 w-full max-w-sm min-h-[400px] flex flex-col items-center rounded-lg shadow-lg relative">
        {/* Navigation */}
        <nav className="flex justify-between items-center w-full px-4 py-3">
          <ChevronLeft className="bg-white text-gray-700 cursor-pointer rounded-full p-1" size={34} />
          <Menu className="bg-white text-gray-700 cursor-pointer rounded-full p-1" size={34} />
        </nav>

        {/* Content */}
        <div className="p-6 text-center space-y-4 w-full">
          <img
            src={image}
            alt="thumbnail"
            className="rounded-full border-8 border-white shadow-md mx-auto w-40 h-40 object-cover"
          />
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-gray-700">{artist}</p>

          <audio ref={audioRef} className="hidden">
            <source src={src} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* progress slider */}
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full h-[6px] cursor-pointer bg-pink-700 rounded-2xl accent-pink-600"
          />

          {/* controls */}
          <div className="controls flex justify-center gap-8">
            <SkipBack className="bg-white text-pink-600 cursor-pointer rounded-full p-1" size={34} />

            {/* Conditional Play / Pause */}
            {isPlaying ? (
              <Pause
                onClick={togglePlay}
                className="transform scale-[1.5] cursor-pointer rounded-full p-1 bg-pink-600 text-white"
                size={34}
              />
            ) : (
              <Play
                onClick={togglePlay}
                className="transform scale-[1.5] cursor-pointer rounded-full p-1 bg-pink-600 text-white"
                size={34}
              />
            )}

            <StepForward className="bg-white text-pink-600 cursor-pointer rounded-full p-1" size={34} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

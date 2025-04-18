import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="app-container" onClick={handleClick}>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        preload="metadata"
        poster="/IMG001.jpeg"// optional: put this in /public too
        style={{ cursor: "pointer" }}
      >
        <source src="/0418.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
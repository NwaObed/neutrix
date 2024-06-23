import React, { useEffect, useState } from 'react';

const VideoComponent = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/videos');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Videos</h1>
      {videos.map(video => (
        <div key={video.id.videoId}>
          <h2>{video.snippet.title}</h2>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;
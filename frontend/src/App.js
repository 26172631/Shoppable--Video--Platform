import React, { useState, useEffect } from 'react';
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './App.css';
import VideoPlayer from './Components/VideoPlayer';
import Header from './Components/Header';

const App = () => {
  let videoUrl = "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"
  const [videoData, setVideoData] = useState(null);

  //This useEffect is used to fetch video metadata from database
  useEffect(() => {
    axios.get("http://localhost:4000/video/metadata").then((res)=>{
      if(res.data.success){
        setVideoData(res.data.metadata);
      }
    })
  }, []);
  if (!videoData) return <div>Loading...</div>;
  return (
    <div className="App">
      <Header/>
      <VideoPlayer
        videoUrl={videoUrl}
        videoData={videoData}
      />
    </div>
  );
};

export default App;

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import ProductModel from "./ProductModel";
import axios from "axios";

const VideoPlayer = ({ videoUrl, videoData }) => {
  // Using useRef to get a reference to the video element
  const videoRef = useRef(null);
  // Using useState to manage the state of hotspots
  const [hotspots, sethotspots] = useState([]);
  // Using useState to manage the state of the product details
  const [product, setProduct] = useState({});
   // Using useState to manage the state of the modal (open/close)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect to handle video URL changes and initialize HLS.js or fallback to native support
  useEffect(() => {
    if (!videoUrl || typeof videoUrl !== "string") {
      console.error("Invalid video URL");
      return;
    }
    const trimmedVideoUrl = videoUrl.trim();
    const videoElement = videoRef.current;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(trimmedVideoUrl);
      hls.attachMedia(videoElement);
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error("HLS.js Error:", data);
      });
      return () => {
        hls.destroy();
      };
    } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
      videoElement.src = trimmedVideoUrl;
    } else {
      console.error("HLS is not supported");
    }
  }, [videoUrl]);

  // useEffect to handle time updates on the video and display hotspots at the correct times
  useEffect(() => {
    const videoElement = videoRef.current;
    const timeUpdate = () => {
      const currentTime = Math.floor(videoElement.currentTime)
      const newHotspots = videoData.filter((hotspot) => Math.floor(hotspot.timestamp) === currentTime)
      sethotspots(newHotspots);
    }
    videoElement.addEventListener("timeupdate", timeUpdate)
    return () => {
      videoElement.removeEventListener("timeupdate", timeUpdate)
    };
  }, [videoData]);

   // Function to handle clicking on a hotspot, pausing the video and fetching product data
  const hotspotClick = async (productId) => {
    const videoElement = videoRef.current;
    videoElement.pause();
    axios.get(`http://localhost:4000/product/products/${productId._id}`).then((res)=>{
      if(res.data.success){
        setProduct(res.data.product);
        setIsModalOpen(true);
      }
    })
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <div style={{ position: "relative" }}>
            <video
              ref={videoRef}
              controls
              preload="none"
              className="video-box"
            />
            {hotspots.map((h) => (
              <div
                key={h.productId}
                style={{
                  position: "absolute",
                  top: `${h.position.y}px`,
                  left: `${h.position.x}px`,
                  cursor: "pointer",
                  zIndex: 1,
                }}
                onClick={() => hotspotClick(h.productId)}
                >
                <div className="video-dot">
                  <p className="mb-0">●</p>
                </div>
              </div>
            ))}
            <ProductModel
              product={product}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoPlayer;

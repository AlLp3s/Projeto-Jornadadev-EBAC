import React, { useEffect, useState } from "react";
import "./App.css";
import VidID from "./Pages/VidID";
import db from "./Config/Firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

  let maxHeight;
    if (window.innerHeight <= 800){
      maxHeight = window.innerHeight
    }

  const [Video, setVideos] = useState([]);

  async function getVideos() {
    const VideosCollection = collection(db, "VidID");
    const VideosSnapshot = await getDocs(VideosCollection);
    const VideosList = VideosSnapshot.docs.map((doc) => doc.data());
    setVideos(VideosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style = {{ maxHeight:  maxHeight + "px" }}>
      <div className="app_videos">
        {Video.map((viditem) => {
          return (
            <VidID
              Likes={viditem.Likes}
              Messages={viditem.Messages}
              Shares={viditem.Shares}
              Name={viditem.Name}
              Description={viditem.Description}
              Music={viditem.Music}
              Url={viditem.Url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";
import "./VidID.css";
import VidIDFooter from "./Components/footer/VidIDFooter";
import VidSidebar from "./Components/Sidebar/VidSidebar";

function VidID({ Likes, Messages, Shares, Name, Description, Music, Url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="VidID">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={Url}
      ></video>
      <VidSidebar Likes={Likes} Messages={Messages} Shares={Shares} />
      <VidIDFooter Name={Name} Description={Description} Music={Music} />
    </div>
  );
}

export default VidID;

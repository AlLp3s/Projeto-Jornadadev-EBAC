import React, { useState } from "react";
import "./VidSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import { Share } from "@mui/icons-material";

function VidSidebar({ Likes, Messages, Shares }) {
  const [liked, setliked] = useState(false);

  function handdleLike() {
    setliked(!liked);
  }

  return (
    <div className="vidsidebar">
      <div className="likeicon" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{liked ? Likes + 1 : Likes}</p>
      </div>
      <div className="commention">
        <ChatIcon fontSize="large" />
        <p>{Messages}</p>
      </div>
      <div className="shareicon">
        <ShareIcon fontSize="large" />
        <p>{Shares}</p>
      </div>
    </div>
  );
}

export default VidSidebar;

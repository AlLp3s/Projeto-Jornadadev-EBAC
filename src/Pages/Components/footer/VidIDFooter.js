import React from "react";
import "./VidIDFooter.css";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function VidIDFooter({ Name, Description, Music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3> @{Name} </h3>
        <p>{Description}</p>
        <div className="music">
          <LibraryMusicIcon className="Footer_icon" />
          <div className="Footer_musicdesc">
            <p>{Music}</p>
          </div>
        </div>
      </div>
      <img
        className="img_vinil"
        alt="imagem de um disco vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VidIDFooter;

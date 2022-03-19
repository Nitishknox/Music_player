import React from "react";
import { useDataLayervalue } from "../../../DataLayer";
import "./body.css";
import Header from "./header/header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from './songrow'
export default function Body({ spotify }) {
  const [{ currentplaylist }, dispatch] = useDataLayervalue();
 // console.log("current", currentplaylist);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body_info">
        <img src={currentplaylist?.images[0].url} alt="" />
        <div className="body_textinfo">
          <strong>PLAYLIST</strong>
          <h2>{currentplaylist?.name}</h2>

          {/* <p>{currentplaylist?.description}</p> */}
        </div>
      </div>

      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" fontSize="large" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
       
         
         {currentplaylist?.tracks.items.map((item)=>
          <SongRow track={item.track}/>
        )} 
      
      </div>
    </div>
  );
}

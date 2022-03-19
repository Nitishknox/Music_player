import React from "react";
import "./footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";

import {Grid, Slider} from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer_album_logo" src="https://i.scdn.co/image/ab67616d0000b2730735b9b1d06b65bbd8814825" alt=""></img>
        <div className="footer_song_info">
        <h4>光るなら</h4>
        <p>Goose house</p>
        </div>


      </div>


      <div className="footer__middle">
        <RepeatIcon className="footer_icon_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_icon" />
        <ShuffleIcon className="footer_icon_green" />
      </div>


      <div className="footer__right">
        <Grid container spacing={3}>
          <Grid item >
            <PlaylistPlayIcon/>
          </Grid>
          <Grid item>
            <VolumeDownIcon/>
          </Grid>
         
          <Grid item xs>
            <Slider />
           
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

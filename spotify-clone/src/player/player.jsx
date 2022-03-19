import React from 'react'
import  "./player.css";
import Body from './player-comp/body/body'
import Footer from './player-comp/footer/footer';
import Sidebar
 from './player-comp/sidebar/sidebar';
export default function Player(spotify) {
  return (
    <div className='player'>
      <div className="player_body">
      <Sidebar />
      <Body spotify={spotify}/>
      </div>
      <Footer />
    </div>
  )
}

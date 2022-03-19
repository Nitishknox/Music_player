import React, {useEffect,useState} from 'react'
import Login from './login-page/Login';
import Player from './player/player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayervalue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {

 // const[token,settoken]= useState();
  const [{user , token,playlists},dispatch]=useDataLayervalue();


  useEffect(()=>{
        const hash = getTokenFromUrl();
        window.location.hash=" ";
        const _token = hash.access_token;
        if(_token){
          dispatch({
            type:'SET_TOKEN',
            token:_token,
          });


          //settoken(_token);p

          spotify.setAccessToken(_token);
          spotify.getMe().then((user)=>{
            
            dispatch({
              type:"SET_USER",
              user: user,
            });

          });

          spotify.getUserPlaylists().then((playlists)=>{
            dispatch({
              type:"USER_PLAYLISTS",
              playlists:playlists,
            })
          })
          spotify.getPlaylist('37i9dQZF1EQoowv2cDraCW').then((res)=>{
            dispatch({
              type:'SET_PLAYLIST',
              currentplaylist: res,
            })
          })
         

        }

      },[]);
      
    
      
  return (
    <div className='app'>

    {token?<Player spotify={spotify}/>:<Login/>}
 

    </div>
  );
}

export default App;

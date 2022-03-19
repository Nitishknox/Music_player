import React from 'react'
import './sidebar.css'

import SidebarOptions from './sidebarOptions'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooks from '@mui/icons-material/LibraryBooks';

import { useDataLayervalue } from '../../../DataLayer';


export default function Sidebar() {
    const [{playlists}, dispatch]= useDataLayervalue();

  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/02/24/16141604839099.png" alt="" />
     
      <SidebarOptions Icon={ <HomeIcon/>} title= 'Home'  />
      <SidebarOptions Icon={<SearchIcon/>} title= 'Search'/>
      <SidebarOptions Icon={<LibraryBooks/>} title= 'Your Library'/>
      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist)=>(
        
        <SidebarOptions title={playlist.name} />
      ))}
  
    </div>
  )
}
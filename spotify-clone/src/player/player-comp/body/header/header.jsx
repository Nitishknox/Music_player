import React from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayervalue } from '../../../../DataLayer';


export default function Header({spotify}) {
    //
    const [{user},dispatch]= useDataLayervalue();
   //console.log(user);
  return (
    <div className='header'>
        <div className="header_left">
            <SearchIcon/>
            <input
            placeholder='Search for artist,Songs,Podcasts'
            type='text'
            />
        </div>
        <div className="header_right">
            <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

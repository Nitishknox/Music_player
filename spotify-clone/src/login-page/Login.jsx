import React from 'react'
import './login-comp/login.css'
import  {loginUrl} from '../spotify'
function Login() {
  return (
    <div className='login'>

    <img src='https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png'></img>
    <a href={loginUrl}>LOGIN </a>
    </div>
  )
}

export default Login
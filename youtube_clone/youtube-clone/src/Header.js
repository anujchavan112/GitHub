import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (  
        <div className="header">
            <div className="header_left">
            <MenuIcon />
            <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/512px-YouTube_Logo.svg.png" alt="youtube-logo" />
           
                </div>
           <div className="header_input">
           <input type="text"/>
            <SearchIcon className="header_inputbutton" />
               </div>
           <div className="header_right">

           <VideoCallIcon />
          <AppsIcon />
          <NotificationsIcon />
          <AccountCircleIcon 
          alt="dummy"
          src="https://lh3.googleusercontent.com/ogw/ADGmqu_ZY3fjf7ymLcXiQmNV8Y4YeEEE3KJNf4FOysUG=s32-c-mo"/>
   
               </div>
            

              </div>
    )
}

export default Header

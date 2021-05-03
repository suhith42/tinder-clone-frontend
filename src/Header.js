import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from './assets/tinder-logo.png';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header"> 

            <IconButton> {/* makes the icon clickable with ripple effect */}
                <PersonIcon fontSize="large" className="header_icon"/>
            </IconButton>
            <img className="header_logo" src={TinderLogo}>
            </img>
            
            <IconButton>
                <ForumIcon className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header

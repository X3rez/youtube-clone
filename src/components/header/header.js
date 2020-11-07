import React,{useState} from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';

//----------My Icons-----------
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import logo from './images/logo-youtube.png';

function Header ({img,show,setShow}){
    const [searchValue, setSearchValue] = useState("")

    const Searching = e => setSearchValue(e.target.value)
    const hadlerShow = () => setShow(!show);

    return (
        <>
            <nav className='navigation'>
                <div className='navigation__logo-container'>
                    <IconButton onClick={hadlerShow}> <MenuIcon /> </IconButton>
                    <img className='navigation__logo' src={logo} alt="logo"/>
                </div>

                <div className='navigation__input-container'>
                    <input onChange={Searching} value={searchValue} className='navigation__input' type="text" placeholder='Search'/>
                
                    <NavLink to={`/searh/${searchValue}`} title="Search" className='navigation__icon-input'>
                        <SearchIcon />
                    </NavLink>
                </div>

                <div className='navigation__icons-container'>
                    <IconButton> <VideoCallIcon/> </IconButton>
                    <IconButton><AppsIcon /> </IconButton>
                    <IconButton> <NotificationsIcon/> </IconButton>
                    <Avatar className="navigation__avatar" alt="Profile img" src={img} />
                </div>
            </nav>
            <div className="navigation__margin"></div>
    </>
    )
}

export default Header;
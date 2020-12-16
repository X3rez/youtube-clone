import React from 'react';
import './sidebar.css'
            /* these are the icons */
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'; 
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';               
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
            /* here end the icons */

import {NavLink} from 'react-router-dom';
import ima from '../../profile.jpg';

function SidebarItem({to, text, icon, image, justWords}){
   return (
   <>
      {justWords 
         ? <h5 className="sidebar__text">{text}</h5>
         : <NavLink to={to}
               className="sidebar__link" 
               exact
               activeClassName="actived"> 
               {icon ? icon : null} 
               {image ? <img src={image}
               alt="profile"
               className="sidebar__image-subcription"/>  : null} 
               <h5 className="sidebar__text">{text}</h5> 
            </NavLink>}
   </>
)
}


function SideBar ({show}) {
    return (
       <>      
         <aside className={show ? "sidebar show" : "sidebar"}>

            <SidebarItem to="/youtube-clone" text="Home" icon={<HomeIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/trending" text="Trending" icon={<WhatshotIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/subscriptions" text="Subscriptions" icon={<SubscriptionsIcon className="sidebar__icon"/>}/>
               
               <hr className="sidebar__rowLine"/>
            
            <SidebarItem to="/library" text="Library" icon={<VideoLibraryIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/history" text="History" icon={<HistoryIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/yourvideos" text="Your Videos" icon={<OndemandVideoSharpIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/watchlater" text="Watch Later" icon={<WatchLaterSharpIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/likedvideos" text="Library" icon={<ThumbUpAltSharpIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/showmore" text="Show More" icon={<ExpandMoreIcon className="sidebar__icon"/>}/>

               <hr className="sidebar__rowLine"/>
               <SidebarItem justWords text="SUBSCRIPTIONS"/>

            <SidebarItem to="/ChilledCow" text="ChilledCow" image={ima}/>
            <SidebarItem to="/DeepLegacy" text="Deep Legacy" image={ima}/>
            <SidebarItem to="/ChillhopMusic" text="Chillhop Music" image={ima}/>
            <SidebarItem to="/VEGETTA777" text="VEGETTA777" image={ima}/>
            <SidebarItem to="/Portilio" text="Portilio" image={ima}/>
            <SidebarItem to="/CleverProgramer" text="Clever Programer" image={ima}/>
            <SidebarItem to="/jonmircha" text="jonmircha" image={ima}/>
            <SidebarItem to="/showmoreChanels" text="Show 692 More" icon={<ExpandMoreIcon className="sidebar__icon"/>}/>
               
               <hr className="sidebar__rowLine"/>
               <SidebarItem to="/" text="MORE FROM YOUTUBE"/>

            <SidebarItem to="/premium" text="YouTube Premium" icon={<YouTubeIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/gaming" text="Gaming" icon={<SportsEsportsIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/live" text="Live" icon={<FiberManualRecordIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/learning" text="Learning" icon={<EmojiObjectsIcon className="sidebar__icon"/>}/>
               
               <hr className="sidebar__rowLine"/>
            
            <SidebarItem to="/settings" text="Settings" icon={<SettingsIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/report" text="Report History" icon={<FlagIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/help" text="Help" icon={<HelpIcon className="sidebar__icon"/>}/>
            <SidebarItem to="/feedback" text="Send feedback" icon={<FeedbackIcon className="sidebar__icon"/>}/>
   
               <hr className="sidebar__rowLine"/>

         </aside>
       </>
    )
}


export default SideBar;
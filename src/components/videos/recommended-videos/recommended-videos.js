import React from 'react';
import './recommended-videos.css';
import profileImg from'../../../profile.jpg'
import Video from '../video/video';
import adImg from './ad.jpg';

function RecommendedVideos (){
    return(
        <section className="recommended-vid">
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9M" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={adImg} duration="20:10" title="Best Plays Of Los Angeles Lakers 2020" userName="NBA" views="500M" dateTime="4 months"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={adImg} userImage={profileImg} duration="30:01" title="Anthony Davis Playoff 2020" userName="ThePlayer" verified views="100M" dateTime="2 Days"/>
            <Video videoImage={adImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={adImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
            <Video videoImage={profileImg} userImage={profileImg} duration="12:20" title="MI REGALO DE CUMPLE 2020" userName="Chris" verified views="7.9m" dateTime="8 year"/>
        </section>
    )
}


export default RecommendedVideos;
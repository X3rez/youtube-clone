import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './video.css'

function Video ({userImage,videoImage,duration,title,userName,verified,views,dateTime}) {
    return(
        <article className="video">
            
            <img className="video__img" src={videoImage} alt='video'/>
            <p className="video__duration">{duration}</p>

            <div className="video__avatar-title-container">
                <Avatar src={userImage} alt={userName} title={userName}/>
                <h3 className="video__title" title={title}>{title}</h3>
            </div>

            <div className="video__user-name-verified-container">
                <h4 className="video__user-name">{userName}</h4>
                {verified ? <CheckCircleIcon fontSize="small"/> : null}
            </div>
            
            <h4 className="video__views-date">{views} views • {dateTime} ago</h4>
            
        </article>
    )
}


export default Video;
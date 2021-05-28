import './InfoBar.css'
import  closeIcon from '../../icons/closeIcon.png'
import  onlineIcon from '../../icons/onlineIcon.png'
import React from 'react'
const InfoBar = ({room}) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
             <img className="onlineIcon" src={onlineIcon} alt="userisonlineimage"/>
             <h3>
                 {room}
             </h3>
            </div>
            <div className="rightInnerContainer">
             <a href="/"> <img src={closeIcon} alt="closethechatimage"/></a>
            </div>
            
        </div>
    )
}
export default InfoBar;

import React from 'react';
import '../css/ProjectRow.css';
import { ProjectData } from './ProjectData';
import Avatar from '@material-ui/core/Avatar';

function VideoRow() {
    return (

        <div>
            {ProjectData.map((item, index) => {
                return(
                    <div className="projectRow" key={index}>

                        <a href = {item.link} target="_blank" rel="noopener noreferrer">
                            <div className="projectRow__video">
                                <img src={item.backImg} alt={item.videoText}/>
                                <div className="projectRow__imgText">{item.videoText}</div>
                            </div>
                        </a>

                        <div className="projectRow__text">
                            <a href={item.link} target="_blank" rel="noopener noreferrer"><h3>{item.title}</h3></a>
                            <p className="projectRow__headline">{item.views} views • {item.timestamp}</p>

                            <div className="projectRow__channel">
                                <Avatar className="projectRow__avatar" src={item.avatar} alt={item.channel} />
                                <p className="projectRow__channelName">{item.channel}</p>
                            </div>

                            <p className="projectRow__description">{item.description}</p><br />
                            <p className="projectRow__description">Skills: <b>{item.skill}</b></p>
                        </div>

                    </div>
                );
            })}
        </div>
        
    )
}

export default VideoRow;

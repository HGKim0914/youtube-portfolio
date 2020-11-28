import React from 'react';
import { Avatar } from '@material-ui/core';
import '../css/videoCard.css';
import { VideoCardTutorialData, VideoCardIntroduceData } from './VideoCardData';

function VideoCard() {
    return (
        <div className="videoCard__wrapper">

            {VideoCardTutorialData.map((item, index) => {
                return(
                    <div className="videoCard" key={index}>

                        <img className="videoCard__thumbnailStatic" src={item.thumbnailStatic} alt={item.channel} />
                        <img className="videoCard__thumbnailActive" src={item.thumbnailActive} alt={item.channel} />
                        <div className="videoCard__info">
                            <Avatar className="videoCard__avatar" src={item.channelImage} alt={item.channel}  />
                            <div className="videoCard__text">
                                <h4>{item.title}</h4>
                                <p>{item.channel}</p>
                                <p>{item.views} • {item.timestamp}</p>
                            </div>
                        </div>

                    </div>
                );
            })}

            {VideoCardIntroduceData.map((item, index) => {
                return(
                    <div className="videoCard" key={index}>

                        <img className="videoCard__thumbnail" src={item.thumbnail} alt={item.channel} />
                        <div className="videoCard__info">
                            <Avatar className="videoCard__avatar" src={item.channelImage} alt={item.channel}  />
                            <div className="videoCard__text">
                                <h4>{item.title}</h4>
                                <p>{item.channel}</p>
                                <p>{item.views} • {item.timestamp}</p>
                            </div>
                        </div>

                    </div>
                );
            })}
            
        </div>

        
    )
}

export default VideoCard;

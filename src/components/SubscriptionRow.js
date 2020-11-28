import React from "react";
import '../css/SubscriptionRow.css';
import { SubscriptionData } from './SubscriptionData';
import { Avatar } from "@material-ui/core";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

//importing imgs
import avatarMe from "../img/avatarMe.png";
import ms from "../img/ms.png";
import amazon from "../img/amazon.png";
import google from "../img/google.png";

function SubscriptionRow() {

    //add hidden className to the showMoreBtn and showLessBtn
    const showMoreContent = () =>{
        document.querySelector(".sidebarRow.showMore").classList.toggle("hidden");
        document.querySelector(".subscriptionRow__showMoreContent").classList.toggle("hidden");
    }

    return (
        <div>
            <p className="subscriptionRow__topText">SUBSCRIPTIONS</p>

            <div className="subscriptionRow">
                <Avatar src={avatarMe} alt="" className="subscriptionRow__avatar"></Avatar>
                <p className="subscriptionRow__title">DEV - HG Kim</p>
            </div>
            <a href="https://www.youtube.com/user/Microsoft" target="_blank" rel="noopener noreferrer">
                <div className="subscriptionRow">
                    <Avatar src={ms} alt="" className="subscriptionRow__avatar"></Avatar>
                    <p className="subscriptionRow__title">Microsoft</p>
                </div>
            </a>
            <a href="https://www.youtube.com/user/amazon" target="_blank" rel="noopener noreferrer">
                <div className="subscriptionRow">
                    <Avatar src={amazon} alt="" className="subscriptionRow__avatar"></Avatar>
                    <p className="subscriptionRow__title">amazon</p>
                </div>
            </a>
            <a href="https://www.youtube.com/user/Google" target="_blank" rel="noopener noreferrer">
                <div className="subscriptionRow">
                    <Avatar src={google} alt="" className="subscriptionRow__avatar"></Avatar>
                    <p className="subscriptionRow__title">Google</p>
                </div>
            </a>
            <div className="sidebarRow showMore" onClick={showMoreContent}>
                <span className="sidebarRow__icon"><ExpandMoreOutlinedIcon></ExpandMoreOutlinedIcon></span>
                <h2 className="sidebarRow__title">Show more</h2>
            </div>
            <span className="subscriptionRow__showMoreContent hidden">
                {SubscriptionData.map((item, index) => {
                    return (
                        <a href={item.link} target="_blank" key={index} rel="noopener noreferrer">
                            <div className="subscriptionRow" data-id={index}>
                                <Avatar src={item.logo} alt={item.channel} className="subscriptionRow__avatar"></Avatar>
                                <p className="subscriptionRow__title">{item.channel}</p>
                            </div>
                        </a>
                    );
                })}
                <div className="sidebarRow" onClick={showMoreContent}>
                    <span className="sidebarRow__icon"><ExpandLessIcon></ExpandLessIcon></span>
                    <h2 className="sidebarRow__title">Show less</h2>
                </div>
            </span>
        </div>
    );

}
  
export default SubscriptionRow;
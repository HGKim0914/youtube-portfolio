import React from 'react';
import '../css/aboutPage.css';
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

//importing Imgs
import passion from "../img/passion.png";
import puntuality from "../img/punctuality.png";
import team from "../img/team.png";
import mypic from "../img/mypic2.png";

function AboutPage() {
    return (
        <div className="aboutPage">

            <div className="aboutPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light"
                channel="DEV - HG Kim"
                verified
                subs="100K"
                numOfVideos={82}
                description="Hello World! This is Honggeun Kim! Junior Developer."
            />

            <hr />
            
            <h3>About Kim</h3>
            <div className="aboutPage__peronality">
                {/* <div> */}
                    <div md="4" className="aboutPage__imgContainer">
                        <img alt="Passion" src={passion}></img><br />
                        <h3>Passionate</h3>
                        <p>Passion for Coding</p>
                    </div>

                    <div md="4" className="aboutPage__imgContainer">
                        <img alt="Punctuality" src={puntuality}></img><br />
                        <h3>Prioritized</h3>
                        <p>Time Management</p>
                    </div>

                    <div md="4" className="aboutPage__imgContainer">
                        <img alt="Teamwork" src={team}></img><br />
                        <h3>Teamworker</h3>
                        <p>Cooperation with Teammates</p>
                    </div>
                {/* </div> */}
            </div>

            <div className="aboutPage__me">

                    <div className="aboutPage__myPic">
                        <img alt="Pic of Me!" src={mypic}></img>
                    </div>

                    <div className="aboutPage__desc">
                        <p className="aboutPage__firstLetter">Hi there, my name is Honggeun Kim and I love to challenge myself with coding.</p>
                        <p>As a junior developer, I love to solve real world problems through web development.</p>
                        <p>To become a better developer, I am actively studying new technologies and improving my skills through various experience.</p>
                        <p>My goal is to think on users' side and provide better UX with clear UI.</p>
                        <p>Trying to become top of industry and love what I do.</p>
                        
                    </div>
                
            </div>
            
        <br /><br /><br /><br />
        </div>
    )
}

export default AboutPage;



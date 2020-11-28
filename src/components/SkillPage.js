import React from 'react';
import '../css/skillPage.css';
import ChannelRow from "./ChannelRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3,
    faJava,
    faJs,
    faPhp,
    faGithub,
    faNode,
    faReact
  } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import cSharp from "../img/cSharp.png"

function SkillPage() {
    return (
        <div className="skillPage">

            <div className="skillPage__filter">
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
            
            <h3>Skills</h3>
            <div className="skillPage__langContainer">
            <fieldset>
            <legend>Programming Languages</legend>
                <div className="skillPage__langs">
                    <FontAwesomeIcon icon={faJs} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>JavaScript</b></p>
                </div>
                <div className="skillPage__langs">
                    <FontAwesomeIcon icon={faPhp} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>PHP</b></p>
                </div>
                <div className="skillPage__langs">
                    <FontAwesomeIcon icon={faJava} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>Java</b></p>
                </div>
                <div className="skillPage__langs">
                    <img alt="Passion" src={cSharp}></img>
                    <p className="font-bold font-color-gray"><b>C#</b></p>
                </div>
            </fieldset>
            </div><br /><br /><br />
            
            <div className="skillPage__techContainer">
            <fieldset>
            <legend>Web Technologies</legend>
                <div>
                    <FontAwesomeIcon icon={faHtml5} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>HTML5</b></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCss3} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>CSS3</b></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faReact} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>React</b></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faNode} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>Node.js</b></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faDatabase} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>SQL</b></p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faGithub} className="icon-size" size="5x" />
                    <p className="font-bold font-color-gray"><b>GitHub</b></p>
                </div>
                
            </fieldset>
            </div><br /><br /><br /><br /><br /> 
        </div>
    )
}

export default SkillPage;



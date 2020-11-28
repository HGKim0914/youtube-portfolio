import React from 'react';
import '../css/ProjectPage.css';
import ChannelRow from "./ChannelRow";
import ProjectRow from "./ProjectRow";

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="projectPage">

            <div className="projectPage__filter">
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

            <h3>Lastest from HG Kim</h3>
            <ProjectRow />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </div>
    )
}

export default SearchPage;



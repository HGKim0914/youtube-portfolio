import React, { useState } from "react";
import '../css/Header.css';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
import CoverLetter from "../img/HonggeunKim_CoverLetter.pdf"


function Header() {

    const [inputSearch, setInputSearch] = useState("");

    const refreshPage = ()=>{
        window.location.href = "/youtube-portfolio";
    }

    return(
    <div className="header">

        <div className="header__left">
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" alt="Logo" onClick={refreshPage} />
        </div>

        <div className="header__input">
            <input 
                onChange={(e)=> setInputSearch(e.target.value)} 
                value={inputSearch} 
                type="text" 
                placeholder=" Search" 
            />
            <KeyboardIcon className="header__keyborad" />
            <div className="header__inputWrapper">
                <Link to={`/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
        </div>

        <div className="header__icons">
            <a href="https://www.linkedin.com/in/honggeun-kim0914" target="_blank"  rel="noopener noreferrer" className="header__tooltipWrapper">
                <LinkedInIcon className="header__icon" />
                <br /><span className="header__tooltipText">LinkedIn</span>
            </a>

            <a href={CoverLetter} target="_blank" type="application/pdf" className="header__tooltipWrapper" rel="noopener noreferrer">
                <DescriptionIcon className="header__icon" />
                <br /><span className="header__tooltipText">Cover Letter</span>
            </a>

            <GitHubIcon className="header__icon" />

            <a href="mailto:hongggeunkim0914@gmail.com" className="header__tooltipWrapper">
                <MailOutlineIcon className="header__icon" />
                <br /><span className="header__tooltipText">Email</span>
            </a>
            <Avatar
                alt="HG"
                src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=Default&mouthType=Smile&skinColor=Light" 
            />
        </div>
        
    </div>
    );
      
}
  
export default Header;


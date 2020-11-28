import React, { useEffect } from "react";
import '../css/SidebarRow.css';
import { SidebarData } from './SidebarData';
import { Link } from "react-router-dom";

function SidebarRow() {

    const selectedSidebar = (e) => {
        let selected = document.querySelectorAll(".sidebarRow");
        let sID = e.currentTarget.dataset.id;
        
        for(let i = 0; i < selected.length; i++)
            selected[i].classList.remove("selected");
        
        selected[sID].classList.add("selected");
    }

    //set 'Home' as selected tabs when first loaded
    useEffect(() => {document.querySelectorAll(".sidebarRow")[0].classList.add("selected")}, [])

    return (
        
        <div>
            {SidebarData.map((item, index) => {
                return (
                    <Link to={item.path} key={index}>
                        <div className="sidebarRow" data-id={index} onClick={selectedSidebar}>
                            <span className="sidebarRow__icon">{item.icon}</span>
                            <h2 className="sidebarRow__title">{item.title}</h2>
                        </div>
                    </Link>
                );
            })}
        </div>
    );

}
  
export default SidebarRow;
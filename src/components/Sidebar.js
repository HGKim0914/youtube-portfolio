import React from "react";
import '../css/Sidebar.css';
import SidebarRow from "./SidebarRow";
import SubscriptionRow from "./SubscriptionRow";
import MenuIcon from '@material-ui/icons/Menu';


function Sidebar() {
  /* const [sidebarFlag, setSidebarFlag] = useState(true);
  const reverseSidebar = () => setSidebarFlag(!sidebarFlag); */


  return(
    /* <div className={sidebarFlag ? "sidebar" : "sidebar__hidden"}> */
      <div className="sidebar">
        
      <MenuIcon className="icons"/>

      <SidebarRow />

      <hr />
      <SubscriptionRow />
      
    </div>
  );

}
  
export default Sidebar;


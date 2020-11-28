import React from "react";

/*Importing Icons from material-UI*/
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <HomeIcon></HomeIcon>
    },
    {
        title: "About me",
        path: "/about",
        icon: <WhatshotIcon></WhatshotIcon>
    },
    {
        title: "Skills",
        path: "/skill",
        icon: <SubscriptionsIcon></SubscriptionsIcon>
    },
    {
        title: "Projects",
        path: "/project",
        icon: <VideoLibraryIcon></VideoLibraryIcon>
    }
]
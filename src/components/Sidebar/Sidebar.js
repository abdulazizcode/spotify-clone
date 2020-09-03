import React from "react";
import "./Sidebar.css";
import smalllogo from "../../img/small.png";
import SidebarOption from "../SidebarOptions/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";



const Sidebar = () =>{
    const [{playlists}, dispatch] = useDataLayerValue();
    return(
        <div className="sidebar">
           <img 
           className="sidebar__logo"
            src={smalllogo} alt="smalllogo"/>

            <SidebarOption Icon={HomeIcon} title="Home"/>
            <SidebarOption Icon={SearchIcon} title="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

            <br/>
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map(playlists=>(
                   <SidebarOption title={playlists.name} />
            ))}
        </div>
    )
}

export default Sidebar;
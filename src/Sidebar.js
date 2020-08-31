import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption"
import InsertCommentIcon from "@material-ui/icons/InsertComment";

function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__info">
            <h2>Coberapps</h2>
            <h3>
              <FiberManualRecordIcon />
              Coby Yates
            </h3>
          </div>
          <CreateIcon />
          {/* <SidebarOption />
          <SidebarOption />
          <SidebarOption />
          <SidebarOption />
          <SidebarOption />
          <SidebarOption />
        <SidebarOption /> */}
        </div>
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <div className="sidebar__rooms"></div>
      </div>
    );
}
//https://youtu.be/Oo4ziTddOxs?t=4370

export default Sidebar

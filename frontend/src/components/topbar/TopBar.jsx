import React from 'react'
import './TopBar.css'
import {Search,Person,Chat,Notifications} from "@material-ui/icons"
const TopBar = () => {
  return (
    <div className="topBarContainer"> 
        <div className="topBarLeft">
            <span className="logo">ShenSocial</span>
        </div>
        <div className="topBarCenter">
            <div className="searchBar">
              <Search className="searchIcon"/>
              <input type="text" className="searchInput" placeholder="Search for friends or posts"/>
            </div>
        </div>
        <div className="topBarRight">
            <div className="topBarLinks">
              <span className="topBarLink">Homepage</span>
              <span className="topBarLink">Timeline</span>
            </div>
            <div className="topBarIcons">
                <div className="topBarIconItem">
                  <Person/>
                  <span className="topBarIconBadge">1</span>
                </div>
                <div className="topBarIconItem">
                  <Chat/>
                  <span className="topBarIconBadge">2</span>
                </div>
                <div className="topBarIconItem">
                  <Notifications/>
                  <span className="topBarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/person1.jpg" alt="" className="topBarImg"/>
        </div>
    </div>
  )
}

export default TopBar
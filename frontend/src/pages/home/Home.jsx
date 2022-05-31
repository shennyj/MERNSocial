import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import './Home.css'
const Home = () => {
  return (
    <>
    <TopBar/>
    <div className="homeContainer">
      <SideBar/>
      <Feed/>
      <RightBar/>
    </div>
    </>
  )
}

export default Home
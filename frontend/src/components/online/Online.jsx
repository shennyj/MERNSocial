import React from 'react'
import './Online.css'
const Online = ({user}) => {
  return (
    <li className="rightBarFriend">
    <div className="rightBarImgContainer">
      <img src={user.profilePicture} className="rightBarProfileImg" alt="Profile Image" />
      <span className="rightBarOnline"></span>
    </div>
    <span className="rightBarUsername">{user.username}</span>
  </li>
  )
}

export default Online
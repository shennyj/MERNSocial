import React from 'react'
import './LeftBarFriends.css'
const LeftBarFriends = ({user}) => {
const PF = process.env.REACT_APP_PUBLIC_FOLDER 
  return (
    <li className="sidebarFriend">
           <img className="sidebarFriendImg" src={PF+user.profilePicture} alt="Friend" />
           <span className="sidebarFriendName">{user.username}</span>
      </li>
  )
}

export default LeftBarFriends
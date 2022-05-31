import React from 'react'
import "./RightBar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
const RightBar = ({profile}) => {
  const HomeRightBar = () => {
    return(
      <>
          <div className="birthdayContainer">
            <img className="birthdayImg" src="assets/gift.png" alt="Birthday Icon" />
            <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
          </div> 
          <img className="rightBarAd" src="assets/ad.png" alt="Ad Image" />
          <h4 className="rightBarTitle">Online Friends</h4>
          <ul className="rightBarFriendList">
            {Users.map(user=>(
              <Online
                user={user}
                key={user.id}
              />
            ))}
           
          </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return(
      <>
      <h4 className="rightBarTitle">
        User Information
      </h4>
      <div className="rightBarInfo">
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">City:</span>
          <span className="rightBarInfoValue">New York</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">From:</span>
          <span className="rightBarInfoValue">Madrid</span>
        </div>
        <div className="rightBarInfoItem">
          <span className="rightBarInfoKey">Relationship:</span>
          <span className="rightBarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightBarTitle">User friends</h4>
      <div className="rightBarFollowings">
        <div className="rightBarFollowing">
          <img src="assets/person/person1.jpg" alt="Following person image" className="rightBarFollowingImg" />
          <span className="rightBarFollowingNma">John Carter</span>
        </div>
      </div>
      
      </>
    )
  }
  return (
    <div className="rightBar">
        <div className="rightBarWrapper">
          {profile?<ProfileRightBar/>:<HomeRightBar/>}
        </div>
    </div>
  )
}

export default RightBar
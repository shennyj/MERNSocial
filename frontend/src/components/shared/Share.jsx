import React from 'react'
import './Share.css'
import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"
const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/person1.jpg" alt="Profile" className="shareProfileImg"/>
                <input type="text" placeholder="What's on your mind John?" className="shareInput"/>
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
               
             </div>
             <button className="shareButton">
                 Share
             </button>
            </div>
        </div>
    </div>
  )
}

export default Share
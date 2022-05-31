import React,{useState} from 'react'
import './Post.css'
import { MoreVert } from '@material-ui/icons'
import {Users} from "../../dummyData"
const Post = ({post}) => {
const [like,setLike] = useState(post.like)
const [isLiked,setIsLiked] = useState(false)
const likeHandler = () => {
    setLike(isLiked?like-1:like+1)
    setIsLiked(!isLiked)
}
const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={Users.filter(u=>u.id===post?.userId)[0].profilePicture} alt="User Profile Picture" />
                    <span className="postUsername">
                        {Users.filter(u=>u.id===post?.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}
                </span>
                <img className="postImg" src={PF+post.photo} alt="Post Photo" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="Like Emoji" />
                    <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="Heart Emoji" />
                    <span className="postLikeCounter">{like} people liked this</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
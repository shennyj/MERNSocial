import React from 'react'
import './Feed.css'
import Share from '../shared/Share'
import Post from '../posts/Post'
import { Posts } from '../../dummyData'
const Feed = () => {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>
         {Posts.map(p=>(
           <Post key={p.id} post={p}/>
         ))}
        </div>
    </div>
  )
}

export default Feed
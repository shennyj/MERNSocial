const express = require("express")
const router = express.Router()
const Post = require('../models/Post')
const User = require('../models/User')

//get a post
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }catch(err){
        res.status(500).json(err)
    }
})
//get timeline posts
router.get("/timeline/all", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.body.userId)
        //find user
        //now find post with the user id
        const userPosts = await Post.find({userId:currentUser._id})
        //find finds all documents
        
        //get all posts of followings
        //use promise.all when use map.
        //promise.all(iterable)
        //returns already resolved promise if iterable empty
        //An asynchronously resolved Promise if the iterable passed contains no promises
        //A pending Promise in all other cases. This returned promise is then resolved/rejected asynchronously 
        // when all the promises in the given iterable have resolved, or if any of the promises reject
        const friendPosts = await Promise.all(currentUser.following.map(friendId=>{
            return Post.find({userId:friendId})
        }))//array
      
        
        res.json(userPosts.concat(...friendPosts))//takes all posts of friends
        //and concat with this post
    }catch(err){
        res.status(500).json(err)
    }
})
//create a post
router.post("/", async (req,res)=>{
    const newPost = new Post(req.body)

    try{
        const savedPost = await newPost.save()
        res.status(201).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})
//update a post
router.put("/:id", async (req,res) => {
   
    try{
        //given post id, find the post
        const post = await Post.findById(req.params.id)
        if(post.userId===req.body.userId){//if post's user id is the same thing as the user id we give in body
            await post.updateOne({$set:req.body})
             res.status(200).json(post)
        }else{
            res.status(403).json("You can only update your post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})
//delete a post
router.delete("/:id", async (req,res) => {
    try{
        //given post id, find the post
        const post = await Post.findById(req.params.id)
        if(post.userId===req.body.userId){//if post's user id is the same thing as the user id we give in body
            await post.deleteOne({_id:req.params.id})
             res.status(200).json("You've deleted your post")
        }else{
            res.status(403).json("You can only delete your post")
        }
    }catch(err){
        res.status(500).json(err)
    }
})
//like a post
router.put("/:id/like", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("The post has been liked")
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("The post has been disliked")
        }
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router
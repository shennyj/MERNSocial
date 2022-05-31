const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const User = require('../models/User')

//update user
//The PATCH method is the correct choice here as you're updating an existing resource - the group ID. 
//PUT should only be used if you're replacing a resource in its entirety.
router.put("/:id",async (req,res)=>{
    //req.body.userId is the user that wants to do the updating
    //req.params.id is the user we want to update
    //u can only update urself
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){//if user tries to update pw
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password,salt)
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            })
        }catch(err){
            return res.status(500).json(err)
        }
        res.status(200).json('You have updated your account')
    }else{
        return res.status(403).json("You can only update your account")
    }
})

//delete user
router.delete("/:id",async (req,res)=>{
    if(req.params.id===req.body.userId||req.body.isAdmin){
        try{
            const user = await User.deleteOne({_id:req.params.id})
            res.status(200).json('Account has been deleted')
        }catch(err){
            return res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can only delete your account")
    }
})

//get a user
router.get("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        const {password,updatedAt,...other} = user._doc
        res.status(200).json(other)
    }catch(err){
        res.status(500).json(err)
    }

})

//follow a user
router.put("/:id/follow",async(req,res)=>{
    //req.params.id is the user we want to follow
    //req.body.userId is current user
    if(req.params.id!==req.body.userId){
        try{
            const currentUser = await User.findById(req.body.userId)
            const userToFollow = await User.findById(req.params.id)
            if(!userToFollow.followers.includes(req.body.userId)){
                await currentUser.updateOne({$push:{following:req.params.id}})
                await userToFollow.updateOne({$push:{followers:req.body.userId}})
                res.status(200).json("User has been followed")
            }else{
                res.status(403).json("You already follow this user")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't follow yourself")
    }
    

})
//unfollow a user
router.put('/:id/unfollow', async (req,res)=>{
    //req.params.id is the user we want to unfollow
    //req.body.userId is current user
    if(req.params.id!==req.body.userId){
        try{
            const currentUser = await User.findById(req.body.userId)
            const userToUnfollow = await User.findById(req.params.id)
            if(userToUnfollow.followers.includes(req.body.userId)){
                await currentUser.updateOne({$pull:{following:req.params.id}})
                await userToUnfollow.updateOne({$pull:{followers:req.body.userId}})
                res.status(200).json("User has been unfollowed")
            }else{
                res.status(403).json("You cannot unfollow a user you don't follow")
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can't unfollow yourslef")
    }
})
module.exports = router
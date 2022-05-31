const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
//REGISTER
router.post("/register",async (req,res)=>{
    const {username,email,password} = req.body
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser =  new User({
            username,
            email,
            password:hashedPassword
        })
        const user = await newUser.save()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
    //The save() method returns a promise. If save() succeeds, the promise resolves to the document that was saved.
})
//LOGIN
router.post("/login",async(req,res)=>{
    const {email,password} = req.body
    //findOne returns one doc that satisfies criteria specified as first arg to this method
    //find() returns a cursor, findOne() returns a doc
    //If you're querying by _id, use findById() instead.
    try{
        const user = await User.findOne({email})
        !user && res.status(400).json("user not found")
        const validPassword = await bcrypt.compare(password,user.password)
        !validPassword && res.status(400).json("Incorrect Password")
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
 
})

module.exports = router
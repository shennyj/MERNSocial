//use schema, which is a blueprint for document/product we wanna create
//use a model based on schema. with a model, we can use schema in app

//each document is a user
//schema is model for document(user) we store
//based on schema, we create model, and for instance of model is a new document
const mongoose = require("mongoose")
//build user schema
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    profilePicture:{
        type:String,
        default:"",
    },
    coverPicture:{
        type:String,
        default:"",
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String,
        max:50
    },
    city:{
        type:String,
        max:50
    },
    from:{
        type:String,
        max:50
    },
    relationship:{
        type:Number,
        enum:[1,2,3]
    }
},{timeStamps:true})

module.exports = mongoose.model("User",UserSchema)
//User is model, users is collection
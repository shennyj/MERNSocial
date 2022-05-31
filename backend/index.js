/*
helmet helps secure express apps by setting various http headers
morgan is a http request logger middlewarae for nodejs
when u make request with server, returns request made and result

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function
 in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

 they can Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.

//middlewares are methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
*/
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
dotenv.config()
//routes
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
//connect to mongodb
// async function connect(){
//     try{
//         await mongoose.connect(process.env.MONGOOSE_URL)
//     }catch(err){
//         console.log(err)
//     }
// }
// connect()

//middleware
app.use(helmet())
app.use(morgan("common"))
//parses incoming JSON requests and puts the parsed data in req
app.use(express.json())
//runs this router when we go here
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(8800)
})
.catch(err=>{
    console.log(err)
})

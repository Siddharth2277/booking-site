import env from "dotenv"
import express from "express"
import db from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"

import admin from "./Routes/adminRouter.js"
import places from "./Routes/PlacesRouter.js"
import user from "./Routes/UserRouter.js"
import test from "./Routes/TestRouter.js"

const app = express()
env.config()
cors({ 
    origin:"http://localhost:3000",
    credentials:true,
})
db.connect(process.env.MongoUrl,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(data => console.log("connected")).catch( e => console.log(e))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser(process.env.regexSecret))

app.get("/api",(req,res)=>res.send("Emile"))
app.use("/api/admin",admin)
app.use("/api/places",places)  
app.use("/api/user",user)
app.use("/api/test",test)
app.listen(5000, () => console.log('Server is up n running in the port 5000'))

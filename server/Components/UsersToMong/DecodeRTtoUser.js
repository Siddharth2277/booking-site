import jwt from "jsonwebtoken"
import UserModel from "../../Models/UserModel.js"
import SM_DeformedToken from "./SM_DeformedToken.js"
export default async(rT) => {
    try{
        const {payload:{id}} = jwt.decode(rT,{complete:true})
        const User = await UserModel.findById(id,{
            randomString:1,
            email:1,
            verified:1
        })
        ///AddBlock
        if(!User){
            res.json({
                msg:"Redirect to frontEnd login Page"
            })
            return "err"
        }
        const {randomString,email,verified} = User
        if(verified===false || randomString === "No value"){
            res.json({
                msg:"Redirect to frontEnd login Page"
            })
            return "err"
        }
        return {randomString,email}
    }catch(e){
        res.json({
            msg:"e",
            from:"DecodeRTtoUser",
        })
        return "err"
    }
}
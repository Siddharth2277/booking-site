import jwt from "jsonwebtoken"

import AdminSignUpModel from "../../Models/AdminLNR.js"

export default async(req,res) => {
    const {token,id} = req.params 
    try{
        const secret = process.env.jwtSecret+false
        jwt.verify(token,secret)
        const PendingVerifyObject = await AdminSignUpModel.findOne({_id:id})
        const {verified} = PendingVerifyObject
        if(verified === true){
            res.json({
                msg:"Token Expired or Used, Reported."
            })
            return
        }
        await AdminSignUpModel.updateOne({_id:id},{$set:{ verified:true },
        $unset:{limitForExtinction:""}})
        res.json({
            msg:"Thanks for Choosing Sigma"
        })
    }catch(e){
        res.json({
            msg:"Something Went Wrong.",
            additionalMsg:e
        })
    }
}
import {appendFile} from "fs"
import { promisify } from "util"

import BasicVerification from "../../Components/BasicVerification.js"
import SaveUser from "../../Components/UsersToMong/UserSignUpFunc.js"
import UserModel from "../../Models/UserModel.js" 
import VerificationEmail from "../../Components/UsersToMong/VerificationEmail.js"
import sendMail from "../../Components/SendMailToCustomer.js"

const append = promisify(appendFile)

export default async(req,res) => {
    
    const {name,last_name,email,password,verifyPassword,mobile,country,Fav,birthday,gender} = req.body
    const BV = BasicVerification(name,last_name,country,verifyPassword,password,res,birthday,email,mobile)
    if(BV === "err") 
    if(!gender){
        res.json({
            msg:"Check all * fields are filled From G"
        })
    }
    const FindMail = await UserModel.findOne({
        email:email
    },{email:1,verified:1,limitOFExtinction:1,_id:1,randomString:1})

    if(FindMail && FindMail.email && FindMail.verified){
        res.json({
            msg: "Email already exists."
        })
        return 
    }else if(FindMail && FindMail.email && !FindMail.verified){
        const link = VerificationEmail(FindMail._id,FindMail.verified,FindMail.randomString)
        /* sendMail(link,email).then((data)=>{
            append("/app/logs/MailLogs.txt","\n\n"+data+" "+Date.now(),"utf-8").then().catch(e)
        }).catch(e=>{
            append("/app/logs/MailLogs.txt","\n\n"+data+" "+Date.now(),"utf-8").then().catch(e)
        }) */
        res.json({
            link,
            msg:"Email already exists but not verified, email will be sent to your inbox"
        })
        return
    }
    
    const User = await SaveUser(name,last_name,email,password,mobile,country,birthday,gender,Fav)
    const result = await User.save()
    const link = VerificationEmail(result._id,result.verified,result.randomString)
    /* sendMail(link,email).then((data)=>{
            append("/app/logs/MailLogs.txt","\n\n"+data+" "+Date.now(),"utf-8").then().catch(e)
        }).catch(e=>{
            append("/app/logs/MailLogs.txt","\n\n"+data+" "+Date.now(),"utf-8").then().catch(e)
    })*/
    res.json({
        link,
        msg:"Email will be sent to your inbox"
    })
}
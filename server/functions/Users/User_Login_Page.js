import crypt from "bcrypt"

import { regex_email } from "../../Components/BasicVerification.js"
import UserModel from "../../Models/UserModel.js"
import VerificationEmail from "../../Components/UsersToMong/VerificationEmail.js"
import ApiKey from "../../Components/ApiKey.js"
import OWT_RefreshToken from "../../Components/UsersToMong/OWT_RefreshToken.js"
import CreateRefreshcookie from "../../Components/UsersToMong/CreateRefreshcookie.js"
import SendMailToCustomer from "../../Components/SendMailToCustomer.js" 

export default async(req,res) => {
    const {email,password} = req.body
    if(!email.match(regex_email)&&!password.length>8){
        res.json({
            msg:"Redirect to frontEnd Login Page"
        })
        return 
    }
    const User = await UserModel.findOne({
        email:email
    },{
        email:1,password:1,randomString:1,verified:1,_id:1
    })
    
    if(!User){
        //!redirect to frontEnd SignUp page
        res.json({
            msg:"Email or password is wrong and redirection to rfp."
        })
    }
    if(!User.verified){
        const link = VerificationEmail(User._id,User.verified,User.randomString)
        res.json({
            msg:"sent an email",
            link
        })
        /* SendMailToCustomer(link,User.Mail).then({}) */
        return
    }

    const pswdChk = await crypt.compare(password,User.password)
    if(pswdChk !== true){
        res.json({
            msg:"Email or password is wrong."
        })
    }
    const MainPartOFEMail = User.email.replace(/(@[a-z_])+/,"")
    const {randomString,base64Overlay} = await ApiKey(MainPartOFEMail)
    const secret = base64Overlay+env.process.jwtSecret
    const OWT_RT = OWT_RefreshToken(secret)
    CreateRefreshcookie(OWT_RT)
    res.redirect("/UserInfo")
    await UserModel.findOneAndUpdate(
        {email:email},
        {
            $set:{
                randomString:randomString,
                active:true,
                LastActive:Date.now(),
            }
        }
    )
}
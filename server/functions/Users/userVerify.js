import jwt from "jsonwebtoken"


import userModel from "../../Models/UserModel.js"
import Time from "../../Components/created_at.js"
import ApiKey from "../../Components/ApiKey.js"
import CreateRefreshcookie from "../../Components/UsersToMong/CreateRefreshcookie.js"
import OWT_RefreshToken from "../../Components/OWT_RefreshToken.js"

export default async(req,res) => {
    const {token,id} = req.params
    const url_string = req.url
    const url_regex = /^((\/)verification)(\/)([a-z0-9]{24})(\/ey)(([a-zA-Z]([0-9_\-])?){8,})\.(([a-zA-Z0-9]([_\.\-])?){20,})\.(([a-zA-Z0-9]([_\.\-])?){10,})$/
    if(!url_string.match(url_regex)){
        ///Redirection to Malicious Intent Page.
        res.json({
            url_string,
            conditon:!url_string.match(url_regex),
            Msg:"NiceTry👆☝ - 47"
        })
        return 
    }
    try{
        
        const User = await userModel.findOne({_id:id},{
            email:1,randomString:1,verified:1,_id:1
        })
        /* 
            This is irrelevant, Just For safety purpose
        */
        if(User.verified){
            /*
            ?Write the ip address of the req and time this req and time when this json token is issued
            */
            return res.json({
                msg:"Expired Link, this action is reported to User"
            })
        }
        const secret = process.env.jwtSecret+User.verified+User.randomString
        jwt.verify(token,secret)
        const MainPartOFEMail = User.email.replace(/(@[a-z_])+/,"")
        const {base64Overlay,randomString} = await ApiKey(MainPartOFEMail)
        const rTSecret = base64Overlay+env.process.jwtSecret
        const OWT_RT = OWT_RefreshToken(rTSecret)
        CreateRefreshcookie(OWT_RT)
        res.redirect("/userInfo")
        await userModel.findOneAndUpdate({_id:id},{
            $set:{
                createdAt: Time(),
                verified:true,
                randomString,
            },
            $unset:{
                limitOFExtinction:"",
                count:"",
            }
        })
    }catch(e){
        res.json({
            e
        })
    }
}
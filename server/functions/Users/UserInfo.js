import {v4 as ran} from "uuid"

import DecodeRTtoUser from "../../Components/UsersToMong/DecodeRTtoUser.js"
import RTC from "../../Components/UsersToMong/VerificationRefreshToken.js"
import SM_DeformedToken from "../../Components/UsersToMong/SM_DeformedToken.js"


export default (req,res) => {
    const refreshToken = req.signedCookie.OWT_refreshToken
    if(!refreshToken){
        /// front Page to User Login
        res.json({
            msg:"front Page to User Login",
        })
        return
    }
    const regexCheck = /^(ey)(([a-zA-Z]([0-9_\-])?){8,})\.(([a-zA-Z0-9]([_\.\-])?){20,})\.(([a-zA-Z0-9]([_\.\-])?){10,})$/
    if(!refreshToken.match(regexCheck)){
        SM_DeformedToken(res)
        ///security measures n redirect to Wellbeing page
        res.redirect("/userLogin")
        return
    }
    const UserResult = await DecodeRTtoUser(refreshToken)
    if(UserResult === "err") return
    const Mail = RTC(UserResult.randomString,UserResult.email)
    if(Mail === "err") return
    res.redirect(`/${Mail}/${ran()}`)
}
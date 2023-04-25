import jwt from "jsonwebtoken"

import DecodeRTtoUser from "../../Components/UsersToMong/DecodeRTtoUser.js"
import SM_DeformedToken from "../../Components/UsersToMong/SM_DeformedToken.js"
import VRT from "../../Components/UsersToMong/VerificationRefreshToken.js"

export default (req,res,next) => {
    const accToken = req.signedCookie.OWT_AccessToken
    const regexCheck = /^(ey)(([a-zA-Z]([0-9_\-])?){8,})\.(([a-zA-Z0-9]([_\-])?){20,})\.(([a-zA-Z0-9]([_\-])?){10,})$/
    if(!accToken){
        const rT = req.signedCookie.OWT_refreshToken
        const Info = DecodeRTtoUser(rT)
        if(Info === "err") return
        const conclusion = VRT(Info.randomString,Info.email)
        if(conclusion === "err") return
        next()
        return
    }
    if(!accToken.match(regexCheck)){
        //!Well being page
        SM_DeformedToken(res)
        res.redirect("/UserLogin")
    }else{
        try{
            jwt.verify(accToken,env.procees.jwtSecret)
            next()
        }catch(e){
            //!Well being page
            SM_DeformedToken(res)
            res.redirect("/UserLogin")
            return
        }
    }
}
import SM_DeformedToken from "../../Components/UsersToMong/SM_DeformedToken.js"
import UserModel from "../../Models/UserModel.js"

export default (req,res) => {
    const rT = req.signedCookie.OWT_refreshToken
    if(!rT){
        res.json({
            msg:"Redirect to front End page"
        })

        
        return
    }
    const {payload:{id}} = jwt.decode(rT,{complete:true})
    await UserModel.findOneAndUpdate(
        {_id:id},
        {
            $set:{
                randomString:"No value",
                LastActive:Date.now()
            }
        }
    )
    SM_DeformedToken(res)
}
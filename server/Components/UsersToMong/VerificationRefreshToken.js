import jwt from "jsonwebtoken"
import ApiKey from "../ApiKey.js"
import ATandSave from "./CreateAcessToken.js"
export default(randomString,email)=>{
    const DefinationOfMail = /(^@+)/
    const Mail = email.replace(DefinationOfMail,"")
    const {baseOverlay} = ApiKey(Mail,randomString)
    const rTSecret = baseOverlay+process.env.jwtSecret
    //*11 will be always true
    try{
        jwt.verify(token,rTSecret)
    }catch(e){
        return "err"
    }
    ATandSave(id,res)
    return Mail
}
import jwt from "jsonwebtoken"
import SendMail from "../SendMailToCustomer.js"
import created_info from "../created_at.js"

export default (id,verified) => {
    const secret = process.env.jwtSecret + verified
    const token = jwt.sign({
        _id:id
    },secret,{
        expiresIn:900
    })
    const link = `${process.env.Domain}/api/admin/verification/${token}/${id}`
    /* SendMail(link,email).then((data)=>{
        console.log(data)
    }).catch(e=>console.log(e)) */
    const created_at = created_info()
    return {
        link,created_at
    }
}
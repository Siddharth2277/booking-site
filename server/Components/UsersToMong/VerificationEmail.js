import jwt from "jsonwebtoken"
export default (id,verify,ranStr) => {
    /* const reqExt = String(Ext).replace(/([\s])+/g,"").replace("GMT+0000(CoordinatedUniversalTime)","") */
    const secret = process.env.jwtSecret+verify+ranStr
    console.log(secret,":8")
    const Token = jwt.sign({
        id
    },secret,{
        expiresIn:"3h"
    })
    const link = `${process.env.Domain}/api/user/verification/${id}/${Token}`
    return link
}


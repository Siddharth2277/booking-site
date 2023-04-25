import jwt from "jsonwebtoken"

export default (db_UserInfo,res) => {
    const AT = jwt.sign(
        {load:db_UserInfo},
        process.env.jwtSecret,
        {expiresIn:"30m"}
    )
    res.cookie("OWT_AccessToken",AT,{
        maxAge:1200,
        signed:true,
        httpOnly:true
    })
}


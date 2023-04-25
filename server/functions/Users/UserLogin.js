
//IconLoginRoute
export default (req,res) => {
    const rT = req.signedCookie.OWT_refreshToken
    if(rT){
        res.redirect("/UserInfo")
        return
    }

    if(!rT){
        //!front end page that containes template for login
        res.redirect("/someRoute")
    }
}
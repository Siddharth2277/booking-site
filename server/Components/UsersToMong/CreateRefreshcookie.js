

export default (rT) => res.cookie("OWT_refreshToken",rT,{
    maxAge:Date.now() + 7889400000,
    httpOnly:true,
    signed:true,
    expires:new Date(Date.now() + 7889400000)
})
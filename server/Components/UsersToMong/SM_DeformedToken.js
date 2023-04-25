
export default (res) => {
    res.cookie("OWT_refreshToken","",{
        signed:true,
        expires: new Date("1/1/1980")
    })
    res.cookie("OWT_AccessToken","",{
        signed:true,
        expires: new Date("1/1/1980")
    })
}
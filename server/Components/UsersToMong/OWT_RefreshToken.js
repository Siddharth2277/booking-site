

export default (rTSecret) => {
    const OWT_refreshToken = jwt.sign({
        id:User._id
    },rTSecret,{
        expiresIn:'365d'
    })
    return OWT_refreshToken
}
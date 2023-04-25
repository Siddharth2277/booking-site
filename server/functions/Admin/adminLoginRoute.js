import crypt from "bcrypt"

import AdminSignUpModel from "../../Models/AdminLNR.js";
import LoggedUserInfo from "../../Components/LoggedUserInfo.js";
import CreateNewJwtForUnverifiedAccounts from "../../Components/CreateNewJwtForUnverifiedAccounts.js";



export default async(req,res) => {
    try{
        const {email,password} = req.body
        if(!email || !password){
            res.json({
                msg:"Email or Password is wrong"
            })
            return
        }
        const User = await AdminSignUpModel.find({
            email
        })
        const {verified,_id} = User[0]
        const id_StringForm = _id.toString()
        if(User.length === 0){
            res.json({
                msg:"email does not exists"
            })
            return
        }else{
            if(verified === true){
                const encryptPassword = User[0].password
                const verifyPassword = await crypt.compare(password,encryptPassword)
                const result = verifyPassword === true ? LoggedUserInfo(email) : {
                    msg:"Email or Password is wrong"
                }
                res.json({
                    result
                })
            }else{
                const {link,created_at} = CreateNewJwtForUnverifiedAccounts(id_StringForm,verified)
                const updateAcc = await AdminSignUpModel.updateOne({
                    email:email
                },{
                    $set:{
                        created_at:created_at,
                        limitForExtinction:Date.now()
                    }
                })
                res.json({
                    msg:{
                        updateAcc,
                        link
                    }
                })
            }
        }
    }catch(e){
        res.json({
            msg:"Something went wrong",
            addMsg:e
        })
    }

}



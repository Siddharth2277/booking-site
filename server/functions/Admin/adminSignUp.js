
import {genSalt,hash} from "bcrypt"
import jwt from "jsonwebtoken"

import AdminSignup from "../../Models/AdminLNR.js"
import NewAdmin from "../../Components/NewAdminLoginInfo2DB.js"
import AssistantAdmin from "../../Components/AssistantAdminSignUp.js"
import BasicVerificationFunc from "../../Components/BasicVerification.js"
import SendMailToCustomer from "../../Components/SendMailToCustomer.js"


const SignUpAdmin = async(req,res) => {
    const {name,last_name,email,password,verify_password,DOB,FAVQuestion,FAVAns,key,country,mobile} = req.body
    const BV = BasicVerificationFunc(name,last_name,country,verify_password,password,res,DOB,email,mobile)
    if(BV === "err") return 
    try{
        const PremierAdmin = await AdminSignup.find()
        if(Array.isArray(PremierAdmin) && PremierAdmin.length > 5){
            res.json({
                msg: "Admin Limit exceeded."
            })
            return
        }
        const emailCheck = await AdminSignup.findOne({email})
        if(emailCheck){
            res.json({ 
                msg:"Email is Already  taken"
            }) 
            return
        }
        const salt = await genSalt(12)
        const hashPassword = await hash(password,salt)
        const result = PremierAdmin.length === 0 ? await NewAdmin(res,name,last_name,email,DOB,key,hashPassword,FAVQuestion,FAVAns,country,mobile) : await AssistantAdmin(res,name,last_name,email,key,hashPassword,FAVQuestion,FAVAns,DOB,country,mobile) 
        if(!result){
            return
        }else{
            const db_res = await result.save()
            const {_id,email,verified} = db_res
            const secret = process.env.jwtSecret + verified
            const token = jwt.sign({_id},secret,{expiresIn:900})
            const link = `${process.env.Domain}/api/admin/verification/${token}/${_id}`

            /* SendMailToCustomer(link,email)
            .then(data=>console.log(data))
            .catch(e=>console.log(e)) */

            res.json({
                msg:`Verification Email is sent to ${email}. Click to verify.`,
                link
            })
        }
    }catch(e){
        res.json({
            msg:"Internal server error",
            AdditionalMsg:e
        })
        return
    }

} 

export default SignUpAdmin
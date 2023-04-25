import AsAdmin from "../../Models/AdminLNR.js"
import created_Info from "../created_at.js"
export default async(res,name,lName,email,key,password,FAVQuestion,FAVAns,DOB,country,mobile) => {
    try{
        const AdminKey = await AsAdmin.find({AdminKey:key})
        const created_at = created_Info()
        const result = AdminKey.length !== 0 ? CreateAdmin(name,lName,password,email,FAVQuestion,FAVAns,DOB,created_at,country,mobile) : {
            msg: "Provided key is invalid, This attempt will be Reported"
        }
        if(result instanceof AsAdmin){
            return result
        }else{
            res.json({
                msg:result
            })
            return 
        }
    }catch(e){ 
        res.json({
            msg:"Probable issue : Check the connection",
            AdditionalMsg:e
        })
        return
    }
    
}

const CreateAdmin = (Name,LastName,pass,mail,FavQ,FavAns,dob,created_at,country,mobile) => {
    const AsAdminSignup = new AsAdmin({
        email:mail,
        Name,
        LastName,
        password:pass,
        BirthDay:dob,
        Fav:{
            Question:FavQ,
            Ans:FavAns
        },
        verified:false,
        created_at,
        country,
        mobile
    })
    return AsAdminSignup
}
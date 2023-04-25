import AdminSignup from "../../Models/AdminLNR.js"
import ApiKey from "../ApiKey.js"
import created_info from "../created_at.js"
export default async(resObj,name,lName,email,Dob,premier_key,password,FavQuestion,FavAns,country,mobile) => {
    try{
        let {base64Overlay} = await ApiKey(premier_key)
        const key = base64Overlay
        const created_at = created_info()
        const AdminResult = await NewAdmin()
        return AdminResult(email,key,password,Dob,name,lName,created_at,{
            Question:FavQuestion,
            Ans:FavAns
        },country,mobile) 
    }catch(e){
        resObj.json({
            msg:"something went wrong",
            addMsg:e
        })
        return
    }
}


const NewAdmin = () => {
    return new Promise((res,rej)=>{
        res((email,key,pass,dob,Name,LastName,created_at,Fav,country,mobile)=>{
            const Admin = new AdminSignup({
                Name,LastName,email,AdminKey:key,BirthDay:dob,password:pass,verified:false,created_at,Fav,country,mobile
            })
            return Admin
        })
    })
}
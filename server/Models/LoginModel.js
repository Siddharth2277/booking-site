import mon from "mongoose"


const LoginAdmin = mon.Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
        max:128,
        min:12
    },
    password:{
        type:"String",
        required:true,
        max:256
    }
})



export default mon.model("AdminLogin",LoginAdmin)
import mon from "mongoose"

const AdminSignUpSchema = mon.Schema({
    Name:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        min:12,
        max:128,
        lowercase:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:256,
    },
    BirthDay:{
        type:Date,
        required:true,
        min:'1-1-1950',
        max:'1-1-2100',
    },
    Fav:{
        Question:{
            type:String
        },
        Ans:{
            type:String
        }
    },
    AdminKey:{
        type:String,
        min:6
    },
    verified:{
        type:Boolean,
        required:true
    },
    /* 
    ?once db is connected the limitExtinction or any other field in a document 
    ?that has the expires field will be set to the collection
    ?say you are setting limitForExtinction for 180m and it connected to db the
    ?so the collection will have limitForExtinction as global field with setting 
    ?180m trying to change that will cause limitForExtinction_1 index already exists
    ?with different options. SO if you want to check to 2m from 180m, we need to change
    ?the field name to something other than limitForExtinction or you to do drop the collection in db 
    */
    limitForExtinction:{
        type:Date,
        default:Date.now(),
        expires:"1d"
    },
    created_at:{
        type:Object,
        required:true,
        
    },
    country:{
        type:String,
        max:30
    },
    mobile:{
        type:[String]
    }
})

const AdminSignUpModel = mon.model("Admin",AdminSignUpSchema)
/* AdminSignUpModel.ensureIndexes((err)=>console.log("ensure error",err,":65")) */
export default AdminSignUpModel
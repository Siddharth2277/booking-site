import UserModel from "../../Models/UserModel.js"
import Time from "../created_at.js"
import crypt from "bcrypt"
import {v4 as random} from "uuid"

export default async(name,last_name,email,password,mobile,country,birthday,gender,FavQ,FavAns) => {

    const salt = await crypt.genSalt(12)
    const hash = await crypt.hash(password,salt)

    const created_at = Time()
    const result = new UserModel({
        name,
        last_name,
        email,
        password:hash,
        mobile,
        country,
        birthday,
        gender,
        createdAt:created_at,
        Fav:{
            Question:FavQ,
            Ans:FavAns
        },
        randomString:random()
    })
    return result
}
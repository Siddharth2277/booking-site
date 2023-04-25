import { Router } from "express";
import userLogin from "../functions/Users/UserLogin.js";
import userRegister from "../functions/Users/UserRegisterRouterFunc.js"
import userVerify from "../functions/Users/userVerify.js"
import ProtectedTheRoute from "../Middleware/User/ProtectedRoute.js"
import ProfilePage from "../functions/Users/ProfilePage.js"
import User_Login_Page from "../functions/Users/User_Login_Page.js";
const UserRegisterRouter = Router()

UserRegisterRouter.post("/userRegister",userRegister)
UserRegisterRouter.get("/userLogin",userLogin)
UserRegisterRouter.get("/verification/:id/:token",userVerify)
UserRegisterRouter.get("/UserInfo",userInfo)
UserRegisterRouter.post("/User_Login_Page",User_Login_Page)
UserRegisterRouter.get("/:mail/:uuidString",ProtectedTheRoute,ProfilePage)

export default UserRegisterRouter 
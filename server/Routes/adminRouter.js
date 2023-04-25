import {Router} from "express"

import adminTester from "../Middleware/admin/adminTester.js"
import adminRouteFunc from "../functions/Admin/adminRouteFunc.js"
import SignUpAdmin from "../functions/Admin/adminSignUp.js"
import verifiedAdmin from "../functions/Admin/VerifiedAdmin.js"
import LoginAdmin from "../functions/Admin/adminLoginRoute.js"

const adminRouter = Router()


adminRouter.post("/signUpAdmin",SignUpAdmin)
adminRouter.post("/LoginAdmin", LoginAdmin)
adminRouter.get("/Verification/:token/:id",verifiedAdmin)
adminRouter.get("/customerslist",adminTester,adminRouteFunc)

export default adminRouter

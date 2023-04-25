import User from "../../Models/UserModel.js"
export default async(req,res) => {
    const Customers = await User.find()
    res.send(Customers)
}
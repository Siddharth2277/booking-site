import {createTransport} from "nodemailer"
export default (link,mail) => {
    const transporter = createTransport({
        service:"gmail",
        auth:{
            user:"casual.cr7@gmail.com",
            pass:'book227727'
        }
    })

    const options = {
        from:"casual.cr7@gmail.com",
        to: String(mail),
        subject:"Verify your email to get access to sigma,no-reply.",
        text:`
        <h1>Verification Email</h1>
        <a href=${link}>
            <button style="background-color:black;color:white;width:80px;height:40px;border-radius:10px">
                verify
            </button>
        </a>
        `
    }
    return new Promise((resolve,rej)=>{
        transporter.sendMail(options,(err,info)=>{
            if(info){
                resolve(info)
            }else{
                reject(err)
            }
        })
    })
}
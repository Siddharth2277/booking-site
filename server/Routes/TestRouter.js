import { Router } from "express";
const TestRouter = Router()
TestRouter.get("/reqParams/:id",(req,res)=>{
    res.json({
        msg:"Emily",
        porotcal:req.protocol,
        host:req.hostname,
        relativeUrl_systemUrl:req.url,
        baseUrl:req.baseUrl,
        urlFromAdBar:req.originalUrl
    })
})
export default TestRouter
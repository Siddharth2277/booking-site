import {Buffer} from "buffer"
import {v4 as ran} from "uuid"
const ApiKey =  function(Str,ranString){
    return new Promise((res,rej)=>{
        
        if(arguments.length > 3 && arguments.length !== 0){
            rej(new Error("Invalid number of Arguments, Only one arg must be provided"))
        }
        if(typeof Str !== "string"){
            rej(new Error("Invalid Argument must be a string"))
        }
        else{
            ranString ? res(Overlays(Str,ranString)) : res(Overlays(Str))
        }
    })
}

const Overlays = (Str,ranString) => {
    const randomString = () => ranString ? ranString : ran() 
    const TOString = String(Str) + randomString + process.env.regexSecret
    const HexOverlay = Buffer.from(TOString).toString("hex")
    const base64Overlay = Buffer.from(HexOverlay).toString("base64")
    return {base64Overlay,randomString}
}



export default ApiKey
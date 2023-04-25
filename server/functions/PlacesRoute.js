import ax from "axios"
import cheerio from "cheerio"
import {config} from "dotenv"
import {writeFile} from "fs"
import { join } from "path"
import {promisify} from "util"

const wF = promisify(writeFile)
config()
const options = {
    method:"get",
    url:"https://www.theguardian.com/environment/climate-crisis"
}

const some = []

export default async(req,res) => {
    try{
        const page = await ax.get(options.url)
        const TextedPage = toString(page)
        const $ = cheerio.load(TextedPage)
        console.log($("div").text())
        /* wF(join("samp le.js"),name.text())
        .then(()=>console.log("success"))
        .catch(e=>console.log(e)) */
        res.send("I am fucked up")
    }catch(e){
        res.send(`Error: ${e}`)
    }
}
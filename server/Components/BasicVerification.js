export const regex_email = /^([a-z_])([a-z0-9_\.]{0,100})@([a-z_]{0,10})\.([a-z]{0,6})(\.[a-z]{0,6})?$/

export default (name,last_name,country,verify_password,password,res,DOB,email,mobile) => {
    const regex_Name = /^(_|[a-zA-Z])([A-Za-z0-9_]{2,20})$/

    const regex_Last_Name = /^(_|[a-zA-Z])([A-Za-z0-9_]{2,20})$/

    const regex_countries = /^([A-Z])([A-Za-z])+$/

    const DOB_regex = /^(0?[1-9]|1[012])(\/|\-)(0?[1-9]|1[0-9]|2[0-9]|3[01])(\/|\-)([0-2][0-9][0-9][0-9])$/

    const mobile_regex = /^((\+)([0-9]{1,5})|((\(\+[0-9]{1,5}\))))(\s|\-)?(([0-9]{10}|([0-9]{3}(\s|\-)[0-9]{3}(\s|\-)([0-9]{4}))|([0-9]{4}(\s|\-)([0-9]{6}))|((\([0-9]{1,5}\))(\s|\-)([0-9]{7}))))$/

    const regexNameChecker = name && regex_Name.test(name)
    const regexLastNameChecker = last_name && regex_Last_Name.test(last_name)
    const regexCountryChecker = country && regex_countries.test(country)
    const mobileRegexChecker = mobile && mobile_regex.test(mobile)
    const regexDOB = DOB && DOB_regex.test(DOB)
    

    if(regexNameChecker === false || regexLastNameChecker === false ||regexCountryChecker === false || regexDOB === false){  
        res.json({
            msg:"Check * fields are filled GE"
        })
        return "err"
    }

    if(mobile){
        if(mobileRegexChecker === false){
            res.json({
            msg:"Check * fields are filled from M"
            })
            return "err"
        }
    }

    if(!email && typeof email !== String){
        res.json({
            msg:"Check * fields are filled E"
        })
        return err
    }else{
        if(!regex_email.test(email.toLowerCase())) {
            res.json({
                msg:"invalid email"
            })
            return "err"
        }
    }  

    if(verify_password !== password && password.length < 8){
        
        res.json({
            msg:"Either Email or Password is wrong."
        })
        return "err"
    }
} 
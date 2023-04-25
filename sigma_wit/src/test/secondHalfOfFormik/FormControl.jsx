/* eslint-disable import/no-anonymous-default-export */
import CustomInput from "./VariousFields/CustomInput"
import SelectCustomFelid from "./VariousFields/SelectCustomFeild"
import TextAreaCustomField from "./VariousFields/TextAreaCustomField"
import DateCustomField from "./VariousFields/DateCustomField"
import RadioCustomField from "./VariousFields/RadioCustomField"
export default({control,name,label,type,arr,...rest})=>{
    if(!control) return
    switch(control){
        case "input":
            return <CustomInput name={name} label={label} type={type}/>
        case "select":
            return <SelectCustomFelid  name={name} label={label} arr={arr}/>
        case "textarea":
            return <TextAreaCustomField name={name} label={label} type={type} />
        case "date":
            return <DateCustomField name={name} label={label} type={type}/>
        case "radio":
            return <RadioCustomField name = {name} label={label} type={type}/>
        default:
            return null
    }
}
import {MdDelete,MdAdd} from "react-icons/md"
import { TextField,IconButton,Box } from "@mui/material"

import {Field} from "formik"
const basicTextFieldTheme = (field,meta,type,placeholder)=>{
    return <TextField
        type={type}
        placeholder={placeholder}
        helperText= {meta.error && meta.touched ? String(meta.error) : null}
        {...field}
    />

}

export const FieldArrayCustomTheme = ({push,del,nos}) => {
    return <>
    {
        nos.map((no,inx)=>{
        return <Box
            key={inx}
            component={"span"}
        >
        <Field name={`phoneNo[${inx}]`}>
                {
                    ({meta,field}) => {
                        
                        return <>
                        {basicTextFieldTheme(field,meta,"text","Enter your phone number")}
                        
                        { nos.length > 1 && <IconButton onClick={()=>{
                            del(inx)
    
                        }}>
                            <MdDelete/>
                        </IconButton>}
                        <IconButton onClick={()=>push()}>
                            <MdAdd/>
                        </IconButton>
                        </>
                    }
                }
                </Field>
            </Box>
        })
    }
    </>
}

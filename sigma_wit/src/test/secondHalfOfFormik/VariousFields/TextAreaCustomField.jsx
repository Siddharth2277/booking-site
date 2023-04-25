import { TextField } from "@mui/material"
import { Field } from "formik"
// eslint-disable-next-line import/no-anonymous-default-export
export default ({name,type,label})=>{
    return <Field name={name}>
        {
            ({field,meta}) => {
                return <TextField
                sx={{
                    mt:'10px'
                }}
                label={label}
                multiline
                error={meta.error && meta.touched}
                helperText={meta.error && meta.touched ? meta.error : null}
                {...field}
                minRows={3}
                maxRows={7}
                />
            }
        }
    </Field>
}
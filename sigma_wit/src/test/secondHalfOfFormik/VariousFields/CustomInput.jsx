import { TextField } from "@mui/material"
import {FastField} from "formik"
// eslint-disable-next-line import/no-anonymous-default-export
export default ({name,label,type})=> {
    return <>
    <FastField name={name}>
        {
            ({field,meta}) => {
                return <TextField
                label={label}
                type={type}
                {...field}
                error={meta.error && meta.touched}
                helperText={meta.error && meta.touched ? meta.error : null}
                />
            }
        }
    </FastField>
    </>
}
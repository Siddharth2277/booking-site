import { Field } from "formik"
import { TextField,Box} from "@mui/material"

// eslint-disable-next-line import/no-anonymous-default-export
export default ({name,type,label}) => {
    return <Field name={name}>
        {
            ({field,meta}) => {
                return <Box
                    sx={{
                        mt:"10px"
                    }}
                >
                    <TextField
                    label={label}
                    type={type}
                    InputLabelProps={{shrink:true}}
                    {...field}
                    error={meta.error && meta.touched}
                    helperText = {meta.error && meta.touched ? meta.error : null}
                    />
                </Box>
            }
        }
    </Field>
}
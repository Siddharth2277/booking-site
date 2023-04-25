import { Field } from "formik"
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material"
// eslint-disable-next-line import/no-anonymous-default-export
export default ({type,label,name}) => {
    return <Field name={name}>
        {
            ({field,meta}) => {
                return <FormControl
                component={"fieldset"}
                >
                    <FormLabel
                        component="legend"
                    >
                        Gender
                    </FormLabel>
                    <RadioGroup
                        name="radio-buttons-group"
                        {...field}
                    >
                        <FormControlLabel value={"female"} control={<Radio/>} label={'female'}/>
                        <FormControlLabel value={"male"} control={<Radio/>} label={"male"} />
                        <FormControlLabel value={"god"} control={<Radio/>} label={"Strong and Combined version of both male and female"}/>
                    </RadioGroup>

                </FormControl>
                
            }
        }
    </Field>
}
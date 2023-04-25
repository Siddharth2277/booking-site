
import {Button} from "@mui/material"
import {
    Field 
} from "formik"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return <Field>
        {
            ({form,field}) => {
                return <Button
                disabled={(form.isValid && !form.isSubmitting) ? false : true}
                type={"submit"}
                /* {...field} */
                >
                    submit
                </Button>
            }
        }
    </Field>
}
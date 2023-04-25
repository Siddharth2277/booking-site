/* eslint-disable import/no-anonymous-default-export */
import { Form } from "formik";
import {Box} from "@mui/material"

import CustomFormControl from "./FormControl"
import Data from "./VariousFields/ApiCountries"
import CustomButton from "./VariousFields/SubmitCustomField"


export default()=>{
    return <Box
        style={{width:"50%"}}
    >
        <Form>
            <CustomFormControl 
                name={"email"} 
                type={"email"} 
                label={"email"}
                control={"input"}
                />
            <CustomFormControl
                name={"comments"}
                type={"textarea"}
                label={"comments"}
                control={"textarea"}
            />
            <CustomFormControl
                name={"country"}
                label={"countries"}
                arr={Data()}
                control={"select"}
            /> 
            <CustomFormControl
                name={"birthday"}
                label={"birthday"}
                type={"date"}
                control={"date"}
            />
            <CustomFormControl
                name={"gender"}
                label={"gender"}
                type={"radio"}
                control={'radio'}
            />
            <CustomButton/>
        </Form>
    </Box>
    
} 
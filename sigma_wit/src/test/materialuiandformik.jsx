/* eslint-disable no-unused-vars */

import {
    Box,
    TextField,
    Button, 
    Select, 
    MenuItem,
    InputLabel,
    IconButton
} from "@mui/material"
import {MdDelete,MdAdd} from "react-icons/md"
import { Formik,Form,Field,ErrorMessage, FieldArray} from "formik"
import * as yup from "yup"

import {FieldArrayCustomTheme} from "./CustomFieldArray"

const someSchema = yup.object({
    name: yup.string().min(4,"Minium 4 characters").max(60,"Maximum 60 characters").required(),
    lastName: yup.string().min(4,"Minium 4 characters").max(60,"Maximum 60 characters").required(),
    Birthday:yup.date().required(),
    email:yup.string().email("Invalid Email").required()
    /* country: yup.string().required() */ 
})

const initialValues = {
    name:"",
    lastName:"",
    email:"",
    phoneNo:[''],
    Birthday:"",
}




const basicTextFieldTheme = (field,meta,type,placeholder)=>{
    return <TextField
        type={type}
        placeholder={placeholder}
        helperText= {meta.error && meta.touched ? String(meta.error) : null}
        {...field}
    />

}

const Sample1Input = () => {
    return <Formik 
    initialValues={initialValues}
    onSubmit={(values,props)=>{

        console.log(values)
        //*after we get user profile data below method must be executed
        props.setSubmitting(false)
    }}
    validationSchema={someSchema}
    >
        <Form
            style={{display:"flex",flexDirection:"column",width:"50%"}}
        >
            <Field name={"name"}>
                {
                    ({meta,field}) => basicTextFieldTheme(field,meta,"text","Enter your fist name")
                }
            </Field>
            <Field name={"lastName"}>
                {
                    ({field,meta}) => basicTextFieldTheme(field,meta,"text","Enter your last name")
                }
            </Field>
            <Field name={
                "email"
            }>
                {
                    ({field,meta}) => basicTextFieldTheme(field,meta,"email","Enter your email")
                }
            </Field>
            <Field name={"Birthday"}>
                {
                    ({field,meta}) => basicTextFieldTheme(field,meta,"date","Enter your Birth Day")
                }
            </Field>
            <FieldArray name={"phoneNo"}>
                {
                    ({form:{values:{phoneNo}},push,remove})=><FieldArrayCustomTheme
                    nos={phoneNo}
                    del={remove}
                    push={push}
                    />
                }
            </FieldArray>
            {/*
            <InputLabel id="demo-simple-select-standard-label">Country</InputLabel>
            <Select
            component ={<Field/>}
            name={"country"}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="country"
            >
                <MenuItem value={"India"}>
                    India
                </MenuItem>
            </Select>
            <ErrorMessage name={"country"}/> */}
            <Field>
            {
                ({form,field})=>{
                    return <Button
                    disabled={(form.dirty && form.isValid && !form.isSubmitting) ? false : true}
                    type={"submit"}
                    {...field}
                    >
                        Submit
                    </Button>
                }
            }
            </Field>

        </Form>
    </Formik>
}


export default Sample1Input


import {Formik} from "formik"
import * as yup from "yup"

import FormOFFormikContainer from "./FormOFFormikContainer"

const validationSchema = yup.object({
    email:yup.string().email("Invalid email").required(),
    comments:yup.string().max(356),
    country:yup.string().required("I dont wage war against you"),
    birthday:yup.string().required("Please accept as me your friend"),
    gender:yup.string().required("Dont be shy")
})

const initialValues ={
    email:"",
    comments:"",
    country:"",
    birthday:"",
    gender:""
}

const SubmitFunc = (values) => {
    console.log(values)
}
// eslint-disable-next-line import/no-anonymous-default-export
const FormContainer = () => {
    return <Formik
    initialValues={initialValues}
    onSubmit={SubmitFunc}
    validationSchema={validationSchema}
    >
        <FormOFFormikContainer/>
    </Formik>
}
export default FormContainer

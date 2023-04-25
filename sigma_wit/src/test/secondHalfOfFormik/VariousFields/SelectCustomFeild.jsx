import React,{useMemo } from "react"

import { Select,MenuItem,InputLabel,FormControl} from "@mui/material";

import { ErrorMessage, Field } from "formik";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({name,label,arr}) => {

    const Data = useMemo(()=>arr,[arr])

    return <>
        <Field name={name} defaultValue={"Countries"}>
            {
                ({field,meta})=>{
                    return <FormControl style={{
                        minWidth:"200px",
                        marginTop:10
                    }}>
                        <InputLabel style={{zIndex:1}} id={meta.error && meta.touched ? "demo-simple-select-error-label": "demo-simple-required-label"}>
                            {
                                label
                            }
                        </InputLabel>
                        {useMemo(()=><Select
                            labelId={
                                meta.error && meta.touched ? "demo-simple-select-error-label" : "demo-simple-required-label"
                            }
                            value={"Countries"}
                            {...field}
                        >
                            {
                                Data.map((i,index)=>{
                                    return <MenuItem  key={index} value={String(i)}>
                                        {String(i)}
                                    </MenuItem>
                                    
                                })
                            }
                        </Select>,[field, meta.error, meta.touched])}
                        <ErrorMessage style={{color:"red"}} name={"country"}/>
                    </FormControl>
                }
            }
        </Field>
    </>
}

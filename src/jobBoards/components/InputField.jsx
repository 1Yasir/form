import React from 'react'
import { CCol, CFormInput, CFormLabel } from "@coreui/react";

// Memoization se unnecessary re-renders ko roka gaya hai
const InputField = React.memo(({ type, register, name, label, errors, watch }) => {
    return (
        <CCol sm={12} className='mb-2' id={name}>
            <CFormLabel htmlFor={name} className='fw-bold'>
                {label}<span className={`h4 ${watch(name)?.length > 0 ? "text-success" : "text-danger"}`}>*</span>
            </CFormLabel>
            <CFormInput
                type={type}
                placeholder={`Enter Your ${label}`}
                id={name}
                {...register(name, { required: true })}
                valid={watch(name)?.length > 0}
                invalid={errors?.[name] ? true : false} 
                feedbackValid="Looks good..."
                feedbackInvalid="This field is required*"
            />
        </CCol>
    )
});

export default InputField

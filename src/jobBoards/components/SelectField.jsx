import React from 'react';
import { CFormSelect, CFormLabel, CFormFeedback, CCol } from '@coreui/react';

// Memoization to prevent unnecessary re-renders
const SelectField = React.memo(({ register, name, label, options, errors, watch }) => {
    return (
        <CCol sm={12} className='mb-3' id={name}>
            <CFormLabel className='fw-bold' htmlFor={name}>
                {label}<span className={`h4 ${watch(name)?.length > 0 ? "text-success" : "text-danger"}`}>*</span>
            </CFormLabel>
            <CFormSelect
                {...register(name, { required: true })}
                invalid={errors?.[name] ? true : false} // Optional chaining for errors
                valid={watch(name)?.length > 0}
                id={name}
                feedbackInvalid="required*"
                feedbackValid="Looks good..."
            >
                <option value="">Select an option</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </CFormSelect>
            {errors?.[name] && <CFormFeedback invalid>{errors[name].message || "This field is required*"}</CFormFeedback>}
        </CCol>
    );
});

export default SelectField;
